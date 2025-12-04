/* src/js/index.js - versão corrigida e comentada */

const productsData = [
  { id: 1, category: 'combos', name: 'Combo Trem Bão', desc: 'Trem Bão + Batata Individual + Refri 350ml (2 Bifes artesanais de 150g cada, fatias de cheddar, tiras de bacon e barbecue. Acompanha maionese mineira.)', price: 55.90, img: './src/images/lanches/combo-trembao.jpg', alt: 'Foto do hamburguer com batata e refrigerante' },
  { id: 2, category: 'combos', name: 'Combo Smash Mineiro Duplo', desc: 'Smash Mineiro Duplo + Batata Individual + Refri 350ml (2 Smash burguer 60g, fatias de cheddar, requeijão, tiras de bacon, picles de cebola roxa e salada de alface e tomate. Acompanha maionese mineira.)', price: 41.90, img: './src/images/lanches/smash-mineiro.jpg', alt: 'Foto do hamburguer com batata e refrigerante' },
  { id: 3, category: 'combos', name: 'Combo Tropical', desc: 'Tropical + Batata Individual + Refri 350ml (Bife artesanal 150g, fatias de cheddar, cream cheese, tiras de bacon e chutney de abacaxi. Acompanha maionese mineira.)', price: 45.90, img: './src/images/lanches/tropical.jpg', alt: 'Foto do hamburguer com batata e refrigerante' },
  { id: 4, category: 'hamburgueres', name: 'Mineiro', desc: 'Bife artesanal 150g, queijo canastra, tiras de bacon, barbecue, couve crispy e chips de banana. Acompanha maionese mineira.', price: 34.90, img: './src/images/lanches/mineiro.jpg', alt: 'Foto de hamburguer' },
  { id: 5, category: 'hamburgueres', name: 'Chico Bento no Shopping', desc: 'Bife artesanal 150g, fatias de cheddar, tiras de bacon e pesto mineiro com amendoim. Acompanha maionese mineira.', price: 32.90, img: './src/images/lanches/chico-bento.jpg', alt: 'Foto de hamburguer' },
  { id: 6, category: 'hamburgueres', name: 'Romeu e Julieta', desc: 'Bife artesanal 150g, queijo canastra, tiras de bacon, ketchup de goiabada e salada de alface e tomate. Acompanha maionese mineira.', price: 32.90, img: './src/images/lanches/romeu.png', alt: 'Foto de hamburguer' },
  { id: 7, category: 'hamburgueres', name: 'Bacon Docinho', desc: 'Bife artesanal 150g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa. Acompanha maionese mineira.', price: 33.90, img: './src/images/lanches/bacon-docinho.png', alt: 'Foto de hamburguer' },
  { id: 8, category: 'hamburgueres', name: 'Chimiburguer', desc: 'Bife artesanal 150g, fatias de cheddar, tiras de bacon, tomate confiti e chimichurri. Acompanha maionese mineira.', price: 35.90, img: './src/images/lanches/chimiburguer.jpg', alt: 'Foto de hamburguer' },
  { id: 9, category: 'hamburgueres', name: 'Tropical', desc: 'Bife artesanal 150g, fatias de cheddar, cream cheese, tiras de bacon e chutney de abacaxi. Acompanha maionese mineira.', price: 33.90, img: './src/images/lanches/tropical.jpg', alt: 'Foto de hamburguer' },
  { id: 10, category: 'hamburgueres', name: 'Caramelizado', desc: 'Bife artesanal 150g, fatias de cheddar, tiras de bacon e cebola caramelizada. Acompanha maionese mineira.', price: 29.90, img: './src/images/lanches/caramelizado.jpg', alt: 'Foto de hamburguer' },
  { id: 11, category: 'hamburgueres', name: 'Trem Bão', desc: '2 Bifes artesanais de 150g cada, fatias de cheddar, tiras de bacon e barbecue. Acompanha maionese mineira.', price: 43.90, img: './src/images/lanches/trem-bao.jpg', alt: 'Foto de hamburguer' },
  { id: 12, category: 'smashs', name: 'Smash Bacon', desc: 'Smash burguer 60g, cheddar fatiado, tiras de bacon, barbecue e salada de alface e tomate. Acompanha maionese mineira.', price: 20.90, img: './src/images/lanches/smash-bacon.jpg', alt: 'Foto de hamburguer' },
  { id: 13, category: 'smashs', name: 'Smash Cheese', desc: 'Smash burguer 60g, cream cheese, bacon e salada de alface e tomate. Acompanha maionese mineira.', price: 33.90, img: './src/images/lanches/smash-cheese.jpg', alt: 'Foto de hamburguer' },
  { id: 14, category: 'smashs', name: 'Smash Mineiro', desc: 'Smash burguer 60g, cheddar fatiado, requeijão, tiras de bacon, picles de cebola roxa e salada de alface e tomate. Acompanha maionese mineira.', price: 33.90, img: './src/images/lanches/smash-mineiro.jpg', alt: 'Foto de hamburguer' },
  { id: 15, category: 'smashs', name: 'Smashizinho', desc: 'Smash burguer 60g, cheddar fatiado e salada de alface e tomate. Acompanha maionese mineira.', price: 33.90, img: './src/images/lanches/smash-bacon.jpg', alt: 'Foto de hamburguer' },
  { id: 16, category: 'acompanhamentos', name: 'Batata Frita', desc: 'Batata Frita Palito Individual', price: 12.90, img: './src/images/lanches/batata.jpg', alt: 'Foto de batata frita' },
  { id: 17, category: 'acompanhamentos', name: 'Batata, cheddar e bacon', desc: '', price: 24.90, img: './src/images/lanches/batata-cb.jpg', alt: 'Foto de batata frita com cheddar e bacon' },
  { id: 18, category: 'bebidas', name: 'Coca-Cola Zero 350ml', desc: '', price: 6.00, img: './src/images/lanches/cocazero.webp', alt: 'Foto de coca-cola lata'  },
  { id: 19, category: 'bebidas', name: 'Coca-Cola 350ml', desc: '', price: 6.00, img: './src/images/lanches/coca.webp', alt: 'Foto de coca-cola lata'  },
  { id: 20, category: 'bebidas', name: 'Guaraná Zero 350ml', desc: '', price: 6.00, img: './src/images/lanches/guaranazero.webp', alt: 'Foto de coca-cola lata'  },
  { id: 21, category: 'bebidas', name: 'Guaraná 350ml', desc: '', price: 6.00, img: './src/images/lanches/guarana.webp', alt: 'Foto de coca-cola lata'  },
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

let cart = [];

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

function formatBRL(v) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function buildProducts() {
  const categories = {
    combos: document.getElementById('grid-combos'),
    hamburgueres: document.getElementById('grid-hamburgueres'),
    smashs: document.getElementById('grid-smashs'),
    acompanhamentos: document.getElementById('grid-acompanhamentos'),
    bebidas: document.getElementById('grid-bebidas'),
  };

  productsData.forEach(p => {
    const container = categories[p.category];
    if (!container) {
      console.warn('Categoria não encontrada:', p.category);
      return;
    }

    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name} <span class="price">${formatBRL(p.price)}</span></h3>
      <p>${p.desc || ''}</p>
      <div class="controls">
        <select id="meat-${p.id}" aria-label="Tipo de carne ${p.name}"><option value="Bovino">Bovino</option><option value="Frango">Frango</option></select>
        <select id="point-${p.id}" aria-label="Ponto da carne ${p.name}"><option value="Malpassado">Malpassado</option><option value="AoPonto">Ao Ponto</option><option value="BemPassado">Bem Passado</option></select>
        <select id="qty-${p.id}" aria-label="Quantidade ${p.name}"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select>
        <button type="button" class="btn-add" data-id="${p.id}">Adicionar</button>
      </div>
      <div class="extras">Adicionais: <br>
        ${extras.map(e => `
          <label>
            <input type="checkbox" data-extra="${e.id}" data-price="${e.price}">
            ${e.name} (+${formatBRL(e.price)})
          </label>
        `).join('')}
      </div>
    `;
    container.appendChild(div);
  });

  // delegação de eventos para botões "Adicionar"
  document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', (ev) => {
      const id = parseInt(btn.dataset.id, 10);
      addToCart(ev, id);
    });
  });
}

function addToCart(ev, id) {
  // defensivo
  const prod = productsData.find(p => p.id === id);
  if (!prod) {
    console.error('Produto não encontrado id=', id);
    return;
  }

  const meatEl = document.getElementById(`meat-${id}`);
  const pointEl = document.getElementById(`point-${id}`);
  const qtyEl = document.getElementById(`qty-${id}`);
  const meat = meatEl ? meatEl.value : '';
  const point = pointEl ? pointEl.value : '';
  const qty = qtyEl ? parseInt(qtyEl.value, 10) : 1;

  const container = ev.currentTarget.closest('.product');
  const checkedExtras = container ? Array.from(container.querySelectorAll('input[type=checkbox]:checked')) : [];
  const chosenExtras = checkedExtras.map(ch => ({
    id: ch.dataset.extra,
    name: ch.parentNode ? ch.parentNode.textContent.trim() : ch.dataset.extra,
    price: parseFloat(ch.dataset.price) || 0
  }));

  cart.push({
    id: Date.now() + Math.random(),
    prodId: prod.id,
    name: prod.name,
    price: prod.price,
    qty,
    meat,
    point,
    extras: chosenExtras
  });
  renderCart();
}

function renderCart() {
  // Atualiza lista no aside (desktop)
  const list = document.getElementById('cart-list');
  if (list) {
    list.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      const extrasText = item.extras && item.extras.length ? '<br><small>Extras: ' + item.extras.map(e => e.name.replace(/^\s+|\s+$/g, '')).join(', ') + '</small>' : '';
      li.innerHTML = `${item.qty}x ${item.name} <br> Carne: ${item.meat} | Ponto: ${item.point} ${extrasText} <br> ${formatBRL(calculateItemTotal(item))} <button type="button" onclick="removeItem('${item.id}')" style="margin-left:8px">Remover</button>`;
      list.appendChild(li);
    });
  }

  // Atualiza modal (mobile/confirm)
  if (modalCartList) {
    modalCartList.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      const extrasText = item.extras && item.extras.length ? ' (Extras: ' + item.extras.map(e => e.name.replace(/^\s+|\s+$/g, '')).join(', ') + ')' : '';
      li.innerHTML = `${item.qty}x ${item.name}${extrasText} — ${formatBRL(calculateItemTotal(item))}`;
      modalCartList.appendChild(li);
    });
  }

  // Atualiza totais na página e no modal
  atualizarTotais();

  // copia valores para modal
  const subtotal = cart.reduce((s,i)=>s+calculateItemTotal(i),0);
  const frete = parseFloat(document.getElementById('bairro')?.value || 0);
  const total = subtotal + frete;

  if (modalSubtotal) modalSubtotal.textContent = 'Subtotal: ' + formatBRL(subtotal);
  if (modalFrete) modalFrete.textContent = 'Entrega: ' + formatBRL(frete);
  if (modalTotal) modalTotal.textContent = 'Total: ' + formatBRL(total);

  // Atualiza badge do contador
  const totalItems = cart.reduce((s,i)=>s+i.qty,0);
  if (cartCountBadge) cartCountBadge.textContent = totalItems;
}

function openCartModal() {
  modalNome.value = document.getElementById('nomecliente')?.value || '';
  modalEndereco.value = document.getElementById('endereco')?.value || '';
  modalPagamento.value = document.getElementById('pagamento')?.value || '';
  modalObs.value = document.getElementById('obs')?.value || '';
  modalBairro.value = document.getElementById('bairro')?.value || '';

  if (modalPagamento.value === 'dinheiro') modalTrocoContainer.style.display = 'block';
  else modalTrocoContainer.style.display = 'none';

  renderCart();
  cartModal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

function closeCartModal() {
  cartModal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

// listeners
if (floatingCartBtn) floatingCartBtn.addEventListener('click', openCartModal);
if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCartModal);
if (confirmCloseBtn) confirmCloseBtn.addEventListener('click', closeCartModal);
if (cartModal) {
  cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) closeCartModal();
  });
}

// Se modalTrocoInput existir, adiciona listener defensivo
if (modalTrocoInput) {
  modalTrocoInput.addEventListener('input', () => {
    let v = modalTrocoInput.value.replace(/\D/g, '');
    if(!v) { modalTrocoInput.value = ''; modalTrocoInfo.textContent = ''; return; }
    v = (parseInt(v) / 100).toFixed(2);
    modalTrocoInput.value = v.toString().replace('.', ',').replace(/^/, 'R$ ');
    calcularTrocoModal();
  });
}

function calcularTrocoModal() {
  let totalText = modalTotal?.textContent?.replace(/[^0-9,-]/g,'')?.replace(',','.') || '0';
  let total = parseFloat(totalText) || 0;
  let recebido = modalTrocoInput?.value?.replace(/[^0-9,-]/g,'')?.replace(',','.') || '0';
  recebido = parseFloat(recebido) || 0;
  if (recebido >= total) {
    const troco = recebido - total;
    if (modalTrocoInfo) {
      modalTrocoInfo.style.color = '#007a00';
      modalTrocoInfo.textContent = `Troco: R$ ${troco.toFixed(2).replace('.',',')}`;
    }
  } else {
    if (modalTrocoInfo) {
      modalTrocoInfo.style.color = '#b30000';
      modalTrocoInfo.textContent = 'Valor menor que o total';
    }
  }
}

function calculateItemTotal(item) {
  const extrasSum = (item.extras || []).reduce((s, e) => s + (e.price || 0), 0);
  return (item.price + extrasSum) * item.qty;
}

// syncBairrosToModal agora é GLOBAL (antes estava dentro de outra função)
function syncBairrosToModal() {
  const original = document.getElementById('bairro');
  if (!original || !modalBairro) return;
  modalBairro.innerHTML = original.innerHTML;
}

function atualizarTotais() {
  const subtotalEl = document.getElementById('subtotal');
  const freteEl = document.getElementById('frete');
  const totalEl = document.getElementById('total');
  const subtotal = cart.reduce((s, i) => s + calculateItemTotal(i), 0);
  const frete = parseFloat(document.getElementById('bairro')?.value || 0);

  if (subtotalEl) subtotalEl.textContent = 'Subtotal: ' + formatBRL(subtotal);
  if (freteEl) freteEl.textContent = 'Entrega: ' + formatBRL(frete);
  if (totalEl) totalEl.textContent = 'Total: ' + formatBRL(subtotal + frete);
}

function removeItem(id) {
  cart = cart.filter(i => i.id != id);
  renderCart();
}

function calcularEntrega() {
  atualizarTotais();
}

function toggleTroco() {
  const pagamento = document.getElementById('pagamento')?.value;
  const campoTroco = document.getElementById('campo-troco');
  if (pagamento === 'dinheiro') {
    if (campoTroco) campoTroco.style.display = 'block';
  } else {
    if (campoTroco) {
      campoTroco.style.display = 'none';
      const trocoInput = document.getElementById('troco');
      if (trocoInput) trocoInput.value = '';
    }
  }
}

if (confirmSendBtn) {
  confirmSendBtn.addEventListener('click', () => {
    if (document.getElementById('nomecliente')) document.getElementById('nomecliente').value = modalNome.value;
    if (document.getElementById('endereco')) document.getElementById('endereco').value = modalEndereco.value;
    if (document.getElementById('bairro')) document.getElementById('bairro').value = modalBairro.value;
    if (document.getElementById('pagamento')) document.getElementById('pagamento').value = modalPagamento.value;
    if (document.getElementById('troco')) document.getElementById('troco').value = modalTrocoInput?.value?.replace(/\s/g,'') || '';
    if (document.getElementById('obs')) document.getElementById('obs').value = modalObs.value;

    if (!modalNome.value.trim()) { alert('Por favor, informe seu nome.'); return; }
    if (!modalEndereco.value.trim()) { alert('Por favor, informe o endereço.'); return; }
    if (!modalBairro.value) { alert('Por favor, selecione um bairro.'); return; }
    if (!modalPagamento.value) { alert('Por favor, selecione a forma de pagamento.'); return; }
    if (modalPagamento.value === 'dinheiro') {
      const recebidoRaw = modalTrocoInput?.value?.replace(/[^0-9,]/g,'').replace(',','.') || '0';
      const recebido = parseFloat(recebidoRaw) || 0;
      const subtotal = cart.reduce((s,i)=>s+calculateItemTotal(i),0);
      const frete = parseFloat(modalBairro.value || 0);
      const total = subtotal + frete;
      if (recebido < total) { alert('Valor de troco informado é menor que o total.'); return; }
    }

    closeCartModal();
    enviarWhatsapp();
  });
}

function enviarWhatsapp() {
  if (cart.length === 0) { alert('Seu carrinho está vazio!'); return; }

  const nome = document.getElementById('nomecliente')?.value?.trim() || '';
  if (!nome) { alert('Por favor, informe o nome do cliente.'); return; }

  const endereco = document.getElementById('endereco')?.value?.trim() || '';
  if (!endereco) { alert('Por favor, informe o endereço de entrega (ou escreva Retirar no local).'); return; }

  const bairroVal = document.getElementById('bairro')?.value || '';
  if (bairroVal === "") { alert("Por favor, selecione um bairro ou escolha 'Retirar no local'."); return; }

  const pagamentoVal = (document.getElementById('pagamento')?.value || document.getElementById('modal-pagamento')?.value);
  if (!pagamentoVal) { alert('Selecione a forma de pagamento!'); return; }

  let trocoRaw = (document.getElementById('troco')?.value) || (document.getElementById('modal-troco')?.value) || '';
  let trocoNumber = 0;
  if (trocoRaw) {
    const cleaned = trocoRaw.replace(/[^0-9,\.]/g, '').replace(',', '.');
    trocoNumber = parseFloat(cleaned) || 0;
  }

  const observacao = (document.getElementById('obs')?.value || '').trim();

  const subtotal = cart.reduce((s, i) => s + calculateItemTotal(i), 0);
  const frete = parseFloat(document.getElementById('bairro')?.value || 0);
  const total = subtotal + frete;

  // Monta texto de forma segura e somente depois faz encodeURIComponent
  let texto = '🍔 Pedido Mineiro - Hamburgueria Artesanal\n';
  texto += `Cliente: ${nome}\n`;
  texto += `Endereço: ${endereco}\n`;
  texto += '----\n';
  cart.forEach(i => {
    const extrasNames = (i.extras || []).map(e => e.name.replace(/^\s+|\s+$/g, '')).join(', ');
    texto += `${i.qty}x ${i.name} - Carne: ${i.meat} | Ponto: ${i.point}`;
    if (extrasNames) texto += ` | Extras: ${extrasNames}`;
    texto += ` - ${formatBRL(calculateItemTotal(i))}\n`;
  });
  texto += '----\n';
  texto += `Subtotal: ${formatBRL(subtotal)}\n`;
  texto += `Entrega: ${formatBRL(frete)}\n`;
  texto += `Total: ${formatBRL(total)}\n\n`;
  texto += `Forma de pagamento: ${pagamentoVal}\n`;
  if (trocoNumber > 0) {
    texto += `Troco para: ${formatBRL(trocoNumber)}\n`;
    texto += `Troco estimado: ${formatBRL(trocoNumber - total)}\n`;
  }
  if (observacao) texto += `\nObservações: ${observacao}\n`;

  const numero = '5532984550411';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
}

// inicializa
buildProducts();
syncBairrosToModal();
renderCart();
atualizarTotais();

// listeners extra
if (modalPagamento) {
  modalPagamento.addEventListener('change', () => {
    if (modalPagamento.value === 'dinheiro') modalTrocoContainer.style.display = 'block';
    else { modalTrocoContainer.style.display = 'none'; if (modalTrocoInput) { modalTrocoInput.value = ''; modalTrocoInfo.textContent = ''; } }
  });
}

document.getElementById('bairro')?.addEventListener('change', () => { renderCart(); });
