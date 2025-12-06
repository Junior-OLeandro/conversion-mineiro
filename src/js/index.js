/* src/js/index.js - Versão Final Smashs com Preços Individuais */

// --- DADOS DOS PRODUTOS ---
// src/js/index.js (Adicione no final)

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const logoImg = document.getElementById('logo-img');
const THEME_KEY = 'mineiroloja_theme';


const LIGHT_LOGO_URL = './src/images/logoescura.png'; // Tema Claro (bg-claro) usa a logo escura
const DARK_LOGO_URL = './src/images/logomarca.png';
// ------------------------------------------
// 1. FUNÇÃO DE TROCA DE TEMA
// ------------------------------------------
// ------------------------------------------
// 1. FUNÇÃO DE TROCA DE TEMA (COM MUDANÇA DE LOGO)
// ------------------------------------------
function toggleTheme() {
  // O .toggle() adiciona a classe se ela não existir e remove se ela existir
  body.classList.toggle('bg-claro');

  // Salva a preferência no armazenamento local (localStorage)
  const isLight = body.classList.contains('bg-claro'); // Se 'bg-claro' está presente, é o tema CLARO

  // 🚨 MUDANÇA DA LOGO VIA JAVASCRIPT
  if (logoImg) {
    // Se for tema claro (isLight = true), usa a logo escura (LIGHT_LOGO_URL)
    logoImg.src = isLight ? LIGHT_LOGO_URL : DARK_LOGO_URL;
  }

  // Salva o tema
  localStorage.setItem(THEME_KEY, isLight ? 'light' : 'dark');

  // Opcional: Atualizar o texto ou ícone do botão
  themeToggle.textContent = isLight ? 'Tema Padrão' : 'Tema Claro';
}

// ------------------------------------------
// 2. APLICA TEMA E LOGO NA CARGA DA PÁGINA
// ------------------------------------------
function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);

  // Se houver um tema salvo e for 'light', aplica o bg-claro
  const isLight = (savedTheme === 'light');

  if (isLight) {
    body.classList.add('bg-claro');
  } else if (savedTheme === 'dark') {
    // Garante que a classe é removida se o último tema foi 'dark'
    body.classList.remove('bg-claro');
  }

  // 🚨 MUDANÇA DA LOGO NA CARGA
  if (logoImg) {
    logoImg.src = isLight ? LIGHT_LOGO_URL : DARK_LOGO_URL;
  }

  // Atualizar o texto do botão na carga inicial
  themeToggle.textContent = isLight ? 'Tema Padrão' : 'Tema Claro';
}

// ------------------------------------------
// 3. ADICIONA EVENTOS
// ------------------------------------------
// Carrega o tema salvo assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', loadTheme);

// Adiciona o event listener ao botão
themeToggle.addEventListener('click', toggleTheme);




