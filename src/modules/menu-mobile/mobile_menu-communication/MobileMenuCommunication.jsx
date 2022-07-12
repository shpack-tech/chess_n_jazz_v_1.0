import React from 'react';
import './mobile_menu-communication.scss';

function MobileMenuCommunication() {
	return (
		<div className="mobilemenu__communication">
			<div className="mobilemenu__communication-mail">
				свяжитесь с нами:
				<a href="mailto:info@chessandjazz.com">info@chessandjazz.com</a>
			</div>
			<div className="mobilemenu__communication-social">
				мы в социальных сетях:
				<div className="mobilemenu__communication-social__items">
					{/* <a href="http://">instagram</a> */}
					{/* <a href="http://">facebook</a> */}
					<a href="https://vk.com/chessandjazz">вконтакте</a>
				</div>
			</div>
		</div>
	);
}

export default MobileMenuCommunication;
