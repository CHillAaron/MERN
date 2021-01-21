import React, {useEffect, useState} from 'react';
import Axios from 'axios';


const Main = () => {
    //If i want it to run some function upon rendering of this component, I want to use  useEffect
    const [allproducts, setallproducts] = useState([])
    useEffect(()=>{
        Axios.get("http://localhost:8000/api/product")
            .then(response => {
                console.log("***", response)
                setallproducts(response.data.results)
            })
            .catch(err=> console.log())
        
    },[])
    return (
        <div>
            <table className = "table table-dark col-8 mx-auto">
                <thead>
                    <tr>
                        <th>Product:</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allproducts.map((product, i)=>{
                            return <tr key = {i}>
                                <td>{product.title}</td>
                                <td>{product.price.$numberDecimal}</td> 
                                <td>{product.description}</td>
                                <td>placeholder for link</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};



export default Main;