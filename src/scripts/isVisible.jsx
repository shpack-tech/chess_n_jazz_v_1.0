import React, { useState, useEffect } from 'react';

export default function isVisible(ref_el) {
	const [isHere, setIsHere] = useState(false);

	const observer = new IntersectionObserver(([element]) => setIntersecting(entry.isIntersecting));

	useEffect(() => {
		observer.observe(ref_el.current);
		return () => {
			observer.disconnect();
		};
	}, []);

	return isIntersecting;
}
