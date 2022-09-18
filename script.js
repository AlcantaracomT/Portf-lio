// iconnes habilidades -------------------------------------

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
// ---------------------------------------------------------------

function sendEmail(){
	Email.send({
		SecureToken : "1718669d-966e-4d4b-b440-e075f0be8095",
		To : 'alcantara.ta2213@gmail.com',
		From : document.getElementById("email").value,
		Subject : "Novo contato, referente ao portfólio",
		Body : `Name: ${document.getElementById("name").value} \n
		Email: ${document.getElementById("email").value} \n
		Número: ${document.getElementById("phone").value} \n
		Mensagem: ${document.getElementById("message").value}`
	}).then(
	message => alert("Enviado")
	);
}