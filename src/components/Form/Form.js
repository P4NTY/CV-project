import React from 'react';
import style from './Form.module.scss';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getSendURL, /* getUserIP */ } from "Utils/dbase";

const Form = ({fnClose}) => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [email, setEmail] = useState('');
    const [adInfo, setAdInfo] = useState('');
    const [subject, setSubject] = useState('');

    // getUserIP()

    return (
        <div className={style.shadow} data="shadow" onClick={(e)=>(
            e.target.getAttribute('data') && fnClose()
        )}>
            <div
                className={style.form}
            >
                <p className={style.date}>
                    {new Date().toISOString().split('T')[0]}
                </p>
                <div className={style.reciver}>
                    <p>Karol Kisz</p>
                    <p><a href="mailto:karol.w.kisz@gmail.com">karol.w.kisz@gmail.com</a></p>
                    <p>Warszawa</p>
                    <p>Polska</p>
                </div>
                <div className={style.sender}>
                    <input type="text" placeholder="Godność" name="Person" onChange={(e)=>(setName(e.target.value))} required/>
                    <input type="email" placeholder="E-mail" name="E-mail" required onChange={(e)=>(setEmail(e.target.value))}/>
                    <input type="text" placeholder="dodatkowe dane kontaktowe" name="Add info" onChange={(e)=>(setAdInfo(e.target.value))}/>
                </div>
                <input className={style.subject} name="subject" placeholder="Temat" required onChange={(e)=>(setSubject(e.target.value))}/>
                <ReactQuill theme="snow" value={content} onChange={setContent} className={style.content}/>
                <div className={style.footer}>
                    <p>Pozdrawiam</p>
                    <p>{name}</p>
                </div>
                <button className={style.button} onClick={()=>{
                    getSendURL({'Person': name, 'E-mail': email, 'Add info': adInfo, 'subject': subject, 'content': content}) ? alert('Dziękuję za wiadomość') : alert('Nie udało się nadać wiadomości');
                    fnClose();
                }}>Wyślij</button>
            </div>
        </div>
    )
}

export default Form;