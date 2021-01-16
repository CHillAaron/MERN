import React, {useState} from 'react';

const Form = () =>{
    const [accountInfo, setaccountInfo] = useState ({
        first:"",
        last:"",
        email:"",
        pass:"",
        conpass:""
    })

    const [userlist, setUserlist] = useState([])

    const user = (e)=>{
        console.log(`changing form info right now at this input in ${e.target.name}:`, e.target.value) 
        setaccountInfo({
            ...accountInfo,
            [e.target.name]: e.target.value
        })
    }

    return(
        <>
            <h1>Account Form</h1>
            <form>
                <div style={{marginBottom:20}}>
                    <label>First Name: </label> 
                    <input type="text" name="first" onChange={user} value= {accountInfo.first}/><br/>
                    {accountInfo.first.length < 2 && accountInfo.first.length != 0 ? "First name is to short": ""}
                </div>
                <div style={{marginBottom:20}}>
                    <label>Last Name: </label> 
                    <input type="text" name="last" onChange={user} value= {accountInfo.last}/><br/>
                    {accountInfo.last.length < 2 && accountInfo.last.length != 0 ? "Last name is to short" : ""}
                </div>
                <div style={{marginBottom:20}}>
                    <label>Email: </label> 
                    <input type="email" name="email" onChange={user} value= {accountInfo.email}/><br/>
                    {accountInfo.email.length < 2 && accountInfo.email.length != 0 ? "email is to short" : ""}
                </div>
                <div style={{marginBottom:20}}>
                    <label>Password: </label> 
                    <input type="text" name="pass" onChange={user} value= {accountInfo.pass}/> <br/>
                    <label>Confirm Password: </label> 
                    <input type="text" name="conpass" onChange={user} value= {accountInfo.conpass}/><br/>
                    {accountInfo.pass.length < 8 && accountInfo.pass.length != 0 ? "pass is to short" : ""}<br/>
                    {accountInfo.pass != accountInfo.conpass ? "passwords do not match" : "they Match"}
                </div>
                
                <div>
                    <input type="submit" value="submit"/>
                </div>
               
                
            </form>
        </>
    )
}

export default Form;