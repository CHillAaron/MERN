import React,  {useState, useEffect} from 'react';
import Axios from 'axios';
import { navigate, Link } from '@reach/router';


const Update = (props) => {
    const [petInfo, setpetInfo] = useState({
        petName: "",
        type: "",
        description:"",
        skill1:"",
        skill2:"",
        skill3:""
    })
    const [errors, seterrors] = useState({
        petName:"",
        type:"",
        description:"",
    })

    useEffect(()=>{
        Axios.get(`http://localhost:8000/api/shelter/${props.id}`)
        .then(res=> {
            console.log("got the response back to update one pet", res)
            setpetInfo(res.data.results)
        })
        .catch(err=>console.log("error", err))
    },[props.id])

    const changeHandler = (e)=> {
        console.log("Updating a pet?", e.target.name)
        setpetInfo({
            ...petInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler=e=>{
        e.preventDefault();
        
        console.log("updating this pet:", petInfo)
        Axios.put(`http://localhost:8000/api/shelter/update/${petInfo._id}`, petInfo)
            .then(res=>{console.log("Response after updating the pet",res)
                if(res.data.results){
                    navigate('/')
                }
                else {
                    seterrors(res.data.errors)
                }
            })
            .catch(err=>console.log("This is the errors:",err))

    }

    return (
        <div>
            <Link to="/"  > home</Link>
            <form>
            <div className="wrapper d-flex flex-row justify-content-around">
                    <div className="mainInfo">
                        <div>
                            <label className="mr-2">Name: </label>
                            <input type="text" name="petName" value={petInfo.petName} onChange={changeHandler}/>
                        </div>
                            <span className="text-danger">{errors.petName? errors.petName.message : ""}</span>
                        <div>
                            <label className="mr-2">Type: </label>
                            <input type="type" name="type" value={petInfo.type}  onChange={changeHandler}/>
                        </div>
                            <span className="text-danger">{errors.type? errors.type.message : ""}</span>
                        <div>
                            <label className="mr-2">Description: </label>
                            <input type="text" name="description" value={petInfo.description}  onChange={changeHandler}/>
                        </div>
                        <span className="text-danger">{errors.description? errors.description.message : ""}</span>
                    </div>
                    <div className="skills">
                        <h4>Skills (Optional)</h4>
                        <div>
                        <label>Skills 1: </label>
                        <input type="text" onChange={changeHandler} value={petInfo.skill1} name="skill1"/>
                        </div>
                        <div>
                        <label>Skills 2: </label>
                        <input type="text" onChange={changeHandler} value={petInfo.skill2} name="skill2"/>
                        </div>
                        <div>
                        <label>Skills 3: </label>
                        <input type="text" onChange={changeHandler} value={petInfo.skill3} name="skill3"/>
                        </div>
                    </div>
                </div>

                <input type="submit" value="Update pet" onClick={submitHandler}/>

            </form>
        </div>
    );
};


export default Update;