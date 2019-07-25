import React from 'react';

const Navigation = () =>
(
    <nav className='navigation'>
        <section className='navigation__container'>
           <article className='navigation__menu'>
               <a href="#">
                   <article  className='navigation-list__item project_menu'>
                        <p>Projects</p>
                   </article>
               </a>
           </article>
           <article className='navigation__menu'>
               <a href='#'>
                   <article className='navigation-list__item contact_menu'>
                    <p>Contact</p>
                   </article>
               </a>
           </article>
        </section>
    </nav>
);

export default Navigation;