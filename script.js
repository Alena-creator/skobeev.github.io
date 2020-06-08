
/*
document.addEventListener('scroll',()=>{
	//document.querySelector('.header').innerHTML=pageYOffset;
	//let top=document.querySelector('.header').style.top;
	//document.querySelector('.header').style.top = (top+10)'px';

	//let scroll=pageYOffset;
	//let top=document.querySelector('.header').style.top;
	//let startTop=document.querySelector('.header').offsetTop;
	//document.querySelector('.header').style.top=startTop+'px';
	document.querySelector('.mainText').style.transform='translateY('+pageYOffset/3+'px';

});

document.addEventListener('focusin',(env)=>{
	//env.target.placeholder="";
	//console.log(env)
	if(env.target.name==="Tel"){
		

	}
})

document.querySelector('.sendForm').addEventListener('click',(evt)=>{
	evt.preventDefault();
})
*/
/*
document.addEventListener('orientationchange',()=>{
	const heightMain=document.querySelector('main').offsetHeight;
	const heightWindow=document.documentElement.clientHeight;
	if(heightMain<heightWindow){
	document.querySelector('main').style.height=heightWindow+"px";
}
}) */

document.querySelector('button').addEventListener('click',(evt)=>{
	evt.preventDefault();
}
)
const heightMain=document.querySelector('main').offsetHeight;
const heightWindow=document.documentElement.clientHeight;
if(document.documentElement.clientWidth>1300){
	document.querySelector('main').style.height=heightWindow+"px";
}
const btn=document.querySelector('.button-menu');
const menu=document.querySelector('.header');
btn.addEventListener('click',(event)=>{
	//event.preventDefault();
	btn.classList.toggle('button-menu_active');
	menu.classList.toggle('header_active');
	//menu.classList.toggle('menu_active');
});

document.addEventListener('scroll',()=>{
	document.querySelector('.gear').style.transform='rotate('+pageYOffset%360+'deg)';
	document.querySelector('.gear_2').style.transform='rotate('+(-1)*pageYOffset%360+'deg)';
	if(pageYOffset<200){
		document.querySelector('.mainText').style.transform='translateY('+pageYOffset/3+'px';
		document.querySelector('.mainLine').style.width=100+pageYOffset+'px';
}
})

