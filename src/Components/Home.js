import React from 'react'
import cv from '../Assets/Aakash-Kandel-cv.pdf'
import Button from './Base/Common/Button'
import { ReactComponent as HeroSvg } from '../Assets/Svg/herosvg.svg'
import circlegif from '../Assets/Svg/aboutcircle.gif'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import Skill from './Skill';
import Education from './Education';
import Contact from './Contact';
import Footer from './Base/Footer';


export default function Home() {
    const navigate = useNavigate()
    const downloadCV = () => {
        navigate(cv, { replace: true });
        window.location.reload();
    };

    return (
        <div className=''>
            <div className='bg-primary pt-10 md:pt-1'>
                <div className='max-screen md:h-[75vh] h-[600px]  md:max-h-92 text-tertiary'>
                    <div className='flex  flex-col-reverse md:mt-20 md:flex-row justify-between items-center'>
                        <div className='w-full md:w-1/2 p-4 md:p-10'>
                            <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold'>
                                I'm <span className='text-secondary'>Aakash Kandel</span>.
                            </h1>
                            <p className=' sm:text-2xl mt-1 md:mt-2 font-medium'>
                                I build things for web
                            </p>
                            <p className='text-sm sm:text-base mt-4'>
                                "Web developer and graphic designer creating innovative, user-centered digital solutions."
                            </p>
                            <div className='mt-6 sm:mt-10 flex flex-col sm:flex-row space-x-0 sm:space-x-5 h-10 items-center'>
                                <Button onClick={downloadCV} className='bg-secondary text-primary' label="Download CV" />
                                <div className='flex space-x-5 mt-4 sm:mt-0'>
                                    <Link to="http://facebook.com/alvir15"><FaFacebook className='text-2xl cursor-pointer' /></Link>
                                    <Link to="https://www.linkedin.com/in/aakash-kandel-b97b1b2a1/"><FaLinkedin className='text-2xl cursor-pointer' /></Link>
                                    <Link to="https://www.instagram.com/aakash__kandel/"><FaSquareInstagram className='text-2xl cursor-pointer' /></Link>
                                    <Link to="https://github.com/Aakashkandel"><FaGithub className='text-2xl cursor-pointer' /></Link>
                                </div>
                            </div>
                        </div>

                        <div className='w-full md:w-1/2 mt-6 md:mt-0'>
                            <HeroSvg className='w-full h-[300px] sm:h-[400px] md:h-[500px] px-4 object-cover' />
                        </div>
                    </div>
                </div>
            </div>

            <div id="aboutme" className='bg-primary'>
                <div className='max-screen flex flex-col md:flex-row justify-between'>
                    <div className='md:h-[450px] h-52 w-52 mx-auto md:w-[450px]'>
                        <img className='h-full w-full object-cover' src={circlegif} alt="My GIF" />
                    </div>
                    <div className='w-full md:w-1/2 p-4 md:p-10'>
                        <h4 className='sm:text-xl md:text-4xl font-bold text-secondary border-b-2 border-secondary pb-2 w-4/12'>
                            About Me
                        </h4>
                        <p className='text-sm text-tertiary sm:text-base text-justify mt-4'>
                            "I’m a passionate web developer with experience in both frontend and backend development. I have a strong background in Java and enjoy creating dynamic, user-friendly websites and applications. Along with my coding skills, I also have a solid understanding of graphic design, allowing me to combine creativity with technical expertise to deliver innovative digital solutions."
                        </p>
                    </div>
                </div>
            </div>


            <div id="skill" className='bg-primary'>
                <Skill />
            </div>

            <div id="education" className='bg-primary pb-10'>
                <Education />
            </div>

            <div id="contact" className='my-10'>
                <Contact />
            </div>
            <div className=''>
                <Footer />
            </div>
        </div>
    )
}
