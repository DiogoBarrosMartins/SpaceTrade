import React, { useEffect } from 'react';
import './ParallaxSpace.css';
import l1 from '../rsrc/l1.png';
import l2 from '../rsrc/l2.png';
import spacem from '../rsrc/spacem.png';
import stars from '../rsrc/stars.png';

//9:12 / 19:54

const ParallaxSpace: React.FC = () => {

return (
   <>
   <header>
    <a href="#" className="logo">Logo</a>
    <ul>
    <li> <a href ="#" className='active'>Home</a></li>
    <li> <a href ="#">Rocket</a></li>
    <li> <a href ="#">Space</a></li>
    <li> <a href ="#">Socials</a></li>
</ul>
</header>
<section>
<img src={stars} id="stars"/>
<img src={spacem} id="spacem"/>
<img src={l2} id="l2"/>
<h2 id ="text"> Space Trade </h2>
<a href ="#" className='btn'>Explore</a>
<img src={l1} id="l1"/>
</section>

</>
)
}
export default ParallaxSpace;