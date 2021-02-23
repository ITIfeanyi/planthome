import React from "react";
import logo from "../img/sunflower2.png";

import img1 from "../img/flower1-small (1).jpg";
import img2 from "../img/flower2-small (1).jpg";
import img3 from "../img/flower3-small (1).jpg";
import img7 from "../img/flower7-small (1).jpg";
import img8 from "../img/flower8-small (1).jpg";
import img10 from "../img/flower10-small (1).jpg";
import img11 from "../img/flower11-small (1).jpg";
import img13 from "../img/img8.webp";
import hero from "../img/flower12-extraLarge (1).jpg";
import img4 from "../img/flower4-small (1).jpg";

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
            <a href='#'>Home</a>{" "}
          </li>
          <li>
            <a href='#plant'>Plants</a>{" "}
          </li>
          <li>
            <a href='#collection'>Collections</a>{" "}
          </li>
          <li>
            <a href='#contact'>Contact</a>{" "}
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
            <img src={hero} alt='img' />
          </div>
        </div>
      </section>
      <div className='collection_container' id='collection'>
        <h2 className='collection_text'>Collections</h2>

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
            <img src={img3} alt='flowers' />
            <p>Best sellers</p>
          </div>
          <div>
            <img src={img7} alt='flowers' />
            <p>Best sellers</p>
          </div>
        </div>
      </div>
      <div className='collection_container' id='plant'>
        <h2>Best Sellers</h2>

        <div className='collection_img'>
          <div className='img_box'>
            <img src={img11} alt='flowers' />
            <span className='img_span'>
              Mimsa Pudica <i className='fas fa-long-arrow-alt-right'></i>
            </span>
            <span className='img_span'> $160 </span>
          </div>
          <div className='img_box'>
            <img src={img4} alt='flowers' />
            <span className='img_span'>
              Philodendron <i className='fas fa-long-arrow-alt-right'></i>
            </span>
            <span className='img_span'> $60 </span>
          </div>
          <div className='img_box'>
            <img src={img13} alt='flowers' />
            <span className='img_span'>
              Plant parent <i className='fas fa-long-arrow-alt-right'></i>
            </span>
            <span className='img_span'> $90 </span>
          </div>
          <div className='img_box'>
            <img src={img8} alt='flowers' />
            <span className='img_span'>
              Monstra Deliciosa <i className='fas fa-long-arrow-alt-right'></i>
            </span>
            <span className='img_span'> $30 </span>
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
              will grow even in low light conditions. Although they will grow
              fuller with more light. It is often grown for its curiosity value:
              the compound leaves fold inward and droop when touched or shaken.
              The species is native to South and Central America, but it is now
              a pantropical plant and can be found in Southern United State. It
              is well known for it rapid plant movement. Like a number of other
              plants species, it undergoes changes in leaf orientation termed
              "sleep" or nyctinastic movement.
            </p>
            <button>Buy now</button>
          </div>
          <div className='feature_img'>
            <img src={img10} className='feature_img' alt='featured flower' />
          </div>
          <div className='feature_price'>
            <p>price </p>
            <p>$289</p>
          </div>
        </div>
      </div>
      <div className='join_planthome' id='contact'>
        <div className='join_planthome_text'>
          <p>
            Want to join the plant family for our offer, Care tips and many more
            sent straight to your inbox?
          </p>
        </div>
        <div className='join_planthome_input join'>
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
