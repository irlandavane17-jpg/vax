const products = [
  { id: "dobok-keychain-red", name: "Llavero Dobok Cinta Negra", category: "llaveros", categoryLabel: "Llaveros & pines", price: 149, image: "/images/llavero-dobok-rojo.jpg", note: "Mini uniforme" },
  { id: "dobok-keychain-blue", name: "Llavero Dobok Cinta Roja", category: "llaveros", categoryLabel: "Llaveros & pines", price: 149, image: "/images/llavero-dobok-azul.jpg", note: "Mini uniforme" },
  { id: "protector-keychain", name: "Llavero Petito", category: "llaveros", categoryLabel: "Llaveros & pines", price: 120, image: "/images/llavero-peto.jpg", note: "Hecho para acompañarte" },
  { id: "helmet-keychain", name: "Llavero Casquito", category: "llaveros", categoryLabel: "Llaveros & pines", price: 120, image: "/images/llavero-casco.jpg", note: "Hecho para acompañarte" },
  { id: "fighter-keychain", name: "Llavero Competidor", category: "llaveros", categoryLabel: "Llaveros & pines", price: 139, image: "/images/llavero-competidor.jpg", note: "Patada en acción" },
  { id: "belt-keychain", name: "Llavero Cinta Negra", category: "llaveros", categoryLabel: "Llaveros & pines", price: 99, image: "/images/llavero-cinta-negra.jpg", badge: "REGALO IDEAL", note: "Un símbolo de tu camino" },
  { id: "glove-keychain", name: "Llavero Protector de Pie Negro", category: "llaveros", categoryLabel: "Llaveros & pines", price: 120, image: "/images/llavero-protector-pie-negro.jpg", note: "Hecho para acompañarte" },
  { id: "red-foot-guard-keychain", name: "Llavero Protector de Pie Rojo", category: "llaveros", categoryLabel: "Llaveros & pines", price: 120, image: "/images/llavero-protector-pie-rojo.jpg", note: "Hecho para acompañarte" },
  { id: "crocs-kick-girl", name: "Charm Crocs Kick Like a Girl", category: "llaveros", categoryLabel: "Llaveros & pines", price: 99, image: "/images/charm-kick-like-girl.jpg", note: "Accesorio para Crocs" },
  { id: "crocs-sorry", name: "Charm Crocs Sorry, I Have Taekwondo", category: "llaveros", categoryLabel: "Llaveros & pines", price: 99, image: "/images/charm-sorry-taekwondo.jpg", note: "Accesorio para Crocs" },
  { id: "crocs-repeat", name: "Charm Crocs Taekwondo Repeat", category: "llaveros", categoryLabel: "Llaveros & pines", price: 99, image: "/images/charm-taekwondo-repeat.jpg", note: "Accesorio para Crocs" },
  { id: "crocs-belt-black", name: "Charm Crocs Until the Belt Turns Black", category: "llaveros", categoryLabel: "Llaveros & pines", price: 99, image: "/images/charm-belt-turns-black.jpg", note: "Accesorio para Crocs" },
  { id: "crocs-smell-feet", name: "Charm Crocs Smell My Feet", category: "llaveros", categoryLabel: "Llaveros & pines", price: 99, image: "/images/charm-smell-feet.jpg", note: "Accesorio para Crocs" },
  { id: "crocs-combat", name: "Charm Crocs Combate", category: "llaveros", categoryLabel: "Llaveros & pines", price: 89, image: "/images/charm-combat.jpg", note: "Accesorio para Crocs" },
  { id: "crocs-kick", name: "Charm Crocs Patada Alta", category: "llaveros", categoryLabel: "Llaveros & pines", price: 89, image: "/images/charm-kick-silhouette.jpg", note: "Accesorio para Crocs" },
  { id: "crocs-black-belt", name: "Charm Crocs Black Belt in Progress", category: "llaveros", categoryLabel: "Llaveros & pines", price: 99, image: "/images/charm-black-belt-progress.jpg", note: "Accesorio para Crocs" },
  { id: "crocs-blue-belt", name: "Charm Crocs Cinta Azul", category: "llaveros", categoryLabel: "Llaveros & pines", price: 79, image: "/images/charm-blue-belt.jpg", note: "Accesorio para Crocs" },
  { id: "crocs-green-belt", name: "Charm Crocs Cinta Verde", category: "llaveros", categoryLabel: "Llaveros & pines", price: 79, image: "/images/charm-green-belt.jpg", note: "Accesorio para Crocs" },
  { id: "crocs-yellow-belt", name: "Charm Crocs Cinta Amarilla", category: "llaveros", categoryLabel: "Llaveros & pines", price: 79, image: "/images/charm-yellow-belt.jpg", note: "Accesorio para Crocs" },
  { id: "crocs-white-belt", name: "Charm Crocs Cinta Blanca", category: "llaveros", categoryLabel: "Llaveros & pines", price: 79, image: "/images/charm-white-belt.jpg", note: "Accesorio para Crocs" },
  { id: "crocs-dna", name: "Charm Crocs Taekwondo en mi ADN", category: "llaveros", categoryLabel: "Llaveros & pines", price: 99, image: "/images/charm-dna.jpg", note: "Accesorio para Crocs" },
  { id: "fighter-necklace", name: "Collar Silueta de Combate Dorado", category: "collares", categoryLabel: "Collares", price: 249, image: "/images/collar-silueta-dorado.jpg", badge: "MÁS VENDIDO", note: "Acabado dorado" },
  { id: "silver-necklace", name: "Collar Silueta de Combate Plateado", category: "collares", categoryLabel: "Collares", price: 229, image: "/images/collar-silueta-plateado.jpg", note: "Acabado plateado" },
  { id: "heart-necklace", name: "Collar Corazón Taekwondo Dorado", category: "collares", categoryLabel: "Collares", price: 269, image: "/images/collar-corazon-dorado.jpg", note: "Un regalo con significado" },
  { id: "silver-heart-necklace", name: "Collar Corazón Taekwondo Plateado", category: "collares", categoryLabel: "Collares", price: 249, image: "/images/collar-corazon-plateado.jpg", note: "Acabado plateado" },
  { id: "dobok-bunny", name: "Conejito Dobok Cinta Negra", category: "peluches", categoryLabel: "Peluches", price: 389, image: "/foto3.jpg", badge: "EDICIÓN ESPECIAL", note: "Suave compañero" },
  { id: "belt-display", name: "Exhibidor de Cintas Taekwondo", category: "exhibidores", categoryLabel: "Portacintas & exhibidores", price: 890, image: "/foto7.jpg", badge: "PIEZA DESTACADA", note: "Madera negra grabada" },
  { id: "medal-display", name: "Exhibidor de Medallas Taekwondo", category: "exhibidores", categoryLabel: "Portacintas & exhibidores", price: 1090, image: "/foto4.jpg", note: "Celebra cada logro" },
  { id: "display-torii", name: "Exhibidor Portacintas Torii", category: "exhibidores", categoryLabel: "Portacintas & exhibidores", price: 990, image: "/images/exhibidor-portamedallas-arco.jpg", note: "Diseño inspirado en Japón" },
  { id: "display-dojang", name: "Exhibidor Portacintas Dojang", category: "exhibidores", categoryLabel: "Portacintas & exhibidores", price: 990, image: "/images/exhibidor-portamedallas-recto.jpg", note: "Madera negra grabada" },
  { id: "stitch-pin", name: "Pin Stitch Dobok Rosa", category: "llaveros", categoryLabel: "Llaveros & pines", price: 89, image: "/images/pin-stitch-rosa.jpg", badge: "FAVORITO", note: "Pin coleccionable" },
  { id: "stitch-pin-blue", name: "Pin Stitch Dobok Azul", category: "llaveros", categoryLabel: "Llaveros & pines", price: 89, image: "/images/pin-stitch-azul.jpg", note: "Pin coleccionable" },
  { id: "kitty-pin", name: "Pin Hello Kitty Taekwondo", category: "llaveros", categoryLabel: "Llaveros & pines", price: 89, image: "/images/pin-hello-kitty.jpg", badge: "NUEVO", note: "Pin coleccionable" },
  { id: "mickey-pin", name: "Pin Mickey Dobok", category: "llaveros", categoryLabel: "Llaveros & pines", price: 89, image: "/images/pin-mickey.jpg", note: "Pin coleccionable" },
  { id: "pin-belt-yellow", name: "Pin Cinta Amarilla", category: "llaveros", categoryLabel: "Llaveros & pines", price: 79, image: "/images/pin-cinta-amarilla.jpg", note: "Pin coleccionable" },
  { id: "pin-belt-blue", name: "Pin Cinta Azul", category: "llaveros", categoryLabel: "Llaveros & pines", price: 79, image: "/images/pin-cinta-azul.jpg", note: "Pin coleccionable" },
  { id: "pin-belt-black", name: "Pin Cinta Negra", category: "llaveros", categoryLabel: "Llaveros & pines", price: 79, image: "/images/pin-cinta-negra.jpg", note: "Pin coleccionable" },
];

