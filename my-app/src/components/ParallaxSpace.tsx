import React, { useEffect, useRef } from 'react';
import './ParallaxSpace.css';
import l1 from '../rsrc/l1.png';
import l2 from '../rsrc/l2.png';
import spacem from '../rsrc/spacem.png';
import stars from '../rsrc/stars.png';

import moon from '../rsrc/moon.png';
import mountainf from '../rsrc/mountainf.png';
import mountainb from '../rsrc/mountainb.png';




const ParallaxSpace: React.FC = () => {

    const starsRef = useRef<HTMLImageElement>(null);
    const moonRef = useRef<HTMLImageElement>(null);
    const mountainfRef = useRef<HTMLImageElement>(null);
    const mountainbRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const btnRef = useRef<HTMLAnchorElement>(null);
    const headerRef =  useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        console.log('Scrolling');
        // Use effect logic
        const handleScroll = () => {

            if (starsRef.current) {
            const value = window.scrollY * 0.125;
            starsRef.current.style.left = `${value}px`;
           
            } 
            if (moonRef.current) {
                const value = window.scrollY * 0.525;
                moonRef.current.style.top = `${value}px`;
                moonRef.current.style.left = `${value}px`;
            } 
         
            if (mountainbRef.current) {
                const value = window.scrollY * 0.25;
                mountainbRef.current.style.top = `${value}px`;
            } 

            if (mountainfRef.current) {
                const value = window.scrollY * 0;
                mountainfRef.current.style.top = `${value}px`;
            } 
            if (textRef.current) {
                const value = window.scrollY * 2;
                const value2 = window.scrollY * 0.525;
                textRef.current.style.marginRight = `${value}px`;
                textRef.current.style.marginTop = `${value2}px`;
            } 
            if (btnRef.current) {
                const value = window.scrollY * 0.75;
                btnRef.current.style.marginTop = `${value}px`;
            } 
            if (headerRef.current) {
                const value = window.scrollY * 0.25;
                headerRef.current.style.top = `${value}px`;
            } 
        };
            // Add event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup: remove event listener
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
}, []); // Empty dependency array means this effect runs once after the initial render

return (
   <>
   <header ref = {headerRef}>
    <a href="#" className="logo">Logo</a>
    <ul>
    <li> <a href ="#" className='active'>Home</a></li>
    <li> <a href ="#">Rocket</a></li>
    <li> <a href ="#">Space</a></li>
    <li> <a href ="#">Socials</a></li>
</ul>
</header>
<section>
<img ref={starsRef} src ={stars} id="stars"/>
<img ref={moonRef} src={moon} id="moon"/>
<img ref={mountainbRef}src={mountainb} id="mountainb"/>
<h2 ref = {textRef} id ="text"> Look Up </h2>
<a  ref={btnRef} href ="#sec" className="btn">Explore</a>
<img ref={mountainfRef}src={mountainf} id="mountainf"/>
</section>



<div className='sec' id="sec">
    <br></br>
<h2>🚀 Unlock Your Future in the Stars! 🚀</h2>
    <p>Ever gaze at the night sky and think, "What's out there?" How about replacing that question with, "What's out there for ME?" 
        It's time to stop wondering and start wandering—into the endless vault of the galaxy!</p>

<br></br><br></br>
<h1>🌌 Space Mining 🌌</h1>
<p>Imagine a gold rush, but not just any gold rush—a Galactic Gold Rush where the sky is filled with sparkling opportunities. 
    You're not just reaching for the stars; you're claiming them as your own! The minerals you discover could fuel green technologies for decades to come.</p>

<br></br><br></br>


<h1>💡 The Next Frontier of Innovation 💡</h1>
<p>Space mining isn't just about collecting rare minerals; it's about pioneering new technologies that could redefine our way of life. Your exploration contributes to leaps in science, from advanced robotics to breakthrough propulsion systems.</p>

<br></br><br></br>


<h1>🌍 A Better Earth Begins in Space 🌍</h1>
<p>Believe it or not, the keys to solving Earth's environmental problems may be found in space. By sourcing minerals from asteroids, we can reduce the burden on our planet's resources, making your quest not just profitable but also sustainable.</p>

<br></br><br></br>

<h1>🌟 Join the Cosmic Elite 🌟</h1>
<p>Be a part of an exclusive community of visionaries, pioneers, and cosmic entrepreneurs. When you venture into space mining, you're not just setting a course for the stars; you're setting a course for history.</p>



</div>

</>
)}
export default ParallaxSpace;