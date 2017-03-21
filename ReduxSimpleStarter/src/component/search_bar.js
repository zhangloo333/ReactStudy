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
          // onChange = {event => this.onInputChange(event.target.vaule)}
          //为什么不会同时的变动，应为打错了， value 打成 vaule这一点错了，所以没有找到
          onChange = {event => this.onInputChange(event.target.value)}
          />
        </div>
      )
    }

    onInputChange(term) {
      console.log(term);
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
