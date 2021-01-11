import React, { Component } from 'react'
import youtube from './API/youtube'
import SearchBar from "./Components/SearchBar"
import VideoList from "./Components/VideoList"
import VideoDesc from "./Components/VideoDesc";


class App extends Component {

  state = {
    videos : [] , 
    selectedVideo : null 
  }

  componentDidMount () {
    this.getSearchResult('cars');
  }

  getSearchResult = async (val) => {
    let request =  await youtube.get('./search' , {
      params : {
        q : val
      }
    });

   this.setState(
     {
       videos : request.data.items , 
       selectedVideo : request.data.items[0]
     }
   )
   console.log(this.state.videos)
  }


  selectedVideo = (video) => {
    console.log(video)
    this.setState(
      {
        selectedVideo : video
      }
    )
  }
  

  render() {
    return (
      <div className = "ui container">
        <SearchBar  value = {this.getSearchResult}/>
        
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDesc video = {this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList selectedVideo = {this.selectedVideo} videos = {this.state.videos}/>  
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;