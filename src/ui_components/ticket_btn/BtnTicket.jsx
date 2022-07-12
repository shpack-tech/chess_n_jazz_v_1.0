import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './btn_ticket.scss';

function BtnTicket() {
	const { t, i18n } = useTranslation();
	const [buyTicket, setBuyTicket] = useState(false);

	return (
		<>
			<div
				// className="btnbuyticket"
				className={i18n.translator.language == 'ru' ? 'btnbuyticket' : 'btnbuyticket btnbuyticket-en'}
				onClick={() => {
					const url = document.querySelector('.js-yaticket-button');
					url.click();
				}}
			>
				<span>
					&nbsp;{t('buy a ticket')}&nbsp;&nbsp;{t('buy a ticket')}&nbsp;
				</span>
				<span>
					&nbsp;{t('buy a ticket')}&nbsp;&nbsp;{t('buy a ticket')}&nbsp;
				</span>
			</div>
		</>
	);
}

export default BtnTicket;
