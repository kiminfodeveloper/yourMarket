const textElement = document.getElementById("transition-text");
const texts = ["Bem vindo(a) ao Your Market.", "Acesse nosso Whatsapp abaixo.", "O mercado ao lado do seu lar.", "Your Market, o mercado autônomo."];
let currentTextIndex = 0;

function changeText() {
  // Pega o texto atual
  const currentText = texts[currentTextIndex];

  // Define o novo texto
  textElement.textContent = currentText;

  // Aumenta o índice do texto
  currentTextIndex = (currentTextIndex + 1) % texts.length;

  // Chama a função novamente após um intervalo
  setTimeout(changeText, 2000);
}

// Inicia a mudança de texto
changeText();

const backToTopButton = document.querySelector('.back-to-top')

const backToTop = () => {
 if (window.scrollY >= 100) {
backToTopButton.classList.add('show')
 } else {
backToTopButton.classList.remove('show')
 }
}
function scrollToTop() {
    // função de voltar ao topo
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

window.addEventListener('scroll', function () {
 backToTop()
})