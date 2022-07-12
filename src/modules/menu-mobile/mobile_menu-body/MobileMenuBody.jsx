import React from "react";

import MobileMenuCommunication from "../mobile_menu-communication/MobileMenuCommunication";
import MobileMenulist from "../mobile_menu-list/MobileMenuList";

import './mobile_menu_body.scss'

import { useSpring, animated } from 'react-spring';

function MobileMenuBody(params) {

  const { x } = useSpring({
		x: params.displayed ? 10 : 0,
	});

  return(

    <animated.div className="mobilemenu__body" style={{ left: x.to((x) => `-${x * 10}vw`), position: 'absolute'}}>
      <MobileMenulist />
      <MobileMenuCommunication />
    </animated.div>

  );

};

export default MobileMenuBody;