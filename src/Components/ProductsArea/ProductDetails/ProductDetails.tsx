import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import {useState, useEffect} from 'react'
import axios from "axios";
import { IProduct } from "../../../Models/ProductModel";
import config from "../../../Utils/Config";
import Loading from '../../SharedArea/Loading/Loading'
import { NavLink } from "react-router-dom";
import productsService from "../../../Services/ProductsService";


function ProductDetails(): JSX.Element {

const params = useParams()
console.log("params", params);
console.log("params.id", params.id);

const id = Number(params.id)
// const id = +params.id why doesnt this work here ? 
                                                   //dont have to type this: {} as IProduct acutally its bad cause starts with an undefined product
const [product, setProduct] = useState<IProduct>()
const navigate = useNavigate()


useEffect(() => {


    // old: 
    // try {
    //      axios.get<IProduct>(config.productsUrl + id)
    // .then(response => {
    //     setProduct(response.data)
    // })
    // .catch((err: any) => {
    //     console.log(err.message)
    // })
    // } catch(err: any) {
    //     alert(err.message)
    // }

    productsService.getOneProduct(id)
    .then(product => setProduct(product))
    .catch(err => alert(err.message))
   


}, [])

async function deleteProduct() {
    try {

        const confirmDelete = window.confirm('האם אתה בטוח?')
        if (!confirmDelete) return

    // old: 
        // await axios.delete(config.productsUrl + id)
        // new: why do we need await here and not above ???? 
       await productsService.deleteProduct(id) 
       


        alert('המוצר נמחק')
    
        navigate('/products')
    } catch(err: any) {
        alert(err.message)
    }
}




    return (

        <div className="ProductDetails">
			<h1>פרטי מוצר</h1>

            {!product && <Loading /> }

          {product && 
                    <>
                    <h2>{product.name}</h2>
                    <h2>מחיר: {product.price} </h2>
                    <h2>מלאי: {product.stock} </h2>

                    <img src={config.productsImageUrl + product.imageName} />
<br />
                    <NavLink to="/products">Go Back with NavLink</NavLink>
                    <br />
                    <br />
                    <button onClick={() => navigate(-1)}>Go back with useNavigate</button>
                    <button onClick={deleteProduct}>למחוק</button>

                    <button onClick={() => navigate('/products/edit/'+ product.id)}>Edit</button>
                    </>

          }
        </div>
    );
}

export default ProductDetails;
