import React from 'react'
import PortfolioGridItem from './PortfolioGridItem'

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
        <div className="container">
        <p>Portfolio</p>
        <div className='portfolio-item-grid'>
          <PortfolioGridItem/>
          <PortfolioGridItem/>
          <PortfolioGridItem/>
          <PortfolioGridItem/>
           
        
        </div>
        </div>
        </section>
  )
}

export default Portfolio