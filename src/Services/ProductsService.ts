import axios from 'axios';
import { IProduct } from "../Models/ProductModel"
import { addProductAction, deleteProductAction, fetchProductsAction, updateProductAction } from '../Redux/ProductsState';
import store from '../Redux/Store';
import config from '../Utils/Config'


class ProductsService {

    async fetchProducts(): Promise<IProduct[]> {

        // if (store.getState().productsState.products.length <2) { this line is better if customer happpens to write in the url pproducts/new bypassing the productlist page
        if (store.getState().productsState.products.length === 0) {
            const response = await axios.get<IProduct[]>(config.productsUrl + 'delayed')
            const products = response.data
            store.dispatch(fetchProductsAction(products))
        }
        return store.getState().productsState.products
    }

    async getOneProduct(id: number):Promise<IProduct> {
        let product = store.getState().productsState.products.find(p => p.id === id)
        if (!product) {
        const response = await axios.get<IProduct>(config.productsUrl + id)
        product = response.data
        // store.dispatch() - we dont have an action for updating one product btw no need to !! 
        }
        return product 
    }

    async deleteProduct(id: number):Promise<void> {
        await axios.delete(config.productsUrl + id)
        store.dispatch(deleteProductAction(id))
    }

    async addNewProduct(product: IProduct): Promise<IProduct> {

        const formData = new FormData()
        formData.append('name', product.name)
        formData.append('price', product.price.toString())
        formData.append('stock', product.stock.toString())
        formData.append('image', product.image.item(0))
      
       //Add to server the new product and bleow add to global state with store.dispatch
        const response = await axios.post<IProduct>(config.productsUrl, formData)
        const addedProduct = response.data 
        store.dispatch(addProductAction(addedProduct))
        // option A: return product 
        return addedProduct 
        // option b: return nothing and mark void above 
    }

    async updateProduct(product: IProduct): Promise<IProduct> {

        const formData = new FormData()
        formData.append('name', product.name)
        formData.append('price', product.price.toString())
        formData.append('stock', product.stock.toString())
        formData.append('image', product.image.item(0))

        // this data came from form doesnt have id 
        const response = await axios.put<IProduct>(config.productsUrl + product.id, formData)
        const updatedProduct = response.data
        store.dispatch(updateProductAction(updatedProduct))
        return updatedProduct

    }

}

const productsService = new ProductsService()
export default productsService