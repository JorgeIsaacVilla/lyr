const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetailCloseIncon = document.querySelector(".product-detail-close");

const productDetailContainer = document.querySelector("#productDetail");

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

menuHamIcon.addEventListener("click", toggleMobileMenu);

productDetailCloseIncon.addEventListener("click", closeProductDetailAside);

function toggleMobileMenu() {
  closeProductDetailAside();
  mobileMenu.classList.toggle("inactive");
}

function openProductDetailAside(productId) {
  const product = productList.find(p => p.id === productId);
  if (!product) return;

  productDetailContainer.classList.remove("inactive");

  const content = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product-info">
      <p>$${product.price}</p>
      <p>${product.name}</p>
      <p>${product.descri}</p>
      <button class="primary-button add-to-cart-button">
        Add to cart
      </button>
    </div>
  `;

  document.getElementById("productDetailContent").innerHTML = content;
}


function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
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


function renderProducts(arr) {
  cardsContainer.innerHTML = ""; // Limpia antes de renderizar

  for (const product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.setAttribute("data-product-id", product.id);

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfo.appendChild(productInfoDiv);

    // 🔘 Crear botón real
    const askButton = document.createElement("button");
    askButton.classList.add("ask-button");
    askButton.innerText = "Pregunta por WhatsApp";

    askButton.addEventListener("click", () => {
      window.location.href = `https://wa.me/573144537830?text=Hola, quiero más información sobre el producto: ${product.name}`;
    });

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    productCard.appendChild(askButton);

    cardsContainer.appendChild(productCard);
  }
}




/*Crear categorías he integrarlas en versión movile y desk de manera dinamica (inicio) */

//id:"en minuscula", label:"En mayuscula (Esto e slo que saldrá en el HTML)"
const categorias = [
  { id: "todos", label: "Todos" },
  { id: "aretes", label: "Aretes" },
  { id: "cadenas", label: "Cadenas" },
  { id: "anillos", label: "Anillos" },
  { id: "dijes", label: "Dijes" },
  { id: "puliceras", label: "Pulceras" },
];

const desktopCategoriesContainer = document.getElementById("desktop-categories");
const mobileCategoriesContainer = document.getElementById("mobile-categories");

categorias.forEach(categoria => {
  // Crear elemento para desktop
  const liDesktop = document.createElement("li");
  const aDesktop = document.createElement("a");
  aDesktop.id = categoria.id;
  aDesktop.textContent = categoria.label;
  aDesktop.href = "#";
  liDesktop.appendChild(aDesktop);
  desktopCategoriesContainer.appendChild(liDesktop);

  // Crear elemento para mobile
  const liMobile = document.createElement("li");
  const aMobile = document.createElement("a");
  aMobile.id = `${categoria.id}-mobile`;
  aMobile.textContent = categoria.label;
  aMobile.href = "#";
  liMobile.appendChild(aMobile);
  mobileCategoriesContainer.appendChild(liMobile);
});

categorias.forEach(categoria => {
  const desktopLink = document.getElementById(categoria.id);
  const mobileLink = document.getElementById(`${categoria.id}-mobile`);

  const filtrarCategoria = () => {
    const filteredProducts = categoria.id === "todos"
      ? productList
      : productList.filter(product => product.type.toLowerCase() === categoria.id);

    cardsContainer.innerHTML = "";
    renderProducts(filteredProducts);
  };

  if (desktopLink) desktopLink.addEventListener("click", filtrarCategoria);
  if (mobileLink) mobileLink.addEventListener("click", filtrarCategoria);
});
/*Crear categorías he integrarlas en versión movile y desk de manera dinamica (inicio) */

/*para filtrar (inicio) */

categorias.forEach(categoria => {
  const desktopLink = document.getElementById(categoria);
  const mobileLink = document.getElementById(`${categoria}-mobile`);

  const filtrarCategoria = () => {
    const filteredProducts = categoria === "todos"
      ? productList
      : productList.filter(product => product.type.toLowerCase() === categoria);

    cardsContainer.innerHTML = "";
    renderProducts(filteredProducts);
  };

  if (desktopLink) desktopLink.addEventListener("click", filtrarCategoria);
  if (mobileLink) mobileLink.addEventListener("click", filtrarCategoria);
});

/*para filtrar (fin) */


// Esta parte DEBE ejecutarse después de renderProducts()
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    if (e.target.closest(".product-card")) {
      const card = e.target.closest(".product-card");
      const productId = card.getAttribute("data-product-id");
      openProductDetailAside(productId);
    }
  });
});

renderProducts(productList);
