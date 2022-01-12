import "./RandomBrand.css";
import {useState, useEffect} from 'react'
import ShoeList from "../ShoeList/ShoeList";

function RandomBrand(): JSX.Element {
    const [shoe, setShoe] = useState('נעל ראשונה')

    useEffect(() => {
        let timeoutId = setInterval(() => {
            console.log(Math.random())
            setShoe(randomShoe())
        }, 1_000)
        return () => {
            clearInterval(timeoutId)
        }
    }, [])

    return (
        <div className="RandomBrand Box">
			<p>{shoe}</p>
        </div>
    );
}


export default RandomBrand;



function randomShoe(): string {
    const randomShoeCollection: string[] = ["קונברס","נייק","אדידס", "פומה","אייר  ג'ורדן"]

    return randomShoeCollection[Math.floor(Math.random() * randomShoeCollection.length)]
 }