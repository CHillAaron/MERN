import React, {useState} from 'react';

const Form = () => {
    const [userInfo, setuserInfo] = useState({
        username: "",
        email:"",
        password:""
    })  
    
    const [userlist, setUserlist ] = useState([])

    const user = (event)=>{
        console.log("changin form info right now at this input in user:", event.target.name )
        setuserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        })
    }
    const createUser = (e) => {
        e.preventDefault();
        console.log("submitted info info in create", userInfo )
        setUserlist ([...userlist, userInfo])
        setuserInfo({
            username: "",
            email:"",
            password:""
        })

    }
        
    

    return(
        <>
            <div>
                <form style={{marginTop: 200}} onSubmit={createUser} >
                    <div style={{marginBottom:20}}>
                        <label>Username: </label> 
                        <input type="text" name="username" onChange={user} value ={userInfo.username}/>
                    </div>
                    <div style={{marginBottom:20}}>
                        <label>Email Address: </label> 
                        <input type="text" name="email" onChange={user} value ={userInfo.email}/>
                    </div>
                    <div style={{marginBottom:20}}>
                        <label>Password: </label>
                        <input type="text" name="password" onChange={user} value ={userInfo.password}/>
                    </div>
                    <div style={{marginBottom:20}}><input type="submit" value="Create User" /></div>
                   
                    
                    
                </form>
            </div>
            <div>
                <p>{userInfo.username}</p>
                <p>{userInfo.email}</p>
                <p>{userInfo.password}</p>
            </div>
        </>
    );
};

export default Form;