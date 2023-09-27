

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCardInformation } from "../Utility/utility";
import DonationCard from "../DonationCard/Donationcard";

const Donation = () => {
    const [allDonationCard, setAllDonateCard] = useState([]);
    const [displayAllDonationCard, setdisplayAllDonationCard] = useState(4);
    const cards = useLoaderData();
    useEffect(() => {
        const storedCardId = getStoredCardInformation();
        if (cards.length > 0) {
            const allDonation = cards.filter(card => storedCardId.includes(card.id));
            setAllDonateCard(allDonation);
        }
    }, [cards]);
    const handleShowAll = (show) => {
        if (show === "show") {
            setdisplayAllDonationCard(allDonationCard.length);
        }
    }
    return (
        <div className="mb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 px-10">
                {
                    allDonationCard.slice(0, displayAllDonationCard).map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                }
            </div>
            <div className={displayAllDonationCard >= allDonationCard.length ? 'hidden' : 'w-32 mx-auto'}>
                <button
                    onClick={() => handleShowAll("show")}
                    className="btn btn-primary">Show All</button>
            </div>
        </div>
    );
};



export default Donation;