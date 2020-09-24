import { DOM } from '/vendor/akiyatkin/load/DOM.js'

const tag = (tag, div) => div.getElementsByTagName(tag)
const activate = (a, bool) => {
	//Добавить надо класс к a и к родительскому li
	const act = bool ? 'add' : 'remove'
	a.classList[act]('active')
	const li = a.closest('li')
	if (li) li.classList[act]('active')
}
const check = (div) => {
	const href = location.href
	for (const a of tag('a', div)) {
		let bool = (a.href === href)
		activate(a, bool)
	}
}
const divs = []
DOM.done('load', () => {	
	for (const i in divs) {
		const div = divs[i]
		if (!div.closest('body')) {
			divs.splice(i, 1)
			continue
		}
		check(div)	
	}
})
const Activelink = async (div) => {
	check(div)
	for (const a of tag('a', div)) {
		a.addEventListener('click', () => {
			a.classList.add('active')
		})
	}
	divs.push(div)
	// var href = location.href
	
	// if (!div) div = document
	// var is = false

	// let { CDN } = await import('/vendor/akiyatkin/load/CDN.js')
	// await CDN.on('load','jquery')

	// $(div).find('a').removeClass('active').each(function(){
	// 	var a=$(this);
	// 	if (a.prop('href')==href) {
	// 		a.addClass('active');
	// 		a.parent().filter('li').addClass('active');
	// 		is=true;
	// 	} else {
	// 		a.removeClass('active').parent().filter('li').removeClass('active');
	// 	}
	// });
	// if(is)return;
	// var r=href.split('#');
	// href=r[0];
	// $(div).find('a').removeClass('active').each(function(){
 //        var a=$(this);
 //        if (a.prop('href')==href) {
 //            a.addClass('active');
 //            a.parent().filter('li').addClass('active');
 //            is=true;
 //        } else {
 //            a.removeClass('active').parent().filter('li').removeClass('active');
 //        }
 //    });
}

window.Activelink = Activelink

export { Activelink }