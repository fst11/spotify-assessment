import React from 'react'
import './Track.css';

function Track({ track, isRemoval, onAdd, onRemove }) {
  // function add track iwill add track
  function addTrack(event) {
    onAdd(track);
    return;
  }
  
  // function removeTract in Track.js to remove 
  function removeTrack(event) {
    onRemove(track);
    return;
  }

  // TODO: renderAction function (27)
  function renderAction(isRemoval = true) {
    if (isRemoval) {
      return (
        <button className="Track-action" onclick={removeTrack}> - </button>);
    } else {
      return (
        <button className="Track-action" onClick={addTrack}> + </button>)
    }
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>
          {/* <!-- track name will go here --> */}
          {track.name}

        </h3>
        <p>
          {/* <!-- track artist will go here--> */} {/* <!-- track album will go here --> */}
          {track.artist} | {track.album}
        </p>
      </div>

      {renderAction(false)}
    </div>
  )
}

export default Track