import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './component/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './component/video_list'


const API_KEY = 'AIzaSyBuBHSSHEVOw3WLJC6S7U9esn27FphVdgw';

YTSearch({key: API_KEY,term: 'surfboards'}, function(data) {
  console.log(data);
})

//function component
// const App = ()=> {
//   return (
//   <div>
//     <SearchBar />
//   </div>
//   )
// }

// become a class componenet, state
class App extends Component {

  constructor (props) {
    super(props);

    this.state = {videos:[]};

    YTSearch({key: API_KEY,term: 'surfboards'}, (data) => {
      this.setState({videos: data});
    });
  }
  render () {
    return (
      <div>
        <SearchBar />
        <VideoList videos = {this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
