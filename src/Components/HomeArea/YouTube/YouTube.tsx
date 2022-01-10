import "./YouTube.css";
import ReactPlayer from "react-player"

function YouTube(): JSX.Element {
    return (
        <div className="YouTube">
			  {/* <ReactPlayer controls
        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
             /> */}
			<iframe width="560" height="315" src="https://www.youtube.com/embed/bMz1miqo-So?start=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe> 
     
        </div>
    );
}

export default YouTube;


// or npm install 
// npm install react-player --save