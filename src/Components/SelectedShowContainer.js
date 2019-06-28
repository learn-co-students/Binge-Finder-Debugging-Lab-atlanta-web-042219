import React, { Component } from 'react';
import Episode from './Episode';

Array.prototype.unique = function() {
  let arr = [];
  for(let i = 0; i < this.length; i++) {
    if(!arr.includes(this[i]))
      arr.push(this[i]);
  }
  return arr;
}

class SelectedShowContainer extends Component {

  state = {
    selectedSeason: 1,
  }

  mapSeasons = () => {
    if (!!this.props.episodes){
      let seasons = this.props.episodes.map((e)=> e.season).unique()

      return seasons.map((s) => {
        return (<option value={s} key={s}>Season {s}</option>)
      });
    }
  }

  mapEpisodes = () => {
    return this.props.episodes.map(ep => {
      if (ep.season == this.state.selectedSeason)
        return <Episode episode={ep} key={ep.id}/>
    })
  }

  handleSelectionChange = (e) => {
    this.setState({ selectedSeason: e.target.value })
  }


  render() {
    const { selectedShow } = this.props

    return (
      <div style={{position: "static"}}>
        <h2>{selectedShow.name}</h2>
        <img src={selectedShow.image.medium} alt=""/>
        <p dangerouslySetInnerHTML={{__html: selectedShow.summary}}></p>
        <p>Premiered: {selectedShow.premiered}</p>
        <p>Status: {selectedShow.status}</p>
        <p>Average Rating: {selectedShow.rating.average}</p>
        <select style={{display: 'block'}} onChange={this.handleSelectionChange}>
          {this.mapSeasons()}
        </select>
        {this.mapEpisodes()}
      </div>
    );
  }

}

export default SelectedShowContainer;
