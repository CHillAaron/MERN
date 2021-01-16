import React from 'react';
const PersonCard = props =>{
    return(
        <div>
            <h1>{props.last}, {props.first}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hair}</p>
        </div>
    )
}
// class PersonCard extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             age: this.props.age
//         }
//     }
    // render(){
    //     const bday = () =>{
    //         this.setState({age: this.state.age +1})
    //     }
    //     return(
    //     <>
    //         <div>
    //             <h1>{this.props.last}, {this.props.first}</h1>
    //             <p>Age: {this.state.age}</p>
    //             <p>Hair Color: {this.props.hair}</p>
    //             <button onClick={bday}>Birthday Button for {this.props.first} {this.props.last}</button>
    //         </div>
    //     </>
    //     )
    // }
// }

export default PersonCard