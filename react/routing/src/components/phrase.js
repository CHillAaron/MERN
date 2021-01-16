import { React } from "react";
import { Link } from "@reach/router";

const Phrase = props =>{
    return(
        <div>
            {isNaN(props.phrase)?
            <p style={{backgroundColor:props.colors, color:props.color}}>The Phrase is : {props.phrase}</p>:
            <p>The Number is : {props.phrase}</p>
        

}
        </div>
    )
}
export default Phrase