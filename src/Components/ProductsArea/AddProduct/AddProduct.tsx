import axios from "axios";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { IProduct } from "../../../Models/ProductModel";
import config from "../../../Utils/Config";
import "./AddProduct.css";
// import css from  "./AddProduct.module.css";
import {Typography, TextField, Button} from '@material-ui/core'
import productsService from "../../../Services/ProductsService";

function AddProduct(): JSX.Element {

const {register, handleSubmit, formState} = useForm<IProduct>()
const navigate = useNavigate()


async function submit(product: IProduct) {

    try {                   



        // old: 
    //     const formData = new FormData()
    //     formData.append('name', product.name)
    //     formData.append('price', product.price.toString())
    //     formData.append('stock', product.stock.toString())
    //     formData.append('image', product.image.item(0))
      

    //    console.log(product)
    // //   this line is sufficient:  await axios.post<IProduct>(config.productsUrl, product)
    //               //in the generic I tell what the server will give me back (not what Im sending)
    // //    const response = await axios.post<IProduct>(config.productsUrl, product)
    //    const response = await axios.post<IProduct>(config.productsUrl, formData)
    //    const addedProduct = response.data 
    //    console.log("addedProduct after came back from server", addedProduct);
    //    console.log('product id: ' + addedProduct.id)

    await productsService.addNewProduct(product)
    alert("Product has been added!");


       navigate('/products')
   
    } catch (err: any) {
        console.log(err.message)
    }

}


    return (
        // <div className="AddProduct Box"> AddProduct doesnt exist anymore cause i turned file in css modules instead 
        // className={css.form} יש זליגה????
        <div className="AddProduct Box">
            <form onSubmit={handleSubmit(submit)}>  
                <Typography className="Headline" variant="h4" component='h3'>הוספת פריט</Typography>


                 <TextField className="TextBox" label='שם' type="text" variant="outlined" {...register('name', {
                      required: {value: true, message: 'חסר שם מוצר'}
                 })}  />
                 <Typography className="MoveLeft" variant="body1" component='span'>{formState.errors.name?.message}</Typography>

                 {/* step={0.01}  doesnt work!! */}
                 <TextField className="TextBox" label="מחיר:" type="number" variant="outlined" {...register('price',{
                required: {value: true,  message: 'חסר מחיר'},
                min: {value: 0, message: 'מחיר לא יכול להיות שלילי'},
                max: {value: 1000, message: 'מחיר לא יכול לעבור 1000'},
                 })} />
                <Typography className="MoveLeft" variant="body1" component="span">{formState.errors.price?.message}</Typography>

             <TextField className="TextBox" label="מלאי:" type="number" variant="outlined" {...register('stock', {
                required: {value: true, message: 'חסר מלאי'},
                min: {value: 0, message: 'מלאי לא יכול להיות שלילי'},
                max: {value: 1000, message: 'מלאי לא יכול לעבור 1000'}
             })}/>
             <Typography className="MoveLeft" variant="body1" component="span">{formState.errors.stock?.message}</Typography>


             {/* accept="image/*" */}
            <TextField className="TextBox" label="הוסף תמונה:" type="file"  variant="filled" {...register('image', {
                   required: {value: true, message: 'חסר תמונה'}
            })} />

            <Typography className="MoveLeft" variant="body1" component="span">{formState.errors.image?.message}</Typography>

                {/* <button>הקלק להוספת מוצר</button> */}
                <Button variant="contained" color="primary" type="submit">הקלק להוספת מוצר</Button>  
          </form>

          <NavLink to={'/products'}>חזור</NavLink>
        {/* TODO: add icon:  */}
          <Button fullWidth variant="contained" color="primary"  onClick={() => navigate(-1)}>חזור</Button>
          
        </div>
    );
}

export default AddProduct;




// old code: 
// return (
//     // <div className="AddProduct Box"> AddProduct doesnt exist anymore cause i turned file in css modules instead 
//     // className={css.form} יש זליגה????
//     <div className="AddProduct Box">
//         <form onSubmit={handleSubmit(submit)}>  
//             <h2>הוספת פריט</h2>

//             <label htmlFor="name"> שם: </label>
//             {/* <input type="text" id="name"  {...register('name')} required/> */}
//             <input type="text" id="name"  {...register('name',{
//                 required: {value: true, message: 'חסר שם מוצר'}
//             })}/>
//             <span>{formState.errors.name?.message}</span>

//             <label htmlFor="price"> מחיר:    </label>
//             {/* <input type="number" id="price" step="0.01" {...register('price')} required min="44" max="100" /> */}
//             {/* pay attention comma after price not after parentshies  */}
//             <input type="number" id="price" step="0.01" {...register('price', {
//                 required: {value: true, message: 'חסר מחיר'},
//                 min: {value: 0, message: 'מחיר לא יכול להיות שלילי'},
//                 max: {value: 100, message: 'מחיר לא יכול לעבור 1000'}
//             })} />
//             <span>{formState.errors.price?.message}</span>

//             <label htmlFor="stock"> מלאי:</label>
//             <input type="number" id="stock" {...register('stock', {
//                  required: {value: true, message: 'חסר מלאי'},
//                  min: {value: 0, message: 'מלאי לא יכול להיות שלילי'},
//                  max: {value: 100, message: 'מלאי לא יכול לעבור 1000'}
//             })} />
//             <span>{formState.errors.stock?.message}</span>


//             <label htmlFor="image">הוסף תמונה:</label>
//             <input type="file" accept="image/*" id="image" {...register('image', {
//                 required: {value: true, message: 'חסר תמונה'}
//             })}/>
//             <span>{formState.errors.image?.message}</span>
    
//             <button>הקלק להוספת מוצר</button>
//       </form>

//       <NavLink to={'/products'}>Go back</NavLink>
//       <button onClick={() => navigate(-1)}>Go back</button>
      
//     </div>
// );