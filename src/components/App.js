import React from 'react';

import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';
import Navigation from './Navigation'

class App extends React.Component
{
 
  render()
  {
    const projects = [
      {
        title:'Chat App',
        subtitle:'Chat with single person and with group',
        git:'https://www.github.com/ksgolu/chat-app',
        preview:'https://satyam-chat-app.herokuapp.com/',
        technology:['Node','Express','Socket.io']
      },
      {
        title:'Todo App (MVC)',
        subtitle:'A todo list app using MVC approach',
        git:'https://www.github.com/ksgolu/todo-app-mvc',
        preview:' https://todo-app-mvc.herokuapp.com',
        technology:['Node','Express','SQLite']
      },
      {
        title:'Todo App (REST API)',
        subtitle:'Integrate a todo app in your project with this API',
        git:'https://www.github.com/ksgolu/Todo-App-Git',
        technology:['Node','Express','MongoDB']
        // preview:'link'
      },
      {
        title:'Indecission App',
        subtitle:'Manage your daily notes',
        git:'https://www.github.com/ksgolu/indecision-app',
        preview:'https://satyam-indecision-app.herokuapp.com/',
        technology:['React']
      },
      {
        title:'Student Manager',
        subtitle:'A desktop app to manage student information',
        git:'https://www.github.com/ksgolu/Student-Manager',
        technology:['C#','ADO.NET','SQL server']
        // preview:'link'
      },
      {
        title:'Hotspot Share',
        subtitle:'A desktop app that allow to turn your computer into hotspot',
        git:'https://www.github.com/ksgolu/HotspotShare',
        technology:['C#','ADO.NET']
        // preview:'link'
      },
      {
        title:'This website',
        subtitle:'know more about this website on git hub',
        git:'www.github.com/ksgolu',
        technology:['React']
        // preview:'link'
      }
    ];
    return (
      <section>
          <Navigation />
           <Header />
          <Projects projects={projects}/>
          <Footer />
      </section>
     
    );
  }
}

export default App;