import React from "react";
import Slider from "react-slick";
import { Movies } from "./movies";

function Slick() {
    const settings = {
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: true,
        nextArrow: (
            
            <div>
                <div className="next-slick-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" /></svg>
                </div>
            </div>
        ),

        prevArrow: (
            <div>
                <div className="next-slick-arrow rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" /></svg>
                </div>
            </div>
        ),
        
    };
    return (
        <div className="slider-container">
            <Slider className="container" {...settings}>
                <div>
                    <Movies
                        paragraph=' repellendus, corporis tenetur reprehenderit quis aspernatur, cupiditate id. Id, esse dolorum ipsam reprehenderit nemo possimus amet voluptate.'
                        name='Charlotte Hale'
                        author='image/15.png'
                        authoralt='author'
                        occupation='CEO, Delos Inc.'
                        img='../image/6.png'
                    />
                </div>
                <div>
                    <Movies
                        paragraph='eaque quo veritatis, repellendus deleniti, vel ex id libero fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam dolorem cum laborum,'
                        name='Adam Cuppy'
                        author='image/15.png'
                        authoralt='author'
                        occupation='Founder, Events NYC.'
                        img='../image/7.png'
                    />
                </div>
            </Slider>
        </div>
    );
}

export default Slick;