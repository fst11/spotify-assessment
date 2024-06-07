import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from '../components/searchbar/SearchBar.jsx';
import SearchResults from '../components/searchresults/SearchResults.jsx';
import Playlist from '../components/playlist/Playlist.jsx';
import Spotify from '../utils/Spotify.js';

function App() {

  // create state hooks to manage the characteristics of the application
  const [searchResults, setsearchResults] = useState([]);
  const [playlistName, setplayListName] = useState("Create New Playlist");
  const [playlistTracks, setplayListTrack] = useState([]);

  // at the state of this app compnent, provide default values for searchResults.
  useEffect(() => {
    setsearchResults([
      {
        id: 1,
        name: "Track 1",
        artist: "Track 1 Artist",
        album: "Track 1 Album"
      },
      {
        id: 2,
        name: "Track 2",
        artist: "Track 2 Artist",
        album: "Track 2 Album"
      },
      {
        id: 3,
        name: "Track 3",
        artist: "Track 3 Artist",
        album: "Track 3 Album"
      },
    ]);
  }, []);

  // function add track
  function addTrack(track) {
    // check if track is found in state playlistTracks
    const existTrack = playlistTracks.find((currentTrack) => track.id === currentTrack.id);
    // store track only when track is not found in state playlistTrack
    if (!existTrack) {
      setplayListTrack([...playlistTracks, track]);
      return;
    }
  }
  // function remove track will be passed to component playlist
  function removeTrack(track) {
    // filter the playlisttrack to return only those that are not 1 of the tracks.
    const filteredTrack = playlistTracks.filter((currentTrack) => track.id !== currentTrack);
    // store remainding /filter tracks
    setplayListTrack(filteredTrack);

  }

  // function to update a new playlist name
  function updatePlayListName(name) {
    // store the name in Playlistame
    setplayListName(name);
  }

  // function savePlayList calls Spotify.js savePlayList function
  function savePlaylist() {
    const trackURIs = playlistTracks.map((track) => track.uri);
    console.log(trackURIs);
    // Once spotify has captured the new playlist, we reset playlistName and playListTracks
    Spotify.savePlaylist(playlistName, trackURIs).then(()=>{
      updatePlayListName("Create New Playlist");
      setplayListTrack([]);
    })
  }

  // function search call spotify api search request in spotify
  // which return the results and later store in state search results;
  function search(term) {
    Spotify.search(term).then((result) => setsearchResults(result));
  }



  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */}
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          {/* <!-- Add a Playlist component --> */}
          <Playlist onSave={savePlaylist} playlistName={playlistName} playListTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlayListName} />
        </div>
      </div>
    </div>
  );
}

export default App;
