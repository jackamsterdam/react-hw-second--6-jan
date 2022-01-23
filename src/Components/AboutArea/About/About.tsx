import "./About.css";
import {useState} from 'react'

function About(): JSX.Element {
    // const [color, setColor]  = useState('')

function getColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    const color = `rgb(${r}, ${g}, ${b})`
    return color
}



    return (
        <div style={{backgroundColor: getColor()}} className="About">
			<h2>מי אנחנו?</h2>
            <h4>אנחנו חנות הנעליים המגניבה ביותר בארץ...</h4>
            <h4> ניתן למצא אצלנו רק  נעליים איכותיות ומגניבות...</h4>
            <p>כתובת: רח' סומסום 42 ת"א</p>
        </div>
    );
}

export default About;
