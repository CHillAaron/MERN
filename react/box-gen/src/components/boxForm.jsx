import React, {useState} from 'react';
import styles from './boxForm.modules.css';

const Form = () => {
    const [boxGen, setboxGen] = useState({
        color: "",
    })  
    
    const [userlist, setUserlist ] = useState([])

    const handlecolor = (event)=>{
        setboxGen({
            [event.target.name]: event.target.value
        })
        
    }
    const createBox = (e) => {
        e.preventDefault();
        setUserlist ([...userlist, boxGen])
        setboxGen({
            color: "",
        })
               
    }
        
    

    return(
        <>
            <div>
                <form onSubmit={createBox}>
                    <div className="userbox" style={{marginBottom:20}}>
                        <label>Box Color</label> 
                        <input type="text" name="color"  onChange={handlecolor} value ={boxGen.color}/>
                    </div> 
                    <input type="submit" value="add box"/>      
                </form>
            </div>
            <div className="boxHolder">

                
                {
                    userlist.map((createBox)=>{
                        return <div className="boxCreater" style={{backgroundColor:createBox.color}} key={createBox.color}> {createBox.color}
                            </div>
                    })
                }
                
            </div>
        </>
    );
};

export default Form;