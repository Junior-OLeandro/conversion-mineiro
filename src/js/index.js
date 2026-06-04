// ==========================================
// 1. CONFIGURAÇÕES E TEMA
// ==========================================

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const logoImg = document.getElementById('logo-img');
const THEME_KEY = 'mineiroloja_theme';

const LIGHT_LOGO_URL = './src/images/logoescura.png';
const DARK_LOGO_URL = './src/images/logomarca.png';

function toggleTheme() {
  body.classList.toggle('bg-claro');
  const isLight = body.classList.contains('bg-claro');

  if (logoImg) {
    logoImg.src = isLight ? LIGHT_LOGO_URL : DARK_LOGO_URL;
  }

  localStorage.setItem(THEME_KEY, isLight ? 'light' : 'dark');
  if (themeToggle) themeToggle.textContent = isLight ? 'Tema Padrão' : 'Tema Claro';
}

function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const isLight = (savedTheme === 'light');

  if (isLight) {
    body.classList.add('bg-claro');
  } else if (savedTheme === 'dark') {
    body.classList.remove('bg-claro');
  }

  if (logoImg) {
    logoImg.src = isLight ? LIGHT_LOGO_URL : DARK_LOGO_URL;
  }

  if (themeToggle) themeToggle.textContent = isLight ? 'Tema Padrão' : 'Tema Claro';
}


// ==========================================
// TEMPO DE ENTREGA
// ==========================================

async function carregarTempoEntregaSite() {
  const { data, error } = await window.supabase_client
    .from('configuracoes_loja')
    .select('*')
    .eq('id', 1)
    .single();

  if (error || !data) {
    console.error('Erro ao carregar tempo:', error);
    return;
  }

  mostrarTempoEntrega(data);
}

function mostrarTempoEntrega(config) {
  const el = document.getElementById('tempo-estimado');

  if (el) {
    el.innerText = `⏱ Tempo: ${config.tempo_min} a ${config.tempo_max} min`;
  }
}


// ==========================================
// 2. DADOS DOS PRODUTOS
// ==========================================

const productsData = [
  // --- COMBOS ---
  { id: 1, category: 'combos', name: 'Combo Trem Bão', desc: 'Trem Bão + Batata Individual + Refri 350ml (2 Bifes artesanais de 160g cada, fatias de cheddar, tiras de bacon e barbecue. Acompanha maionese mineira.)', price: 55.90, img: './src/images/lanches/combo-trembao.webp', alt: 'Hamburguer com batata e refri' },
  { id: 2, category: 'combos', name: 'Combo Mineiro ', desc: 'Mineiro + Batata Individual + Refri 350ml (Bife artesanal 160g, queijo canastra, banana da terra frita, tiras de bacon, melado de cana e couve crispy. Acompanha maionese caseira.)', price: 46.90, img: './src/images/lanches/combo-mineiro.webp', alt: 'Hamburguer com batata e refri' },
  { id: 3, category: 'combos', name: 'Combo Tropical', desc: 'Tropical + Batata Individual + Refri 350ml (Bife artesanal 160g, fatias de cheddar, cream cheese, tiras de bacon e chutney de abacaxi. Acompanha maionese mineira.)', price: 45.90, img: './src/images/lanches/combo-tropical.webp', alt: 'Hamburguer com batata e refri' },

  // --- HAMBURGUERES ---
  { id: 4, category: 'hamburgueres', name: 'Mineiro', desc: 'Bife artesanal 160g, queijo canastra, banana da terra frita, tiras de bacon, melado de cana e couve crispy. Acompanha maionese caseira', price: 34.90, img: './src/images/lanches/mineiro.webp', alt: 'Hamburguer Mineiro com queijo bacon' },
  { id: 5, category: 'hamburgueres', name: 'Chico Bento no Shopping', desc: 'Bife artesanal 160g, fatias de cheddar, tiras de bacon e pesto mineiro com amendoim. Acompanha maionese mineira.', price: 32.90, img: './src/images/lanches/chico-bento.webp', alt: 'Hamburguer Chico Bento com queijo e bacon' },
  { id: 6, category: 'hamburgueres', name: 'Romeu e Julieta', desc: 'Bife artesanal 160g, queijo canastra, tiras de bacon, ketchup de goiabada e salada de alface e tomate. Acompanha maionese mineira.', price: 32.90, img: './src/images/lanches/romeu.webp', alt: 'Hamburguer Romeu e Julieta com queijo e bacon' },
  { id: 7, category: 'hamburgueres', name: 'Bacon Docinho', desc: 'Bife artesanal 160g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa. Acompanha maionese mineira.', price: 33.90, img: './src/images/lanches/bacon-docinho.webp', alt: 'Hamburguer Bacon Docinho com queijo e bacon' },
  { id: 8, category: 'hamburgueres', name: 'Chimiburguer', desc: 'Bife artesanal 160g, fatias de cheddar, tiras de bacon, tomate confiti e chimichurri. Acompanha maionese mineira.', price: 35.90, img: './src/images/lanches/chimiburguer.webp', alt: 'Hamburguer Chimiburguer com queijo e bacon' },
  { id: 9, category: 'hamburgueres', name: 'Tropical', desc: 'Bife artesanal 160g, fatias de cheddar, cream cheese, tiras de bacon e chutney de abacaxi. Acompanha maionese mineira.', price: 33.90, img: './src/images/lanches/tropical.webp', alt: 'Hamburguer Tropical com queijo e bacon' },
  { id: 10, category: 'hamburgueres', name: 'Caramelizado', desc: 'Bife artesanal 160g, fatias de cheddar, tiras de bacon e cebola caramelizada. Acompanha maionese mineira.', price: 29.90, img: './src/images/lanches/caramelizado.webp', alt: 'Hamburguer Caramelizado com queijo e bacon' },
  { id: 11, category: 'hamburgueres', name: 'Boi Doido', desc: 'Bifes artesana 160g, fatias de cheddar, tiras de bacon, requeijão e costela bovina desfiada. Acompanha maionese mineira.', price: 36.90, img: './src/images/lanches/boi-doido.webp', alt: 'Hamburguer com carne desfiada com queijo e bacon' },
  { id: 12, category: 'hamburgueres', name: 'Trem Bão', desc: '2 Bifes artesanais de 160g cada, fatias de cheddar, tiras de bacon e barbecue. Acompanha maionese mineira.', price: 43.90, img: './src/images/lanches/trem-bao.webp', alt: 'Hamburguer Trem Bão com queijo e bacon' },

  // --- SMASHS ---
  {
    id: 13, category: 'smashs', name: 'Smash Bacon',
    desc: 'Smash burguer 70g, cheddar fatiado, tiras de bacon, barbecue e salada de alface e tomate. Acompanha maionese mineira.',
    img: './src/images/lanches/smash-bacon.webp', alt: 'Smash burguer com queijo e bacon',
    prices: { simples: 20.90, duplo: 27.90, triplo: 34.90 }
  },
  {
    id: 14, category: 'smashs', name: 'Smash Cheese',
    desc: 'Smash burguer 70g, cream cheese, bacon e salada de alface e tomate. Acompanha maionese mineira.',
    img: './src/images/lanches/smash-cheese.webp', alt: 'Smash cheese burguer com queijo e bacon',
    prices: { simples: 21.90, duplo: 28.90, triplo: 35.90 }
  },
  {
    id: 15, category: 'smashs', name: 'Smash Mineiro',
    desc: 'Smash burguer 70g, cheddar fatiado, requeijão, tiras de bacon, picles de cebola roxa e salada de alface e tomate. Acompanha maionese mineira.',
    img: './src/images/lanches/smash-mineiro.webp', alt: 'Smash Mineiro burguer com queijo e bacon',
    prices: { simples: 22.90, duplo: 29.90, triplo: 36.90 }
  },
  {
    id: 16, category: 'smashs', name: 'Smashizinho',
    desc: 'Smash burguer 70g, cheddar fatiado e salada de alface e tomate. Acompanha maionese mineira.',
    img: './src/images/lanches/smash-bacon.webp', alt: 'Smashizinho Smash burguer com queijo e salada',
    prices: { simples: 16.90, duplo: 25.90, triplo: 32.90 }
  },

  // --- ACOMPANHAMENTOS E BEBIDAS ---
  { id: 17, category: 'acompanhamentos', name: 'Batata Frita', desc: 'Batata frita simples', price: 12.90, img: './src/images/lanches/batata.webp', alt: 'Batata Frita' },
  { id: 18, category: 'acompanhamentos', name: 'Batata, cheddar e costela desfiada', desc: 'Batata frita com cheddar, costela desfiada e finalizada com queijo canastra ralado', price: 29.90, img: './src/images/lanches/batata-cc.webp', alt: 'Batata Especial' },
  { id: 19, category: 'acompanhamentos', name: 'Batata, cheddar e bacon', desc: 'Batata frita com cheddar e bacon', price: 24.90, img: './src/images/lanches/batata-cb.webp', alt: 'Batata Especial' },
  { id: 20, category: 'bebidas', name: 'Coca-Cola 350ml', desc: '', price: 6.00, img: './src/images/lanches/coca.webp', alt: 'Coca Cola' },
  { id: 21, category: 'bebidas', name: 'Coca-Cola Zero 350ml', desc: '', price: 6.00, img: './src/images/lanches/cocazero.webp', alt: 'Coca Zero' },
  { id: 22, category: 'bebidas', name: 'Guaraná 350ml', desc: '', price: 6.00, img: './src/images/lanches/guarana.webp', alt: 'Guaraná' },
  { id: 23, category: 'bebidas', name: 'Guaraná Zero 350ml', desc: '', price: 6.00, img: './src/images/lanches/guaranazero.webp', alt: 'Guaraná' },
  { id: 24, category: 'bebidas', name: 'Coca-Cola 600ml', desc: '', price: 9.00, img: './src/images/lanches/coca600.webp', alt: 'Coca-cola 600ml' },
  { id: 25, category: 'bebidas', name: 'Coca-Cola Zero 600ml', desc: '', price: 9.00, img: './src/images/lanches/cocazero600.webp', alt: 'Coca-cola 600ml' },
];

