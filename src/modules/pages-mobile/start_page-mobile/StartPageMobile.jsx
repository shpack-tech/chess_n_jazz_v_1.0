import React, { useEffect, useState, useContext } from 'react';
import { useSpring, a } from '@react-spring/web';
import axios from 'axios';

import './page_styles-mobile/start_page-mobile.scss';
import './page_styles-mobile/picture-mobile.scss';
import './page_styles-mobile/menu-mobile.scss';
import heading from '../../../assets/icons/H1Chess&Jazz.svg';

import MPSlider from './slider_mp/MPSlider';

import { useTranslation } from 'react-i18next';

function StartPageMobile(params) {
	const [manifest, setManifest] = useState('');
	const [flipped, set] = useState(false);
	const { transform, opacity } = useSpring({
		opacity: flipped ? 1 : 0,
		transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
		config: { mass: 5, tension: 500, friction: 80 },
	});

	const { t, i18n } = useTranslation();

	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');
		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/igbfadsk2.php').then((resp) => {
			setManifest(resp.data[0].text);
		});
	}, []);

	return (
		<>
			<div className="mobile-container" style={{ paddingTop: '48px' }}>
				<div className="m-content m-content-sp">
					<div className="m-header flex fill center" style={{ height: '700px' }} onClick={() => set((state) => !state)}>
						<a.div className="c back" style={{ opacity: opacity.to((o) => 1 - o), filter: flipped ? 'blur(100px)' : '' }}>
							<img src={heading} alt="" />
						</a.div>
						<a.div
							className="c front"
							style={{
								opacity,
								filter: !flipped ? 'blur(100px)' : '',
								fontSize: '20px',
								padding: '20px',
							}}
							dangerouslySetInnerHTML={{ __html: manifest }}
						></a.div>
					</div>
					<div className="main-page-mobile__picture" style={{ position: 'relative', height: '400px' }}>
						{/* <span> */}
						<MPSlider />
						{/* </span> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default StartPageMobile;
