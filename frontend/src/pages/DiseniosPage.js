import '../styles/components/pages/DiseniosPage.css'
import React from "react";

const DiseniosPage = (props) => {
    return (
        <main className="holder">
            <h2>Diseños</h2> <hr />
            <div className="galeria">
                <img src="images/disenios1.jpeg" alt="diseños1" />
                <img src="images/disenios2.jpeg" alt="diseños2" />
                <img src="images/disenios3.jpeg" alt="diseños3" />
                <img src="images/disenios4.jpeg" alt="diseños4" />
                <img src="images/disenios5.jpeg" alt="diseños5" />
                <img src="images/disenios6.jpeg" alt="diseños6" />
                <img src="images/disenios7.jpeg" alt="diseños7" />
                <img src="images/disenios8.jpeg" alt="diseños8" />
            </div>
        </main>
    );
}

export default DiseniosPage;