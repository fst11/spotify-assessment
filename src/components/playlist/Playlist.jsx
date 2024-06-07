import React from 'react'
import './Playlist.css';
import Tracklist from '../tracklist/Tracklist.jsx'

function Playlist({ playListTracks, onRemove, playlistName, onNameChange, onSave}) {

  // function handle name chang track the changes from the input
  function handleNameChange(event) {
    onNameChange(event.target.value);
  }

  return (
    <div className="Playlist">
      <input defaultValue={playlistName} onChange={handleNameChange}/>
      {/* <!-- Add a TrackList component --> */}
      <Tracklist
        searchResults={playListTracks}
        onRemove={onRemove}
      />
      <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist



// function Playlist(props) {
//   function handleNameChange({ target }) {
//     props.onNameChange(target.value);
//   }
//   return (
//     <div className={styles.Playlist}>
//       <input defaultValue={"New Playlist"} onChange={handleNameChange} />
//       {/* <!-- Add a TrackList component --> */}
//       <Tracklist
//         userSearchResults={props.playlistTracks}
//         onRemove={props.onRemove}
//         isRemoval={true}
//       />
//       <button className={styles["Playlist-save"]} onClick={props.onSave} >
//         SAVE TO SPOTIFY
//       </button>
//     </div>
//   );
// }
