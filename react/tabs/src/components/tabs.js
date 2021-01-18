import React, {useState} from 'react';

const Tab = () => {
        // const tabs = (e) =>{
        //     e.preventDefault();
        // }


    return (
        <>
            <ul className="nav nav-tabs d-flex justify-content-center">
                <li className="nav-item"><a className="nav-link" href="/1">First Item</a></li>
                <li className="nav-item"><a className="nav-link" href="/2">Second Item</a></li>
                <li className="nav-item"><a className="nav-link" href="/3">Third Item</a></li>
            </ul>

            <div>

            </div>
            
        </>
    )
}

export default Tab

