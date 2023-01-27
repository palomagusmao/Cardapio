/* declarando o vetor */
const pizza = [ 
    {
        id:1,
        nome: "Pizza de Calabresa",
        categoria: "salgada",
        preco: 45.50,
        img:"./assets/img/calabresa.jpg",
        descricao: 'hhsuhshsasshsnashnasn',
    },
    {
        id:2,
        nome: "Pizza de Queijo",
        categoria: "salgada",
        preco: 45.50,
        img:"./assets/img/queijo.jpg",
        descricao: 'hhsuhshsasshsnashnasn',
    },
    {
        id:3,
        nome: "Pizza de Chocolate",
        categoria: "doce",
        preco: 45.50,
        img:"./assets/img/chocolate.jpg",
        descricao: 'hhsuhshsasshsnashnasn',
    },
    {
        id:4,
        nome: "Pizza de Banana",
        categoria: "doce",
        preco: 45.50,
        img:"./assets/img/banana.jpg",
        descricao: 'hhsuhshsasshsnashnasn',
    },

];

const secaoCentro = document.querySelector(".secao-centro");
/* atribuindo os itens da seção do centro na variavel secaoCentro */
const container = document.querySelector(".botoes-menu");



//load items
window.addEventListener("DOMContentLoaded", function(){
/* adicionando um evento no carregamento do script */
    displayMenuItems(pizza);
    displayMenuButtons();
    
});

function displayMenuItems(menuItems){
    /* apresentação do cardápio */
    let displayMenu = menuItems.map(function(item){

        return `<div class="pizzas"> 
        <img src=${item.img} class="photo" alt=${item.nome} />
        <div class="info-pizza">
            <header>
                <h4> ${item.nome} </h4>
                <h4 class="preco">${item.preco}</h4>
            </header>
            <p class="item-text">${item.descricao}</p>
        </div>`;
    });
    displayMenu = displayMenu.join("");

    secaoCentro.innerHTML= displayMenu; 
};

function displayMenuButtons(){
    const categorias= pizza.reduce(
        function(valor, item){
            if(!valor.includes(item.categoria)){
                valor.push(item.categoria);
            }
            return valor;
        },
        ['todas']
    );
    const categoriaBtns = categorias.map(function(categoria){
            return  `<button class="botao" type="button" data-id=${categoria}>${categoria}</button>`;
        }).join("");
    container.innerHTML=categoriaBtns;
    const botaocardapio = container.querySelectorAll(".botao");

    //filter items
    botaocardapio.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const categoria = e.currentTarget.dataset.id;
            const menuCategoria = pizza.filter(function(menuItem){
                if (menuItem.categoria === categoria){
                    return menuItem;
                }
            });
            if (categoria === "todas"){
                displayMenuItems(pizza);
            }
            else{
                displayMenuItems(menuCategoria);
            }
        });
    });
};
