const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

const cartInfo = document.querySelector('.cart-product')
// Obtener todos los elementos con la clase "card-title"
let cartTitle = document.querySelectorAll(".card-title");
const rowProduct = document.querySelector('.row-product')

//Lista de los contenedores de productos
const productsList = document.querySelector('.container-items')

//Variable de arreglos de productos
let allProducts = []

const valorTotal = document.querySelector('.total-pagar')
const countProducts = document.querySelector ('#contador-productos')

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

const buttonBuyList = document.querySelectorAll('.btn-buy');

const buttonSearch = document.querySelector('.btn-search');


productsList.addEventListener('click', e => {

    if(e.target.classList.contains('btn-add-card')){
        const product = e.target.parentElement

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h5').textContent,
            price: product.querySelector('p').textContent,
        };

        const exist = allProducts.some(
            product => product.title === infoProduct.title
        );

        if (exist){
            const products = allProducts.map( product => {
                if(product.title === infoProduct.title){
                    product.quantity++;
                    return product
                } else {
                    return product
                }
            })
            allProducts = [...products]
        }else{
            allProducts = [...allProducts, infoProduct]
        }

        showHTML();
    }

})

rowProduct.addEventListener('click', e => {
    if(e.target.classList.contains('icon-close')){
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title
        );

        console.log(allProducts)
        showHTML();
    }

})


// Funcion para mostrar HTML

const showHTML = () => {

    // if(!allProducts.length){
    //     containerCartProducts.innerHTML= `
    //         <p class="cart-empty">El carrito está vacío</p>`
            
    // }


    //Limpiar HTML
    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;


    allProducts.forEach(product => {
        const containerProduct = document.createElement('div')
        containerProduct.classList.add('cart-product')

        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        
        `

        rowProduct.append(containerProduct);

        total = total + parseInt(product.quantity*product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;

    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;

};

//Alerta al "comprar ahora"

//forEach
// buttonBuyList.forEach(buttonBuy => {
//     buttonBuy.addEventListener('click', e => {
//         Swal.fire({
//             title: '¡Felicitaciones!',
//             text: 'Compra realizada',
//             icon: 'success',
//             timer: 4000,
//             timerProgressBar: true,
//             buttonsStyling : true,
//             showCloseButton: true,
//             closeButtonAriaLabel: 'cerrar alerta',
//         })
//     })
// })

//for of
for (const buttonBuy of buttonBuyList) {
    buttonBuy.addEventListener('click', e => {
        Swal.fire({
            title: '¡Felicitaciones!',
            text: 'Compra realizada',
            icon: 'success',
            timer: 4000,
            timerProgressBar: true,
            buttonsStyling : true,
            showCloseButton: true,
            closeButtonAriaLabel: 'cerrar alerta',
        })
    })
}


//Buscar si existe el celular
buttonSearch.addEventListener('click', search_product => {

    // Solicitar al usuario que ingrese el celular que busca
    let phone = prompt("Por favor, ingrese el celular que esta buscando:");

    // Iterar sobre los títulos de las tarjetas y verificar si el nombre buscado se encuentra en alguno de ellos
    let encontrado = false;
    for(let i = 0; i < cartTitle.length; i++) {
    if(cartTitle[i].textContent === phone) {
        encontrado = true;
        break;
    }
    }
    
    // Mostrar el resultado en una ventana emergente
    if(encontrado) {
        alert("El celular, " + phone + " se encuentra en una tarjeta.");
        } else {
            alert("El celular, " + phone + " no se encuentra en ninguna tarjeta.");
            }
            
    // if(encontrado) {
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Celular encontrado',
    //       text: 'El celular, ' + phone + ' se encuentra en una tarjeta.',
          
    //     });
    //   } else {
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Celular no encontrado',
    //       text: 'El celular, ' + phone + ' no se encuentra en ninguna tarjeta.'
    //     });
    //   }

})