const extras = [
  { id: 'canastra', name: 'Queijo Canastra', price: 7.00 },
  { id: 'cheddar', name: 'Fatias de Cheddar', price: 5.00 },
  { id: 'cheese', name: 'Cream Cheese', price: 5.00 },
  { id: 'requei', name: 'Requeijão', price: 5.00 },
  { id: 'bacon', name: 'Tiras de Bacon', price: 5.00 },
  { id: 'chips', name: 'Banana da Terra Frita', price: 4.00 },
  { id: 'couve', name: 'Couve Crispy', price: 4.00 },
  { id: 'pesto', name: 'Pesto Mineiro', price: 5.00 },
  { id: 'chimichu', name: 'Chimichurri', price: 5.00 },
  { id: 'bcaramel', name: 'Bacon Caramelado', price: 6.00 },
  { id: 'cebolac', name: 'Cebola Caremelizada', price: 5.00 },
  { id: 'piclesc', name: 'Picles de Cebola Roxa', price: 4.00 },
  { id: 'chutney', name: 'Chutney de Abacaxi', price: 5.00 },
  { id: 'maionese', name: 'Maionese Mineira (Pot. 30ml)', price: 5.00 },
  { id: 'ketchup', name: 'Ketchup de Goiabada (Pot. 30ml)', price: 5.00 },
  { id: 'bbq', name: 'Barbecue (Pot. 30ml)', price: 5.00 },
  { id: 'bife', name: 'Bife artesanal de boi 160g', price: 13.00 },
  { id: 'bife2', name: 'Bife artesanal de frango 160g', price: 13.00 },
];

const categoriesWithExtras = ['combos', 'hamburgueres', 'smashs'];
const categoriesWithMeatOptions = ['combos', 'hamburgueres'];

let cart = [];

// ==========================================
// 3. ELEMENTOS DOM
// ==========================================
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
const modalTelefone = document.getElementById('modal-tel-cliente');
const modalNumeroCasa = document.getElementById('modal-numero-casa'); // Novo campo
const modalBairro = document.getElementById('modal-bairro');
const modalPagamento = document.getElementById('modal-pagamento');
const modalTrocoContainer = document.getElementById('modal-troco-container');
const modalTrocoInput = document.getElementById('modal-troco');
const modalTrocoInfo = document.getElementById('modal-troco-info');
const modalObs = document.getElementById('modal-obs');
const confirmCloseBtn = document.getElementById('confirmCloseBtn');
const confirmSendBtn = document.getElementById('confirmSendBtn');

