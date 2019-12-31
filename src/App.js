import React, { Component } from 'react';
import NavBar from './components/navbar'
//import './App.css';
import Counters from './components/counters'


class App extends Component {
  state = {  // The component owns a state should be the one modifying it.
    counters : [
      { id: 1, value: 4},
      { id: 2, value: 0},
      { id: 3, value: 0},
      { id: 4, value: 0}
    ]
  }
  constructor() {
    super();
    console.log('App - Constructor');
    //this.state = this.props.something;
  }
  componentDidMount(){
    console.log('App - Mounted');
  }

  handleReset = () => {
    const counters = this.state.counters.map(c=>{
      c.value = 0;
      return c;
    });
    this.setState({counters});
  };
  handleIncrement = (counter) => {
    const counters = this.state.counters.map(count => {
      if(count.id === counter.id){ count.value++; }
      return count
    });
    this.setState({counters: counters});
  }

  handleDelete = (counter) => {
    const counters = this.state.counters.filter(count => count.id !== counter.id);
    this.setState({counters: counters});;
  }

  render() {
    console.log('App - Rendered');
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
        <main className="container">
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
              />
        </main>
    </React.Fragment>
    );
  }
}

export default App;


/*
          App.js
    NavBar        Counters... counters[]
                  Counter
*/

/*
  Lifecycle hooks
    MOUNT                 UPDATE                UNMOUNT
    constructor
    render                Rendering
    componentDidMount     componentDidUpdate    componentWillUnmount
*/
