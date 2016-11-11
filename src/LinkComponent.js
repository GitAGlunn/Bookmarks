import React from 'react';

export default class WeekComponent extends React.Component {

render() {
  return (
    <div>  
        <li>{this.props.thisIsProps.link1}</li>
        <li>{this.props.thisIsProps.link2}</li>
    </div>

  );
}
}
