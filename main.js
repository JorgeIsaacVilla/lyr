const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetailCloseIncon = document.querySelector(".product-detail-close");

const menuCarritoICon = document.querySelector(".navbar-shopping-cart");
const productDetailContainer = document.querySelector("#productDetail")

const cardsContainer = document.querySelector(".cards-container");


const todos = document.querySelector("#todos");
const bicicletas = document.querySelector("#bicicletas");
const accesorios = document.querySelector("#accesorios");
const vehiculos = document.querySelector("#vehiculos");
const ejercicio = document.querySelector("#ejercicio");
const ropa = document.querySelector("#ropa");


const todosMobile = document.querySelector("#todos-mobile");
const bicicletasMobile = document.querySelector("#bicicletas-mobile");
const accesoriosMobile = document.querySelector("#accesorios-mobile");
const vehiculosMobile = document.querySelector("#vehiculos-mobile");
const ejercicioMobile = document.querySelector("#ejercicio-mobile");
const ropaMobile = document.querySelector("#ropa-mobile");


menuHamIcon.addEventListener("click", toggleMobileMenu );
productDetailCloseIncon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if(!isAsideClosed){
        shoppingCartContainer.classList.toggle("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
    
    if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

    if(!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside () {// ya saque el id, solo falta que el elemento se imprima en la seccion con los valores correspondientes.


    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");


    const productCards = document.querySelectorAll(".product-card");
    productCards.forEach(card => {
        card.addEventListener("click", () => {
          const productId = card.getAttribute("data-product-id");
          openProductDetailAside(productId);
        });
      });
      
      function openProductDetailAside(productId) {
        console.log("ID del producto:", productId); // obtengo el ID del producto
      }

}


function closeProductDetailAside () {
    productDetailContainer.classList.add("inactive");
}

const productList = [];
    productList.push({
        id: "a001",
        name: "Argollas trenzado",
        price: 105000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a001.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a002",
        name: "Argollas Aura",
        price: 98000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a002.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a003",
        name: "Argollas Aro Pleno",
        price: 78000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a003.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a004",
        name: "Argoya de Corazón",
        price: 69000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a004.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a005",
        name: "Argoya de Girasol",
        price: 63000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a005.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a006",
        name: "Argoyas Fe Brillante",
        price: 59000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a006.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a007",
        name: "Argoyas Caracola",
        price: 83000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a007.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a008",
        name: "Argoyas Lisas",
        price: 98000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a008.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a009",
        name: "Argoyas Media Luna",
        price: 79000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a009.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a010",
        name: "Argoya GeoLuz",
        price: 61000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a010.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a011",
        name: "Argoya huggie",
        price: 105000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a011.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a012",
        name: "Argoya twist hoop",
        price: 98000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a012.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a013",
        name: "Argollas Luna Serena.",
        price: 48000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a013.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a014",
        name: "Argollas chunky twist",
        price: 178000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a014.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a015",
        name: "Argollas media caña",
        price: 78000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a015.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a0016",
        name: "Argolla huggie cuadrada",
        price: 75000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a0016.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a017",
        name: "Argollas Aurora Mini",
        price: 35000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a017.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a018",
        name: "Argollas Media Luna Ancha",
        price: 98000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a018.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a019",
        name: "Argollas clásica redonda",
        price: 78000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a019.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a020",
        name: "Argollas Espiral",
        price: 65000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a020.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a021",
        name: "Aretes Rubí Imperial",
        price: 280000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a021.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a022",
        name: "Argollas corazón abstracto",
        price: 99000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a022.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a023",
        name: "Aretes Eclipse Nocturno",
        price: 280000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a023.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a024",
        name: "Aretes Gota",
        price: 63000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a024.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a025",
        name: "Argollas Luna Serena Mini",
        price: 79000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a025.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a026",
        name: "Argollas Cristal de Hielo",
        price: 64000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a026.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a027",
        name: "Argoya de twist",
        price: 64000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a027.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a028",
        name: "Topo arete estrella",
        price: 30000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a028.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a029",
        name: "Topo arete libélula",
        price: 30000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a029.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a030",
        name: "Topo arete corazón",
        price: 30000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a030.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a031",
        name: "Topo arete diamantado corazón",
        price: 30000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a031.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a032",
        name: "Topo arete flor",
        price: 30000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a032.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a033",
        name: "Topo arete cruz",
        price: 30000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a033.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a034",
        name: "Topo arete flor",
        price: 30000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a034.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a035",
        name: "Topo arete elefante",
        price: 30000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a035.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a036",
        name: "Arete piolín",
        price: 30000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a036.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a037",
        name: "Arete corazón",
        price: 30000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a037.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a038",
        name: "Arete elefante",
        price: 45000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a038.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a039",
        name: "Arete infinito",
        price: 30000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a039.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a040",
        name: "Topo arete 15 años",
        price: 45000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a040.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a041",
        name: "Topo balín pequeño",
        price: 30000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a041.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a042",
        name: "Topo arete corazón",
        price: 30000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a042.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a043",
        name: "Topo arete Rolex",
        price: 30000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a043.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a044",
        name: "Topo arete gucccy",
        price: 30000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a044.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a045",
        name: "Topo arete unicornio",
        price: 45000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a045.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a046",
        name: "Topo arete balin mediano",
        price: 30000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a046.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a047",
        name: "Topo arete corazón",
        price: 30000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a047.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a048",
        name: "Topo arete infinito",
        price: 30000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a048.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a049",
        name: "Topo arete alas",
        price: 35000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a049.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a050",
        name: "Topo balín grande",
        price: 80000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a050.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a051",
        name: "Topo muñeca",
        price: 75000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a051.jpg",
        type: "Aretes",
    });

    productList.push({
        id: "a052",
        name: "Aretes Prisma Real",
        price: 160000,
        descri: "Aretes de alta calidad, diseños únicos para cualquier ocasión.",
        image: "./src/aretes/a052.jpg",
        type: "Aretes",
    });

function renderProducts(arr){

    for (product of arr) {
        /*
        div class="product-card" data-product-id="1">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt=">
          </figure>
        </div>
      </div>
        */
      const productCard =  document.createElement("div"); /*para crear un div con la clase product-card */
      productCard.classList.add("product-card"); /*esta liena es para agregarle la class="product-card creada en la anterior linea" */
      productCard.setAttribute("data-product-id", product.id);/*Asignar el atributo data-product-id al elemento */

      

      const productImg = document.createElement("img");
      productImg.setAttribute("src", product.image);
      productImg.addEventListener("click", openProductDetailAside);

      const productInfo=  document.createElement("div"); /*para crear un div con la clase productinfo */
      productInfo.classList.add("product-info"); /*esta liena es para agregarle la class="product-info creada en la anterior linea" */

      const productInfoDiv =  document.createElement("div"); /*para crear un div con la clase product-info-div */

      const productPrice = document.createElement("p");
      productPrice.innerText = "$"+ product.price;
      const productName = document.createElement("p");
      productName.innerText = product.name;

      productInfoDiv.appendChild(productPrice);/*Esto es para decirle al algoritmo que meta  productPrice dentro de productInfoDiv */
      productInfoDiv.appendChild(productName);/*Esto es para decirle al algoritmo que meta  productName dentro de productInfoDiv */

      const productInfoFigure = document.createElement("figure");
      const productImgCart = document.createElement("figure");
      productImgCart.setAttribute("src", "./icons/bt_add_to_card.svg");
      
      productInfoFigure.appendChild(productImgCart); /* esto es para decirle al algoritmo que meta productImgCart dentro de productInfoFigure*/

      productInfo.appendChild(productInfoDiv); /*Esto es para decirle al algoritmo que meta  productInfoDiv dentro de productInfo */
      productInfo.appendChild(productInfoFigure);/*Esto es para decirle al algoritmo que meta  productInfoFigure dentro de productInfo */

      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);

      cardsContainer.appendChild(productCard);
    }
}

/*para filtrar (inicio) */

ropa.addEventListener("click", filtrarRopa);
ropaMobile.addEventListener("click", filtrarRopa);

function filtrarRopa(){
    const filteredProducts = productList.filter(product => product.type === "ropa");
    
    console.log(filteredProducts);
    cardsContainer.innerHTML=""
    renderProducts(filteredProducts);
}


accesorios.addEventListener("click", filtrarAccesorios);
accesoriosMobile.addEventListener("click", filtrarAccesorios);

function filtrarAccesorios(){
    const filteredProducts = productList.filter(product => product.type === "accesorios");
    
    console.log(filteredProducts);
    cardsContainer.innerHTML=""
    renderProducts(filteredProducts);
}


bicicletas.addEventListener("click", filtrarBicicletas);
bicicletasMobile.addEventListener("click", filtrarBicicletas);

function filtrarBicicletas(){
    const filteredProducts = productList.filter(product => product.type === "bicicletas");
    
    console.log(filteredProducts);
    cardsContainer.innerHTML=""
    renderProducts(filteredProducts);
}


vehiculos.addEventListener("click", filtrarVehiculos);
vehiculosMobile.addEventListener("click", filtrarVehiculos);

function filtrarVehiculos(){
    const filteredProducts = productList.filter(product => product.type === "vehiculos");
    
    console.log(filteredProducts);
    cardsContainer.innerHTML=""
    renderProducts(filteredProducts);
}


ejercicio.addEventListener("click", filtrarEjercicio);
ejercicioMobile.addEventListener("click", filtrarEjercicio);

function filtrarEjercicio(){
    const filteredProducts = productList.filter(product => product.type === "ejercicio");
    
    console.log(filteredProducts);
    cardsContainer.innerHTML=""
    renderProducts(filteredProducts);
}

/*para filtrar (fin) */
renderProducts(productList);
