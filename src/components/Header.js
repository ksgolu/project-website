
//ts-check

import React from 'react';
import Navigation from './Navigation';

const Header = (props)=>(
    <header className='header'>
        <section className='header-background'>
            <article className='header-style'>
            <article className='header-text'>
                <h1 className='header-text_title'>{props.title}</h1>
                {props.subtitle && <h3 className='header-text_subtitle'>{props.subtitle}</h3>}
            </article>
            <article className='header-images'>
                <image src='/images/favicon.ico'></image>
            </article>
            </article>
        </section>
        
    </header>
);

Header.defaultProps = {
    title:'Projects',
    subtitle:'Welcome to project website'
}

export default Header;
