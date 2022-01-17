import { NavLink } from "react-router-dom";
import { IProduct } from "../../../Models/ProductModel";
import config from "../../../Utils/Config";
import "./ProductCard.css";

interface ProductCardProps {
    product: IProduct
}

function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <div className="ProductCard Box">
            <div>
             {props.product.name}
             <br />
             {props.product.price} :מחיר 
             <br /> 
             {props.product.stock} :מלאי
            </div>
            <div>
            <NavLink to={"/products/details/" + props.product.id}>
              <img src={config.productsImageUrl + props.product.imageName} alt="product pic" />
             </NavLink> 
             </div>
        </div>
    );
}

export default ProductCard;
