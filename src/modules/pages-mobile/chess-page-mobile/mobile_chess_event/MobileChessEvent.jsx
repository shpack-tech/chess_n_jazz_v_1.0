import React, { useState } from 'react';

function MobileChessEvent(params) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div
			className={isExpanded ? 'chess_acordion_items active' : 'chess_acordion_items'}
			style={{ transition: 'all ease 0.3s' }}
			onClick={() => {
				setIsExpanded(!isExpanded);
			}}
		>
			<div className="chess_acordion_item_t">
				<div className="item_name">{params.el.name}</div>
				<div className="item_icon">
					<div className="item_icon_h"> </div>
					<div className="item_icon_v"> </div>
				</div>
			</div>
			<div className="chess_acordion_item_b">
				<div className="chess_img_m" style={{ maxHeight: '600px' }}>
					<img src={params.el.im} alt="" style={{ maxHeight: '600px', objectFit: 'cover' }} />
				</div>
				<div className="chess_events_info_m">
					<div className="chess_event_date_m">
						<p>30 ИЮЛЯ</p>
						<p>{params.el.time}</p>
					</div>
					<div className="chess_event_info_m">
						<div className="chess_event_content_m">{params.el.descr}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MobileChessEvent;
