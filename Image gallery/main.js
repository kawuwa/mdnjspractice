const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
let arr=['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];
/* Declaring the alternative text for each image file */
let textpic=['1','2','3','4','5'];

/* Looping through images */
for (let i=0;i<5;i++) {
	const newImage = document.createElement('img');
	newImage.setAttribute('src', 'images/'+arr[i]);
	newImage.setAttribute('alt',textpic[i] );
	thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
console.log(overlay.style.backgroundColor);
function dl(){
	if (overlay.style.backgroundColor ==='rgba(0, 0, 0, 0)') {
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
	} else {
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
	}
}
//notice!!! It's 'rgba(0, 0, 0, 0)' but not 'rgba(0,0,0,0)'.

btn.addEventListener('click',dl);

thumbBar.addEventListener('click',function(e) {
	let linkpic = e.target.getAttribute('src');
	displayedImage.setAttribute('src',linkpic);
});
