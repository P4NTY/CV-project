import React from 'react';
import style from './Form.module.scss';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getSendURL, /* getUserIP */ } from "Utils/dbase";

const Form = ({fnClose}) => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    // getUserIP()

    return (
        <div className={style.shadow} data="shadow" onClick={(e)=>(
            e.target.getAttribute('data') && fnClose()
        )}>
            <form action="" onSubmit={(e)=>getSendURL(e)} method="post" className={style.form} >
                <p className={style.date}>
                    {''},
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
                    <input type="email" placeholder="E-mail" name="E-mail" required />
                    <input type="text" placeholder="dodatkowe dane kontaktowe" name="Add info"/>
                </div>
                <input className={style.subject} name="subject" placeholder="Temat" required/>
                <ReactQuill theme="snow" value={content} onChange={setContent} className={style.content}/>
                <textarea name="content" value={content} className="hidden" required readOnly/>
                <div className={style.footer}>
                    <p>Pozdrawiam</p>
                    <p>{name}</p>
                </div>
                <button className={style.button} type="submit">Wyślij</button>
            </form>
        </div>
    )
}

export default Form;