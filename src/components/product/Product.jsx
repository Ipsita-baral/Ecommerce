import { useState } from 'react';
import './Prodduct.css';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import ShowItem from '../showItem/ShowItem';

const Product = () => {
    // const { pid } = useParams();
    const [product, setProduct] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const ProductGet = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://dummyjson.com/products?limit=194`);
                const data = await response.json();
                setProduct(data.products);
                setFilteredProducts(data.products);

                // console.log(filter)

                setLoading(false);
            } catch (error) {
                console.error('Error fetching the products:', error);
            }
        }

        ProductGet();
    }, []);




    return (
        <>
      
            <div className='containes'>
                <h2 className='pcategory'>Product Categories</h2>
                <hr style={{ marginInline: "20em" }} />
                {loading ? <h3 className='text-center'>Loading....</h3> :
                    <ShowItem product={product} setProduct={setProduct} pruducts={filteredProducts} setFilteredProducts={setFilteredProducts} />}


            </div>
        </>
    )
}
export default Product;
