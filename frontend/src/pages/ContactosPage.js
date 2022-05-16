import '../styles/components/pages/ContactosPage.css'
import React, {useState} from "react";
import axios from 'axios';
import {
    FaWhatsapp,
    FaFacebook,
    FaInstagram,
    FaRegEnvelope,
    FaTwitter
  } from "react-icons/fa";
  import { IconContext } from "react-icons";

const ContactosPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
        axios.post('http://localhost:3000/api/contacto', formData);
            setSending(false);
            setMsg(response.data.message);
            if (response.data.error === false) {
                setFormData(initialForm)
            }
    }

    return (
       
<main className="holder" onSubmit={handleSubmit}>
        
        <div className="columna left">
            <h2>Contacto Rápido</h2>
            <form action="" method="" class="formulario">
                <p className='pContacto'>
                    <label className='labelContacto' for="">Nombre</label>
                    <input className='inputContacto' type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                </p>

                <p className='pContacto'>
                    <label className='labelContacto' for="">Email</label>
                    <input className='inputContacto' type="email" name="email" value={formData.email} onChange={handleChange} />
                </p>

                <p className='pContacto'>
                    <label className='labelContacto' for="">Teléfono</label>
                    <input className='inputContacto' type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                </p>

                <p className='pContacto'>
                    <label className='labelContacto' for="comentario">comentario</label>
                    <textarea className='inputContacto'  id="comentario" name="mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>
                </p>
                    {sending ? <p>Enviando...</p> :null}
                    {msg ? <p>{msg}</p>: null}
                <p className='acciones'><input className='inputContacto' type="submit" value="enviar"/> </p>
            </form>
        </div>

        <div className="columna right">
            <h2>Otras vias de contacto</h2>  
            <ul className='ulContacto'>
                <li className='liContacto'><FaWhatsapp    />  Whatsapp: +54 4444-4444</li>
                <li className='liContacto'><FaRegEnvelope />  Email: contacto@Impresoras3D.com.ar</li>
                <li className='liContacto'><FaFacebook    />  Facebook: Impresoras3D</li>
                <li className='liContacto'><FaTwitter     />  Twitter: Impresoras3D</li>
                <li className='liContacto'><FaInstagram   />  Instagram: Impresoras3D</li>
            </ul>
        </div>
    
    </main>

    );
}

export default ContactosPage;