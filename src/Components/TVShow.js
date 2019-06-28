import React from 'react';

const TVShow = (props) => {
  return (
    <div>
      <br/>
      <img src={props.show.image.medium} onClick={(e)=>props.selectShow(props.show)} alt={props.show.name} />
    </div>
  );
}

export default TVShow;
