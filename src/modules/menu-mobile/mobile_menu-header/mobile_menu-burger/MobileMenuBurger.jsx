import React, { useState, useContext } from 'react';
import './mobile_menu-burger.scss'

function MobileMenuBurger() {
  // const [menuMobileState, setMenuMobileState] = useState(true);
  return(

    <div className="mobilemenu__burger" /*onClick={() => setMenuMobileState(!menuMobileState)}*/>
      <div className="mobilemenu__burger-item animation__burger"></div>
      <div className="mobilemenu__burger-item animation__burger"></div>
    </div>

  );

};

export default MobileMenuBurger;