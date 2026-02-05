import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Review from "../assets/images/reviewMain.png";
import Knife from "../assets/images/Knife.svg";
import SlideImg1 from "../assets/images/thirdImg.webp";
import SlideImg2 from "../assets/images/forthImg.webp";
import SlideImg3 from "../assets/images/sixthImg.webp";

import "../assets/css/reviews.scss";
import Centerline from "./CenterLine";

const slides = [
  {
    img: SlideImg1,
    title: "Luxury Stay",
  },
  {
    img: SlideImg2,
    title: "Premium Rooms",
  },
  {
    img: SlideImg3,
    title: "Fine Dining",
  },
];
gsap.registerPlugin(ScrollTrigger);

function Reviews() {
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    let rotation = 0;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          rotation += self.direction * 0.8;

          gsap.to(imageRef.current, {
            rotate: rotation,
            duration: 0.1,
            ease: "power2.out",
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="Reviewsection">
      <div className="containerMain">
        <div className="reviewSvg">
          <img src={Knife} alt="Knife" className="knife" />
          <img ref={imageRef} src={Review} alt="Review" className="revieImg" />
        </div>
     <Centerline />
        <h2>Have a look on our hotel</h2>

        <Swiper
           modules={[Navigation]}
          navigation={true} 
          spaceBetween={30}
          slidesPerView={1}
          className="review-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="review-slide">
                <img src={slide.img} alt={slide.title} />
                <div className="content">
                  <h3>{slide.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Reviews;
