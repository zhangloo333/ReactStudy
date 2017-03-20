import React, { Component } from 'react';

// const SearhBar = () => {
//   return <input />
// }

// class SearchBar extends React.Component
// class SearchBar extends Component {
//   render() {
//     return <input onChange = {this.onInputChange}/>;
//   }
//
// // creat a event handle
// //event仅仅是个object的名字；
//   onInputChange(event){
//     console.log(event.target.value);
//   }
// }

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};
  }
  // render() {
  //   return <div>asdasd
  //
  //   //  <input onChange = {(event) => this.setState({term: event.target.value}) }/>
  //   //  value of the input: {this.state.term}
  //   </div>
  // }
    render() {
      return (
        <div className = "search-bar">
          <input
          value = {this.state.term}
          // onChange = {event => this.setState({term:event.target.value})}
          onChange = {event => this.onInputChange(event.target.vaule)} />
        </div>
      )
    }

    onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
}

// creat a event handle
//event仅仅是个object的名字；
//   onInputChange(event){
//     console.log(event.target.value);
//   }
// }

export default SearchBar;
