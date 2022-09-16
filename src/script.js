const bnt = document.querySelector('#butto');
const animacao = document.querySelector('.animacao');

bnt.addEventListener("click", function() {
	if (animacao.style.display === "none") {
		animacao.style.display = "flex";
	} else {
		animacao.style.display = "none";
	}
});