const mainTrocoInfo = document.getElementById('troco-info');
const mainTrocoInput = document.getElementById('troco');

// ==========================================
// CONTROLE DE ESTADO (Evitar Duplicação)
// ==========================================
let pedidoEnviando = false;
let ultimoPedidoId = null;

// ==========================================
// 4. FUNÇÕES DE FORMATAÇÃO E CÁLCULO
// ==========================================

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

// ==========================================
// 5. CONSTRUÇÃO DE PRODUTOS
// ==========================================

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
    const hasSizeOptions = p.prices !== undefined;

    // Opções de Carne
    let meatOptionsHTML = '';
    if (showMeatOptions) {
      meatOptionsHTML = `
        <select id="meat-${p.id}" aria-label="Tipo de carne">
            <option value="Bovino">Bovino</option>
            <option value="Frango">Frango</option>
        </select>
        <select id="point-${p.id}" aria-label="Ponto da carne">
        <option value="">Escolha o ponto</option>
            <option value="Malpassado">Malpassado</option>
            <option value="AoPonto">Ao Ponto</option>
            <option value="BemPassado">Bem Passado</option>
        </select>
      `;
    }

    // Opções de Tamanho
    let sizeOptionsHTML = '';
    let displayPrice = formatBRL(p.price || 0);

    if (hasSizeOptions) {
      displayPrice = `<small>A partir de</small> <br>${formatBRL(p.prices.simples)}`;
      sizeOptionsHTML = `
        <select id="size-${p.id}" aria-label="Tamanho do Smash" style="width: 100%; margin-bottom: 5px; font-weight: bold;">
            <option value="simples">Simples (${formatBRL(p.prices.simples)})</option>
            <option value="duplo">Duplo (${formatBRL(p.prices.duplo)})</option>
            <option value="triplo">Triplo (${formatBRL(p.prices.triplo)})</option>
        </select>
      `;
    }

    // Extras
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

// ==========================================
// 6. LÓGICA DO CARRINHO (ADD/REMOVE)
// ==========================================

function addToCart(ev, id) {
  const prod = productsData.find(p => p.id === id);
  if (!prod) return;

  const meatEl = document.getElementById(`meat-${id}`);
  const pointEl = document.getElementById(`point-${id}`);
  const sizeEl = document.getElementById(`size-${id}`);
  const qtyEl = document.getElementById(`qty-${id}`);

  const hasSizeOptions = prod.prices !== undefined;
  const hasMeatOptions = categoriesWithMeatOptions.includes(prod.category);

  // ...
  let meat = '';
  let point = '';
  if (hasMeatOptions) {
    meat = meatEl ? meatEl.value : 'Bovino';
    point = pointEl ? pointEl.value : '';

    // 🛑 ADICIONANDO A VALIDAÇÃO AQUI DENTRO, SÓ PARA QUEM TEM OPÇÃO DE CARNE/PONTO
    if (!point) {
      alert(`Por favor, selecione o ponto da carne para o item "${prod.name}".`);
      // Adicione um destaque visual, se necessário
      if (pointEl) pointEl.focus();
      return; // Impede que o item seja adicionado
    }
  }


  // ...

  let sizeLabel = '';
  let finalPrice = prod.price;

  if (hasSizeOptions && sizeEl) {
    const selectedSize = sizeEl.value;
    finalPrice = prod.prices[selectedSize];
    sizeLabel = selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1);
  }

  const qty = qtyEl ? parseInt(qtyEl.value, 10) : 1;

  const container = ev.currentTarget.closest('.product');
  const checkedExtras = container ? Array.from(container.querySelectorAll('input[type=checkbox]:checked')) : [];
  const chosenExtras = checkedExtras.map(ch => ({
    id: ch.dataset.extra,
    name: ch.parentNode.textContent.trim().split('(+')[0].trim(),
    price: parseFloat(ch.dataset.price) || 0
  }));

  cart.push({
    // Usar toString para evitar problemas de comparação com números flutuantes
    id: (Date.now() + Math.random()).toString(),
    prodId: prod.id,
    name: prod.name,
    price: finalPrice,
    qty,
    meat,
    point,
    size: sizeLabel,
    extras: chosenExtras
  });

  if (typeof gtag === 'function') {
    gtag('event', 'add_to_cart', {
      item_id: prod.id,
      item_name: prod.name,
      currency: "BRL",
      value: finalPrice * qty, // Valor total do item adicionado
      quantity: qty,
      item_category: prod.category,
      item_variant: sizeLabel || '',
    });
  }

  if (container) {
    container.querySelectorAll('input[type=checkbox]').forEach(cb => cb.checked = false);
    if (qtyEl) qtyEl.value = "1";
  }

  renderCart();
}

