import React from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Data from './Data';
import './Style.css';

function Arrow({ type, onClick }) {
    let className = type === 'next' ? 'nextArrow' : 'prevArrow';
    className += ' arrow';
    const char = type === 'next' ? <BsFillArrowRightCircleFill /> : <BsFillArrowLeftCircleFill />;
    return (
        <span tabIndex="0" role="button" className={className} onClick={onClick}>
            {char}
        </span>
    );
}

function appendDots(dots) {
    return (
        <div>
            <ul style={{ margin: '3px' }}> {dots} </ul>
        </div>
    );
}

function TestiMonial() {
    return (
        <div className="slider">
            <Slider
                nextArrow={<Arrow type="next" />}
                prevArrow={<Arrow type="prev" />}
                dots
                speed="1000"
                autoplay
                appendDots={appendDots}
            >
                {Data.map((item) => (
                    <div className="map-container" key={item.id}>
                        <div className="wrapper">
                            <div className="autor">
                                <div className="imgcontainer">
                                    <img src={item.img} alt={item.id} />
                                </div>
                                <div className="Rating">
                                    <img src={item.rating} alt="rating" />
                                </div>
                                <div className="authorContainer">
                                    <b className="name">{item.name}</b>
                                    <div className="location">{item.position}</div>
                                </div>
                            </div>
                            <h3 className="title">{item.title}</h3>
                            <p className="description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default TestiMonial;
