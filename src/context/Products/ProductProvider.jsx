import { useEffect, useState } from 'react'
import ProductContext from './ProductContext';

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const API_URL = 'https://fakestoreapi.com/products';

    // Fetch products
    useEffect(() => {
        const fetchData = async () => {
            try{
                let response = await fetch(API_URL)
                if (!response.ok){
                    throw new Error (`HTTP error! Status: ${response.status}`)
                }

                let data = await response.json();
                setProducts(data)
                console.log(data)

            }catch(error){
                console.error(error)
            }
        }
        fetchData();
    }, []);

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider