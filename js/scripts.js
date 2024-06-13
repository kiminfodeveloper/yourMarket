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

function generatedNameCard() {
    let name = document.getElementById("creditCardName").value;
    document.getElementById("nameFinally").textContent = name;
    document.getElementById("messageCreditCardApprove").style.display = "block";
}

// modal more information missions and values
// Pega o modal
var modal = document.getElementById("myModal");

// Pega o botão que abre o modal
var btn = document.getElementById("modalMissionValues");

// Pega o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
btn.onclick = function () {
    modal.style.display = "block";
};

// Quando o usuário clicar em <span> (x), fecha o modal
span.onclick = function () {
    modal.style.display = "none";
};

// Quando o usuário clicar fora do modal, fecha ele
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// modal cookies
// Verifica se a escolha já foi salva no cache do navegador
window.onload = function () {
    if (localStorage.getItem("cookieConsent")) {
        document.getElementById("cookieModal").style.display = "none";
    } else {
        document.getElementById("cookieModal").style.display = "block";
    }
};

// Função para aceitar todos os cookies
document.getElementById("acceptAllCookies").onclick = function () {
    localStorage.setItem("cookieConsent", "all");
    document.getElementById("cookieModal").style.display = "none";
};

// Função para aceitar apenas cookies essenciais
document.getElementById("acceptEssentialCookies").onclick = function () {
    localStorage.setItem("cookieConsent", "essential");
    document.getElementById("cookieModal").style.display = "none";
};

// Função para recusar cookies
document.getElementById("declineCookies").onclick = function () {
    localStorage.setItem("cookieConsent", "none");
    document.getElementById("cookieModal").style.display = "none";
};

// policies and privacy

// Pega o modal
var ppModal = document.getElementById("ppPrivacyPolicyModal");

// Pega o botão que abre o modal
var ppBtn = document.getElementById("ppPrivacyPolicyBtn");

// Pega o elemento <span> que fecha o modal
var ppSpan = document.getElementsByClassName("pp-close")[0];

// Quando o usuário clicar no botão, abre o modal
ppBtn.onclick = function () {
    ppModal.style.display = "block";
};

// Quando o usuário clicar em <span> (x), fecha o modal
ppSpan.onclick = function () {
    ppModal.style.display = "none";
};

// Quando o usuário clicar fora do modal, fecha ele
window.onclick = function (event) {
    if (event.target == ppModal) {
        ppModal.style.display = "none";
    }
};
document.addEventListener("DOMContentLoaded", function () {
    // Pega o link que abre o modal
    var ppLink = document.getElementById("ppPrivacyPolicyLink");

    // Pega o modal
    var ppModal = document.getElementById("ppPrivacyPolicyModal");

    // Quando o usuário clicar no link, abre o modal
    ppLink.onclick = function (event) {
        event.preventDefault(); // Impede que o link navegue para o href
        ppModal.style.display = "block";
    };
});
