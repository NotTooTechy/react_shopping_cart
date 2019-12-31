import React, { Component } from 'react'

class Counter extends Component {
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('Counter - Updated prevProps ', prevProps.counter.value, this.props.counter.value);
    console.log('Counter - Updated prevState', prevState);
  }
  componentWillUnmount(){
    console.log('Counter - UNmount');
  }
  render () {
      console.log('Counter - Rendered');
    //console.log('props', this.props.counter.id);
    // this.props.counter ... is comming from counters.jsx
    const {counter, onIncrement, onDelete} = this.props;
    return (
      <div>
          <span className={this.formatBadge()}>{this.formatCount()}</span>
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm">Increment
          </button>
          <button
            onClick={() => onDelete(counter)}
            className="btn btn-secondary btn-sm">Delete
          </button>
      </div>)
  }
  formatCount() {
    const { value } = this.props.counter;
    return this.props.counter.value === 0 ? 'Zero' : value;
  }
  formatBadge() {
    let classes = "badge m-2 ";
    classes += (this.props.counter.value === 0 ) ? "badge-warning" : "badge-primary";
    return classes;
  }
}
export default Counter;


//Rendering Classes Dynamically
  // ... Formated formatBadge
// Rendering lists
// Conditional Rendering
// Handling Events
// Binding Event Handlers .. use arrow function call
// Updating the State ...setState
// What happens when the state changes..
  // Virtual DOM = > div =>  span botton, new and old virtual doms compared

// Passing event Arguments

// Composing Components

// props (this.props) is read only

// Lifecycle hooks
