import "./PageNotFound.css";

function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
			{/* <p>The page is you are looking for doesn't exist</p> */}
			<p>העמוד שאתה מחפש אינו נמצא</p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/t3otBjVZzT0?autoplay=1" allow="autoplay" title="Page not Found"></iframe>
        </div>

    );
}

export default PageNotFound;
