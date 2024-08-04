import { useEffect } from 'react';
import './ShowItem.css'
import { Link, useNavigate } from "react-router-dom";
import DetailsPage from '../details/DetailsPage';

const ShowItem = ({ product, setProduct, pruducts, setFilteredProducts }) => {
    const navigate = useNavigate();

    // useEffect(()=>{
       const viewDetails = (item) =>{
        navigate('/detailsPage',{state:{item:item}})
        // <Link></Link>
       }
    // })

    const productOfList = (categorye) => {
        if (!product) return;

        const listItem = product.filter((item) => {
            // console.log(item);
            // console.log(item.category);
            return item.category === categorye;
        });
        console.log(`Filtering products for category: ${categorye}`, listItem);
        setFilteredProducts(listItem);
        // console.log(category);

    }

    return (
        <>

            <div className='items'>
                <button type="button" class="btn btn-outline-secondary" onClick={() => productOfList("mens-watches")}>Mens-watches</button>
                <button type="button" class="btn btn-outline-secondary" onClick={() => productOfList("laptops")}>Laptops</button>
                <button type="button" class="btn btn-outline-secondary" onClick={() => productOfList("smartphones")}>Smartphones</button>
                <button type="button" class="btn btn-outline-secondary" onClick={() => productOfList("tablets")}>Tablets</button>
            </div>
            {pruducts ? (<div className="itemlist">
                {
                    pruducts.map((item) => {
                        return (
                            <div key={item.id} className='imageit' >
                                <img src={item.thumbnail} alt="" className='imagesss' />
                                <p className=' d-flex flex-wrap justify-content-center'>{item.title}</p>
                                <div className='text-center'>
                                    <button type="button" class="btn btn-light btnbn" onClick={()=>viewDetails(item)}>View Details</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div >) : (
                <div className="itemlist">
                    {
                        product.map((item) => {
                            return (
                                <div key={item.id} className='imageit' >
                                    <img src={item.thumbnail} alt="" className='imagesss' />
                                    <p className=' d-flex flex-wrap justify-content-center'>{item.title}</p>
                                    <div className='text-center'>
                                        <button type="button" class="btn btn-light btnbn" onClick={()=>viewDetails(item.id)}>View Details</button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div >
            )}

        </>
    )

}

export default ShowItem;