const storageKey = "vaxsport-cart-v1";
const productGrid = document.querySelector("#product-grid");
const cartDrawer = document.querySelector("#cart-drawer");
const cartOverlay = document.querySelector("#cart-overlay");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const drawerFooter = document.querySelector("#drawer-footer");
const toast = document.querySelector("#toast");
const successDialog = document.querySelector("#success-dialog");

let activeFilter = "todos";
let activeSort = "featured";
let cart = loadCart();
let toastTimeout;

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.filter((item) =>
      item && products.some((product) => product.id === item.id) &&
      Number.isInteger(item.quantity) && item.quantity > 0
    );
  } catch (error) {
    console.error("No se pudo cargar el carrito guardado.", error);
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(cart));
  } catch (error) {
    console.error("No se pudo guardar el carrito.", error);
    showToast("No pudimos guardar tu carrito en este dispositivo.");
  }
}

function formatPrice(price) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(price);
}

function getVisibleProducts() {
  const visible = products.filter((product) => activeFilter === "todos" || product.category === activeFilter);
  if (activeSort === "featured") {
    const featuredOrder = (product) => {
      if (product.image.includes("/pin-")) return 3;
      if (product.category === "llaveros") return 0;
      if (product.category === "collares") return 1;
      return 2;
    };
    visible.sort((a, b) => featuredOrder(a) - featuredOrder(b));
  }
  if (activeSort === "price-asc") visible.sort((a, b) => a.price - b.price);
  if (activeSort === "price-desc") visible.sort((a, b) => b.price - a.price);
  if (activeSort === "name") visible.sort((a, b) => a.name.localeCompare(b.name, "es"));
  return visible;
}

