const shopContent = document.getElementById("shopContent");

const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const productos = [
    {
        id: 1,
        nombre: "Iron Man",
        precio: 5500,
        img: "./img/14032.jpg.crdownload",
    },
    {
        id: 2,
        nombre: "Hulk",
        precio: 5500,
        img: "./img/hulk.jpg",
    },
    {
        id: 3,
        nombre: "Thor",
        precio: 5500,
        img: "./img/thor.jpg",
    },
    {
        id: 4,
        nombre: "Cap. America",
        precio: 5500,
        img: "./img/capitanamerica.jpg",
    },
    {
        id: 5,
        nombre: "Hawkeye",
        precio: 5100,
        img: "./img/hawkeye.jpg",
    },
    {
        id: 6,
        nombre: "Thanos",
        precio: 5400,
        img: "./img/thanos.jpg",
    },
    {
        id: 7,
        nombre: "Vision",
        precio: 5200,
        img: "./img/vision.jpg",
    },
    {
        id: 8,
        nombre: "Black Widow",
        precio: 5400,
        img: "./img/blackwidow.jpg",
    },
    {
        id: 9,
        nombre: "Wanda",
        precio: 5400,
        img: "./img/wanda.jpg",
    },

]


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">$ ${product.precio}</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar"

    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        saveLocal();
    });
});


verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h3 class="modal-header-title">Carrito.</h3>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h3");
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });


    modalHeader.append(modalButton)


    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>$ ${product.precio}</p>
`;

        modalContainer.append(carritoContent);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0)


    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `total a pagar:$ ${total}`;
    modalContainer.append(totalBuying)

});


// local storage


// set item
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};



