/* declarando o vetor */
const pizza = [ 
    {
        id:1,
        nome: "Pizza de Calabresa",
        categoria: "salgada",
        preco: 58.00,
        img:"./assets/img/calabresa.jpg",
        descricao: 'Calabresa fatiada com cebola e mussarela',
    },
    {
        id:2,
        nome: "Pizza Cinco Queijos",
        categoria: "salgada",
        preco: 65.50,
        img:"./assets/img/queijo.jpg",
        descricao: 'Mussarela, gorgonzola, catupiry, provolone e parmesão',
    },
    {
        id:3,
        nome: "Pizza de Chocolate com Morangos",
        categoria: "doce",
        preco: 65.50,
        img:"./assets/img/chocolate.jpg",
        descricao: 'Chocolate (garoto) com granulado e morangos',
    },
    {
        id:4,
        nome: "Pizza de Banana",
        categoria: "doce",
        preco: 55.00,
        img:"./assets/img/banana.jpg",
        descricao: 'Banana, açúcar e canela',
    },
    {
        id:5,
        nome: "Pizza de Brócolis",
        categoria: "salgada",
        preco: 55.50,
        img: "./assets/img/brocolis.jpg",
        descricao: 'Brócolis coberto com mussarela e bacon',
    },
    {
        id:6,
        nome: "Pizza de Frango com Catupiry",
        categoria: "salgada",
        preco: 60.00,
        img:"./assets/img/catupiry.jpg",
        descricao: 'Peito de frango desfiado, coberto com catupiry e ervilha ',
    },
    {
        id:7,
        nome: "Pizza de Churros",
        categoria: "doce",
        preco: 45.50,
        img:"./assets/img/churros.jpg",
        descricao: 'Doce de leite com açucar e canela',
    },
    {
        id:8,
        nome: "Pizza de Chocolate com Coco",
        categoria: "doce",
        preco: 45.50,
        img:"./assets/img/chocolate-coco.jpg",
        descricao: 'Chocolate com coco ralado e cerejas',
    },
    {
        id:9,
        nome: "Pizza de Doce de Leite",
        categoria: "doce",
        preco: 45.50,
        img:"./assets/img/doce-de-leite.jpg",
        descricao: 'Doce de leite',
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
        </div> </div>`;
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
