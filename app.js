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
const botoesMenu = document.querySelector(".botoes-menu");
//atribuindo à const botoesMenu a classe botoes-menu


//carregando os itens do cardapio
window.addEventListener("DOMContentLoaded", function(){
/* adicionando dois eventos no carregamento do script 
    displayMenuItems(pizza) -> chamando a apresentação do cardápio passando a lista das pizzas
    displayMenuButtons() -> chamando o  apresentação dos botoes

*/
    displayMenuItems(pizza);
    displayMenuButtons();
    displayModalEscolha();
});

function displayMenuItems(menuItems){
    /* apresentação do cardápio */
    let displayMenu = menuItems.map(function(item){

        return `<div class="pizzas"> 
            <img src=${item.img} class="photo" alt=${item.nome} />
            <div class="info-pizza">
                <header>
                    <h4> ${item.nome} </h4>
                    <h4 class="preco">R$${item.preco.toFixed(2)}</h4>
                </header>
                <p class="item-text">${item.descricao}</p>
                <button class="btn-escolher" type="button" data-id=${item.id}>Escolher pizza</>
            </div>
        </div>`;
    });

    displayMenu = displayMenu.join(""); //une a apresentação das pizzas do cardápio

    secaoCentro.innerHTML= displayMenu;  //permite a apresentação do displayMenu no HTML

    //quando a pizza for clicada
    secaoCentro.querySelector('.pizzas button').addEventListener('click', escolherPizza)
    
};

//apresentação dos botões do menu
function displayMenuButtons(){ 
    const categorias= pizza.reduce( function(value, item){
        //se a categoria não estiver inclusa, vai ser incluida
            if(!value.includes(item.categoria)){ 
                value.push(item.categoria);
            }
            return value; //se estiver, então vai apresentá-la
        },
        ['todas'] //vai passar o todas para inicializar
    );
    const categoriaBtns = categorias.map(function(categoria){
            return  `<button class="botao" type="button" data-id=${categoria}>${categoria}</button>`;
        }).join(""); //atribuindo as categorias na constante categoriaBtns

    botoesMenu.innerHTML=categoriaBtns; //apresentação dos botoes no HTML de acordo com as categorias na lista
    
    const botaocardapio = botoesMenu.querySelectorAll(".botao");

    //filtrando as pizzas 
    botaocardapio.forEach(function(btn){ //pra cada botao vai ser adicionado um evento click
        btn.addEventListener("click", function(e){
            const categoria = e.currentTarget.dataset.id; //vai pegar o botao pelo id
            const menuCategoria = pizza.filter(function(menuItem){
                if (menuItem.categoria === categoria){ //a pizza será filtrada pela categoria
                    return menuItem; //se for irgual a categoria selecionada então retorna ela
                }
            });
            if (categoria === "todas"){ //se a categoria for igual 'todas' então chama o displauMenuItems passando toda a lista de pizzas
                displayMenuItems(pizza);
            }
            else{
                displayMenuItems(menuCategoria); //senão, se for diferente de 'todas' então chama o displayMenuItems passando a categoria
            }
        });
    });
};

function escolherPizza(e){
    e.preventDefault()
    console.log('Clicou na pizza')

    document.querySelector('.pizzaModal').style.display = 'flex'
};
