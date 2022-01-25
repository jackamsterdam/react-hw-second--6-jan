import { IProduct } from '../Models/ProductModel';

class ProductsState {
    products: IProduct[] = []
}

export enum ProductsActionType {
    FetchProducts = 'FetchProduct',
    AddProduct = 'AddProduct',
    UpdateProduct = 'UpdateProduct',
    DeleteProduct = 'DeleteProduct'
}

//Action interface
export interface ProductsAction {
    type: ProductsActionType
    payload: any
}

//Action creators          // dont forget to add []
export function fetchProductsAction(products: IProduct[]): ProductsAction {
    return { type: ProductsActionType.FetchProducts, payload: products }
}

export function addProductAction(product: IProduct): ProductsAction {
    return { type: ProductsActionType.AddProduct, payload: product }
}

export function updateProductAction(product: IProduct): ProductsAction {
    return { type: ProductsActionType.UpdateProduct, payload: product }
}

export function deleteProductAction(id: number): ProductsAction {
    return { type: ProductsActionType.DeleteProduct, payload: id }
}

// reducer 
export function productsReducer(currentState = new ProductsState(), action: ProductsAction): ProductsState {
    const newState = { ...currentState }

    switch (action.type) {
        case ProductsActionType.FetchProducts:
            newState.products = action.payload
            break
        case ProductsActionType.AddProduct:
            newState.products.push(action.payload)
            break
        case ProductsActionType.UpdateProduct:
            const indexToUpdate = newState.products.findIndex(p => p.id === action.payload.id)
            if (indexToUpdate >=0) {
                newState.products[indexToUpdate] = action.payload
            }
            break
        case ProductsActionType.DeleteProduct:
            const indexToDelete = newState.products.findIndex(p => p.id === action.payload)
            if (indexToDelete >= 0) {
                newState.products.splice(indexToDelete, 1)
            }
    }
    
    return newState 
}

