
import "./ShoeList.css";

import nike from '../../../Assets/Images/nike-shoe.jpg'
import puma from '../../../Assets/Images/puma-shoe.jpg'
import reebok from '../../../Assets/Images/reebok-shoe.jpg'
import tevaNaot from '../../../Assets/Images/teva-naot-shoe.jpg'
import converse from '../../../Assets/Images/converse-shoe.jpg'

import ShoesCard from '../ShoesCard/ShoesCard'
import ShoeImg from '../ShoeImg/ShoeImg'

let picArr = [nike, puma, reebok, tevaNaot, converse]

function ShoeList(): JSX.Element {
    const allShoes = [
        {id: 1, model: "נייק", size: 9, price: 459.99},
        {id: 2, model: "פומה", size: 12, price: 360.99},
        {id: 3, model: "ריבוק", size: 8, price: 330.99},
        {id: 4, model: "טבע נאות", size: 14, price: 230.99},
        {id: 5, model: "קונברס", size: 11, price: 380.99}
    ]


    return (
        <ul className="ShoeList">
			{allShoes.map((item, index) => <ShoesCard key={item.id} name={item.model} size={item.size} price={item.price}> <ShoeImg designerShoe={picArr[0]}/> </ShoesCard>)}
        </ul>
    );
}

export default ShoeList;
