import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption.js'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { useDataLayerValue } from './Stateprovider';
function Sidebar() {
    const[{playlists},dispatch]=useDataLayerValue();
    return (
        <div className='sidebar'>
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=''/>
            <SidebarOption Icon={HomeIcon} text='Home'/>
            <SidebarOption Icon={SearchIcon} text='Search'/>
            <SidebarOption Icon={ PlaylistPlayIcon} text='Your Library'/>
            
            <strong className="sidebar__title">PLAYLISTS</strong>
            {playlists?.items?.map((playlist) => (
                <SidebarOption  text={playlist.name}/>
            ))}
            

        </div>
    )
}

export default Sidebar
