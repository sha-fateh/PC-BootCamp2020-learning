import React from 'react';
import ReactDOM from "react-dom";
import './App.css'

function MediaCard({title, body, imageURL}) {
    return (
    <div className="media">     
        <h1>{title}</h1>
        <p><strong>{body}</strong></p>
        <img src={imageURL}/>
        </div>);
}

function Gate ({isOpen}) {
    
    if(isOpen) {
        return <div className="gate">
            The gate is <b>{isOpen ? "Open" : "Closed"}</b>
        </div>;
    }
}

export {MediaCard, Gate}