// Product data
const products = [
  {
    id: 1,
    name: 'Under‑Cabinet Lights',
    description: 'Snap‑on LED lights that brighten kitchens, closets and desks. Easy to install and rechargeable.',
    price: 25,
    image: 'https://images.pexels.com/photos/11262210/pexels-photo-11262210.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'lights'
  },
  {
    id: 2,
    name: 'Portable Tire Inflator',
    description: 'Cordless inflator keeps your tires at the right pressure anywhere. Fits in your glove box.',
    price: 45,
    image: 'https://images.pexels.com/photos/12996982/pexels-photo-12996982.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'inflators'
  },
  {
    id: 3,
    name: 'Compact Tool Set',
    description: '40‑piece kit with screwdrivers, sockets and pliers in a sturdy case.',
    price: 55,
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'toolsets'
  },
  {
    id: 4,
    name: 'Stud Finder',
    description: 'Handheld scanner locates studs, pipes and wires so you can drill with confidence.',
    price: 30,
    image: 'https://images.pexels.com/photos/4792486/pexels-photo-4792486.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'studfinders'
  },
  {
    id: 5,
    name: 'Compact Level',
    description: 'Torpedo level helps you keep shelves and frames perfectly straight.',
    price: 20,
    image: 'https://images.pexels.com/photos/5853931/pexels-photo-5853931.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'levels'
  },
  {
    id: 6,
    name: 'Utility Knife',
    description: 'Quick‑change blade design for safe, precise cutting of boxes and materials.',
    price: 15,
    image: 'https://images.pexels.com/photos/25839237/pexels-photo-25839237.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'knives'
  },
  {
    id: 7,
    name: 'Cordless Heat Gun',
    description: 'Portable heat gun for paint stripping, shrink tubing and plastic bending with adjustable heat.',
    price: 50,
    image: 'https://images.pexels.com/photos/6025904/pexels-photo-6025904.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'heatguns'
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
    // assign id using product category to allow anchor navigation
    card.id = product.category;
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
