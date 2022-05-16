import '../styles/components/pages/TecnologiasPage.css'
import React from "react";
import {Link} from 'react-router-dom';


const TecnologiasPage = (props) => {
    return (
        <main className="holder">
            <div >
                <h2>Tecnologías</h2> <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In modi beatae totam magnam. Quae quia impedit
                    accusantium nemo nihil dolorum quis non cumque dolores magni, dolorem fugiat quasi, ullam adipisci.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptas dicta iste consectetur labore,
                    commodi dolores excepturi maiores tempore perferendis nobis a ducimus maxime aspernatur deserunt aut
                    voluptatibus vero blanditiis?</p>
            </div>

            <div className="contenedor2">

                <div className="tecnologia">
                    <img src="images/pla.jpg" alt="FDM" />
                    <div className="capa">
                        <h2>FDM</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolore, dignissimos minima
                            ullam obcaecati vel, autem distinctio mollitia nam, consequuntur et. Quae fuga excepturi iste
                            laboriosam aut alias accusamus mollitia!</p>
                            <button><Link to ="/fdm">leer más</Link></button>

                    </div>
                </div>

                <div className="tecnologia">
                    <img src="images/resina.jpg" alt="SLA" />
                    <div className="capa">
                        <h2>SLA</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolore, dignissimos minima
                            ullam obcaecati vel, autem distinctio mollitia nam, consequuntur et. Quae fuga excepturi iste
                            laboriosam aut alias accusamus mollitia!</p>
                        <button><Link to ="/sla">leer más</Link></button>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default TecnologiasPage;