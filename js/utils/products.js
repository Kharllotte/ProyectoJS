const products = [
    {
        title: "iPhone 14",
        img: "https://cdn1.coppel.com/images/catalog/pm/2907413-1.jpg",
        price: 4949000
    },
    {
        title: "iPhone 13",
        img: "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-6206281_823x.jpg?v=1661520210",
        price: 4289000
    },
    {
        title: "iPhone 12",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71hIfcIPyxS._SL1500_.jpg",
        price: 3669000
    },
    {
        title: "Galaxy S22",
        img: "https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F422%2FMARKETPLACE%20INTERNACIONAL%2FUF06174_1%20.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=49668a50818dddd1878a1609163f9f0b",
        price: 3879000
    },
    {
        title: "Galaxy S21",
        img: "https://exitocol.vtexassets.com/arquivos/ids/7119542/celular-samsung-galaxy-s21-ultra-256gb-108mp-12ram-5g-negro.jpg?v=637517944341930000",
        price: 3669000
    },
    {
        title: "Galaxy S20 FE",
        img: "https://i0.wp.com/conectamos.shop/wp-content/uploads/2021/08/samsung_galaxy_s20_fe_g780_6gb_128gb_ds_03_verde_ad_l.jpg?fit=800%2C800&ssl=1G$",
        price: 2699000
    },
]

const htmlTest = document.getElementById("container-products");
let html = "";

products.forEach(product => {
    html += `
        <div class="col">
            <div class="info-product card h-100 text-center">
                <img src="${product.img}" class="card-img-top" style="margin: 45px 0px;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="price card-text">${formatPriceUsd(product.price)}</p>
                    <button class="btn-buy btn btn-primary">Comprar ahora</button>
                    <button class="btn-add-card btn btn-outline-primary"> Añadir al carrito </button>
                </div>
            </div>
        </div>
    `
})

function formatPriceUsd(price) {
    return price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
}

htmlTest.innerHTML = html;

//Función para añadir productos al carrito de compra 
const addProduct1 = (infoProduct) => {
    const products = allProducts.map(product => {
        if (product.title === infoProduct.title) {
            product.quantity++;
            return product
        } else {
            return product
        }
    })
    allProducts = [...products]
}