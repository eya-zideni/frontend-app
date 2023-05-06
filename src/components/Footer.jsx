import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            REJOINDRE EduWeb SUR:<br/>
    <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <Link 
              class='social-icon-link facebook'
              to='https://www.facebook.com/'
              target='_blank'
              aria-label='Facebook'
            >
                  <AiFillFacebook size="40px"/>
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/?hl=en'
              target='_blank'
              aria-label='Instagram'
            >
              <AiFillInstagram size="40px"/>
            </Link>
          
            <Link
              class='social-icon-link twitter'
              to='https://twitter.com/'
              target='_blank'
              aria-label='Twitter'
            >
            <AiFillTwitterCircle size="40px"/>
            </Link>
           
          </div>
        </div>
      </section>
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>À propos de nous</h2>
            <Link to='/sign-up'>Comment ça fonctionne</Link>
            <Link to='/'>Témoignages</Link>
            <Link to='/'>Carrières</Link>
            <Link to='/'>Investisseurs</Link>
            <Link to='/'>Conditions d'utilisation</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contactez-nous</h2>
            <Link to='/quiNousSommes'>Contact</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>SERVICES</h2>
            <Link to='/'>....</Link>
            <Link to='/'>......</Link>
            <Link to='/'>.........</Link>
            <Link to='/'>.......</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
          </div>
          <div class='footer-link-items'>
            <h3>Moyen de paiement</h3>
            <img src='Images/stripe.png' width="250" height="50"/>
            
          </div>
        </div>
      </div>
          <small class='website-rights'>EduWeb 2023</small>
          <div class='social-icons'>
    </div>
    </div>
  );
}

export default Footer;