function renderProducts() {
  const visible = getVisibleProducts();
  productGrid.innerHTML = visible.map((product) => `
    <article class="product-card">
      <div class="product-image ${product.image ? "has-photo" : ""}" style="--product-bg: ${product.background || "#f8f5f4"}">
        ${product.badge ? `<span class="product-badge ${product.badge === "NUEVO" ? "badge-pink" : ""}">${product.badge}</span>` : ""}
        ${product.image ? `<img class="product-photo ${product.image.includes("/pin-") ? "pin-photo" : ""}" src="${product.image}" alt="${product.name}" loading="lazy">` : `<span class="product-art" role="img" aria-label="${product.name}">${product.art}</span>`}
        <button class="quick-add" type="button" data-add="${product.id}" aria-label="Agregar ${product.name} al carrito">+</button>
      </div>
      <div class="product-info">
        <p class="product-category">${product.categoryLabel}</p>
        <h3>${product.name}</h3>
        <div class="product-bottom"><span class="product-price">${formatPrice(product.price)}</span><span class="product-note">${product.note}</span></div>
      </div>
    </article>
  `).join("");
  document.querySelector("#empty-products").hidden = visible.length > 0;
  document.querySelectorAll("[data-count]").forEach((counter) => {
    const category = counter.dataset.count;
    const count = category === "todos" ? products.length : products.filter((product) => product.category === category).length;
    counter.textContent = `(${count})`;
  });
}

