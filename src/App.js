import React, { useEffect, useState, useRef } from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { PageContext } from './PageContext';

import StartPage from './modules/pages/start_page/StartPage';
import JazzPage from './modules/pages/jazz_page/JazzPage';
import ChessPage from './modules/pages/chess_page/ChessPage';
import FinalPage from './modules/pages/final_page/FinalPage';
import MenuBar from './modules/menu/MenuBar';
import StartPageMobile from './modules/pages-mobile/start_page-mobile/StartPageMobile';
import JazzPageMobile from './modules/pages-mobile/jazz-page-mobile/JazzPageMobile';
import ChessPageMobile from './modules/pages-mobile/chess-page-mobile/ChessPageMobile';
import EventsPageMobile from './modules/pages-mobile/events-page-mobile/EventsPageMobile';
import FinalPageMobile from './modules/pages-mobile/final-page-mobile/FinalPageMobile';
import ArtistPageMobile from './modules/artist_page-mobile/ArtistPageMobile';
import MobileMenuHeader from './modules/menu-mobile/mobile_menu-header/MobileMenuHeader';
import EventsPage from './modules/pages/events_page/EventsPage';
import Gastronomy from './modules/pages/gastromony/Gastronomy';
import MobileGastronomy from './modules/pages-mobile/gastronomy-page-mobile/MobileGastronomy';
import LectureHall from './modules/pages/lecture_hall/LectureHall';
import MobileLectureHall from './modules/pages-mobile/mobile_lecture_hall/MobileLectureHall';
import SponsorPage from './modules/pages/sponsors_page/SponsorsPage';
import SponsorPageMobile from './modules/pages-mobile/sponsors-page-mobile/SponsorsMobile';
import isDesktop from './scripts/isDesktop';
import './App.css';

