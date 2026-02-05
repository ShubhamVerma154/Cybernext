import "../assets/css/about.scss";
import ImageContent from "../assets/images/ImageConetn.webp";

function About(){
    return(
        <section className="About">
                <div className="containerMain">
                    <div className="MainContain">
                    <div className="leftImage">
                        <img src={ImageContent} alt="" />
                    </div>
                    <div className="rightContent">
                        <h3>Bienvenidos A Cybernext</h3>
                        <p>Entra en Camino, un comedor donde la herencia de Murcia se encuentra con la cocina española moderna. Un ambiente forjado por los detalles, donde cada comida se comparte en buena compañía y cada momento se convierte en un recuerdo duradero.</p>
                    </div>
                    </div>
                </div>
        </section>
    )
}

export default About;