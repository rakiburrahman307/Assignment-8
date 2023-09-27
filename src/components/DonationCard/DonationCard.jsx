
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({ card }) => {
    const { id, ls_picture, category, category_bg_1, card_bg_1, text_color_1, category_bg_2, card_bg_2, text_color_2, category_bg_3, card_bg_3, text_color_3, category_bg_4, card_bg_4, text_color_4, title, price } = card;

    if (category === 'Education') {
        category_bg_1;
        card_bg_1;
        text_color_1;
    } else if (category === 'Health') {
        category_bg_2;
        card_bg_2;
        text_color_2;
    }
    else if (category === 'Clothing') {
        category_bg_3;
        card_bg_3;
        text_color_3;
    }
    else {
        category_bg_4;
        card_bg_4;
        text_color_4;
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl p-2" style={{ background: card_bg_1 || card_bg_2 || card_bg_3 || card_bg_4 }}>
            <figure><img src={ls_picture} alt={ls_picture} /></figure>
            <div className="card-body">
                <div className='w-20 rounded-md px-2' style={{ background: category_bg_1 || category_bg_2 || category_bg_3 || category_bg_4 }}>
                    <h2 className='text-center' style={{ color: text_color_1 || text_color_2 || text_color_3 || text_color_4 }}>{category}</h2>
                </div>
                <h2 className="text-2xl font-semibold text-[#0B0B0B]">{title}</h2>
                <p className='font-semibold' style={{ color: text_color_1 || text_color_2 || text_color_3 || text_color_4 }}>$ {price}</p>
                <div className="card-actions">
                    <Link to={`/card/${id}`}><button className="btn text-white" style={{ background: text_color_1 || text_color_2 || text_color_3 || text_color_4 }}>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    card: PropTypes.object.required
};

export default DonationCard;