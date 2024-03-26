const textElement = document.getElementById("transition-text");
const texts = [
    "Bem vindo(a) ao Your Market.",
    "Acesse nosso Whatsapp abaixo.",
    "24h por dia, venha conhecer.",
    "Your Market, o mercado do seu lar.",
    "Seu condomínio pode ser o próximo.",
    "Tenha tudo a um elevador de distância.",
    "Quer conhecer mais? Clique abaixo",
];
let currentTextIndex = 0;

function changeText() {
    // change actual text
    const currentText = texts[currentTextIndex];

    // new txt changing
    textElement.textContent = currentText;

    // up ind array
    currentTextIndex = (currentTextIndex + 1) % texts.length;

    // get function after timer
    setTimeout(changeText, 2000);
}

//start change text
changeText();

const backToTopButton = document.querySelector(".back-to-top");

const backToTop = () => {
    if (window.scrollY >= 100) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
};
function scrollToTop() {
    // back to top fucntion
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

window.addEventListener("scroll", function () {
    backToTop();
});
