import React from 'react';

export default class WeekComponent extends React.Component {


render() {
  return (
    <div>
      <p>{this.props.thisIsProps.header}</p>
        <ul>
        {this.props.thisIsProps.materials.map(function (element, i) {
          return (
            <li key={i}>{element.title + ' - ' + element.link}</li>
          )
        })}
      </ul>
      <input type="text"
        placeholder="Bookmark Name"
        value={this.props.value}
        onChange={this.props.changeProps} />
      <input type="text"
        placeholder="Bookmark Link"
        value={this.props.value}
        onChange={this.props.changeProps} />
    
          <button onClick={this.props.submitProps}>
            Add Bookmark
      </button>


          <br />
          <button
              key={this.props.thisIsProps.header+1}
              onClick={this.props.methodProps}
              style={{fontSize: 14, backgroundColor: 'gray'}}>
              {"Add a Lesson to " + this.props.thisIsProps.header}
          </button>


    </div>

  );
}
}
