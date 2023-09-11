import React from 'react'

function PortfolioGridItem() {
  return (
    <div class="portfolio-item">
            <div class="portfolio-item-meta">
                    <div className="portfolio-item-upload-date">
                        <span className='date-icon fas fa-calendar'></span>
                        <span className='date-label'>September 10, 2023</span>
                    </div>
                    <div className='portfolio-category'>
                        <span className='category-icon fas fa-tag'></span>
                        <span className='category-label'>Category Label</span>
                    </div>
                </div>
                <a className='portfolio-img-link' href='#'>
                 
                    <div className='portfolio-item-img'>
                    <img src='https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb' />
                    </div>
                </a>
                <a className='portfolio-item-title portfolio-item-link' href="#">Portfolio Item Title</a>
                <a className='case-study-link' href="#" target={'_blank'}>View Case Study</a>
                <a className='github-link' href="#" target={'_blank'}>View on Github</a>
            </div>
  )
}

export default PortfolioGridItem