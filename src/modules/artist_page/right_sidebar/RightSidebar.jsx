import React from 'react';
import './right_sidebar.scss';
import arrowleft from '../../../assets/icons/big-arrow-left.svg';
import arroright from '../../../assets/icons/big-arrow-right.svg';
import { useTranslation } from 'react-i18next';

function RightSidebar(params) {
	const { t, i18n } = useTranslation();
	return (
		<div className="rightsidebar">
			<div className="btnnavigation">
				<button
					onClick={() => {
						params.goBack();
					}}
				>
					<img src={arrowleft} alt="" />
				</button>
				<button
					onClick={() => {
						params.goForward();
					}}
				>
					<img src={arroright} alt="" />
				</button>
			</div>
			<div className="runningline__wrapper">
				<div className={i18n.translator.language === 'ru' ? 'runningline' : 'runningline-en'}>
					{t('jazz')} {t('jazz')} {t('jazz')}&nbsp;
				</div>
			</div>
		</div>
	);
}

export default RightSidebar;
