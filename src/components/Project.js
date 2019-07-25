import React from 'react';

const Project = (props)=>
(
    <section className='main-list__item'>               
        <article className='main-list__item__side-color'></article>
            <article className='main-list__header'>
                <h3>{props.title}</h3>
                <p>{props.subtitle}</p>
                <article className='main-list__link'>
                    <a target='_blank'href={props.git}>Git repository</a>
                    {props.preview && <a target='blank' href={props.preview}>Preview</a>}
                </article> 
                {
                props.technology.map((item)=>(
                    <span>{item}</span>
                ))
                }
                
        </article>          
    </section>       
)

export default Project;