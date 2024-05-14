// import BestSellingBook css.............
import './BestSellingBook.css'

// import Title Props.............
import TitileTypeTwo from '../../UI/TitileTypeTwo/TitileTypeTwo'

// Import Tree Shape..............
import TreeShape from '../../assets/treeShape.png'


// Import Selling Books Data............
import { sellingBooksData } from '../../Data/Data'

// IMport Link from React Router..........
import { Link } from 'react-router-dom'

// IMport React Icon............
import { BsArrowRight } from "react-icons/bs";

export default function BestSellingBook() {
  return (
    <section className='BestSellingBook'>
        {/* ..............Selling Book Tree Shape.......... */}
        <div className="treeShape">
            <img src={TreeShape} alt="" />
        </div>


       {/* ...........Selling Book Content............. */}
            {
                sellingBooksData.map(({img, infoTitle, infoTitleTop, desc, price, shopbtnLink}, index)=>{  
                    return(
                        <div className="container bestselling-container" key={index}>
                            {/* ...........left............. */}
                            <div className="selling-book-left">
                                <img src={img} alt="" />
                            </div>

                            {/* ...........right............. */}
                            <div className="selling-book-right">
                              <TitileTypeTwo Title={'Best selling book'} ClassName="sellingBookTitle" /> 
                              <div><small>{infoTitleTop}</small></div>  
                              <h3>{infoTitle}</h3>
                              <p>{desc}</p>
                              <h5><span>{price}</span></h5>
                              <Link to={shopbtnLink} className='btn'>
                                <small>Shop it now</small>
                                <BsArrowRight />
                              </Link>
                            </div>
                        </div>       
                    )              
                })
            }
    </section>
  )
}
