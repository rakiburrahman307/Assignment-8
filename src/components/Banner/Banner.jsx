
// import PropTypes from 'prop-types';


const Banner = () => {
  

    return (
        <div className="hero h-80 mb-16"style={{backgroundImage: 'url(https://i.ibb.co/Ny1wd03/successful-medical-team-1.jpg'}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content mr-5">
    <div>
  <h2  className=" text-2xl lg:text-5xl md:text-4xl font-bold text-white mb-5">  I Grow By Helping People In Need</h2>
    <div className="flex flex-col md:flex-row justify-center gap-2">
        <input className="border-none pl-5 py-3 rounded-lg" type="text" placeholder="Search Here..." />
      <button className="btn bg-[#FF444A] border-none text-white hover:bg-red-400 w-36 md:w-auto mx-auto md:mx-0">Search</button>
    </div>
    </div>
  </div>
</div>

          
    );
};

Banner.propTypes = {
    
};

export default Banner;