function removeItem(itemId) {
  // Encontra o item antes de remover
  const removedItem = cart.find(i => i.id.toString() === itemId.toString());
  
  // Converte para string para garantir a igualdade
  cart = cart.filter(i => i.id.toString() !== itemId.toString());
  
  if (removedItem && typeof gtag === 'function') {
    gtag('event', 'remove_from_cart', {
      item_id: removedItem.prodId,
      item_name: removedItem.name,
      currency: "BRL",
      value: calculateItemTotal(removedItem),
      quantity: removedItem.qty,
    });
  }
  renderCart();
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
        <div class="item-content" style="flex-grow: 1;">
            ${item.qty}x ${item.name}
            ${detailsHtml}
            <div style="margin-top: 4px; font-weight:bold;">${formatBRL(totalItem)}</div>
        </div>
    `;

  if (allowRemove) {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    btn.className = 'remove-item-btn'; // Classe usada no CSS
    btn.setAttribute('aria-label', `Remover ${item.name} do carrinho`);

    // Estilos de segurança inline (para garantir display flex)
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';

    btn.onclick = () => removeItem(item.id);
    li.appendChild(btn);
  }

  return li;
}

function renderCart() {
  const sidebarList = document.getElementById('cart-list');
  if (sidebarList) {
    sidebarList.innerHTML = '';
    cart.forEach(item => sidebarList.appendChild(createCartItemElement(item, true)));
  }

  if (modalCartList) {
    modalCartList.innerHTML = '';
    // 🚨 IMPORTANTE: Passando 'true' para permitir remover no mobile/modal
    cart.forEach(item => modalCartList.appendChild(createCartItemElement(item, true)));
  }

  updateTotals();
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  if (cartCountBadge) cartCountBadge.textContent = totalItems;
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

  atualizarValorPix();
  atualizarValorPixModal();
}

// ==========================================
// 7. MODAL E SINCRONIZAÇÃO
// ==========================================

function closeCartModal() {
  if (cartModal) {
    cartModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function openCartModal() {
  if (cart.length === 0) { alert("Seu carrinho está vazio!"); return; }

  const syncField = (srcId, destEl) => {
    const src = document.getElementById(srcId);
    if (src && destEl) destEl.value = src.value;
  };

  const subtotal = cart.reduce((s, i) => s + calculateItemTotal(i), 0);
  if (typeof gtag === 'function') {
    gtag('event', 'begin_checkout', {
      currency: "BRL",
      value: subtotal,
      items: cart.map(item => ({
        item_id: item.prodId,
        item_name: item.name,
        item_category: productsData.find(p => p.id === item.prodId)?.category || 'unknown',
        price: item.price,
        quantity: item.qty,
      }))
    });
  }

  // Campos do formulário
  syncField('nomecliente', modalNome);
  syncField('tel-cliente', modalTelefone);
  syncField('endereco', modalEndereco);
  syncField('numero-casa', modalNumeroCasa);
  syncField('obs', modalObs);

  const bairroMain = document.getElementById('bairro');
  if (bairroMain && modalBairro) {
    modalBairro.innerHTML = bairroMain.innerHTML;
    modalBairro.value = bairroMain.value;
  }

  syncField('pagamento', modalPagamento);

  // Lógica do Troco
  if (mainTrocoInput && modalTrocoInput) {
    modalTrocoInput.value = mainTrocoInput.value;
    modalTrocoInput.disabled = mainTrocoInput.disabled;
  }

  // Checkboxes de "Sem Troco"
  const mainSemTrocoCheckbox = document.getElementById('sem-troco');
  const modalSemTrocoCheckbox = document.getElementById('modal-sem-troco');
  if (mainSemTrocoCheckbox && modalSemTrocoCheckbox) {
    modalSemTrocoCheckbox.checked = mainSemTrocoCheckbox.checked;
  }

  // Handlers
  handlePagamentoChange();
  handleTrocoInput();
  renderCart();

  // Abre modal
  cartModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// ==========================================
// 8. GERENCIAMENTO DE PAGAMENTO E TROCO
// ==========================================

function handlePagamentoChange() {
  const modalSemTrocoCheckbox = document.getElementById('modal-sem-troco');
  const modalPixContainer = document.getElementById('modal-pix-container');

  if (modalPagamento.value === 'dinheiro') {
    modalTrocoContainer.style.display = 'block';
    if (modalPixContainer) modalPixContainer.style.display = 'none';
  } else if (modalPagamento.value === 'pix') {
    modalTrocoContainer.style.display = 'none';
    if (modalPixContainer) {
      modalPixContainer.style.display = 'block';
      atualizarValorPixModal();
    }
  } else {
    modalTrocoContainer.style.display = 'none';
    if (modalPixContainer) modalPixContainer.style.display = 'none';
    modalTrocoInput.value = '';
    modalTrocoInput.disabled = false;
    modalTrocoInfo.textContent = '';
    if (modalSemTrocoCheckbox) modalSemTrocoCheckbox.checked = false;
  }

  if (modalSemTrocoCheckbox) {
    // Remove listener antigo para não duplicar
    modalSemTrocoCheckbox.onchange = null;
    modalSemTrocoCheckbox.onchange = () => {
      if (modalSemTrocoCheckbox.checked) {
        modalTrocoInput.value = 'Não preciso de troco';
        modalTrocoInput.disabled = true;
        modalTrocoInfo.textContent = '';
      } else {
        modalTrocoInput.value = '';
        modalTrocoInput.disabled = false;
        modalTrocoInput.focus();
      }
    };
  }
}

function toggleTroco() {
  const pagamento = document.getElementById("pagamento").value;
  const trocoDiv = document.getElementById("troco-container");
  const pixDiv = document.getElementById("pix-container");
  const semTrocoCheckbox = document.getElementById("sem-troco");

  if (pagamento === "dinheiro") {
    trocoDiv.style.display = "block";
    pixDiv.style.display = "none";
  } else if (pagamento === "pix") {
    trocoDiv.style.display = "none";
    pixDiv.style.display = "block";
    atualizarValorPix();
  } else {
    trocoDiv.style.display = "none";
    pixDiv.style.display = "none";
    document.getElementById("troco").value = "";
    document.getElementById("troco").disabled = false;
    if (semTrocoCheckbox) semTrocoCheckbox.checked = false;

    const info = document.getElementById('troco-info');
    if (info) info.textContent = '';
  }

  if (semTrocoCheckbox) {
    semTrocoCheckbox.onchange = null;
    semTrocoCheckbox.onchange = () => {
      const trInput = document.getElementById('troco');
      if (semTrocoCheckbox.checked) {
        trInput.value = 'Não preciso de troco';
        trInput.disabled = true;
        document.getElementById('troco-info').textContent = '';
      } else {
        trInput.value = '';
        trInput.disabled = false;
        trInput.focus();
      }
    };
  }
}

function copiarChavePix() {
  const chavePix = document.getElementById('pix-key').value;
  navigator.clipboard.writeText(chavePix).then(() => {
    alert('✅ Chave Pix copiada com sucesso!');
  }).catch(() => {
    alert('Erro ao copiar. Tente novamente.');
  });
}

function atualizarValorPix() {
  const totalText = document.getElementById('total').textContent;
  const valor = totalText.replace('Total: ', '').replace('R$ ', '');
  document.getElementById('pix-valor').textContent = `R$ ${valor}`;
}

function toggleTrocoModal() {
  const pagamento = document.getElementById("modal-pagamento").value;
  const modalTrocoDiv = document.getElementById("modal-troco-container");
  const modalPixDiv = document.getElementById("modal-pix-container");
  const modalSemTrocoCheckbox = document.getElementById("modal-sem-troco");

  if (pagamento === "dinheiro") {
    modalTrocoDiv.style.display = "block";
    modalPixDiv.style.display = "none";
  } else if (pagamento === "pix") {
    modalTrocoDiv.style.display = "none";
    modalPixDiv.style.display = "block";
    atualizarValorPixModal();
  } else {
    modalTrocoDiv.style.display = "none";
    modalPixDiv.style.display = "none";
    document.getElementById("modal-troco").value = "";
    document.getElementById("modal-troco").disabled = false;
    if (modalSemTrocoCheckbox) modalSemTrocoCheckbox.checked = false;
    const info = document.getElementById('modal-troco-info');
    if (info) info.textContent = '';
  }
}

function copiarChavePixModal() {
  const chavePix = document.getElementById('modal-pix-key').value;
  navigator.clipboard.writeText(chavePix).then(() => {
    alert('Chave Pix copiada com sucesso!');
  }).catch(() => {
    alert('Erro ao copiar. Tente novamente.');
  });
}

function atualizarValorPixModal() {
  const totalText = document.getElementById('modal-total').textContent;
  const valor = totalText.replace('Total: ', '').replace('R$ ', '').replace(/[<strong>|<\/strong>]/g, '');
  document.getElementById('modal-pix-valor').textContent = `R$ ${valor}`;
}

function getSidebarTotal() {
  const totalEl = document.getElementById('total');
  if (!totalEl) return 0;
  const totalText = totalEl.textContent.replace('Total: ', '');
  return parseMoney(totalText);
}

function handleMainTrocoInput() {
  const trInput = document.getElementById('troco');
  const info = document.getElementById('troco-info');

  if (!trInput || !info) return;

  let v = trInput.value.replace(/\D/g, '');
  if (!v) {
    trInput.value = '';
    info.textContent = '';
    return;
  }

  const valFloat = parseInt(v) / 100;
  trInput.value = valFloat.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const total = getSidebarTotal();

  if (valFloat >= total) {
    info.style.color = '#007a00';
    info.textContent = `Troco: ${formatBRL(valFloat - total)}`;
  } else {
    info.style.color = '#b30000';
    info.textContent = 'Valor menor que o total';
  }
}

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

// ==========================================
// SUPABASE - SALVAR PEDIDO
async function salvarPedido(pedido) {
  // ==========================================
  // ESTADOS DISPONÍVEIS PARA O PEDIDO:
  // - novo: Pedido recebido, aguardando confirmação
  // - confirmado: Confirmado pelo admin no painel
  // - preparando: Sendo preparado
  // - pronto: Pronto para entrega/retirada
  // - despachado: Saiu para entrega
  // - entregue: Entregue ao cliente
  // - cancelado: Pedido cancelado
  // ==========================================
  
  // Buscar o próximo número de pedido
  const { data: ultimoPedido, error: erroConsulta } = await window.supabase_client
    .from("pedidos")
    .select("pedido_id")
    .order("data_criacao", { ascending: false })
    .limit(1);

  let proximoNumero = 1;
  if (!erroConsulta && ultimoPedido && ultimoPedido.length > 0) {
    // Extrai o número do último pedido_id (ex: "Nº123" -> 123)
    const ultimoId = ultimoPedido[0].pedido_id;
    const match = ultimoId.match(/\d+/);
    if (match) {
      proximoNumero = parseInt(match[0]) + 1;
    }
  }

  const { data, error } = await window.supabase_client
    .from("pedidos")
    .insert([{
      pedido_id: `Nº${proximoNumero}`,
      nome_cliente: pedido.nome,
      telefone: pedido.telefone,
      itens: pedido.itens,
      observacao: pedido.observacao,
      pagamento: pedido.pagamento,
      total: pedido.total,
      endereco: pedido.endereco,
      numero_casa: pedido.numero_casa,
      bairro: pedido.bairro,
      status: 'novo',
      data_criacao: new Date().toISOString()
    }])
    .select();

  if (error) {
    console.error("Erro detalhado ao salvar:", error.message);
    throw new Error("Erro ao registrar pedido no banco de dados.");
  }

  // Retornar os dados do pedido criado
  return data && data.length > 0 ? data[0] : null;
}

// ==========================================
// 9. FINALIZAÇÃO E WHATSAPP
// ==========================================

async function enviarWhatsapp() {
  if (cart.length === 0) return alert('Carrinho vazio.');

  const nome = modalNome.value.trim();
  const telefone = modalTelefone.value.trim();
  const enderecoOriginal = modalEndereco.value.trim(); // Renomeado para Original
  const numeroCasa = modalNumeroCasa ? modalNumeroCasa.value.trim() : '';
  const bairro = modalBairro.options[modalBairro.selectedIndex]?.text || '';
  const bairroValor = modalBairro.value;
  const pagamento = modalPagamento.value;
  const obs = modalObs.value;

  // Troco
  const modalSemTrocoCheckbox = document.getElementById('modal-sem-troco');
  const isSemTroco = modalSemTrocoCheckbox ? modalSemTrocoCheckbox.checked : false;

  // VALIDAÇÕES
  if (!nome) return alert('Informe seu nome.');
  if (!telefone) return alert('Informe seu telefone para contato.');
  if (!enderecoOriginal) return alert('Informe o endereço (rua/logradouro).');
  if (!numeroCasa) return alert('Informe o número da casa/apto.');
  if (!bairroValor) return alert('Selecione o bairro.');
  if (!pagamento) return alert('Selecione o pagamento.');

  let trocoMsg = '';
  if (pagamento === 'dinheiro') {
    if (isSemTroco) {
      trocoMsg = `\nTroco para: NÃO PRECISA DE TROCO.`;
    } else {
      const valorEntregue = parseMoney(modalTrocoInput.value);
      const total = parseMoney(modalTotal.textContent.replace('Total: ', ''));

      if (valorEntregue === 0) return alert('Por favor, informe para quanto será o troco ou marque "Não preciso de troco".');
      if (valorEntregue < total) return alert('Valor para troco inválido (menor que o total).');

      trocoMsg = `\nTroco para: ${formatBRL(valorEntregue)}\nTroco estimado: ${formatBRL(valorEntregue - total)}`;
    }
  }

  // --- LÓGICA PARA QUEBRAR O ENDEREÇO EM DUAS LINHAS ---
  let enderecoFormatado = enderecoOriginal;
  const separadores = ['(', ',', '-']; // Prioriza parênteses, vírgula, depois traço

  for (const sep of separadores) {
    // Pega a posição do separador, ignorando o início da string (índice > 5)
    const indiceQuebra = enderecoOriginal.indexOf(sep, 5);

    if (indiceQuebra !== -1) {
      const partePrincipal = enderecoOriginal.substring(0, indiceQuebra).trim();
      const parteReferencia = enderecoOriginal.substring(indiceQuebra).trim();

      // Insere a quebra de linha \n na string
      enderecoFormatado = `${partePrincipal}\n ${parteReferencia}`;
      quebraEncontrada = true;
      break;
    }
  }

  const total = parseMoney(modalTotal.textContent.replace('Total: ', ''));
  const frete = parseMoney(modalFrete.textContent.replace('Entrega: ', ''));

  if (typeof gtag === 'function') {
    gtag('event', 'purchase', {
      transaction_id: 'WAP-' + Date.now(), // ID única para rastreamento
      affiliation: 'Mineiro Hamburgueria',
      value: total,
      shipping: frete, // Custo de entrega
      currency: "BRL",
      payment_type: pagamento, // 'pix', 'cartao', 'dinheiro'
      items: cart.map(item => ({
        item_id: item.prodId,
        item_name: item.name,
        item_category: productsData.find(p => p.id === item.prodId)?.category || 'unknown',
        price: item.price,
        quantity: item.qty,
        item_variant: (item.size || item.meat) ? `${item.size} ${item.meat}`.trim() : '',
      }))
    });
  }


  // -----------------------------------------------------

  // CONSTRUÇÃO DA MENSAGEM
  let texto = `*✅ NOVO PEDIDO - Mineiro Hamburgueria*\n`;
  texto += `*----------------------------------*\n\n`;

  texto += `*👤 CLIENTE E ENTREGA:*\n`;
  texto += `*Telefone:* ${telefone}\n`;
  texto += `*Nome:* ${nome}\n`;
  texto += `*Endereço:* ${enderecoFormatado}\n`; // <-- AGORA USA A VARIÁVEL FORMATADA
  texto += `*Nº da Casa/Apto:* ${numeroCasa}\n`;
  texto += `*Bairro:* ${bairro}\n`;
  texto += `*----------------------------------*\n\n`;

  texto += `*🍔 ITENS:*\n`;
  cart.forEach((item, index) => {
    texto += `${item.qty}x *${item.name}* ${formatBRL(calculateItemTotal(item))}\n`;

    let detalhes = [];
    if (item.size) detalhes.push(`Tamanho: ${item.size}`);
    if (item.meat) detalhes.push(`Carne: ${item.meat} | ${item.point}`);

    // Mantive a sua alteração para quebrar os extras em novas linhas, o que é ótimo para impressora 80mm
    if (item.extras && item.extras.length) detalhes.push(`Extras: ${item.extras.map(e => e.name).join('\n   - ')}`);

    if (detalhes.length) {
      detalhes.forEach(d => texto += `   - ${d}\n`);
    } else {
      texto += '\n';
    }
  });

  texto += `*----------------------------------*\n\n`;

  if (obs) {
    texto += `*💡 OBSERVAÇÕES:* ${obs}\n`;
    texto += `*----------------------------------*\n\n`;
  }

  texto += `*💵 TOTAL:*\n`;
  texto += `Subtotal: ${modalSubtotal.textContent.replace('Subtotal: ', '')}\n`;
  texto += `Entrega: ${modalFrete.textContent.replace('Entrega: ', '')}\n`;
  texto += `*${modalTotal.textContent}*\n`;
  texto += `*Pagamento:* *${pagamento.toUpperCase()}*${trocoMsg}\n\n`;

  texto += `*----------------------------------*\n`;
  texto += `*➡️ AÇÃO:* Aguarde confirmação.`;

  const pedido = {
  nome: nome,
  telefone: telefone,
  endereco: enderecoOriginal,
  numero_casa: numeroCasa,
  bairro: bairro,
  itens: cart.map(item => ({
    nome: item.name,
    qtd: item.qty,
    tamanho: item.size || 'Padrão',
    carne: item.meat || '',
    ponto: item.point || '',
    extras: item.extras || [],
    total: calculateItemTotal(item)
  })),
  observacao: obs,
  pagamento: pagamento,
  total: total
};

  const numero = '5532984550411';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  // 🔴 PRIMEIRO: Verificar se já está enviando (evita duplicação)
  if (pedidoEnviando) {
    alert('Seu pedido está sendo processado... Aguarde!');
    return;
  }

  // Se for PIX, mostra tela antes de enviar
  if (pagamento === 'pix') {
    pedidoEnviando = false;
    confirmSendBtn.disabled = false;
    confirmSendBtn.innerText = 'Confirmar e Enviar o Pedido';
    
    // Guarda dados globalmente para usar depois
    window.pedidoPendente = { pedido, texto };
    window.totalPedido = total;
    mostrarTelaPix();
    return;
  }

  // Desabilitar botão durante o envio
  pedidoEnviando = true;
  confirmSendBtn.disabled = true;
  confirmSendBtn.innerText = '⏳ Enviando pedido...';

  try {
    // Salvar no Supabase
    const resultado = await salvarPedido(pedido);
    
    if (resultado && resultado.pedido_id) {
      // ✅ SUCESSO: Mostrar tela de confirmação
      closeCartModal();
      mostrarTelaConfirmacao(resultado, texto);
      
      // Limpar carrinho
      cart = [];
      // Atualiza a UI do carrinho (função existente)
      renderCart();
      
    } else {
      throw new Error('Erro ao salvar pedido');
    }
  } catch (erro) {
    console.error('Erro ao processar pedido:', erro);
    alert('❌ Erro ao processar seu pedido. Tente novamente.');
  } finally {
    // Reabilitar botão
    pedidoEnviando = false;
    confirmSendBtn.disabled = false;
    confirmSendBtn.innerText = 'Confirmar e Enviar o Pedido';
  }
}

// ==========================================
// TELA DE CONFIRMAÇÃO (Sucesso do Pedido)
// ==========================================

function mostrarTelaConfirmacao(pedidoData, textoWhatsApp) {
  const numero = '5532984550411';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(textoWhatsApp)}`;
  
  const modal = document.getElementById('successModal');
  if (!modal) {
    console.error('Modal de sucesso não encontrado');
    return;
  }
  // Atualizar dados no modal com verificações para evitar exceções
  try {
    const elNumero = document.getElementById('pedido-numero');
    const elCliente = document.getElementById('pedido-cliente');
    const elTotal = document.getElementById('pedido-total');
    const elTempo = document.getElementById('pedido-tempo');

    if (elNumero) elNumero.innerText = pedidoData.pedido_id || '';
    if (elCliente) elCliente.innerText = pedidoData.nome_cliente || '';
    if (elTotal) elTotal.innerText = (typeof formatBRL === 'function') ? formatBRL(pedidoData.total) : (pedidoData.total || 'R$ 0,00');
    if (elTempo) elTempo.innerText = '20-30';

    // Botão enviar para WhatsApp (opcional)
    const btnWhatsApp = document.getElementById('btnAbrirWhatsApp');
    if (btnWhatsApp) btnWhatsApp.onclick = () => { window.open(url, '_blank'); };

    // Botão continuar comprando
    const btnContinuar = document.getElementById('btnContinuarComprando');
    if (btnContinuar) btnContinuar.onclick = () => { fecharTelaConfirmacao(); };

  } catch (err) {
    console.error('Erro ao atualizar modal de confirmação:', err);
    // Não rethrow — queremos garantir que o fluxo do pedido continue
  }

  // Exibir modal (sempre tentar exibir mesmo que alguns campos falhem)
  try {
    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  } catch (err) {
    console.error('Erro ao exibir modal de confirmação:', err);
  }

  // 🚀 PREPARADO PARA INTEGRAÇÃO COM API
  // Aqui você pode adicionar uma chamada à sua API para enviar mensagem automática
  // Dispara a Edge Function (não bloqueante) para enviar WhatsApp automático
  try {
    if (typeof enviarMensagemAutomaticaViaAPI === 'function') {
      // Passa o objeto pedidoData e também o texto formatado caso prefira manter a mensagem atual
      const payload = Object.assign({}, pedidoData, { texto: textoWhatsApp });
      enviarMensagemAutomaticaViaAPI(payload);
    }
  } catch (err) {
    console.error('Erro ao iniciar envio automático via API:', err);
  }
}

