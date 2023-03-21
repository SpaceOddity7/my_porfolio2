import './../styles/css/main.css';

import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    };

    return (
        <div className="formulario">
            <h1>CONTACTO</h1>
    <form onSubmit={handleSubmit}>
        <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
            </label>
            <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}required/>
            </label>
            <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)}/>
            </label>
            <button className="btn-form" type="submit">Enviar</button>
    </form>
    </div>
    );
};

export default ContactForm;
