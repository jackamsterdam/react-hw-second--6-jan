import "./Home.css";
import YouTube from '../YouTube/YouTube'
import RandomBrand from '../RandomBrand/RandomBrand'
import Discount from '../Discount/Discount'
import ShoeList from '../ShoeList/ShoeList'
import ShoesCard from '../ShoesCard/ShoesCard'
// actually ill make a component for the image only: 
// import addidasShoeImage from '../../../Assets/Images/addidas_shoe.jpg'
import ShoeImg from '../ShoeImg/ShoeImg'


import nike from '../../../Assets/Images/nike-shoe.jpg'
import puma from '../../../Assets/Images/puma-shoe.jpg'
import reebok from '../../../Assets/Images/reebok-shoe.jpg'
import tevaNaot from '../../../Assets/Images/teva-naot-shoe.jpg'
import converse from '../../../Assets/Images/converse-shoe.jpg'

function Home(): JSX.Element {
    return (
        <div className="Home">
         <Discount />
		  <YouTube />
          <ShoeList />
       

         {/* List of shoes  */}
         {/* Nike: */}
          <ShoesCard name='נייק' size={9} price={459.99} > 
          <ShoeImg designerShoe={nike} />
          </ShoesCard>

         {/* Puma: */}
          <ShoesCard name='פומה' size={12} price={360.99} > 
          <ShoeImg designerShoe={puma} />
          </ShoesCard>

         {/* Reebok: */}
          <ShoesCard name='ריבוק' size={8} price={330.99} > 
          <ShoeImg designerShoe={reebok} />
          </ShoesCard>

         {/* Teva Naot: */}
          <ShoesCard name='טבע נאות' size={14} price={230.99} > 
          <ShoeImg designerShoe={tevaNaot} />
          </ShoesCard>

         {/* Converse: */}
          <ShoesCard name='קונברס' size={11} price={380.99} > 
          <ShoeImg designerShoe={converse} />
          </ShoesCard>
    
          {/* <ShoesCard name='טבע נאות' size={9} price={59.99} pic={addidasShoeImage} /> */}
          <br />
          <RandomBrand />
        </div>
    );
}

export default Home;

