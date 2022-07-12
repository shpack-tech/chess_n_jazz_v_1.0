import React from 'react';
import { useTranslation } from 'react-i18next';

import img from '../../../../assets/icons/Rectangle7.svg';

function ArtistSquare(params) {
	const { t, i18n } = useTranslation();
	let iterator_helper = false;
	let reducer_helper = 0;

	return params.artists.map((el, i) => {
		if (el.name != 'anons') {
			let reducer = i;
			if (iterator_helper) {
				reducer = i - reducer_helper;
				iterator_helper = false;
			}
			return (
				<div
					className="jazz__card"
					key={i}
					data-key={reducer}
					data-index={reducer}
					style={{ cursor: 'pointer' }}
					onClick={(e) => {
						const id = e.currentTarget.dataset.index;
						params.context(id);
					}}
				>
					<img src={el.smallp} alt="" />
					<div className="jazz__card-popup">
						<div className="jazz__card-top">
							<div className="jazz__card-date">
								<div>{el.smalldate}</div>
								<div>{el.start}</div>
							</div>
							<button className="jazz__card-arrow">
								<img src={img} alt="" />
							</button>
						</div>
						<div className="jazz__card-bot">
							<div className="card-bot-marquee-w">
								<div className="card-bot-marquee">
									<span>{t(el.name)}&nbsp; &nbsp;</span>
								</div>
								<div className="card-bot-marquee card-bot-marquee2">
									<span>{t(el.name)}&nbsp; &nbsp;</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			iterator_helper = true;
			reducer_helper++;
			return (
				<div className="jazz__card" key={i}>
					<img src={el.smallp} alt="" />
					<div className="jazz__card-popup">
						<div className="jazz__card-top">
							<div className="jazz__card-date">
								<div>{el.smalldate}</div>
								<div>{el.start}</div>
							</div>
							<button className="jazz__card-arrow" style={{ cursor: 'wait' }}>
								<img src={img} alt="" style={{ cursor: 'wait' }} />
							</button>
						</div>
						<div className="jazz__card-bot">
							<div className="card-bot-marquee-w">
								<div className="card-bot-marquee">
									<span>{t(el.name)}&nbsp; &nbsp;</span>
								</div>
								<div className="card-bot-marquee card-bot-marquee2">
									<span>{t(el.name)}&nbsp; &nbsp;</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
	});
}

export default ArtistSquare;
