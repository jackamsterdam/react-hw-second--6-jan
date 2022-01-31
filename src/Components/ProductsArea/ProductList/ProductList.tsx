import "./ProductList.css";
import {IProduct} from '../../../Models/ProductModel'
import {useState, useEffect}  from 'react'
import axios from "axios";
import config from '../../../Utils/Config'
import ProductCard from '../ProductCard/ProductCard'
import Loading from "../../SharedArea/Loading/Loading";
import { NavLink } from "react-router-dom";
import productsService from '../../../Services/ProductsService'
import notify from "../../../Services/NotifyService";
// מישהו בנה את ייוזסטייט והוא בנה אותה ג,נרית 
// so someone builds a class makes it generic and then when we use it I say what type of data it is 
//so somone built useState made it generic and we i guess if its a calss we use an instawnce of it and give it the type we want in this case its IProduct[] 
// you can define a generic function or generic classs...... 
// so we defined a strong type IProduct and it shows me intelliscense shows me all its got  ther are miilionn of libraries this way we know what we get 
// const a: any = 'hi'
// const b: string = 'hi'    
// a shows me nothing be shows me all of its isFunctions
// thats the beauty of TS  
function ProductList(): JSX.Element {
    const [products, setProducts] = useState<IProduct[]>([])
// useState<S> is the generic and we put IProduct so our [] will be of type IProduct[] cause we filled the genereic it gave us so the S is asking give me the type that products is... so we give it IProduct[] and its not IPRoduct its an array of IPRoduct !! cause IPRoduct is just an {} but we want an array of these objects now products is a strong type
    useEffect(() => {
   //get has the concecpt of generic also .. the server doesnt know what type of array you have as products ..it needs to match the data you get from server. (axios.get default is any ..se we better tell it what tyep of data we are getting. and its the same as before an array of IProduct[])
   //so the data we get form server is the same as the what we are keeping in useState



// lets take this out to Services  OLD: 
        // (async function() {
        //           const response = await axios.get<IProduct[]>(config.productsUrl)
        //           setProducts(response.data)
        // })()

        // new: 
        productsService.fetchProducts()
        .then(products => setProducts(products))
        .catch(err => notify.error(err))


    }, [])

//SO THERE IS PROTECTION ONE PROGRAMMER WROTE AXIOS.GET<STRING[]> AND THEN THE USESTATE CANT GET THAT SO THROWS ERROR SO NOW PROGRAMMER KNOWS HE MADE A MISTAKE SO ts IS GOOD.


    return (
        <div className="ProductList">
            {!products.length && <Loading/>}

             <NavLink to="/products/new">➕</NavLink>

			{/* <p>product goes here </p> */}
            {products.map((product:IProduct) =>  <ProductCard key={product.id} product={product} /> )}
           
        </div>
    );
}

export default ProductList;
