import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { PropTypes } from 'prop-types';

const Cards = ({ searchValue }) => {
    const value = searchValue;
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-24 mb-12">
            {data
                .filter((card) => {
                    if (value === "") {
                        return card;
                    } else if (card.category.toLowerCase().includes(value.toLowerCase())) {
                        return card;
                    }
                })
                .map((card) => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    searchValue: PropTypes.string
};

export default Cards;
