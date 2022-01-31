import axios from "axios";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { IProduct } from "../../../Models/ProductModel";
import config from "../../../Utils/Config";
import "./UpdateProduct.css";
import { Typography, TextField, Button } from '@material-ui/core'
import productsService from "../../../Services/ProductsService";
import {useEffect} from 'react'
import notify from "../../../Services/NotifyService";


function UpdateProduct(): JSX.Element {

    const params = useParams()
    const id = Number(params.id)


    const { register, handleSubmit, formState, setValue } = useForm<IProduct>()
    const navigate = useNavigate()


    //    its a side effect: 
    useEffect(() => {

        productsService.getOneProduct(id)
        .then(product => {
               setValue('name', product.name)
               setValue('price', product.price)
               setValue('stock', product.stock)
        })
        .catch(err => notify.error(err))


    }, [])



    async function submit(product: IProduct) {
        //!!!! BTW this product does not include the id!!!!! becuase the form gave me this product

        try {
            //add an id to product as a property becasue the user doesnt enter id when fills up the form
           product.id = id
            await productsService.updateProduct(product)
            notify.success("המוצר התעדכן!");



            navigate('/products')

        } catch (err: any) {
            console.log(err.message)
            notify.error(err)
        }

    }


    return (
        // <div className="AddProduct Box"> AddProduct doesnt exist anymore cause i turned file in css modules instead 
        // className={css.form} יש זליגה????
        <div className="UpdateProduct Box">
            <form onSubmit={handleSubmit(submit)}>
                <Typography className="Headline" variant="h4" component='h3'>עריכת פריט</Typography>


                <TextField className="TextBox" label='שם' type="text" variant="outlined" {...register('name', {
                    required: { value: true, message: 'חסר שם מוצר' }
                })} />
                <Typography className="MoveLeft" variant="body1" component='span'>{formState.errors.name?.message}</Typography>

                {/* step={0.01}  doesnt work!! */}
                <TextField className="TextBox" label="מחיר:" type="number" variant="outlined" {...register('price', {
                    required: { value: true, message: 'חסר מחיר' },
                    min: { value: 0, message: 'מחיר לא יכול להיות שלילי' },
                    max: { value: 1000, message: 'מחיר לא יכול לעבור 1000' },
                })} />
                <Typography className="MoveLeft" variant="body1" component="span">{formState.errors.price?.message}</Typography>

                <TextField className="TextBox" label="מלאי:" type="number" variant="outlined" {...register('stock', {
                    required: { value: true, message: 'חסר מלאי' },
                    min: { value: 0, message: 'מלאי לא יכול להיות שלילי' },
                    max: { value: 1000, message: 'מלאי לא יכול לעבור 1000' }
                })} />
                <Typography className="MoveLeft" variant="body1" component="span">{formState.errors.stock?.message}</Typography>


                {/* accept="image/*" */}
                <TextField className="TextBox" label="הוסף תמונה:" type="file" variant="filled" {...register('image', {
                    required: { value: true, message: 'חסר תמונה' }
                })} />

                <Typography className="MoveLeft" variant="body1" component="span">{formState.errors.image?.message}</Typography>

                <button>הקלק לעדכון מוצר</button>
            </form>

            <NavLink to={'/products'}>חזור</NavLink>
            {/* TODO: add icon:  */}
            <Button fullWidth variant="contained" color="primary" onClick={() => navigate(-1)}>חזור</Button>

        </div>
    );
}

export default UpdateProduct;