function fecharTelaConfirmacao() {
  const modal = document.getElementById('successModal');
  if (modal) {
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

// ==========================================
// TELA PIX POS-FINALIZACAO
// ==========================================

function mostrarTelaPix() {
  const modalTotal = document.getElementById('modal-total').textContent;
  const valor = modalTotal.replace(/[^\d,]/g, '').replace(',', '.');

  const pixModal = document.createElement('div');
  pixModal.id = 'pixConfirmModal';
  pixModal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); display: flex; align-items: center; justify-content: center; z-index: 10000;';

  pixModal.innerHTML = `
    <div style="background: white; padding: 30px; border-radius: 12px; max-width: 450px; width: 90%; text-align: center; box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);">
      <h2 style="color: #27ae60; margin-top: 0;">💳 REALIZE SEU PAGAMENTO PIX</h2>
      
      <div style="background: #f0f9f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 10px 0; color: #555;"><strong>Chave Pix:</strong></p>
        <div style="display: flex; align-items: center; gap: 8px; margin: 10px 0;">
          <input type="text" id="pix-modal-chave" value="32984806357" readonly style="flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-weight: bold;">
          <button onclick="copiarChavePixConfirm()" style="padding: 10px 15px; background: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; white-space: nowrap;">📋 Copiar</button>
        </div>
      </div>

      <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f0ad4e;">
        <p style="margin: 0; font-size: 0.95em;"><strong>Valor a Pagar:</strong></p>
        <p style="margin: 10px 0; font-size: 1.8em; color: #e74c3c; font-weight: bold;">R$ ${valor}</p>
      </div>

      <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 5px 0; color: #555;"><strong>Recebedor:</strong></p>
        <p style="margin: 5px 0; font-weight: bold;">Talita Cristina Lopes Souza</p>
      </div>

      <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0; font-size: 0.95em; color: #2e7d32;">✅ Após realizar o pagamento, clique em "Confirmar" para que sua equipe receba o pedido.</p>
      </div>

      <div style="display: flex; gap: 10px; margin-top: 20px;">
        <button onclick="fecharTelaPix()" style="flex: 1; padding: 12px; background: #ccc; color: #333; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Voltar</button>
        <button onclick="confirmarEEnviarPedido()" style="flex: 1; padding: 12px; background: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Confirmar</button>
      </div>
    </div>
  `;

  document.body.appendChild(pixModal);
}

function copiarChavePixConfirm() {
  const chavePix = document.getElementById('pix-modal-chave').value;
  navigator.clipboard.writeText(chavePix).then(() => {
    alert('Chave Pix copiada com sucesso!');
  }).catch(() => {
    alert('Erro ao copiar. Tente novamente.');
  });
}

function fecharTelaPix() {
  const pixModal = document.getElementById('pixConfirmModal');
  if (pixModal) pixModal.remove();
}

async function confirmarEEnviarPedido() {
  const pixModal = document.getElementById('pixConfirmModal');
  if (pixModal) pixModal.remove();
  
  if (window.pedidoPendente) {
    const { pedido, texto } = window.pedidoPendente;
    
    try {
      const resultado = await salvarPedido(pedido);
      
      if (resultado && resultado.pedido_id) {
        closeCartModal();
        mostrarTelaConfirmacao(resultado, texto);
        
        cart = [];
        renderCart();
      } else {
        throw new Error('Erro ao salvar pedido');
      }
    } catch (erro) {
      console.error('Erro ao processar pedido:', erro);
      alert('Erro ao processar seu pedido. Tente novamente.');
    } finally {
      window.pedidoPendente = null;
      pedidoEnviando = false;
      confirmSendBtn.disabled = false;
      confirmSendBtn.innerText = 'Confirmar e Enviar o Pedido';
    }
  }
}

// ==========================================
// INTEGRAÇÃO COM API (para o futuro)
// ==========================================

/**
 * ESTRUTURA PRONTA PARA INTEGRAÇÃO COM WhatsApp Cloud API
 * 
 * Quando quiser automatizar:
 * 1. Crie um backend (Node.js, Python, etc)
 * 2. Configure sua conta WhatsApp Business API
 * 3. Descomente a função abaixo e ajuste a URL
 * 4. O sistema enviará mensagens automáticas baseado em status
 */

async function enviarMensagemAutomaticaViaAPI(pedidoData) {
  // Chamará a Edge Function do Supabase que contém as credenciais (seguras no servidor)
  // Configure a função no Supabase com o nome `send-whatsapp` e adicione os secrets
  try {
    const PROJECT_URL = 'https://hrryboxebcrlvwlyydnn.supabase.co';
    const FUNC_PATH = '/functions/v1/send-whatsapp';

    // Se quiser usar a anon key do projeto (opcional), cole-a aqui ou deixe em branco
    const SUPABASE_ANON = 'sb_publishable_1ykTwghNLzY3nKKdeLE7Rg_zEHqrJbR';

    const body = Object.assign({}, pedidoData, { texto_whatsapp: pedidoData.texto_whatsapp || pedidoData.texto });

    const res = await fetch(`${PROJECT_URL}${FUNC_PATH}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'apikey' header pode ser necessário dependendo das configurações da sua função
        'apikey': SUPABASE_ANON,
        'Authorization': `Bearer ${SUPABASE_ANON}`
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const err = await res.text().catch(() => 'No body');
      console.error('Erro ao chamar Edge Function send-whatsapp:', res.status, err);
    } else {
      console.log('Edge Function send-whatsapp disparada com sucesso');
    }
  } catch (err) {
    console.error('Erro ao chamar enviarMensagemAutomaticaViaAPI:', err);
  }
}

// ESTRUTURA PARA ATUALIZAR STATUS E DISPARAR MENSAGENS
// Use isso no painel quando o status mudar

/**
 * Quando você clicar no painel em "Preparando", "Pronto", "Despachado":
 * 
 * async function atualizarStatusENotificar(pedidoId, novoStatus) {
 *   // 1. Atualizar status no banco
 *   await supabaseClient
 *     .from('pedidos')
 *     .update({ status: novoStatus })
 *     .eq('id', pedidoId);
 *   
 *   // 2. Buscar dados do pedido
 *   const pedido = await supabaseClient
 *     .from('pedidos')
 *     .select('*')
 *     .eq('id', pedidoId)
 *     .single();
 *   
 *   // 3. Enviar mensagem automática
 *   await enviarNotificacaoStatusViaAPI(pedido.data[0], novoStatus);
 * }
 */

// ==========================================
// 10. HORÁRIO E EVENTOS INICIAIS
// ==========================================

function verificarHorarioFuncionamento() {
  const agora = new Date();
  const dia = agora.getDay();
  const hora = agora.getHours();
  const minuto = agora.getMinutes();
  const statusEl = document.getElementById("status-loja");

  let aberto = false;
  function dentroDoHorario(h, m, hIni, mIni, hFim, mFim) {
    const atual = h * 60 + m;
    const inicio = hIni * 60 + mIni;
    const fim = hFim * 60 + mFim;
    return atual >= inicio && atual <= fim;
  }

  if (dia >= 3 && dia <= 5) {
    aberto = dentroDoHorario(hora, minuto, 18, 30, 22, 30);
  }
  if (dia === 6 || dia === 0) {
    aberto = dentroDoHorario(hora, minuto, 17, 0, 22, 30);
  }

  if (aberto) {
    statusEl.textContent = "🟢 Estamos ABERTOS!";
    statusEl.style.color = "#008a49ff";
  } else {
    statusEl.textContent = "🔴 Estamos FECHADOS";
    statusEl.style.color = "#ff4444";
  }
}

function exibirAlertaPromocao() {
  const modal = document.getElementById('quickPromoModal');
  const closeBtn = document.getElementById('quickPromoClose');
  const actionBtn = document.getElementById('quickPromoBtnAction');

  const HOJE = new Date();

  // 3 = Quarta-feira
  const isQuarta = HOJE.getDay() === 3;

  // Data no formato YYYY-MM-DD (ex: 2026-01-21)
  const hojeFormatado = HOJE.toISOString().split('T')[0];

  // Recupera a última quarta que o usuário viu a promo
  const ultimaQuartaVista = localStorage.getItem('quick-promo-quarta');

  // Só exibe se:
  // - for quarta
  // - ainda não foi exibido hoje
  if (modal && isQuarta && ultimaQuartaVista !== hojeFormatado) {

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    const fecharModal = () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';

      // Marca que o usuário já viu a promo nesta quarta
      localStorage.setItem('quick-promo-quarta', hojeFormatado);
    };

    if (closeBtn) closeBtn.addEventListener('click', fecharModal);

    if (actionBtn) {
      actionBtn.addEventListener('click', () => {
        fecharModal();

        const lanches = document.getElementById('grid-hamburgueres');
        if (lanches) {
          lanches.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) fecharModal();
    });
  }
}

// ==========================================
// 11. INICIALIZAÇÃO - DOMContentLoaded
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar Supabase quando o DOM estiver pronto
  window.supabase_client = window.supabase.createClient(
    "https://hrryboxebcrlvwlyydnn.supabase.co",
    "sb_publishable_1ykTwghNLzY3nKKdeLE7Rg_zEHqrJbR"
  );

  // Carregar tema
  loadTheme();

  // Verificar horário de funcionamento
  verificarHorarioFuncionamento();

  // Construir produtos
  buildProducts();

  // Mostrar alerta de promoção
  exibirAlertaPromocao();

  // Configurar event listeners
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (floatingCartBtn) floatingCartBtn.addEventListener('click', openCartModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCartModal);
  if (confirmCloseBtn) confirmCloseBtn.addEventListener('click', closeCartModal);
  if (confirmSendBtn) confirmSendBtn.addEventListener('click', enviarWhatsapp);

  if (modalPagamento) modalPagamento.addEventListener('change', handlePagamentoChange);
  if (modalTrocoInput) modalTrocoInput.addEventListener('input', handleTrocoInput);
  if (mainTrocoInput) mainTrocoInput.addEventListener('input', handleMainTrocoInput);

  if (modalBairro) modalBairro.addEventListener('change', () => updateTotals());

  const mainBairro = document.getElementById('bairro');
  if (mainBairro) mainBairro.addEventListener('change', () => {
    if (modalBairro) modalBairro.value = mainBairro.value;
    updateTotals();
  });

  // ==========================================
  // CARREGAR TEMPO DE ENTREGA DO SUPABASE
  // ==========================================
  carregarTempoEntregaSite();

  // Atualizar em tempo real
  window.supabase_client
    .channel('tempo-entrega-realtime')
    .on(
      'postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'configuracoes_loja' },
      payload => {
        mostrarTempoEntrega(payload.new);
      }
    )
    .subscribe();
});
