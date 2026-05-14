import { useEffect, useState } from 'react'
import { productContext } from './ProductContext'

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const API_URL = 'https://fakestoreapi.com/products';

    // Fetch products
    useEffect(() => {
        async () => {
            try{
                let response = await fetch(`${API_URL}`)
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
    }, []);

    return (
        <productContext.Provider value={[products, setProducts]}>
            {children}
        </productContext.Provider>
    )
}

export default ProductProvider

// useEffect(() => {
//     const fetchData = async () => {
//         try{
//             let response = await fetch

//         }catch(error){
//             console.error(error)
//         }
//     }
// })