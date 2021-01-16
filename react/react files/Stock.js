import React, { Component } from 'react';

class Stock extends Component {
    render() {
        console.log("************")
        console.log(this.props)
        console.log("************")

        return(
           <>
           <div>
               <h1>Company Name: {this.props.stockName} </h1>
               <h3>YTD Total Return: {this.props.ytdReturn} </h3>
               <p>More Info: {this.props.children}</p>
           </div>
           </> 
        )
    }
}

export default Stock;

