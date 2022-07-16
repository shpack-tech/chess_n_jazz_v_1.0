import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';
import axios from 'axios';

import './page_styles/final.scss';

function FinalPage(params) {
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
		<div className={params.child === true ? 'container final-cont child' : 'container final-cont'}>
			<div className="final-content">
				<div className="jazz-content__top final-content-top">
					<div className="main-title">CHESS & JAZZ</div>

					<div className="jazz-right">
						<BtnTicket />
					</div>
				</div>
				<div className="final-content__bot">
					<div
						className="final_map"
						style={{
							width: '60%',
							paddingBottom: '40px',
							borderTop: '1px solid #4f4f4f',
							borderBottom: '1px solid #4f4f4f',
							paddingTop: '10px',
							marginLeft: '40px',
						}}
					>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5534.113945273314!2d37.605156036174236!3d55.770565992726034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0YHQsNC0INGN0YDQvNC40YLQsNC2!5e0!3m2!1sru!2sru!4v1645356152850!5m2!1sru!2sru"
							width="100%"
							height="100%"
							style={{ border: 0, filter: 'grayscale(100%) invert(1)' }}
							allowFullScreen=""
							loading="lazy"
						></iframe>
						<div style={{ height: '100vh', width: '100%' }}></div>
					</div>
					<div className="final__info">
						<div className="final-date">
							<p>{contacts.date}</p>
							<p>{contacts.name}</p>
							<p>
								{contacts.city}
								{contacts.location && contacts.location != '' ? <>, {contacts.location}</> : ''}
							</p>
						</div>
						<div className="final_copyright">
							<p> {contacts.copy}</p>
							<a style={{ color: '#F4F3F3', textDecoration: 'none', marginTop: '5px' }} href={'mailto:' + contacts.mail}>
								info@chessandjazz.com
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FinalPage;
