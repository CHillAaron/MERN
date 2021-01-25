import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import { Link, navigate } from "@reach/router";

const PetInfo = (props) => {
    const [petDetails, setpetDetails] = useState({})
    const [deleteClicked, setdeleteClicked] = useState(false)

    useEffect(()=>{
        Axios.get(`http://localhost:8000/api/shelter/${props.id}`)
        .then(res=> {
            setpetDetails(res.data.results)
        })
        .catch(err=>console.log("error", err))
    },[props])
    const deleteClickHandler = (e, petId)=>{
        Axios.delete(`http://localhost:8000/api/shelter/destroy/${petId}`)
            .then(
                setdeleteClicked(!deleteClicked))
                navigate("/")
            .catch(err => console.log(err))
    }
    return (
        <div>
            <Link  to="/"  > home</Link>
            <div className="d-flex flex-row justify-content-around">
            <h2>Details about: {petDetails.petName}</h2>
            <button className="btn btn-danger m-1 btn-sm" onClick={(e)=>deleteClickHandler(e,petDetails._id)}>Adopt {petDetails.petName}</button>
            </div>
            
                <div className="border border-dark">
                    <p className="m-2 ">type of pet: {petDetails.type}</p>
                    <p className="m-2">Description of the pet: {petDetails.description}</p>
                    <p className="m-2">skills of the pet: {petDetails.skill1}</p>
                    <p className="m-2">{petDetails.skill2}</p>
                    <p className="m-2">{petDetails.skill3}</p>
                </div>
        </div>
    );
};


export default PetInfo;