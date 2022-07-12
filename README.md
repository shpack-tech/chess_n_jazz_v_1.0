# Слайды

Вся десктоп версия приложения обернута в `PageContext`, который передает такой объект

```js
{
    context: "page",
    current: 1,
    pages: {
        {path: '/', page: {…}, theme: 'dark'},
        {path: '/jazz', page: {…}, theme: 'dark'},
        {path: '/chess', page: {…}, theme: 'light'},
    },
    swipeBack: ƒ backwards(),
    swipeForward: ƒ forward()
}

```

`context` - это вспомогательное поле, которе определяет где находится пользователь, на верхнем уровне или в карточках артиста

`current` - номер слайда

`pages` - массив со всеми страницами

`swipeBack()` - функция, которая листает на 1 станицу назад
`swipeForward()` - функция, которая листает на 1 станицу вперед

> Две последние функции - основные, с их помощью необходимо добавить события на элементы со стрелками (которые по клику отправляют на другую страницу)

```jsx
// в начале функции
import { PageContext } from '../../../PageContext';
const [page, setPage] = useContext(PageContext);

// return
<button
	className="button-next"
	onClick={() => {
		page.swipeForward(); // если все условия из App.js соблюдены, перенаправит на следующую страницу
	}}
>
	Вперед →
</button>;
```

### Как добавить новые страницы

В App.js есть массив `pages`

```js
const pages = [
	{
		path: '/', // указываем путь к странице
		page: <StartPage child={true} />, // передаем сюда компонент и параметр child со значением true, это нужно для
		theme: 'dark', // возможности не проигрывать анимации, пока элементы находятся за экраном
	},
	{
		path: '/jazz',
		page: <JazzPage child={true} />,
		theme: 'dark', // тут задается цвет сайдбара меню, в зависимости от цвета страницы, всего две опции dark и light
	},
	{
		path: '/chess',
		page: <ChessPage child={true} />,
		theme: 'light',
	},
];
```

Чтобы добавить новую страницу, нужно внести компонент в этот массив и добавить в `Router`, который тоже находится в App.js

```jsx
return (
	<PageContext.Provider value={[pageContext, setPageContext]}>
		{' '}
		// тот самый объект
		<MenuBar /> // меню
		<animated.div //Обертка и анимация
			className={anim === '' ? 'application' : 'application animated-now'}
			ref={container}
			style={anim === '' ? {} : applyAnimation(anim)}
			onTransitionEnd={(e) => {
				// редирект по завершении анимации
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
			{prev_page()} // эта функция находит предыдущую страницу
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route exact path="/" element={<StartPage />} /> // Сюда добавляем страницу
					<Route path="/jazz" element={<JazzPage />} /> // Чтобы все работало, важно, чтобы страницы были и в роутере
					<Route path="/chess" element={<ChessPage />} /> // и в массиве pages в одинокотом порядке
				</Routes>
			</Suspense>
			{next_page()} // эта функция находит следующую страницу
		</animated.div>
	</PageContext.Provider>
);
```

> Всего на странице максимум находится три компонента, не считая меню и т.п.
> Это нужно для анимации перехода между страницами
> Если листаем вперед, то делаем свайп на `next_page()`, у которого отключены анимации, а когда анимация самого свайпа заканчивается происходит редирект на нужную страницу (`onTransitionEnd`), такими образом переход не заметен

### Анимации

Для удобства анимаций у нас тут подключена библиотека [react-spring](https://react-spring.io/) ←(ссылка)

Пример самой простой анимации с ее помощью (из App.js), а так, документация у них хорошая

```jsx
import { useSpring, animated } from 'react-spring';

const slideForwardAnimation = useSpring({
	// задаем значения от => до
	from: { transform: 'translateX(0px)' },
	to: { transform: 'translateX(-100vw)' },
});

return <animated.div style={slideForwardAnimation}>Сдвинется влево</animated.div>; // чтобы анимации применились, нужно приписать к элементы .animated
```

## Мобильная в версия

Это та часть, которая находится в приоритете. Там вроде нет сложных элементов, так что написал только динамическое переключение между десктопом и мобилой.

> В самом конце App.js мобильная версия ренедрится.
> Эту часть можно считать отдельным приложением, для нее нужны отдельные компоненты.

Ссылки на некоторые исходники:
https://github.com/Klimenteen/chessjsx
https://github.com/Klimenteen/chess
