import React,  {useState} from 'react';
import Axios from 'axios';
import { navigate, Link } from '@reach/router';

const Form =() =>{
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
        keyValue:""
    })

    const changeHandler = (e)=> {
        setpetInfo({
            ...petInfo,
            [e.target.name]: e.target.value
        })
    }
    const createHandler=e=>{
        e.preventDefault();
        console.log("Submitting the pet", petInfo)
        Axios.post("http://localhost:8000/api/shelter/create", petInfo)
            .then(res=>{console.log("Response after submitting the axios post request",res)
            if(res.data.results){
                console.log("this is the results",res.data.results)
                if(res.data.keyValue){
                    seterrors(res.data)
                }
                else{
                     navigate("/")
                }
               
            }
            else if (res.data.errors){
                console.log("this is data.error", res.data)
                seterrors(res.data.errors)
            }
            else {
                console.log("this is for duplicate name".res.data)
                // seterrors(keyValue)
            }
            })
            .catch(err=>console.log("This is the errors:",err))

    }

    console.log("this is the errors state", errors)
    return (
        <>
        <Link to="/"  > Home</Link>
            <form>
                <div className="wrapper d-flex flex-row justify-content-around">
                    <div className="mainInfo">
                        <div>
                            <label className="mr-2">Name: </label>
                            <input type="text" name="petName" onChange={changeHandler}/>
                        </div>
                            <span className="text-danger">{errors.petName? errors.petName.message : ""}</span>
                            <span className="text-danger">{errors.keyValue? errors.petName.message : ""}</span>
                        <div>
                            <label className="mr-2">Type: </label>
                            <input type="type" name="type" onChange={changeHandler}/>
                        </div>
                            <span className="text-danger">{errors.type? errors.type.message : ""}</span>
                        <div>
                            <label className="mr-2">Description: </label>
                            <input type="text" name="description" onChange={changeHandler}/>
                        </div>
                        <span className="text-danger">{errors.description? errors.description.message : ""}</span>
                    </div>
                    <div className="skills">
                        <h4>Skills</h4>
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
                        <input type="submit" value="Create" onClick={createHandler}/>
            </form>
        </>
    )
}

export default Form