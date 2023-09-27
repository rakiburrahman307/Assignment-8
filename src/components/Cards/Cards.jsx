
import { useEffect, useState } from "react";
import Card from "../Card/Card";
const Cards = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-24 mb-12">
            {
                data.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>

    );
};

Cards.propTypes = {

};

export default Cards;