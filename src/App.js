import React,{ useState,useEffect} from 'react';
import Login from './Login.js'
import Player from './Player.js'
import {useDataLayerValue} from './Stateprovider.js'
import './App.css';
import {getTokenFromUrl} from './spotify.js'
import SpotifyWebApi from 'spotify-web-api-js';

const spotify =new  SpotifyWebApi ();
function App() {

  const[{user,token},dispatch]=useDataLayerValue();

  useEffect(()=>{
    const hash=getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;

    if(_token){
     dispatch({
       type:'SET_TOKEN',
       token:_token
     })
      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{
       dispatch({
         type:'SET_USER',
         user:user
       })
      })
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists
        });
      })
    }
    spotify.getPlaylist('37i9dQZEVXcKPSdIEmPKXi').then((response) => {
      dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: response,
      })
    })
  
  
  },[user,dispatch]);
  return (
    <div className="App">
    {token?(<Player spotify/>):(<Login/>)}
     
    </div>
  );
}

export default App;
