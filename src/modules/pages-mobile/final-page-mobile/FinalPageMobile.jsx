import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './final_page_mobile.scss';
import vkvk from '../../../assets/icons/vkvk.svg';
import youtubeyt from '../../../assets/icons/youtubeyt.svg';

function FinalPageMobile() {
	const { t, i18n } = useTranslation();

	const [contacts, setContacts] = useState({});

	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');
		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/bbbbbbbbbbbbbbbbbb.php').then((resp) => {
			setContacts(resp.data[0]);
		});
	}, []);
	return (
		<div className="mobile-container" id="contacts">
			<div className="m-content">
				<div className="m_header_final"> CHESS & JAZZ</div>
				<div className="m_map" style={{ height: '385px' }}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5534.113945273314!2d37.605156036174236!3d55.770565992726034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0YHQsNC0INGN0YDQvNC40YLQsNC2!5e0!3m2!1sru!2sru!4v1645356152850!5m2!1sru!2sru"
						width="100%"
						height="100%"
						style={{ border: 0, filter: 'grayscale(100%) invert(1)' }}
						allowFullScreen=""
						loading="lazy"
					></iframe>
				</div>
				<div className="m_socials-content">
					<div className="m_socials-place">
						<p>{contacts.date}</p>
						<p>{contacts.name}</p>
						<p>
							{contacts.city}
							{contacts.location && contacts.location != '' ? <>, {contacts.location}</> : ''}
						</p>
					</div>
					<a href={'mailto:' + contacts.mail} className="m_socials_mail">
						{' '}
						{contacts.mail}
					</a>
					<div className="m_socials-copy"> {contacts.copy}</div>
					<div className="m_socials-icons">
						<button onClick={() => window.open('https://vk.com/chessandjazz')} className="socials__btn">
							<img src={vkvk} alt="" />
						</button>
						<button className="socials__btn">
							<img src={youtubeyt} alt="" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FinalPageMobile;
