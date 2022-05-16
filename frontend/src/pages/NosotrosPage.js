import '../styles/components/pages/NosotrosPage.css'
import React from "react";

const NosotrosPage = (props) => {
    return (
        <section className="holder">
        <div className="historia">
            <h2>Historia</h2> <hr/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id veritatis exercitationem neque deserunt
                impedit ea minus nobis, voluptates vel accusamus nesciunt ad vitae voluptate laborum repudiandae quasi
                quis natus illum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nulla quaerat dolorem ad velit, vero, ipsam
                suscipit optio repellat corporis eos. Reiciendis assumenda ullam est neque repellat, magni debitis
                officiis?</p>
        </div>

        <div className="staff">
            <h2>Staff</h2>
            <div className="personas">
                <div class="persona">
                    <img src="images/nosotros1.jpg" alt="Franco Ramirez"/>
                    <h5>Franco Ramirez</h5>
                    <h6>Gerente general</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi officiis mollitia
                        dicta. Veniam facere iusto similique dolore eaque exercitationem alias? Voluptas iste earum
                        consequuntur ullam soluta. Nam, eos nostrum.</p>
                </div>

                <div className="persona">
                    <img src="images/nosotros2.jpg" alt="Franco Ramirez"/>
                    <h5>Franco Ramirez</h5>
                    <h6>Gerente general</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi officiis mollitia
                        dicta. Veniam facere iusto similique dolore eaque exercitationem alias? Voluptas iste earum
                        consequuntur ullam soluta. Nam, eos nostrum.</p>
                </div>

                <div className="persona">
                    <img src="images/nosotros3.jpg" alt="Franco Ramirez"/>
                    <h5>Franco Ramirez</h5>
                    <h6>Gerente general</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi officiis mollitia
                        dicta. Veniam facere iusto similique dolore eaque exercitationem alias? Voluptas iste earum
                        consequuntur ullam soluta. Nam, eos nostrum.</p>
                </div>

                <div className="persona">
                    <img src="images/nosotros4.jpg" alt="Franco Ramirez"/>
                    <h5>Franco Ramirez</h5>
                    <h6>Gerente general</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi officiis mollitia
                        dicta. Veniam facere iusto similique dolore eaque exercitationem alias? Voluptas iste earum
                        consequuntur ullam soluta. Nam, eos nostrum.</p>
                </div>

                <div className="persona">
                    <img src="images/nosotros5.jpg" alt="Franco Ramirez"/>
                    <h5>Franco Ramirez</h5>
                    <h6>Gerente general</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi officiis mollitia
                        dicta. Veniam facere iusto similique dolore eaque exercitationem alias? Voluptas iste earum
                        consequuntur ullam soluta. Nam, eos nostrum.</p>
                </div>
            </div>

        </div>
    </section>
    );
}

export default NosotrosPage;