import React from 'react';
import img from '../../../../src/Img/img.jpg'
import './Banner.css'
const Banner = () => {
    return (
        // <div className="carousel w-full">
        //     <div id="slide1" className="carousel-item background-color relative w-full">
        //         <img src={img} alt='slide1' className="w-full bg-opacity-60 " />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide4" className="btn btn-success btn-circle">❮</a>
        //             <a href="#slide2" className="btn btn-circle btn-success">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide2" className="carousel-item relative w-full">
        //   <img src={img} alt='slide2' className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide1" className="btn btn-success btn-circle">❮</a>
        //             <a href="#slide3" className="btn btn-success btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide3" className="carousel-item relative w-full">
        //   <img src={img} className="w-full" alt='slide3'/>
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide2" className="btn btn-success btn-circle">❮</a>
        //             <a href="#slide4" className="btn btn-success btn-circle">❯</a>
        //         </div>
        //     </div>
        //     </div>
        <div className='container'>
            <div className='outer'>
                <div className="details">
                    <h2 className='font-bold text-5xl text-slate-200'>welcome to chittagong polytechnic institute computer technology</h2>
                </div>
            </div>
        </div>

    );
};

export default Banner;