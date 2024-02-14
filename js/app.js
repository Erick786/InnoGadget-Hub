let darkModeToggle = document.getElementById("dark-mode-toggle");
let body = document.body
let navbar = document.getElementById("navbar");
let isDarkMode = localStorage.getItem("darkMode");
let produtos = document.getElementById("grupo_cards")

if(isDarkMode === "true"){
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () =>{
  isDarkMode = !isDarkMode;
  if(isDarkMode){
    enableDarkMode();
  }else{
    disableDarkMode();
  }
  localStorage.setItem("darkMode", isDarkMode);
  //body.classList.toggle("dark-mode")
});

function enableDarkMode(){
  body.classList.add("dark-mode");
  navbar.classList.add("dark-navbar");
  
  darkModeToggle.textContent = "Modo Claro";
  produtos.classList.add("dark-cards");
}
function disableDarkMode(){
  body.classList.remove("dark-mode");
  navbar.classList.remove("dark-navbar")
  darkModeToggle.textContent = "Modo Escuro";
  produtos.classList.remove("dark-cards");
}

let cards = [
    {
      id: 1,      
      nome: "Smartphone Motorola Moto G14",
      descricao: "Grafite 128GB, 4GB RAM, Tela de 6.5", 
      imagem: "img/1g.avif"
    },
    {
      id: 2,
      nome: "Apple iPhone 14 Pro",
      descricao: " 512GB Roxo-profundo",
      imagem: "img/iphone.avif"
    },
    {
      id: 3,
      nome: "Smartwatch",
      descricao: "Haiz Smartwatch Relógio Inteligente IP67 44mm My Watch I Fit PRETO HZ-ZL02D",
      imagem: "img/smartwatch.jpg"
    },
    {
        id: 4,
        nome: "Tablet",
        descricao: "Tablet Samsung Galaxy Tab S8+ com Caneta 12",
        imagem: "img/tablet.webp"
    },
    {
        id: 5,
        nome: "Tablet infantil",
        descricao: "Tablet Infantil 47T 7 pol 64GB Android 13 4GB RAM",
        imagem: "img/tabletin.webp"
      },
      {
        id: 6,
        nome: "Notebook",
        descricao: "Notebook Lenovo AMD Ryzen 5-7520U 8GB 256GB SSD Tela HD 15.6 Linux Ideapad",
        imagem: "img/notbook.avif"
      },
      {
        id: 7,
        nome: "Pc Computador Gamer",
        descricao: "Pc Computador Gamer Completo I5 8GB SSD 240GB Placa",
        imagem: "img/pcgamer.avif"
      },
      {
        id: 8,
        nome: "Console Playstation 5 Sony",
        descricao: "Console Playstation 5 Sony, SSD 825GB, Controle sem fio DualSense, Edição Digital, Branco - 1214B",
        imagem: "img/console.jpg"
      },
      {
        id: 9,
        nome: "Controle Sony DualSense PS5",
        descricao: "Controle Sony DualSense PS5, Sem Fio, Branco - 3005767",
        imagem: "img/controle.jpg"
      },
      {
        id: 10,
        nome: "Fone de Ouvido AKG K92",
        descricao: "Fone de Ouvido AKG K92, Profissional, Preto e Dourado - 64726",
        imagem: "img/fone.jpg"
      },
      
      {
        id: 11,
        nome: "Óculos 3D",
        descricao : "Óculos 3D Realidade Virtual Warrior-JS080",
        imagem: "img/oculos_.jpg"
      },
      
      {
        id: 12,
        nome: "Xbox Series S",
        descricao: "Xbox Series S 2020 Nova Geracao 512GB SSD 1 Controle Branco",
        imagem: "img/Xbox.avif"
      },
      
];



for (let i=0; i < cards.length; i++) {

  let nome = cards[i].nome ? cards[i].nome : "Nome não disponivel";
  let descricao = cards[i].descricao ? cards[i].descricao: "Descrição não disponível"
    produtos.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${cards[i].imagem}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${cards[i].nome}</h5>
      <p class="card-text">${cards[i].descricao}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    `
}