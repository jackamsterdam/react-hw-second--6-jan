import "./ShoesCard.css";
import {ReactNode} from 'react'

interface ShoesCardProps {
	name: string
    size: number
    price: number
    children?: ReactNode
    // pic?: string
}

function ShoesCard(props: ShoesCardProps): JSX.Element {
    return (
        <div className="ShoesCard Box">
            <p>
            מותג: {props.name}
            </p>
			<p>מידה: {props.size}</p>
			<p>מחיר: {props.price}₪</p>
			<div> {props.children}</div>
            {/* <img src={props.pic} alt="addidas shoe" /> */}
          
        </div>
    );
}

export default ShoesCard;

