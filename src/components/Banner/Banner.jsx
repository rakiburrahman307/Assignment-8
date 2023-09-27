
// import PropTypes from 'prop-types';
import { useState } from "react";
import Cards from "../Cards/Cards";


const Banner = () => {
  const [searchValue, setSearchValue] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchValue(event.target.search.value);

  };

  return (
    <div>
      <div className="hero h-80 mb-16" style={{ backgroundImage: 'url(https://i.ibb.co/DD5qBtV/Whats-App-Image-2023-09-27-at-14-17-38.jpg' }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content mr-5">
          <div>
            <h2 className=" text-2xl lg:text-5xl md:text-4xl font-bold text-white mb-5">  I Grow By Helping People In Need</h2>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center gap-2">
              <input className="border-none pl-5 py-3 rounded-lg text-black" name="search" type="text" placeholder="Search Here..." />
              <button className="btn bg-[#FF444A] border-none text-white hover:bg-red-400 w-36 md:w-auto mx-auto md:mx-0">Search</button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Cards searchValue={searchValue}></Cards>
      </div>
    </div>


  );
};

Banner.propTypes = {

};

export default Banner;