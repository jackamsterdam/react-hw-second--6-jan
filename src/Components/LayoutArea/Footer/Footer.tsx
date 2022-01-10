import "./Footer.css";

function Footer(): JSX.Element {



    return (
        <div className="Footer">
	
		{/* <p> כל הזכויות שמורות- מויישה אופניק אתרים &copy; {getYear()}</p> */}
		<p> כל הזכויות שמורות- ג'ק אתרים &copy; {getYear()}</p>
        </div>
    );
}

function getYear() {
   const now = new Date()
   return now.getFullYear()
   
   
}


export default Footer;
	// {/* <p>All Rights Reserved &copy;</p> */}