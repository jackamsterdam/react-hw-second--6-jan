import axios from "axios";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { IProduct } from "../../../Models/ProductModel";
import config from "../../../Utils/Config";
import "./AddProduct.css";

function AddProduct(): JSX.Element {

const {register, handleSubmit} = useForm<IProduct>()
const navigate = useNavigate()


async function submit(product: IProduct) {

    try {

       console.log(product)
    //   this line is sufficient:  await axios.post<IProduct>(config.productsUrl, product)
                  //in the generic I tell what the server will give me back (not what Im sending)
       const response = await axios.post<IProduct>(config.productsUrl, product)
       const addedProduct = response.data 
       console.log("addedProduct after came back from server", addedProduct);
       console.log('product id: ' + addedProduct.id)
   
    } catch (err: any) {
        console.log(err.message)
    }

}


    return (
        <div className="AddProduct Box">
            <form onSubmit={handleSubmit(submit)}>  
                <h2>הוספת פריט</h2>

                <label htmlFor="name"> שם: </label>
                <input type="text" id="name"  {...register('name')}/>

                <label htmlFor="price"> מחיר:    </label>
                <input type="number" id="price" step="0.01" {...register('price')} />

                <label htmlFor="stock"> מלאי:     </label>
                <input type="number" id="stock" {...register('stock')} />

                <button>הקלק להוספת מספר</button>
          </form>

          <NavLink to={'/products'}>Go back</NavLink>
          <button onClick={() => navigate(-1)}>Go back</button>
          
        </div>
    );
}

export default AddProduct;
