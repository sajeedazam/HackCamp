import './Home.css';

const Home = () => {
    return (
<div
  id="MacBookProRoot"
  className="bg-white flex flex-col justify-between pb-40 w-full h-[1117px] items-start"
>
  <div className="Header">
    <img
      src="https://file.rendit.io/n/iLYX3MkPh2USsX5FFfMb.svg"
      alt="Ellipse"
      id="Ellipse"
    />
    <div className="text-center text-[96px] font-['Inder'] text-white">
      Placeholder
    </div>
  </div>
  
  <body>
  <div className="welcome_text">
    <div className="tagline" width="120px" height="96px" flex-shrink="0">
      Event planning in a diverse world...
    </div>
    <div className="center_description">
      Real-time RSVP stats, to better plan guest accommodations
    </div>
    <div className="click">
      Click anywhere to get started
    </div>
  </div>
  </body>
</div>

    );
};

export default Home;