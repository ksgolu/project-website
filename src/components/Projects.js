import React from 'react';
import Project from './Project';
const Projects = (props)=>
(
    <main >
        <section className='main'>
            <article className='circle'></article>
            <section className='main-style'>
                <article className='main-list'>
                    {console.log('projects',props)}
                    { 
                        props.projects.map((item,index) => (
                        <Project
                                key={index}
                                title={item.title} 
                                subtitle={item.subtitle}
                                git={item.git}
                                preview = {item.preview}
                                technology={item.technology}
                        /> 
                        ))
                    }
                </article>
            </section>
        </section>
        <article className='circle-bottom'></article>
    </main>
);

export default Projects;