const productsData = [
  // --- COMBOS ---
  { id: 1, category: 'combos', name: 'Combo Trem Bão', desc: 'Trem Bão + Batata Individual + Refri 350ml (2 Bifes artesanais de 150g cada, fatias de cheddar, tiras de bacon e barbecue. Acompanha maionese mineira.)', price: 55.90, img: './src/images/lanches/combo-trembao.webp', alt: 'Combo Trem Bão' },
  { id: 2, category: 'combos', name: 'Combo Smash Mineiro Duplo', desc: 'Smash Mineiro Duplo + Batata Individual + Refri 350ml (2 Smash burguer 60g cada, fatias de cheddar, requeijão, tiras de bacon, picles de cebola roxa e salada de alface e tomate. Acompanha maionese mineira.)', price: 41.90, img: './src/images/lanches/smash-mineiro.webp', alt: 'Combo Smash' },
  { id: 3, category: 'combos', name: 'Combo Tropical', desc: 'Tropical + Batata Individual + Refri 350ml (Bife artesanal 150g, fatias de cheddar, cream cheese, tiras de bacon e chutney de abacaxi. Acompanha maionese mineira.)', price: 45.90, img: './src/images/lanches/tropical.webp', alt: 'Combo Tropical' },

  // --- HAMBURGUERES ---
  { id: 4, category: 'hamburgueres', name: 'Mineiro', desc: 'Bife artesanal 150g, queijo canastra, tiras de bacon, barbecue, couve crispy e chips de banana. Acompanha maionese mineira.', price: 34.90, img: './src/images/lanches/mineiro.webp', alt: 'Hamburguer Mineiro' },
  { id: 5, category: 'hamburgueres', name: 'Chico Bento no Shopping', desc: 'Bife artesanal 150g, fatias de cheddar, tiras de bacon e pesto mineiro com amendoim. Acompanha maionese mineira.', price: 32.90, img: './src/images/lanches/chico-bento.webp', alt: 'Hamburguer Chico Bento' },
  { id: 6, category: 'hamburgueres', name: 'Romeu e Julieta', desc: 'Bife artesanal 150g, queijo canastra, tiras de bacon, ketchup de goiabada e salada de alface e tomate. Acompanha maionese mineira.', price: 32.90, img: './src/images/lanches/romeu.webp', alt: 'Hamburguer Romeu e Julieta' },
  { id: 7, category: 'hamburgueres', name: 'Bacon Docinho', desc: 'Bife artesanal 150g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa. Acompanha maionese mineira.', price: 33.90, img: './src/images/lanches/bacon-docinho.webp', alt: 'Hamburguer Bacon Docinho' },
  { id: 8, category: 'hamburgueres', name: 'Chimiburguer', desc: 'Bife artesanal 150g, fatias de cheddar, tiras de bacon, tomate confiti e chimichurri. Acompanha maionese mineira.', price: 35.90, img: './src/images/lanches/chimiburguer.webp', alt: 'Hamburguer Chimiburguer' },
  { id: 9, category: 'hamburgueres', name: 'Tropical', desc: 'Bife artesanal 150g, fatias de cheddar, cream cheese, tiras de bacon e chutney de abacaxi. Acompanha maionese mineira.', price: 33.90, img: './src/images/lanches/tropical.webp', alt: 'Hamburguer Tropical' },
  { id: 10, category: 'hamburgueres', name: 'Caramelizado', desc: 'Bife artesanal 150g, fatias de cheddar, tiras de bacon e cebola caramelizada. Acompanha maionese mineira.', price: 29.90, img: './src/images/lanches/caramelizado.webp', alt: 'Hamburguer Caramelizado' },
  { id: 11, category: 'hamburgueres', name: 'Trem Bão', desc: '2 Bifes artesanais de 150g cada, fatias de cheddar, tiras de bacon e barbecue. Acompanha maionese mineira.', price: 43.90, img: './src/images/lanches/trem-bao.webp', alt: 'Hamburguer Trem Bão' },

  // --- SMASHS (Com preços individuais por tamanho) ---
  // AQUI VOCÊ EDITA OS PREÇOS DE CADA UM:
  {
    id: 12, category: 'smashs', name: 'Smash Bacon',
    desc: 'Smash burguer 60g, cheddar fatiado, tiras de bacon, barbecue e salada de alface e tomate. Acompanha maionese mineira.',
    img: './src/images/lanches/smash-bacon.webp', alt: 'Smash Bacon',
    prices: { simples: 20.90, duplo: 27.90, triplo: 34.90 } // <--- EDITE AQUI
  },
  {
    id: 13, category: 'smashs', name: 'Smash Cheese',
    desc: 'Smash burguer 60g, cream cheese, bacon e salada de alface e tomate. Acompanha maionese mineira.',
    img: './src/images/lanches/smash-cheese.webp', alt: 'Smash Cheese',
    prices: { simples: 21.90, duplo: 28.90, triplo: 35.90 } // <--- EDITE AQUI
  },
  {
    id: 14, category: 'smashs', name: 'Smash Mineiro',
    desc: 'Smash burguer 60g, cheddar fatiado, requeijão, tiras de bacon, picles de cebola roxa e salada de alface e tomate. Acompanha maionese mineira.',
    img: './src/images/lanches/smash-mineiro.webp', alt: 'Smash Mineiro',
    prices: { simples: 22.90, duplo: 29.90, triplo: 36.90 } // <--- EDITE AQUI
  },
  {
    id: 15, category: 'smashs', name: 'Smashizinho',
    desc: 'Smash burguer 60g, cheddar fatiado e salada de alface e tomate. Acompanha maionese mineira.',
    img: './src/images/lanches/smash-bacon.webp', alt: 'Smashizinho',
    prices: { simples: 16.90, duplo: 25.90, triplo: 32.90 } // <--- EDITE AQUI
  },

  // --- ACOMPANHAMENTOS E BEBIDAS ---
  { id: 16, category: 'acompanhamentos', name: 'Batata Frita', desc: 'Batata frita simples', price: 12.90, img: './src/images/lanches/batata.webp', alt: 'Batata Frita' },
  { id: 17, category: 'acompanhamentos', name: 'Batata, cheddar e bacon', desc: 'Batata frita com cheddar e bacon', price: 24.90, img: './src/images/lanches/batata-cb.webp', alt: 'Batata Especial' },
  { id: 18, category: 'bebidas', name: 'Coca-Cola Zero 350ml', desc: '', price: 6.00, img: './src/images/lanches/cocazero.webp', alt: 'Coca Zero' },
  { id: 19, category: 'bebidas', name: 'Coca-Cola 350ml', desc: '', price: 6.00, img: './src/images/lanches/coca.webp', alt: 'Coca Cola' },
  { id: 20, category: 'bebidas', name: 'Guaraná Zero 350ml', desc: '', price: 6.00, img: './src/images/lanches/guaranazero.webp', alt: 'Guaraná Zero' },
  { id: 21, category: 'bebidas', name: 'Guaraná 350ml', desc: '', price: 6.00, img: './src/images/lanches/guarana.webp', alt: 'Guaraná' },
];

