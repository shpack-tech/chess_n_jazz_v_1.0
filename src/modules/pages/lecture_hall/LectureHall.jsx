import React, { useContext } from 'react';
import LectureHallBox from './lecture_hall-box/LectureHallBox';
import './lecture_hall.scss';
import vector10 from '../../../assets/icons/Vector 10.svg';
import { useTranslation } from 'react-i18next';
import { PageContext } from '../../../PageContext';

function LectureHall(params) {
	const { t, i18n } = useTranslation();
	const [page, setPage] = useContext(PageContext);
	return (
		<div className="lecturehall">
			<div className="container">
				<div className="lecturehall__wrapper">
					<LectureHallBox child={params.child} />
					<div className="lecturehall__next" onClick={() => page.swipeForward()}>
						<span>{t('gastronomy')}</span>
						<img src={vector10} alt="" />
						<span>{t('gastronomy')}</span>
						<img src={vector10} alt="" />
						<span>{t('gastronomy')}</span>
						<img src={vector10} alt="" />
						<span>{t('gastronomy')}</span>
						<img src={vector10} alt="" />
						<span>{t('gastronomy')}</span>
						<img src={vector10} alt="" />
						<span>{t('gastronomy')}</span>
						<img src={vector10} alt="" />
						<span>{t('gastronomy')}</span>
						<img src={vector10} alt="" />
						<span>{t('gastronomy')}</span>
						<img src={vector10} alt="" />
						<span>{t('gastronomy')}</span>
						<img src={vector10} alt="" />
						<span>{t('gastronomy')}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LectureHall;
