//import React, { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import './App.css';
import WeekComponent from './WeekComponent.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      title: 'React Weekly Journal',
      week4: '',
      week1: {
        header: 'Week One',
        materials: [
        {
          title: 'JavaScript Assessment',
          link: 'https://github.com/rmurphey/js-assessment',
        },
        {
          title: 'DevDocs, offline version',
          link: 'http://devdocs.io/offline',
        },
        {
          title: 'FunFunFunctions: Higher Order Functions',
          link: 'https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84',
        },
        {
      title: 'FunFunFunctions: ES6/2015 var, let, and const',
      link: 'https://www.youtube.com/watch?v=sjyJBL5fkp8',
    },
    {
      title: 'FunFunFunctions: ES6/2015 arrow functions',
      link: 'https://www.youtube.com/watch?v=6sQDTgOqh-I',
    },
      ]},
      week2: {
        header: 'Week Two',
        materials: [
        {
          title: 'AirBnb Styleguide',
          link: 'https://github.com/airbnb/javascript',
        },
        {
          title: 'Learn ES6 (ECMAScript 2015) - Course by @johnlindquist',
          link: 'https://egghead.io/courses/learn-es6-ecmascript-2015',
        },
        {
          title: 'Learn Four Semesters of Computer Science in 5 Hours w/ Brian Holt',
          link: 'https://frontendmasters.com/courses/computer-science/',
        },
        {
          title: 'Git Intro',
          link: 'http://www-cs-students.stanford.edu/~blynn/gitmagic/',
        },
      ]},
      week3: {
        header: 'Week Three',
        materials: [
        {
          title: 'Thinking in React',
          link: 'https://facebook.github.io/react/docs/thinking-in-react.html',
        },
        {
          title: 'REACT JS TUTORIAL #2 - Reactjs Components & Rendering',
          link: 'https://www.youtube.com/watch?v=fd2Cayhez58&feature=youtu.be',
        },
        {
          title: 'REACT JS TUTORIAL #3 - Composing Multiple React.js Components',
          link: 'https://www.youtube.com/watch?v=vu_rIMPROoQ',
        },
      ]},
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}


buttonMethod() {
  console.log(this.state.week1.header);
  this.setState({title: "I'm a new title!"});
  console.log(this.state.title);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  const updatedWeek = Object.assign({}, this.state.week1, {header: this.state.value});
  this.setState({week1: updatedWeek});
  this.state.week1.materials.push({title: this.state.value, link: 'https://www.youtube.com/watch?v=vu_rIMPROoQ'});
  console.log(this.state.week1.materials);
};

  render() {
    return (
      <div className="App">
        <h1 className="App-header">{this.state.title}</h1>
        <WeekComponent
          thisIsProps={this.state.week1}
          methodProps={this.buttonMethod.bind(this)}
          changeProps={this.handleChange.bind(this)}
          submitProps={this.handleSubmit.bind(this)}
        />
        <WeekComponent
          thisIsProps={this.state.week2}
          methodProps={this.buttonMethod.bind(this)}
          changeProps={this.handleChange.bind(this)}
          submitProps={this.handleSubmit.bind(this)}
        />
        <WeekComponent
          thisIsProps={this.state.week3}
          methodProps={this.buttonMethod.bind(this)}
          changeProps={this.handleChange.bind(this)}
          submitProps={this.handleSubmit.bind(this)}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