const extras = [
  { id: 'canastra', name: 'Queijo Canastra', price: 6.00 },
  { id: 'cheddar', name: 'Fatias de Cheddar', price: 4.00 },
  { id: 'cheese', name: 'Cream Cheese', price: 5.00 },
  { id: 'requei', name: 'Requeijão', price: 5.00 },
  { id: 'bacon', name: 'Tiras de Bacon', price: 4.00 },
  { id: 'chips', name: 'Chips de Banana', price: 4.00 },
  { id: 'couve', name: 'Couve Crispy', price: 4.00 },
  { id: 'pesto', name: 'Pesto Mineiro', price: 5.00 },
  { id: 'caramel', name: 'Bacon Caramelado', price: 5.00 },
  { id: 'cebolac', name: 'Cebola Caremelizada', price: 5.00 },
  { id: 'piclesc', name: 'Picles de Cebola Roxa', price: 4.00 },
  { id: 'chutney', name: 'Chutney de Abacaxi', price: 4.00 },
  { id: 'ketchup', name: 'Ketchup de Goiabada', price: 4.00 },
  { id: 'bbq', name: 'Barbecue', price: 4.00 },
  { id: 'bife', name: 'Bife artesanal de boi 150g', price: 13.00 },
];

// --- CONFIGURAÇÕES ---
const categoriesWithExtras = ['combos', 'hamburgueres', 'smashs'];
const categoriesWithMeatOptions = ['combos', 'hamburgueres'];
// Smashs são identificados pelo campo 'prices' no objeto do produto


let cart = [];

