// import PopularBooks.css............
import './shope.css'

// Impor Books Data...............
import { galleryData } from '../../Data/Data'


    
// Import useSate.........................
import { useState } from 'react';

export default function Shope() {

      // Active Button Funcationality..........................
      const [activeButton, setActiveButton] = useState('all');

      const handleFilterChange =(category)=>{
        setActiveButton(category);
      }


    // Fillter Gallery Funcationality..........................
    const filterItems = activeButton === 'all' ? galleryData : galleryData.filter((item)=> item.category === activeButton);



  return (
    <section className='PopularBooks'>
       


            {/* ..........Fillter Tabs Button............. */}
            <div className="filter-buttons">
                <button 
                className={activeButton === 'all' ? 'active' : ''}
                onClick={()=> handleFilterChange('all')}
                >
                    All
                </button>
                <button
                className={activeButton === 'Business' ? 'active' : ''}
                onClick={()=> handleFilterChange('Business')}
                >
                    Business
                </button>
                <button
                className={activeButton === 'Technology' ? 'active' : ''}
                onClick={()=> handleFilterChange('Technology')}
                >
                    Technology
                </button>
                <button
                className={activeButton === 'Adventure' ? 'active' : ''}
                onClick={()=> handleFilterChange('Adventure')}
                >
                    Adventure
                </button>
                <button
                className={activeButton === 'Romantic' ? 'active' : ''}
                onClick={()=> handleFilterChange('Romantic')}
                >
                    Romantic
                </button>
                <button
                className={activeButton === 'Fictional' ? 'active' : ''}
                onClick={()=> handleFilterChange('Fictional')}
                >
                    Fictional
                </button>
            </div>

            {/* ..........Fillter Books Content............. */}
            <div className="gallery">
                {
                    filterItems.map(({name, writer, price, image}, index)=>{
                        return(
                            <div className="gallery-item" key={index}>
                                <div className="popularbook-image">
                                    <img src={image} alt="" />
                                </div>
                                <div className="popularbook-info">
                                    <h4>{name}</h4>
                                    <div><small>{writer}</small></div>
                                    <h5><span>{price}</span></h5>
                                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">
            Add to Cart
        </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

     
    </section>
  )
}
