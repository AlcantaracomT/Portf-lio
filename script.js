//primeiro botão
var btn = document.querySelector('#butHtml');
var containerHtml = document.querySelector('.meuHtml')

btn.addEventListener('click', function() {
	if(containerHtml.style.display === 'none') {
    containerHtml.style.display = 'flex';
} else {
	  containerHtml.style.display = 'none';
}
});

//segundo botão
var btn = document.querySelector('#butCss');
var containerCss = document.querySelector('.meuCss')

btn.addEventListener('click', function() {
	if(containerCss.style.display === 'none') {
   	containerCss.style.display = 'flex';
} else {
	  containerCss.style.display = 'none';
}
});

//terceiro botão
var btn = document.querySelector('#butJs');
var containerJs = document.querySelector('.meuJs')

btn.addEventListener('click', function() {
	if(containerJs.style.display === 'none') {
   	containerJs.style.display = 'flex';
} else {
	  containerJs.style.display = 'none';
}
});