// --- DOM ELEMENTS ---
const floatingCartBtn = document.getElementById('floatingCartBtn');
const cartCountBadge = document.getElementById('cart-count-badge');
const cartModal = document.getElementById('cartModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalCartList = document.getElementById('modal-cart-list');
const modalSubtotal = document.getElementById('modal-subtotal');
const modalFrete = document.getElementById('modal-frete');
const modalTotal = document.getElementById('modal-total');

const modalNome = document.getElementById('modal-nome');
const modalEndereco = document.getElementById('modal-endereco');
const modalBairro = document.getElementById('modal-bairro');
const modalPagamento = document.getElementById('modal-pagamento');
const modalTrocoContainer = document.getElementById('modal-troco-container');
const modalTrocoInput = document.getElementById('modal-troco');
const modalTrocoInfo = document.getElementById('modal-troco-info');
const modalObs = document.getElementById('modal-obs');
const confirmCloseBtn = document.getElementById('confirmCloseBtn');
const confirmSendBtn = document.getElementById('confirmSendBtn');

const mainTrocoInfo = document.getElementById('troco-info');

// --- HELPER FUNCTIONS ---
function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function parseMoney(valueStr) {
  if (!valueStr) return 0;
  return parseFloat(valueStr.replace(/[^0-9,-]/g, '').replace(',', '.')) || 0;
}

function calculateItemTotal(item) {
  const extrasSum = (item.extras || []).reduce((s, e) => s + (e.price || 0), 0);
  return (item.price + extrasSum) * item.qty;
}

// --- BUILD PRODUCTS ---
function buildProducts() {
  const categoriesContainer = {
    combos: document.getElementById('grid-combos'),
    hamburgueres: document.getElementById('grid-hamburgueres'),
    smashs: document.getElementById('grid-smashs'),
    acompanhamentos: document.getElementById('grid-acompanhamentos'),
    bebidas: document.getElementById('grid-bebidas'),
  };

  productsData.forEach(p => {
    const container = categoriesContainer[p.category];
    if (!container) return;

    const showMeatOptions = categoriesWithMeatOptions.includes(p.category);
    const showExtras = categoriesWithExtras.includes(p.category);

    // Verifica se o produto tem tabela de preços (SMASHS)
    const hasSizeOptions = p.prices !== undefined;

    // 1. Opções de Carne (Combos/Burgers)
    let meatOptionsHTML = '';
    if (showMeatOptions) {
      meatOptionsHTML = `
        <select id="meat-${p.id}" aria-label="Tipo de carne">
            <option value="Bovino">Bovino</option>
            <option value="Frango">Frango</option>
        </select>
        <select id="point-${p.id}" aria-label="Ponto da carne">
            <option value="Malpassado">Malpassado</option>
            <option value="AoPonto">Ao Ponto</option>
            <option value="BemPassado">Bem Passado</option>
        </select>
      `;
    }

    // 2. Opções de Tamanho (SMASHS) - Pega o preço específico do produto
    let sizeOptionsHTML = '';
    let displayPrice = formatBRL(p.price || 0);

    if (hasSizeOptions) {
      // O preço exibido no card será o "Simples"
      displayPrice = `<small>A partir de</small> <br>${formatBRL(p.prices.simples)}`;

      sizeOptionsHTML = `
        <select id="size-${p.id}" aria-label="Tamanho do Smash" style="width: 100%; margin-bottom: 5px; font-weight: bold;">
            <option value="simples">Simples (${formatBRL(p.prices.simples)})</option>
            <option value="duplo">Duplo (${formatBRL(p.prices.duplo)})</option>
            <option value="triplo">Triplo (${formatBRL(p.prices.triplo)})</option>
        </select>
      `;
    }

    // 3. Extras
    let extrasHTML = '';
    if (showExtras) {
      extrasHTML = `
        <div class="extras">Adicionais: <br>
          ${extras.map(e => `
            <label>
              <input type="checkbox" data-extra="${e.id}" data-price="${e.price}">
              ${e.name} (+${formatBRL(e.price)})
            </label>
          `).join('')}
        </div>
      `;
    }

    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.alt || p.name}">
      <h3>${p.name} <span class="price" style="font-size: 0.9em">${displayPrice}</span></h3>
      <p>${p.desc || ''}</p>
      
      <div class="controls">
        ${meatOptionsHTML}
        ${sizeOptionsHTML}
        
        <div style="display:flex; gap:5px; margin-top:5px;">
             <select id="qty-${p.id}" aria-label="Quantidade" style="width: 60px; "><option value="1">1</option><option value="2">2</option><option value="3">3</option></select>
             <button type="button" class="btn-add" data-id="${p.id}" style="flex:1;">Adicionar</button>
        </div>
      </div>
      ${extrasHTML}
    `;
    container.appendChild(div);
  });

  document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', (ev) => {
      addToCart(ev, parseInt(btn.dataset.id, 10));
    });
  });
}

// --- CART LOGIC ---
function addToCart(ev, id) {
  const prod = productsData.find(p => p.id === id);
  if (!prod) return;

  const meatEl = document.getElementById(`meat-${id}`);
  const pointEl = document.getElementById(`point-${id}`);
  const sizeEl = document.getElementById(`size-${id}`);
  const qtyEl = document.getElementById(`qty-${id}`);

  // Determina tipo de produto
  const hasSizeOptions = prod.prices !== undefined;
  const hasMeatOptions = categoriesWithMeatOptions.includes(prod.category);

  // Carne e Ponto
  let meat = '';
  let point = '';
  if (hasMeatOptions) {
    meat = meatEl ? meatEl.value : 'Bovino';
    point = pointEl ? pointEl.value : 'Ao Ponto';
  }

  // Preço e Tamanho
  let sizeLabel = '';
  let finalPrice = prod.price; // Preço padrão

  if (hasSizeOptions && sizeEl) {
    const selectedSize = sizeEl.value; // 'simples', 'duplo', 'triplo'
    finalPrice = prod.prices[selectedSize]; // Busca o preço DENTRO do objeto do produto
    sizeLabel = selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1);
  }

  const qty = qtyEl ? parseInt(qtyEl.value, 10) : 1;

  // Extras
  const container = ev.currentTarget.closest('.product');
  const checkedExtras = container ? Array.from(container.querySelectorAll('input[type=checkbox]:checked')) : [];
  const chosenExtras = checkedExtras.map(ch => ({
    id: ch.dataset.extra,
    name: ch.parentNode.textContent.trim().split('(+')[0].trim(),
    price: parseFloat(ch.dataset.price) || 0
  }));

  cart.push({
    id: Date.now() + Math.random(),
    prodId: prod.id,
    name: prod.name,
    price: finalPrice,
    qty,
    meat,
    point,
    size: sizeLabel,
    extras: chosenExtras
  });

  if (container) {
    container.querySelectorAll('input[type=checkbox]').forEach(cb => cb.checked = false);
    if (qtyEl) qtyEl.value = "1";
  }

  renderCart();
}

function renderCart() {
  const sidebarList = document.getElementById('cart-list');
  if (sidebarList) {
    sidebarList.innerHTML = '';
    cart.forEach(item => sidebarList.appendChild(createCartItemElement(item, true)));
  }

  if (modalCartList) {
    modalCartList.innerHTML = '';
    cart.forEach(item => modalCartList.appendChild(createCartItemElement(item, false)));
  }

  updateTotals();
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  if (cartCountBadge) cartCountBadge.textContent = totalItems;
}

function createCartItemElement(item, allowRemove) {
  const li = document.createElement('li');
  const totalItem = calculateItemTotal(item);

  let details = [];
  if (item.size) details.push(`<strong>Tamanho: ${item.size}</strong>`);
  if (item.meat) details.push(`Carne: ${item.meat}`);
  if (item.point) details.push(`Ponto: ${item.point}`);
  if (item.extras && item.extras.length > 0) {
    const extrasNames = item.extras.map(e => e.name).join(', ');
    details.push(`Extras: ${extrasNames}`);
  }

  const detailsHtml = details.length ? `<br><small>${details.join(' | ')}</small>` : '';

  li.innerHTML = `
    <div style="width: 100%">
      ${item.qty}x ${item.name}
      ${detailsHtml}
      <div style="margin-top: 4px; font-weight:bold;">${formatBRL(totalItem)}</div>
    </div>
  `;

  if (allowRemove) {
    const btn = document.createElement('button');
    btn.textContent = 'Remover';
    btn.style.marginLeft = '10px';
    btn.style.color = 'red';
    btn.style.fontSize = '0.8em';
    btn.onclick = () => removeItem(item.id);
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'flex-start';
    li.appendChild(btn);
  }

  return li;
}

function updateTotals() {
  const subtotal = cart.reduce((s, i) => s + calculateItemTotal(i), 0);
  const bairroSelect = document.getElementById('bairro');
  const freteVal = modalBairro.value || (bairroSelect ? bairroSelect.value : 0);
  const frete = parseFloat(freteVal) || 0;
  const total = subtotal + frete;

  const subtotalEl = document.getElementById('subtotal');
  const freteEl = document.getElementById('frete');
  const totalEl = document.getElementById('total');

  if (subtotalEl) subtotalEl.textContent = 'Subtotal: ' + formatBRL(subtotal);
  if (freteEl) freteEl.textContent = 'Entrega: ' + formatBRL(frete);
  if (totalEl) totalEl.textContent = 'Total: ' + formatBRL(total);

  if (modalSubtotal) modalSubtotal.textContent = 'Subtotal: ' + formatBRL(subtotal);
  if (modalFrete) modalFrete.textContent = 'Entrega: ' + formatBRL(frete);
  if (modalTotal) modalTotal.textContent = 'Total: ' + formatBRL(total);
}

function removeItem(itemId) {
  cart = cart.filter(i => i.id !== itemId);
  renderCart();
}

// ... (dentro do seu index.js)
function closeCartModal() {
  if (cartModal) {
    cartModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Retira o bloqueio de scroll
  }
}


function openCartModal() {
  if (cart.length === 0) { alert("Seu carrinho está vazio!"); return; }

  const syncField = (srcId, destEl) => {
    const src = document.getElementById(srcId);
    // Sincroniza o valor da sidebar (src) para o modal (destEl)
    if (src && destEl) destEl.value = src.value;
  };

  // 1. Sincroniza campos de texto/selects da sidebar para o modal
  syncField('nomecliente', modalNome);
  syncField('endereco', modalEndereco);
  syncField('obs', modalObs);

  const bairroMain = document.getElementById('bairro');
  if (bairroMain && modalBairro) {
    // Sincroniza as opções do bairro (o HTML interno do select)
    modalBairro.innerHTML = bairroMain.innerHTML;
    // E o valor selecionado
    modalBairro.value = bairroMain.value;
  }

  syncField('pagamento', modalPagamento);
  // Sincroniza o valor de troco da sidebar (que é formatado) para o modal
  if (modalTrocoInput && mainTrocoInput) {
    modalTrocoInput.value = mainTrocoInput.value;
  }

  // 2. Executa handlers para configurar o modal (troco e totais)
  handlePagamentoChange(); // Garante que o container do troco está visível se for dinheiro
  handleTrocoInput(); // Re-valida o troco no modal com o valor sincronizado
  renderCart(); // Re-renderiza o carrinho no modal e atualiza totais

  // 3. Abre o modal
  cartModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function handlePagamentoChange() {
  if (modalPagamento.value === 'dinheiro') {
    modalTrocoContainer.style.display = 'block';
  } else {
    modalTrocoContainer.style.display = 'none';
    modalTrocoInput.value = '';
    modalTrocoInfo.textContent = '';
  }
}

function toggleTroco() {
  const pagamento = document.getElementById("pagamento").value;
  const trocoDiv = document.getElementById("troco-container");

  if (pagamento === "dinheiro") {
    trocoDiv.style.display = "block";
  } else {
    trocoDiv.style.display = "none";
    // limpa o troco caso a pessoa mude pra pix ou cartão
    document.getElementById("troco").value = "";
  }
}
// ADICIONE ESTAS DUAS FUNÇÕES AO SEU CÓDIGO:

// Função para obter o total atual da sidebar
function getSidebarTotal() {
  const totalEl = document.getElementById('total');
  if (!totalEl) return 0;
  const totalText = totalEl.textContent.replace('Total: ', '');
  return parseMoney(totalText);
}

// Handler de Input para o campo de Troco da Sidebar
function handleMainTrocoInput() {
  const mainTrocoInput = document.getElementById('troco');
  const mainTrocoInfo = document.getElementById('troco-info'); // Presumindo que você tem um elemento para a info na sidebar

  if (!mainTrocoInput || !mainTrocoInfo) return;

  let v = mainTrocoInput.value.replace(/\D/g, '');
  if (!v) {
    mainTrocoInput.value = '';
    mainTrocoInfo.textContent = '';
    return;
  }

  const valFloat = parseInt(v) / 100;
  mainTrocoInput.value = valFloat.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const total = getSidebarTotal();

  if (valFloat >= total) {
    mainTrocoInfo.style.color = '#007a00';
    mainTrocoInfo.textContent = `Troco: ${formatBRL(valFloat - total)}`;
  } else {
    mainTrocoInfo.style.color = '#b30000';
    mainTrocoInfo.textContent = 'Valor menor que o total';
  }
}

// ADICIONE ESTE NO BLOCO DE INICIALIZAÇÃO (event listeners no final do arquivo):
const mainTrocoInput = document.getElementById('troco');
if (mainTrocoInput) mainTrocoInput.addEventListener('input', handleMainTrocoInput);
// E verifique se você tem um <span id="troco-info"></span> correspondente na sidebar.


function handleTrocoInput() {
  let v = modalTrocoInput.value.replace(/\D/g, '');
  if (!v) { modalTrocoInput.value = ''; modalTrocoInfo.textContent = ''; return; }
  const valFloat = parseInt(v) / 100;
  modalTrocoInput.value = valFloat.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const totalText = modalTotal.textContent.replace('Total: ', '');
  const total = parseMoney(totalText);
  if (valFloat >= total) {
    modalTrocoInfo.style.color = '#007a00';
    modalTrocoInfo.textContent = `Troco: ${formatBRL(valFloat - total)}`;
  } else {
    modalTrocoInfo.style.color = '#b30000';
    modalTrocoInfo.textContent = 'Valor menor que o total';
  }
}

function enviarWhatsapp() {
  if (cart.length === 0) return alert('Carrinho vazio.');

  const nome = modalNome.value.trim();
  const endereco = modalEndereco.value.trim();
  const bairro = modalBairro.options[modalBairro.selectedIndex]?.text || '';
  const bairroValor = modalBairro.value;
  const pagamento = modalPagamento.value;
  const obs = modalObs.value;

  if (!nome) return alert('Informe seu nome.');
  if (!endereco) return alert('Informe o endereço.');
  if (!bairroValor) return alert('Selecione o bairro.');
  if (!pagamento) return alert('Selecione o pagamento.');

  let trocoMsg = '';
  if (pagamento === 'dinheiro') {
    const valorEntregue = parseMoney(modalTrocoInput.value);
    const total = parseMoney(modalTotal.textContent.replace('Total: ', ''));
    if (valorEntregue < total) return alert('Valor para troco inválido.');
    trocoMsg = `\nTroco para: ${formatBRL(valorEntregue)}\nTroco estimado: ${formatBRL(valorEntregue - total)}`;
  }

  // ... dentro da função enviarWhatsapp()
  // ... (Após a validação do Troco)

  let texto = `*✅ NOVO PEDIDO - Mineiro Hamburgueria*\n`;
  texto += `*----------------------------------*\n\n`;

  // 1. DADOS DO CLIENTE
  texto += `*👤 CLIENTE E ENTREGA:*\n`;
  texto += `*Nome:* ${nome}\n`;
  texto += `*Endereço:* ${endereco}\n`;
  texto += `*Bairro:* ${bairro}\n`;
  texto += `*----------------------------------*\n\n`;

  // 2. ITENS DO PEDIDO
  texto += `*🍔 ITENS:*\n`;
  cart.forEach((item, index) => {
    // Adiciona número do item para conferência fácil
    texto += `${index + 1}. ${item.qty}x *${item.name}* ${formatBRL(calculateItemTotal(item))}\n`;

    let detalhes = [];
    if (item.size) detalhes.push(`Tamanho: ${item.size}`);
    if (item.meat) detalhes.push(`Carne: ${item.meat} | ${item.point}`);
    if (item.extras && item.extras.length) detalhes.push(`Extras: ${item.extras.map(e => e.name).join(', ')}`);

    if (detalhes.length) {
      // Usa o hífen para recuo e clareza na lista
      detalhes.forEach(d => texto += `   - ${d}\n`);
    } else {
      texto += '\n'; // Garante espaço se não houver detalhes
    }
  });

  texto += `*----------------------------------*\n\n`;

  // 3. OBSERVAÇÕES
  if (obs) {
    texto += `*💡 OBSERVAÇÕES:* ${obs}\n`;
    texto += `*----------------------------------*\n\n`;
  }

  // 4. RESUMO FINANCEIRO E PAGAMENTO
  texto += `*💵 TOTAL:*\n`;
  texto += `Subtotal: ${modalSubtotal.textContent.replace('Subtotal: ', '')}\n`;
  texto += `Entrega: ${modalFrete.textContent.replace('Entrega: ', '')}\n`;
  texto += `*${modalTotal.textContent}*\n`;
  texto += `*Pagamento:* *${pagamento.toUpperCase()}*${trocoMsg}\n\n`;

  // 5. CONFIRMAÇÃO (Para você responder rapidamente)
  texto += `*----------------------------------*\n`;
  texto += `*➡️ AÇÃO:* Confirme recebimento com "OK" ou "Aguardando pagamento" se for PIX.`;


  const numero = '5532984550411';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  closeCartModal();
  window.open(url, '_blank');
}



function verificarHorarioFuncionamento() {
  const agora = new Date();
  const dia = agora.getDay(); // 0=Domingo, 1=Segunda, ..., 6=Sábado
  const hora = agora.getHours();
  const minuto = agora.getMinutes();
  const statusEl = document.getElementById("status-loja");

  let aberto = false;

  // Função auxiliar para comparar horário (hora:minuto)
  function dentroDoHorario(h, m, hIni, mIni, hFim, mFim) {
    const atual = h * 60 + m;
    const inicio = hIni * 60 + mIni;
    const fim = hFim * 60 + mFim;
    return atual >= inicio && atual <= fim;
  }

  // QUARTA (3), QUINTA (4), SEXTA (5)
  if (dia >= 3 && dia <= 5) {
    aberto = dentroDoHorario(hora, minuto, 18, 30, 22, 30);
  }

  // SÁBADO (6) e DOMINGO (0)
  if (dia === 6 || dia === 0) {
    aberto = dentroDoHorario(hora, minuto, 17, 0, 22, 30);
  }

  if (aberto) {
    statusEl.textContent = "🟢 Estamos ABERTOS!";
    statusEl.style.color = "#00ff88";
  } else {
    statusEl.textContent = "🔴 Estamos FECHADOS";
    statusEl.style.color = "#ff4444";
  }
}




// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
  buildProducts();
  renderCart();
  verificarHorarioFuncionamento();
  const originalBairro = document.getElementById('bairro');
  if (originalBairro && modalBairro) modalBairro.innerHTML = originalBairro.innerHTML;
});

if (floatingCartBtn) floatingCartBtn.addEventListener('click', openCartModal);
if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCartModal);
if (confirmCloseBtn) confirmCloseBtn.addEventListener('click', closeCartModal);

if (confirmSendBtn) confirmSendBtn.addEventListener('click', enviarWhatsapp);
// if (cartModal) cartModal.addEventListener('click', (e) => { if (e.target === cartModal) closeCartModal(); });
if (modalPagamento) modalPagamento.addEventListener('change', handlePagamentoChange);
if (modalTrocoInput) modalTrocoInput.addEventListener('input', handleTrocoInput);
if (modalBairro) modalBairro.addEventListener('change', () => updateTotals());
const mainBairro = document.getElementById('bairro');
if (mainBairro) mainBairro.addEventListener('change', () => {
  if (modalBairro) modalBairro.value = mainBairro.value;
  updateTotals();
});

