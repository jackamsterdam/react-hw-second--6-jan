import "./Home.css";
import YouTube from '../YouTube/YouTube'
import RandomBrand from '../RandomBrand/RandomBrand'
import Discount from '../Discount/Discount'
// import ShoeList from '../ShoeList/ShoeList'
// import ShoesCard from '../ShoesCard/ShoesCard'
// actually ill make a component for the image only: 
// import addidasShoeImage from '../../../Assets/Images/addidas_shoe.jpg'
// import ShoeImg from '../ShoeImg/ShoeImg'
import ShoeList from "../ShoeList/ShoeList";

// import nike from '../../../Assets/Images/nike-shoe.jpg'
// import puma from '../../../Assets/Images/puma-shoe.jpg'
// import reebok from '../../../Assets/Images/reebok-shoe.jpg'
// import tevaNaot from '../../../Assets/Images/teva-naot-shoe.jpg'
// import converse from '../../../Assets/Images/converse-shoe.jpg'



/*??????????????????????????????????????????????????????

import {useState, useEffect} from 'react'
const [testjack, setTestjack] = useState('')

useEffect(() => {
    let timeoutId = setInterval(() => {
        console.log(Math.random())
        setTestjack(<ShoesCard/>)  //can I pass a compnent here????????? I want to loop over the shoes
    }, 1_000)
    return () => {
        clearInterval(timeoutId)
    }
}, [])

??????????????????????????????????????????????????????????????*/

function Home(): JSX.Element {

  
    return (
        <div className="Home">
         <Discount />
		  <YouTube />
          {/* <ShoeList /> */}
       
           <ShoeList />
          <br />
          <RandomBrand />
        </div>
    );  
}

export default Home;

