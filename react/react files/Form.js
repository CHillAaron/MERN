import React, {useState} from 'react';
import styles from './Form.module.css';


const Form = () => {

    // const [coinname, setcoinname] = useState("")  //["", function stateModifieerFunction(){blahbalhbalbhablhba} ]
    // const [coinprice, setCoinPrice] = useState(0)
    // const [coincolor, setcoincolor] = useState("")

    const [formInfo, setFormInfo] = useState({
        name: "",
        price: 0,
        color: ""
    })
    
    const [coinlist, setCoinlist ] = useState([])



    const changeHandler = (event)=>{
        console.log("changin form info right now at this input:", event.target.name )
        setFormInfo({
            ...formInfo,
            [event.target.name]: event.target.value
        })

        
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("submitted form info", formInfo )
        setCoinlist([...coinlist, formInfo])
        setFormInfo({
            name: "",
            price: 0,
            color: ""
        })

    }
    let expensiveCoins = coinlist.filter((coin)=> {
        return coin.price > 100
    })

    console.log("********************")
    console.log("expensive coins is: ", expensiveCoins);
    console.log("********************")


    const cryptokilla = (event, indexNum, clickedCoin) => {
        console.log("you trying to remove this crypto from your watch list at index number: ", indexNum, "and it looks like this", clickedCoin)
        // let coinlistCopy = [...coinlist];
        // coinlistCopy.splice(indexNum, 1);
        // setCoinlist(coinlistCopy);
        
        setCoinlist(
            coinlist.filter((coin,idx) => {
                return idx != indexNum
            })
        )
        

    }




    return (
        <>
            <div>
                <form onSubmit = {submitHandler}>
                    <p>Coin Name: <input type="text" name="name" id="" onChange = {changeHandler} value = {formInfo.name}/></p>
                    {/* <p>Coin Name: <input type="text" name="name" id="" onChange = {(e)=> setcoinname(e.target.value)} value = {formInfo.name}/></p> */}

                    <p>Coin Price: <input type="number" name="price" id="" onChange = {changeHandler} value = {formInfo.price}/></p>
                    <p>Coin Color: <input type="text" name="color" id="" onChange = {changeHandler} value = {formInfo.color}/></p>
                    <p><input type="submit" value="Add Crypto coin to watch list"/></p>
                </form>
            </div>
            <div>
                <h1>Here is your cryptocurrency watchlist:</h1>
                <div className = {styles.piggybank}>
                    {
                       
                    }
                    {
                        coinlist.map((coin, idx ) => {
                            let widthAndHeight = "150px"
                            if (coin.price > 1000){
                                widthAndHeight = "300px"
                            }

                            // <h1 style="color:blue;text-align:center;">This is a heading</h1>
                            return <div onClick = {(e)=>cryptokilla(e, idx, coin)} key= {idx} className = {styles.cryptocoin} style = {{backgroundColor: coin.color, width: widthAndHeight, height: widthAndHeight}} >

                                <h3>{coin.name}</h3>
                                <p>Price: {coin.price}</p>
                            </div>
                        })
                    }

                </div>
                
            </div>
        </>
    );
};


export default Form;