import React from 'react';
import { useTranslation } from 'react-i18next';
import './artist_profile.scss';
// import photoJR from '../../../assets/images/photos/photo-Jordan-Rakei.png';

function ArtistProfile(params) {
	const { t, i18n } = useTranslation();
	return (
		<div className="artistprofile" style={{ background: '#fff' }}>
			<div className="artistprofile__card">
				<div className="artistprofile__date-wrapper">
					<span className="artistprofile__date">{t(params.artist.bigdate)}</span>
					<span className="artistprofile__time">
						{params.artist.start != '' ? (
							<>
								{params.artist.start} - {params.artist.end}
							</>
						) : (
							''
						)}
					</span>
				</div>
				<div className="artistprofile__name">{t(params.artist.name)}</div>
				<div className="artistprofile__description">{t(params.artist.descr)}</div>
				<div className=""></div>
			</div>
			<div className="artistprofile__img">
				<img src={params.artist.bigp} alt="" />
			</div>
		</div>
	);
}

export default ArtistProfile;