function renderCart() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return total + product.price * item.quantity;
  }, 0);

  document.querySelector("#cart-count").textContent = count;
  document.querySelector("#drawer-count").textContent = `(${count})`;
  document.querySelector("#cart-subtotal").textContent = formatPrice(subtotal);
  cartEmpty.hidden = cart.length > 0;
  drawerFooter.hidden = cart.length === 0;
  cartItems.innerHTML = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return `
      <article class="cart-item">
        <div class="cart-thumb" style="--product-bg: ${product.background || "#f8f5f4"}" aria-hidden="true">
          ${product.image ? `<img class="cart-photo" src="${product.image}" alt="" loading="lazy">` : product.art}
        </div>
        <div class="cart-item-copy">
          <h3>${product.name}</h3>
          <p>${formatPrice(product.price)} c/u</p>
          <div class="quantity-control" aria-label="Cantidad de ${product.name}">
            <button type="button" data-quantity="${product.id}" data-change="-1" aria-label="Reducir cantidad">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-quantity="${product.id}" data-change="1" aria-label="Aumentar cantidad">+</button>
          </div>
          <button class="remove-item" type="button" data-remove="${product.id}">Eliminar</button>
        </div>
        <strong class="cart-item-total">${formatPrice(product.price * item.quantity)}</strong>
      </article>
    `;
  }).join("");
}

function addToCart(productId) {
  const item = cart.find((entry) => entry.id === productId);
  if (item) item.quantity += 1;
  else cart.push({ id: productId, quantity: 1 });
  saveCart();
  renderCart();
  const product = products.find((entry) => entry.id === productId);
  showToast(`${product.name} se agregó a tu carrito.`);
}

function changeQuantity(productId, amount) {
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) cart = cart.filter((entry) => entry.id !== productId);
  saveCart();
  renderCart();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function openCart() {
  cartOverlay.hidden = false;
  requestAnimationFrame(() => cartOverlay.classList.add("is-visible"));
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  document.querySelector("#close-cart").focus();
}

function closeCart() {
  cartOverlay.classList.remove("is-visible");
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  setTimeout(() => { cartOverlay.hidden = true; }, 250);
  document.querySelector("#open-cart").focus();
}

document.querySelector("#filter-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  document.querySelectorAll("[data-filter]").forEach((filterButton) => {
    const isActive = filterButton === button;
    filterButton.classList.toggle("is-active", isActive);
    filterButton.setAttribute("aria-pressed", String(isActive));
  });
  renderProducts();
});

document.querySelectorAll("[data-quick-filter]").forEach((link) => {
  link.addEventListener("click", () => {
    activeFilter = link.dataset.quickFilter;
    document.querySelectorAll("[data-filter]").forEach((button) => {
      const isActive = button.dataset.filter === activeFilter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    renderProducts();
  });
});

document.querySelector("#sort-products").addEventListener("change", (event) => {
  activeSort = event.target.value;
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(button.dataset.add);
});

cartItems.addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");
  if (quantityButton) changeQuantity(quantityButton.dataset.quantity, Number(quantityButton.dataset.change));
  if (removeButton) {
    cart = cart.filter((item) => item.id !== removeButton.dataset.remove);
    saveCart();
    renderCart();
  }
});

document.querySelector("#open-cart").addEventListener("click", openCart);
document.querySelector("#close-cart").addEventListener("click", closeCart);
document.querySelector("#keep-shopping").addEventListener("click", closeCart);
document.querySelector("#continue-shopping").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cartDrawer.classList.contains("is-open")) closeCart();
});

document.querySelector("#checkout-button").addEventListener("click", () => {
  closeCart();
  successDialog.showModal();
});
document.querySelector("#close-success").addEventListener("click", () => successDialog.close());
document.querySelector("#finish-success").addEventListener("click", () => {
  cart = [];
  saveCart();
  renderCart();
  successDialog.close();
  showToast("¡Gracias por tu compra de demostración!");
});
successDialog.addEventListener("click", (event) => {
  if (event.target === successDialog) successDialog.close();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderProducts();
renderCart();
