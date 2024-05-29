import React from 'react';
import UserContent from '../components/UserContent';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import backgroundImage from '../images/homebg.png';
import backgroundImage from '../images/HHCOVER.png';

function Home() {
  const user = useSelector((state) => state.auth.user);
  const error = useSelector((state) => state.auth.error);
    const backgroundImageStyle = {
        backgroundImage: `url(${backgroundImage})`, // Use the imported image as the background
      };
  return (
    <section class="home bg-cover bg-center min-h-screen mx-0"  style={backgroundImageStyle}>
      <div className="flex flex-col justify-center items-center h-full">
      <div id="home" class="container mx-auto text-center text-white">
          <h2 class="text-4xl lg:text-6xl font-bold mb-4 mt-48">Welcome to OnTheGo Foods</h2>
          <p class="text-lg lg:text-xl">Explore our delicious dishes and meet our talented chefs.</p>
          <UserContent user={user} />
          {error? <div className='min-h-screen bg-white'>Error logging in</div> : <div></div>}
          {/* <div>
            <form class="mx-auto lg:w-1/2">
              <input type="text"
                class=" py-2 pr-10 pl-4 rounded-full border border-gray-300 focus:border-blue-500 focus:outline-none"
                placeholder=""
              />
            </form>
          </div>   */}
      </div>
      </div>
  </section>
  );
}

export default Home;
