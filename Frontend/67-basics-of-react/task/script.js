const root = ReactDOM.createRoot(document.querySelector('#root'))
const h = React.createElement

const logo = h('a', { id: 'logo', href: '#' },
	h('i', { className: 'ri-firefox-browser-line' }))
const left = h('div', { id: 'left' }, [
	logo,
	h('a', { href: '#' }, 'About Me'),
	h('a', { href: '#' }, 'Portfolio'),
	h('a', { href: '#' }, 'Services'),
	h('a', { href: '#' }, 'Blog')
])
const right = h('div', { id: 'right' },
	h('a', { href: '#' }, [
		'Book A Call',
		h('span', null, h('i', { className: 'ri-arrow-right-up-line' }))
	]))
const nav = h('nav', { id: 'nav' }, [left, right])

const first = h('div', { id: 'first' }, [
	h('h5', null, 'Product Designer'),
	h('hr'),
	h('h5', null, '2025')
])
const upper = h('div', { id: 'upper' }, [
	h('div', { className: 'projects count' }, [
		h('h3', null, '+150'),
		h('p', null, 'Projects Completed')
	]),
	h('div', { className: 'startups count' }, [
		h('h3', null, '+65'),
		h('p', null, 'Startup Raised')
	])
])
const introduction = h('div', { id: 'middle' }, [
	h('h1', null, 'Hello'),
	h('p', null, "- It's D.Nova a design wizard")
])
const lower = h('div', { id: 'lower' },
	h('p', null, ['Scroll down ', h('i', { className: 'ri-arrow-down-line' })]))
const middle = h('div', { id: 'middle' }, [upper, introduction, lower])
const last = h('div', { id: 'last' },
	h('img', { src: './men.png', alt: '' }))
const container = h('div', { id: 'container' }, [first, middle, last])
const main = h('div', { id: 'main' }, [nav, container])

root.render(main)


