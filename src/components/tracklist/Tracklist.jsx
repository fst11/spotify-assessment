import React from 'react';
import './Tracklist.css';
import Track from '../track/Track.jsx';

function Tracklist({searchResults, isRemoval, onAdd, onRemove}) {
  return (
    <div className="TrackList">
      {/* <!-- You will add a map method that renders a set of Track components  --> */}
      {/* the ? is a safe nav operator to only run the map operation when search Results has data */}

      {searchResults?.map((track) => {
        return (<Track track={track}
          key={track.id}
          isRemoval={isRemoval}
          onAdd={onAdd}
          onRemove={onRemove}
        />)
      }
      )}
    </div>
  )
}

export default Tracklist