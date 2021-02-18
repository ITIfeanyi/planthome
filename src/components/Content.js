import React from "react";
import featured from "../img/featured.jpeg";
import logo from "../img/sunflower2.png";

import img1 from "../img/img1.jpeg";
import img2 from "../img/img2.jpg";
import img9 from "../img/img9.jpeg";
import img4 from "../img/img4.webp";
import img5 from "../img/img5.jpeg";
import img6 from "../img/img6.jpeg";
import img7 from "../img/img7.jpeg";
import img8 from "../img/img8.webp";

export const Content = () => {
  const handleNav = () => {
    const navopen = document.querySelector(".menu_container");
    navopen.classList.toggle("is-open");
  };

  return (
    <>
      <div className='header_container'>
        <div className='header'>
          <span className='header_img'>
            <img src={logo} alt='sunflower' />
          </span>
          <span>
            {" "}
            <h3>PlantHome</h3>
          </span>
        </div>
        <nav className='nav_container' onClick={handleNav}>
          <div className='nav_icon'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>

      <div className='menu_container'>
        <ul className='menu'>
          <li>
            <a href='/#'>Home</a>{" "}
          </li>
          <li>
            <a href='/#'>Plants</a>{" "}
          </li>
          <li>
            <a href='/#'>Collections</a>{" "}
          </li>
          <li>
            <a href='/#'>Contact</a>{" "}
          </li>
        </ul>
      </div>

      <section className='hero_container'>
        <div className='hero'>
          <h1>
            {" "}
            Get the best <span>Plant</span> on <span> PlantHome</span>{" "}
            <span className='header_img'>
              <img src={logo} alt='sunflower' />
            </span>{" "}
          </h1>
          <p>Let your valentine know you adore them with a new plant</p>
          <button>Shop Plants Now</button>
        </div>
        <div className='sub_hero'>
          <div className='translate_img'>
            <img src={img8} alt='img' />
          </div>
        </div>
      </section>
      <hr></hr>
      <div className='collection_container'>
        <h3>Collections</h3>

        <div className='collection_img'>
          <div>
            <img src={img1} alt='flowers' />
            <p>Valentine collection</p>
          </div>
          <div>
            <img src={img2} alt='flowers' />
            <p>Live Plants</p>
          </div>
          <div>
            <img src={img5} alt='flowers' />
            <p>Best sellers</p>
          </div>
          <div>
            <img src={img7} alt='flowers' />
            <p>Best sellers</p>
          </div>
        </div>
      </div>
      <div className='collection_container'>
        <h3>Best Sellers</h3>

        <div className='collection_img'>
          <div className='img_box'>
            <img src={img9} alt='flowers' />
            <span>
              Mimosa Pundica <i className='fas fa-long-arrow-alt-right'></i>
            </span>
            <span> $160 </span>
          </div>
          <div className='img_box'>
            <img src={img4} alt='flowers' />
            <span>
              Philodendron <i className='fas fa-long-arrow-alt-right'></i>
            </span>
            <span> $60 </span>
          </div>
          <div className='img_box'>
            <img src={img6} alt='flowers' />
            <span>
              Plant parent <i className='fas fa-long-arrow-alt-right'></i>
            </span>
            <span> $90 </span>
          </div>
          <div className='img_box'>
            <img src={img7} alt='flowers' />
            <span>
              Monstra Deliciosa <i className='fas fa-long-arrow-alt-right'></i>
            </span>
            <span> $30 </span>
          </div>
        </div>
      </div>
      <div className='feature'>
        <h3 className='h3_feature'>Feature Plant</h3>
        <div className='feature_grid'>
          <div className='feature_text'>
            <h4> Bamboo Palm</h4>
            <p>
              Potted Bamboo palm brings color and warmth to any room in the
              house. Unlike most plants that needs direct light to thrive, these
              will grow even in low light conditions. Although thry will grow
              fuller with more light.
            </p>
            <button>Buy now</button>
          </div>
          <div className='feature_img'>
            <img src={featured} className='feature_img' alt='featured flower' />
          </div>
          <div className='feature_price'>
            <p>price </p>
            <p>$289</p>
          </div>
        </div>
      </div>
      <div className='join_planthome'>
        <div className='join_planthome_text'>
          <p>
            Want to join the plant family for our offer, Care tips and many more
            sent straight to your inbox?
          </p>
        </div>
        <div className='join_planthome_input'>
          <input
            type='text'
            size='40'
            placeholder='We saved a spot for your email'
          />
          <button>SEND</button>
        </div>
      </div>
      <footer>
        <div className='footer_grid'>
          <div className='foot'>
            <span className='header_img'>
              <img src={logo} alt='sunflower' />
            </span>
            <span>
              {" "}
              <h3>PlantHome</h3>
            </span>
          </div>
          <div className='footer_links'>
            <ul>
              <li>
                <a href='#/'>About us</a>{" "}
              </li>
              <li>
                <a href='#/'>Careers</a>{" "}
              </li>
              <li>
                <a href='#/'>Contact Us</a>{" "}
              </li>
              <li>
                <a href='#/'>Location</a>{" "}
              </li>
            </ul>
            <ul>
              <li>
                <a href='#/'>Subscription</a>{" "}
              </li>
              <li>
                <a href='#/'>FAQ</a>{" "}
              </li>
              <li>
                <a href='#/'>Careers</a>{" "}
              </li>
              <li>
                <a href='#/'>Assessability</a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className='footer_grid_2'>
          <div className='copyRight'>&copy; All right reserved</div>
          <div className='footer_icon'>
            <i className='fab fa-instagram'></i>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-linkedin-in'></i>
            <i className='fab fa-twitter'></i>
          </div>
        </div>
      </footer>
    </>
  );
};
