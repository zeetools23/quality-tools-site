// Product data
const products = [
  {
    id: 1,
    name: 'Under-Cabinet Lights',
    description: 'Snap-on LED lights that brighten kitchens, closets and desks. Easy to install and rechargeable.',
    price: 25,
    image: 'https://source.unsplash.com/featured/?under-cabinet-light'
  },
  {
    id: 2,
    name: 'Portable Tire Inflator',
    description: 'Cordless inflator keeps your tires at the right pressure anywhere. Fits in your glove box.',
    price: 45,
    image: 'https://source.unsplash.com/featured/?tire-inflator'
  },
  {
    id: 3,
    name: 'Compact Tool Set',
    description: '40-piece kit with screwdrivers, sockets and pliers in a sturdy case.',
    price: 55,
    image: 'https://source.unsplash.com/featured/?tool-set'
  },
  {
    id: 4,
    name: 'Stud Finder',
    description: 'Handheld scanner locates studs, pipes and wires so you can drill with confidence.',
    price: 30,
    image: 'https://source.unsplash.com/featured/?stud-finder'
  },
  {
    id: 5,
    name: 'Compact Level',
    description: 'Torpedo level helps you keep shelves and frames perfectly straight.',
    price: 20,
    image: 'https://source.unsplash.com/featured/?spirit-level'
  },
  {
    id: 6,
    name: 'Utility Knife',
    description: 'Quick-change blade design for safe, precise cutting of boxes and materials.',
    price: 15,
    image: 'https://source.unsplash.com/featured/?utility-knife'
  },
  {
    id: 7,
    name: 'Cordless Heat Gun',
    description: 'Portable heat gun for paint stripping, shrink tubing and plastic bending with adjustable heat.',
    price: 50,
    image: 'https://source.unsplash.com/featured/?heat-gun'
  },
  {
    id: 8,
    name: 'Leaf Blower',
    description: 'Keep patios and driveways clear of leaves and dust. Lightweight cordless design.',
    price: 80,
    image: 'https://source.unsplash.com/featured/?leaf-blower'
  },
  {
    id: 9,
    name: 'Pressure Washer',
    description: 'Clean gutters, fences and driveways with this compact pressure washer.',
    price: 90,
    image: 'https://source.unsplash.com/featured/?pressure-washer'
  },
  {
    id: 10,
    name: 'String Trimmer',
    description: 'Cordless trimmer for tight corners and irregular lawns.',
    price: 70,
    image: 'https://source.unsplash.com/featured/?string-trimmer'
  }
];

// Cart array
let cart = [];

// Add to cart function
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  // Check if product already in cart
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();
}

// Render cart summary
function renderCart() {
  const cartContainer = document.getElementById('cart');
  if (!cartContainer) return;
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  // Build table
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  thead.innerHTML = '<tr><th>Product</th><th>Qty</th><th>Price (€)</th><th>Subtotal (€)</th></tr>';
  table.appendChild(thead);
  let tbody = document.createElement('tbody');
  let total = 0;
  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    let row = document.createElement('tr');
    row.innerHTML = `<td>${item.name}</td><td>${item.quantity}</td><td>${item.price.toFixed(2)}</td><td>${subtotal.toFixed(2)}</td>`;
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  let tfoot = document.createElement('tfoot');
  tfoot.innerHTML = `<tr><td colspan="3">Total</td><td>${total.toFixed(2)}</td></tr>`;
  table.appendChild(tfoot);
  cartContainer.appendChild(table);
}

// Render products on products.html
function renderProducts() {
  const productGrid = document.getElementById('product-grid');
  if (!productGrid) return;
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="card-content">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">€${product.price.toFixed(2)}</p>
      </div>
      <button class="button" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productGrid.appendChild(card);
  });
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCart();
});
