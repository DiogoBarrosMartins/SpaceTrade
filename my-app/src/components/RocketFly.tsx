
import React, { useEffect } from 'react';
import './RocketFly.css';
import rocketImage from '../rsrc/rocket.png';



const RocketFly: React.FC = () => {
  



    useEffect(() => {
        const createStars = () => {
          let count = 50;
          let scene = document.querySelector('.scene');
          let i = 0;
          while (i < count) {
            let star = document.createElement('i');
            let x = Math.floor(Math.random() * window.innerWidth);
            let duration = Math.random() * 2;
            let h = Math.random() * 100;
    
            if (star !== null && scene !== null) {
              star.style.left = `${x}px`;
              star.style.width = '1px';
              star.style.height = `${200 + h}px`;
              star.style.animationDuration = `${duration}s`;
              scene.appendChild(star);
              i++;
            }
          }
        };
    
        createStars();
      }, []);


  return (
    

    <div className  = "scene">
            <div className  ="rocket">
            <img src={rocketImage} alt="rocket"/>
            </div>
          

          
    </div>


  );
}

export default RocketFly;



