import React from "react";
import Navbar from "./Navbar";

//Home component
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-5 bg-dark text-light home-div">
        <div className="mt-5">
          <h1 className="text-center">Welcome to React</h1>
          <p className="mt-3 lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            veniam praesentium ipsum sint asperiores mollitia a et explicabo
            quos. Deleniti id ipsum aliquam assumenda quidem veniam, quos amet
            dicta natus similique, impedit magnam atque quod vel corrupti
            tempore pariatur eveniet fugit alias ad esse rerum culpa accusantium
            nemo. Accusantium tempora dicta vel temporibus laborum fugit
            blanditiis cupiditate eaque maxime assumenda, magni, numquam
            voluptate asperiores debitis modi, sunt velit recusandae expedita
            porro. Sed deleniti blanditiis possimus consequatur vero iure
            dolorem voluptate temporibus laboriosam aperiam fuga dolores est
            autem sapiente, ipsum dicta dolorum et ea! Esse sit facere magni et?
            Magnam, maiores.
          </p>
          <div className="text-center mx-auto mt-3">
            <button type="button" className="btn btn-outline-primary">
              Explore More!!!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
