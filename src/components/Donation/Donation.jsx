
// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCardInformation } from "../Utility/utility";

const Donation = () => {
    const [allDonateCard, setAllDonateCard]=useState([]);
    const [displayAllDonationCard, setdisplayAllDonationCard]=useState([]);
    const cards = useLoaderData();
    useEffect(()=>{
        const storedCardId = getStoredCardInformation();
        if (cards.length > 0) {
            const allDonation = cards.filter(card => storedCardId.includes(card.id));
            setAllDonateCard(allDonation);
        }
    },[])
    return (
        <div>
            <h1>Hi I am Donation Page</h1>
        </div>
    );
};

Donation.propTypes = {
    
};

export default Donation;