import React from 'react';
import './artist_page.scss';

import ArtistProfile from './artist_profile/ArtistProfile';
import RightSidebar from './right_sidebar/RightSidebar';

function ArtistPage(params) {
	return (
		<div className="artistpage" style={{ width: '100vw' }}>
			<div className="container">
				<div className="artistpage__wrapper">
					<ArtistProfile artist={params.artist} />
					<RightSidebar artist={params.artist} goBack={params.goBack} goForward={params.goForward} />
				</div>
			</div>
		</div>
	);
}

export default ArtistPage;
