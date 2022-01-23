import "./ShoesCard.css";
import {ReactNode} from 'react'
import { Typography, Box } from '@material-ui/core'
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
            <Typography>
            מותג: {props.name}
            </Typography>
			<Typography>מידה: {props.size}</Typography>
			<Typography>מחיר: {props.price}₪</Typography>
			<Box> {props.children}</Box>
            {/* <img src={props.pic} alt="addidas shoe" /> */}

            {/* <div>hello</div>
            <Box>hello</Box> */}
          
        </div>
    );
}

export default ShoesCard;

// before: 
// return (
//     <div className="ShoesCard Box">
//         <p>
//         מותג: {props.name}
//         </p>
//         <p>מידה: {props.size}</p>
//         <p>מחיר: {props.price}₪</p>
//         <div> {props.children}</div>
//         {/* <img src={props.pic} alt="addidas shoe" /> */}
      
//     </div>
// );