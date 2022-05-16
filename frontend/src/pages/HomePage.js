import '../styles/components/pages/HomePage.css'
import React from "react";

const HomePage = (props) => {
    return (
        <main>
            <div class="contenedor">
            <figure>
                <img class="imghome" src="./images/home.jpeg" alt="imagen de fondo"/>
                <div class="capa">
                    <h3>" Que tu único límite sea tu imaginación "</h3>
                </div>
            </figure>
        </div>

        <div className="holder">
            <h2>Bienvenidos</h2>
            <hr/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam odio possimus aperiam distinctio
                dolorem perspiciatis est rerum! Explicabo sed autem esse, commodi vitae minus iusto perferendis
                laboriosam ipsa. Corrupti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur mollitia
                quo quae hic, quia fugit deserunt earum nostrum, amet perspiciatis ad adipisci dolore tenetur nisi
                voluptas architecto, animi quos molestias!</p>
        </div>
        </main>
    );
}

export default HomePage;