const pages = [
	{
		path: '/',
		page: <StartPage child={true} />,
		theme: 'dark',
	},
	{
		path: '/jazz',
		page: <JazzPage child={true} />,
		theme: 'dark',
	},
	{
		path: '/chess',
		page: <ChessPage child={true} />,
		theme: 'light',
	},
	// {
	// 	path: '/lecture-hall',
	// 	page: <LectureHall child={true} />,
	// 	theme: 'light',
	// },
	// {
	// 	path: '/gastronomy',
	// 	page: <Gastronomy child={true} />,
	// 	theme: 'light',
	// },
	{
		path: '/events',
		page: <EventsPage child={true} />,
		theme: 'light',
	},
	{
		path: '/sponsors',
		page: <SponsorPage child={true} />,
		theme: 'light',
	},
	{
		path: '/contacts',
		page: <FinalPage child={true} />,
		theme: 'dark',
	},
];
function App() {
	const pageNum = getPageNum();
	const navigate = useNavigate();
	const container = useRef();

	const [page, setPage] = useState(pageNum);
	const [helper, setHelper] = useState(true);
	const [anim, setAnim] = useState('');
	const [version, setVersion] = useState(isDesktop() ? 'desktop' : 'mobile');
	const [scrollContext, setScrollContext] = useState(isDesktop() ? 'scroll' : 'default');
	const [pageContext, setPageContext] = useState({
		pages,
		current: getPageNum(),
		swipeBack: backwards,
		swipeForward: forward,
		context: scrollContext,
		setContext: setupScrollContext,
	});

	const slideForwardAnimation = useSpring({
		from: { transform: 'translateX(0px)' },
		to: { transform: 'translateX(-100vw)' },
	});
	const slideBackwardsAnimation = useSpring({
		from: { transform: 'translateX(0px)' },
		to: { transform: 'translateX(100vw)' },
	});

	useEffect(() => {
		setPageContext({
			pages,
			current: getPageNum(),
			swipeBack: backwards,
			swipeForward: forward,
			context: scrollContext,
			setContext: setupScrollContext,
		});
		return () => {
			window.removeEventListener('resize', rz);
		};
	}, [helper, scrollContext]);

	function setupScrollContext(context) {
		setScrollContext(context);
	}

	function getPageNum() {
		for (let i = 0; i < pages.length; i++) {
			if (pages[i].path === window.location.pathname) {
				return i;
			}
		}
	}

	function forward() {
		if (getPageNum() < pages.length - 1) {
			setAnim('forward');
		}
	}
	function backwards() {
		if (scrollContext === 'artist') {
			window.location.reload();
		} else if (getPageNum() > 0) {
			setAnim('backwards');
		}
	}

	function applyAnimation(anim) {
		if (anim === 'forward') {
			return slideForwardAnimation;
		} else if (anim === 'backwards') {
			return slideBackwardsAnimation;
		} else return;
	}

	const next_page = function () {
		if (pageContext.current + 1 < pages.length) {
			return pages[pageContext.current + 1].page;
		} else return <div style={{ height: '100vh', width: '100vw' }}></div>;
	};

	const prev_page = function () {
		if (pageContext.current - 1 >= 0) {
			return pages[pageContext.current - 1].page;
		} else return <div style={{ height: '100vh', width: '100vw' }}></div>;
	};

	let prevDate = new Date();

	function handlePageScroll(scroll) {
		const now = new Date();
		const diff = prevDate.getMilliseconds() - now.getMilliseconds();
		if (scroll.deltaY === 100 || scroll.deltaY === -100) {
			if (pageContext.context === 'scroll') {
				if (scroll.deltaY > 0 && pageContext.current !== pages.length - 1) {
					forward();
				} else if (scroll.deltaY < 0 && pageContext.current !== 0) {
					backwards();
				}
			}
		} else {
			if (pageContext.context === 'scroll' && diff > 400) {
				if (scroll.deltaY > 3 && pageContext.current !== pages.length - 1) {
					forward();
				} else if (scroll.deltaY < -3 && pageContext.current !== 0) {
					backwards();
				}
			}
		}
		prevDate = new Date();
	}

	function rz() {
		if (isDesktop()) {
			setVersion('desktop');
			document.body.style.overflow = 'hidden';
			document.documentElement.style.overflow = 'hidden';
		} else {
			setVersion('mobile');
			document.documentElement.style.overflow = 'scroll';
			document.body.style.overflow = 'scroll';
		}
	}

	window.addEventListener('resize', rz);

	if (version === 'desktop') {
		document.body.style.overflow = 'hidden';
		document.documentElement.style.overflow = 'hidden';

		return (
			<PageContext.Provider value={[pageContext, setPageContext]}>
				<div
					onWheel={(e) => {
						handlePageScroll(e);
					}}
				>
					<MenuBar />
					<animated.div
						className={anim === '' ? 'application' : 'application animated-now'}
						ref={container}
						style={anim === '' ? {} : applyAnimation(anim)}
						onTransitionEnd={(e) => {
							if (e.propertyName === 'transform') {
								if (anim === 'backwards') {
									if (pageContext.current - 1 > -1) {
										setHelper(!helper);
										setAnim('');
										navigate(pages[pageContext.current - 1].path);
									}
								} else if (anim === 'forward') {
									if (pageContext.current + 1 < pages.length) {
										setHelper(!helper);
										setAnim('');
										navigate(pages[pageContext.current + 1].path);
									}
								}
							}
						}}
					>
						{prev_page()}

						<Suspense fallback={<div>Loading...</div>}>
							<Routes>
								<Route exact path="/" element={<StartPage />} />
								<Route path="/jazz" element={<JazzPage />} />
								<Route path="/chess" element={<ChessPage />} />
								{/* <Route path="/lecture-hall" element={<LectureHall />} /> */}
								{/* <Route path="/gastronomy" element={<Gastronomy />} /> */}
								<Route path="/events" element={<EventsPage />} />
								<Route path="/sponsors" element={<SponsorPage />} />
								<Route path="/contacts" element={<FinalPage />} />
							</Routes>
						</Suspense>
						{next_page()}
					</animated.div>
				</div>
			</PageContext.Provider>
		);
	} else if (version === 'mobile') {
		document.body.style.overflow = 'scroll';
		document.documentElement.style.overflow = 'scroll';
		function isInViewport(element) {
			const rect = element.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
		}
		function calculateLines() {
			const strings = document.querySelectorAll('.r-line');
			let found = false;
			for (let i = 0; i < strings.length; i++) {
				if (isInViewport(strings[i]) && !found) {
					[...strings[i].querySelectorAll('span')].forEach((el) => {
						el.style.animationPlayState = 'running';
					});
					found = true;
				} else {
					[...strings[i].querySelectorAll('span')].forEach((el) => {
						el.style.animationPlayState = 'paused';
					});
				}
			}
		}
		document.addEventListener('wheel', calculateLines);
		document.addEventListener('touchstart', calculateLines);
		document.addEventListener('touchmove', calculateLines);
		document.addEventListener('touchend', calculateLines);

		return (
			<>
				<MobileMenuHeader />
				<StartPageMobile />
				<JazzPageMobile />
				<ChessPageMobile />
				{/* <MobileLectureHall /> */}
				{/* <MobileGastronomy /> */}
				<EventsPageMobile />
				<SponsorPageMobile />
				<FinalPageMobile />
			</>
		);
	}
}

export default App;
