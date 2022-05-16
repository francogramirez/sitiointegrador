import React from 'react';
import "../../styles/components/pages/NovedadesPage.css"

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className='novedades'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen}/>
            <div className='cuerpo' dangerouslySetInnerHTML={{ __html: body}} />
        </div>
    )
}

export default NovedadItem;