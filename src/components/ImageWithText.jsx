import "../assets/css/imagewithtext.scss";
import Food from "../assets/images/food.webp";


function imagewithtext(){
    return(
        <section className="ImageWithText">
            <div className="containerMain">
                <div className="mainBox">
                <article className="leftContent">
                    <p>La experiencia del Camino se basa en la simplicidad, la estacionalidad y el cuidado. Cada plato se inspira en los sabores de Murcia, creando un equilibrio entre la tradición y el ambiente.</p>
                </article>
                <article className="rightContent">
                    <img src={Food} alt="" />
                </article>
                </div>
            </div>
       
        </section>
    )
}

export default imagewithtext;