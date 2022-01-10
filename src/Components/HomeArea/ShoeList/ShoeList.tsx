import "./ShoeList.css";

function ShoeList(): JSX.Element {

    const allShoes = [
        {id: 1, model: "נייק"},
        {id: 2, model: "אדידס"},
        {id: 3, model: "פומה"}
    ]


    return (
        <ul className="ShoeList Box">
			{allShoes.map(item => <li key={item.id}>{item.model}</li>)}
			{/* {allShoes.map(item => <span key={item.id}>{item.model} | </span>)} */}
        </ul>
    );
}

export default ShoeList;
