import "./ShoeImg.css";


interface ShoeImgProps {
    designerShoe: string
}

function ShoeImg(props: ShoeImgProps): JSX.Element {
    return (
        <div className="ShoeImg">
			 <img src={props.designerShoe} alt="addidas shoe" />
        </div>
    );
}

export default ShoeImg;
