import React, { useState, useContext } from 'react';
import { PageContext } from '../../PageContext';

import MobileMenuCommunication from './mobile_menu-communication/MobileMenuCommunication';
import MobileMenuHeader from './mobile_menu-header/MobileMenuHeader';
import MobileMenulist from './mobile_menu-list/MobileMenuList';
import './mobille_menu.scss';
import '../../fonts/fonts.scss';

function MobileMenu() {
	return (
		<div className="mobilemenu">
			<div className="mobile__container">
				<MobileMenuHeader />
				<div className="mobilemenu_body">
					<MobileMenulist />
					<MobileMenuCommunication />
				</div>
			</div>
		</div>
	);
}

export default MobileMenu;
