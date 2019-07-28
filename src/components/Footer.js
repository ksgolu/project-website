import React from 'react';

const Footer = () =>
(
    <footer>
       
        <article className='footer-link'>
            <article className='footer-link__icon'>
            <a href='https://github.com/ksgolu?tab=repositories'><i class="fab fa-github"></i></a>
            <a href='https://www.linkedin.com/in/kumar-satyam-profile/'><i class="fab fa-linkedin"></i></a>
            {/* <a href=''><i class="fab fa-facebook-square"></i></a> */}
            </article>
        </article>
        <article className='footer-details'>
            <h1>Kumar satyam</h1>
            <p>Email: satyamshay@gmail.com </p><p> Mob: 9891255960</p>
        </article>
    </footer>
);

export default Footer;