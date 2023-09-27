
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {id,picture,category,category_bg_1,category_bg_2,category_bg_3,category_bg_4,card_bg_1,card_bg_2,card_bg_3,card_bg_4,text_color_1,text_color_2,text_color_3,text_color_4,title}=card;
    if (category==='Education') {
      category_bg_1;
      card_bg_1;
      text_color_1;
    }else if(category==='Health'){
      category_bg_2;
      card_bg_2;
      text_color_2;
    }
    else if(category==='Clothing'){
      category_bg_3;
      card_bg_3;
      text_color_3;
    }
    else{
      category_bg_4;
      card_bg_4;
      text_color_4;
    }

   
    return (
      <Link to={`/card/${id}`}>
      <div className="card card-compact w-auto shadow-xl" style={{background:card_bg_1||card_bg_2||card_bg_3||card_bg_4}}>
        <figure><img src={picture} alt="Shoes" /></figure>
        <div className="card-body">
          <div className='w-20 rounded-md px-2' style={{background:category_bg_1||category_bg_2||category_bg_3||category_bg_4}}>
          <h2 className='text-center' style={{color:text_color_1||text_color_2||text_color_3||text_color_4}}>{category}</h2>
          </div>
          <p style={{color:text_color_1||text_color_2||text_color_3||text_color_4}}>{title}</p>
        </div>
      </div>
      </Link>
        
    );
};

Card.propTypes = {
    card:PropTypes.object
};

export default Card;