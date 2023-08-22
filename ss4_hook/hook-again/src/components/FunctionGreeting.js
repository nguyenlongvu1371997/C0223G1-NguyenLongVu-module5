import React from "react";
import { useState, useEffect } from "react";

const FunctionGreeting = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    useEffect(() => {
        window.localStorage.setItem('firstClassName', firstName);
    }, [firstName])
    useEffect(() => {
        window.localStorage.setItem('lastClassName', lastName);
    }, [lastName])

    return (
        <div>
            <label htmlFor="firstName">Input first name</label>
            <input id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)}></input>
            <br />
            <label htmlFor="lastName">Input last name</label>
            <input id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)}></input>
            <p>Hello {firstName} {lastName}</p>
        </div>
    )

}

export default FunctionGreeting;