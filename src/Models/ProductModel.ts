export interface IProduct {
    id: number
    name: string
    price: number
    stock: number
    imageName: string
    image: FileList | null | any
}

// export class ProductModel {
//     public id: number 
//     name: string
//     price: number
//     stock: number | undefined
//     imageName: string =''
// }

// class IProduct {
//     public id: number = 0;
//     public name: string = "";
//     public price: number = 0;
//     public stock: number = 0;
//     public imageName: string = ""; // The image name on the backend ("1.jpg")
//     public image: FileList = null; // The image file to send to backend
// }

// export default IProduct;
