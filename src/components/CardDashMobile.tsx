//@ts-nocheck
import { FunctionComponent } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {metricsCard} from "../data";
import {CardDash} from "./index.tsx";


const CardDashMobile: FunctionComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <section className="-ml-10">
            <div className="">
                <Slider {...settings} className="mb-15 flex flex-col mb-10 mx-auto ">
                    {
                        metricsCard?.map((items:never,index:number)=>(
                            <CardDash key={index} title={items.title} icons={items?.icone}/>
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}
export default CardDashMobile;
