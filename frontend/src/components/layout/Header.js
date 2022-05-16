import '../../styles/components/layout/Header.css'
import axios from 'axios';


import React from "react";




const Header = (props) => {
    return (
        <header>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>

            <div className='divAdmin'>
                <label className='labelAdmin'><a href="localhost:3000/admin/login" target="_blank" className='aAdmin'>Administrador</a></label>
            </div>

            <div >
                <img  src="images/logo.png" width="100 " alt="Impresoras3D"></img>
                <h1>Impresoras3D</h1>
            </div>
        </header>
    );
}

export default Header;