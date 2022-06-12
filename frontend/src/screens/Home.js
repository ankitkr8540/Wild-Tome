import React from 'react'
import FormContainer from '../components/FormContainer'
import { Swiper, SwiperSlide } from 'swiper/react'
const Home = () => {

    // var swiper = new Swiper('.blog-slider', {
    //     spaceBetween: 30,
    //     effect: 'fade',
    //     loop: true,
    //     mousewheel: {
    //         invert: false,
    //     },
    //     // autoHeight: true,
    //     pagination: {
    //         el: '.blog-slider__pagination',
    //         clickable: true,
    //     }
    // });
    return (
        <>
            <div className='d-flex'>

                <div>
                    <div className='blog-slider right-card'>
                        <div class="blog-slider__wrp swiper-wrapper">
                            <div class="blog-slider__item swiper-slide">
                                <div className='blog-slider__img'>
                                    <img className=" fit-img" src="\Images\tiger.jpg" />
                                </div>
                                <div class="blog-slider__content">
                                    <span class="blog-slider__code">26 December 2019</span>
                                    <div class="blog-slider__title">Lorem Ipsum Dolor</div>
                                    <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                                    <a href="#" class="blog-slider__button">READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className='arrow-left' src="\Images\right-arrow.png" />
                </div>

                <div className='blog-slider'>
                    <div class="blog-slider__wrp swiper-wrapper">
                        <div class="blog-slider__item swiper-slide">
                            <div className='blog-slider__img'>
                                <img className=" fit-img" src="\Images\tiger.jpg" />
                            </div>
                            <div class="blog-slider__content">
                                <span class="blog-slider__code">26 December 2019</span>
                                <div class="blog-slider__title">Lorem Ipsum Dolor</div>
                                <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                                <a href="#" class="blog-slider__button">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='blog-slider right-card'>
                        <div class="blog-slider__wrp swiper-wrapper">
                            <div class="blog-slider__item swiper-slide">
                                <div className='blog-slider__img'>
                                    <img className=" fit-img" src="\Images\tiger.jpg" />
                                </div>
                                <div class="blog-slider__content">
                                    <span class="blog-slider__code">26 December 2019</span>
                                    <div class="blog-slider__title">Lorem Ipsum Dolor</div>
                                    <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                                    <a href="#" class="blog-slider__button">READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className='arrow-right' src="\Images\right-arrow.png" />
                </div>
            </div>

        </>
    )
}

export default Home