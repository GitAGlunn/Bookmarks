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
      valueName: '',
      valueLink: '',
      title: 'React Weekly Journal',
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
  this.inputName = this.inputName.bind(this);
  this.inputLink = this.inputLink.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}


buttonMethod() {
  console.log(this.state.week1.header);
  this.setState({title: "I'm a new title!"});
  console.log(this.state.title);
}

inputName(event) {
  this.setState({valueName: event.target.value});
}
inputLink(event) {
  this.setState({valueLink: event.target.value});
}

handleSubmit(event) {
  const updatedWeek = Object.assign({}, this.state.week1);
  this.state.week1.materials.push({title: this.state.valueName, link: this.state.valueLink});
  this.setState({
    week1: updatedWeek,
    valueLink: '',
    valueName: ''
  });
};
handleSubmitWeek2(event) {
  const updatedWeek = Object.assign({}, this.state.week2);
  this.setState({week2: updatedWeek});
  this.state.week2.materials.push({title: this.state.valueName, link: this.state.valueLink});
};


  render() {
    return (
      <div className="App">
        <h1 className="App-header">{this.state.title}</h1>
        <WeekComponent
          valueName={this.state.valueName}
          valueLink={this.state.valueLink}
          thisIsProps={this.state.week1}
          methodProps={this.buttonMethod.bind(this)}
          changePropsName={this.inputName.bind(this)}
          changePropsLink={this.inputLink.bind(this)}
          submitProps={this.handleSubmit.bind(this)}
        />
        <WeekComponent
          thisIsProps={this.state.week2}
          methodProps={this.buttonMethod.bind(this)}
          changePropsName={this.inputName.bind(this)}
          changePropsLink={this.inputLink.bind(this)}
          submitProps={this.handleSubmitWeek2.bind(this)}
        />
        <WeekComponent
          thisIsProps={this.state.week3}
          methodProps={this.buttonMethod.bind(this)}
          changePropsName={this.inputName.bind(this)}
          changePropsLink={this.inputLink.bind(this)}
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
