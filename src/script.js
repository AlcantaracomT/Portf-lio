const butHtml = document.querySelector("#butHtml");
const animacao = document.querySelector(".buttonH");

butHtml.addEventListener("click", function() {
	if (animacao.style.display === "none") {
		animacao.style.display = "flex";
	} else {
		animacao.style.display = "none";
	}
});

const butCss = document.querySelector('#butCss');
const animacao1 = document.querySelector('.buttonC');

butCss.addEventListener("click", function() {
	if (animacao1.style.display === "none") {
		animacao1.style.display = "flex";
	} else {
		animacao1.style.display = "none";
	}
});

const butJs = document.querySelector('#butJs');
const animacao2 = document.querySelector('.buttonJ');

butJs.addEventListener("click", function() {
	if (animacao2.style.display === "none") {
		animacao2.style.display = "flex";
	} else {
		animacao2.style.display = "none";
	}
});
