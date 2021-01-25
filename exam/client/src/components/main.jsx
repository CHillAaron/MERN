import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import { Link } from "@reach/router";

const Main = () => {
    const [ allpets, setallpets] = useState([])
    const [deleteClicked, setdeleteClicked] = useState(false)

    useEffect(()=>{
        Axios.get("http://localhost:8000/api/shelter")
            .then(response => {
                response.data.results.sort(function(a,b){
                    var typeA = a.type.toUpperCase();
                    var typeB = b.type.toUpperCase();
                    if (typeA < typeB){
                        return -1;
                    }
                    if (typeA > typeB){
                        return 1;
                    }
                    return 0

                    // return a.type - b.type;
                })
                setallpets(response.data.results)
            })
            .catch(err=> console.log(err))
        
    },[deleteClicked])
    return (
        <div>
            <div>
            <Link to="/new"  > Add a new Pet</Link>
            </div>
            <h2>These pets are looking for a good home.</h2>

            <table className="table">
            <thead>
                    <tr>
                        <th>Name:</th>
                        <th>Species:</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allpets.map((pet, i)=>{
                            return <tr key = {i}>
                                <td>{pet.petName}</td>
                                <td>{pet.type}</td> 
                                <td><Link className="btn btn-info m-1" to={`/shelter/${pet._id}`}>Details </Link>|
                                <Link className="btn btn-warning m-1" to={`/shelter/update/${pet._id}`}> edit </Link>
                                </td>
                            </tr>
                        })
                    }
                 </tbody>
            </table>
        </div>
    );
};


export default Main;