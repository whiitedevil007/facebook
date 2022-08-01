import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import userEvent from '@testing-library/user-event';
import { Chat, EmojiFlags, Expand, LocalHospital, People, Storefront, VideoLibrary } from '@mui/icons-material';
const Sidebar=()=> {
  return (
    <div className="sidebar">
      {/* <SidebarRow src={user.photoUrl} title={user.displayName} /> */}
                
      <SidebarRow src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png?20200820101156" title="khsuhu" />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Mesenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={Expand} title="Marketplace" />
    </div>
  );
}

export default Sidebar