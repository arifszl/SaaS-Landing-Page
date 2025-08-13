import React from "react";
import { Element } from "react-scroll";
import { Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

const Hero = () => {
return (
    <section className="relative pt-52 pb-40 max-lg:pt-20 max-lg:pb-36 max-md:pt-40 max-md:pb-32 ">
        <Element name="hero">
            <div className="container relative flex flex-row max-md:flex-col">
                <div className="relative z-10 max-w-440 max-lg:max-w-388 flex-1 px-6">
                    <div className="caption small-3 uppercase text-p3">
                        All your social conversations. One powerful dashboard.
                    </div>
                    <h1 className="mb-10 h5 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                        Connect, manage, and reply—effortlessly.
                    </h1>
                    <p className="max-w-440 mb-14 body-2 max-md:mb-10">
                        Imagine replying to all your messages from every platform—without breaking a sweat. <span className="font-bold text-pink-600">Unleash your social superpowers</span> and keep the conversation rolling, all in one dazzling dashboard. 🎉
                    </p>
                    <LinkScroll to="features" offset={-100} spy smooth>
                        <Button icon="/images/zap.svg" >Try it now</Button>
                    </LinkScroll>
                </div>
                
                <div className="hidden lg:flex absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-0 w-[900px] pointer-events-none hero-img_res justify-end items-center z-0 px-7">
                    <img
                        src="/images/hero5.png"
                        alt="hero"
                        className="w-full h-auto opacity-100"
                    />
                </div>
                {/* Image for medium screens, behind text and blurred */}
                <div className="hidden md:flex lg:hidden absolute inset-0 justify-center items-center z-0">
                    <img
                        src="/images/hero5.png"
                        alt="hero"
                        className="w-full h-auto blur-lg opacity-60"
                    />
                </div>
                {/* Image for small screens, behind text and blurred */}
                <div className="md:hidden absolute inset-0 flex justify-center items-center z-0">
                    <img
                        src="/images/hero5.png"
                        alt="hero"
                        className="w-full h-auto blur-lg opacity-60"
                    />
                </div>
            </div>
        </Element>
    </section>
)
};

export default Hero;
