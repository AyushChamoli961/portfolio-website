import React from 'react'
import "./portfolio.css"
import Inportfolio from './Inportfolio'
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"


const portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My recent Work</h5>
        <h2>Portfolio</h2>
        <div className="portfolio-container">
            <Inportfolio 
                image={IMG1} 
                title="This is Title"
                link1="https://github.com/AyushChamoli961" 
                link2="https://github.com/AyushChamoli961" 
            />
            <Inportfolio 
                image={IMG2} 
                title="This is Title"
                link1="https://github.com/AyushChamoli961" 
                link2="https://github.com/AyushChamoli961" 
            />
            <Inportfolio 
                image={IMG3} 
                title="This is Title"
                link1="https://github.com/AyushChamoli961" 
                link2="https://github.com/AyushChamoli961" 
            />
            <Inportfolio 
                image={IMG4} 
                title="This is Title"
                link1="https://github.com/AyushChamoli961" 
                link2="https://github.com/AyushChamoli961" 
            />
            <Inportfolio 
                image={IMG5} 
                title="This is Title"
                link1="https://github.com/AyushChamoli961" 
                link2="https://github.com/AyushChamoli961" 
            />
            <Inportfolio 
                image={IMG6} 
                title="This is Title"
                link1="https://github.com/AyushChamoli961" 
                link2="https://github.com/AyushChamoli961" 
            />


        </div>

    </section>
  )
}

export default portfolio