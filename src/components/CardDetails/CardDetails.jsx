
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLoaderData, useParams } from "react-router-dom";
import { saveCardInformation } from '../Utility/utility';


const CardDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const card = cards.find(card => card.id === parseInt(id));
  const { details_picture, title, description, category, text_color_1, text_color_2, text_color_3, text_color_4 } = card;

  if (category === 'Education') {
    text_color_1;
  } else if (category === 'Health') {
    text_color_2;
  }
  else if (category === 'Clothing') {
    text_color_3;
  }
  else {
    text_color_4;
  }
  const handleDonation = () => {
    saveCardInformation(parseInt(id))
    toast("Donation Successful");
  }

  return (
    <div className="card w-auto mx-auto overflow-hidden px-5 md:px-24 card-compact bg-base-100 shadow-xl">
      <figure><img className="relative overflow-hidden rounded-sm" src={details_picture} alt="photo" /></figure>
      <div className="absolute overflow-hidden h-20 rounded-md w-[338px] top-[98px] md:top-[536px] md:w-[1160px] mx-auto inset-0 bg-black opacity-50"></div>
      <button onClick={handleDonation} className="btn w-24 absolute bottom-[380px] left-10 md:bottom-40 md:left-32 border-none text-white" style={{ background: text_color_1 || text_color_2 || text_color_3 || text_color_4 }}>Donate</button>
      <div className="card-body">
        <h2 className="text-[#0B0B0B] font-bold text-4xl mb-2">{title}</h2>
        <p className="text-left">{description}</p>
      </div>
      <ToastContainer />
    </div>

  );
};



export default CardDetails;