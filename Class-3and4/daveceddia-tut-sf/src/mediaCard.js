import React from 'react';
import ReactDOM from "react-dom";
import './App.css'

function MediaCard({title, body, imageURL}) {
    return (
    <div className="media">
        <h3>Below is the example of MediaCard, which is yet another component</h3>    
        <h1>{title}</h1>
        <p><strong>{body}</strong></p>
        <img src={imageURL}/>
        </div>);
}

function Gate ({isOpen}) {
    
    if(isOpen) {
        return <div className="gate">
            <img src="https://image.shutterstock.com/image-vector/iron-gate-260nw-318807215.jpg"/><br/>

            <h1>The gate is <b>{isOpen ? "Open" : "Closed"}</b></h1>
        </div>;
    }
}

export {MediaCard, Gate}