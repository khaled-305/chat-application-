import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>Room Name: {room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">End Chat</a>
    </div>
  </div>
);

export default InfoBar;