import "../assets/css/imagewithtext.scss";
import "../assets/css/sticky.scss";
import Food from "../assets/images/food.webp";


function Sticky() {
  return (
    <section className="Sticky ImageWithText">
      <div className="containerMain">
        <div className="mainBox">
            <article className="rightContent">
                <div className="rtImg">
            <img
              src={Food}
              alt="Food"
            />
            <h4>Chicken Tikka</h4>
            </div>
             <div className="rtImg">
            <img
             src={Food}
              alt="Food"
            />
            <h4>Chicken Tikka</h4>
            </div>
              <div className="rtImg">
            <img
             src={Food}
              alt="Food"
            />
            <h4>Chicken Tikka</h4>
            </div>
              <div className="rtImg">
            <img
              src={Food}
              alt="Food"
            />
            <h4>Chicken Tikka</h4>
            </div>
              <div className="rtImg">
            <img
              src={Food}
              alt="Food"
            />
            <h4>Chicken Tikka</h4>
            </div>
          </article>
          <article className="leftContent">
            <p>
              La experiencia del Camino se basa en la simplicidad, la
              estacionalidad y el cuidado. Cada plato se inspira en los sabores
              de Murcia, creando un equilibrio entre la tradición y el ambiente.
            </p>
          </article>          
        </div>
      </div>
    </section>
  );
}

export default Sticky;
