const productsData = [
  { id: 1, category: 'combos', name: 'Mineiro', desc: 'Bife artesanal 150g, queijo canastra, chips de banana, tiras de bacon, barbecue e couve crispy. Acompanha maionese mineira.', price: 34.90, img: '/src/images/lanches/mineiro.jpg' },
  { id: 2, category: 'combos', name: 'Chico Bento', desc: 'Bife artesanal 150g, fatias de cheddar, tiras de bacon e pesto mineiro com amendoim.', price: 32.90, img: '/src/images/lanches/chico-bento.jpg' },
  { id: 3, category: 'combos', name: 'Romeu e Julieta', desc: 'Bife artesanal 150g, queijo canastra, tiras de bacon, ketchup de goiabada e salada.', price: 32.90, img: '/src/images/lanches/r-e-j.jpg' },
  { id: 4, category: 'hamburgueres', name: 'Bacon Docinho', desc: 'Bife artesanal 150g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa.', price: 33.90, img: '/src/images/lanches/bacon-docinho.jpg' },
  { id: 5, category: 'hamburgueres', name: 'Bacon Docinho', desc: 'Bife artesanal 150g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa.', price: 33.90, img: '/src/images/lanches/bacon-docinho.jpg' },
  { id: 6, category: 'hamburgueres', name: 'Bacon Docinho', desc: 'Bife artesanal 150g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa.', price: 33.90, img: '/src/images/lanches/bacon-docinho.jpg' },
  { id: 7, category: 'hamburgueres', name: 'Bacon Docinho', desc: 'Bife artesanal 150g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa.', price: 33.90, img: '/src/images/lanches/bacon-docinho.jpg' },
  { id: 8, category: 'hamburgueres', name: 'Bacon Docinho', desc: 'Bife artesanal 150g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa.', price: 33.90, img: '/src/images/lanches/bacon-docinho.jpg' },
  { id: 9, category: 'hamburgueres', name: 'Bacon Docinho', desc: 'Bife artesanal 150g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa.', price: 33.90, img: '/src/images/lanches/bacon-docinho.jpg' },
  { id: 10, category: 'hamburgueres', name: 'Bacon Docinho', desc: 'Bife artesanal 150g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa.', price: 33.90, img: '/src/images/lanches/bacon-docinho.jpg' },
  { id: 11, category: 'hamburgueres', name: 'Bacon Docinho', desc: 'Bife artesanal 150g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa.', price: 33.90, img: '/src/images/lanches/bacon-docinho.jpg' },
  { id: 12, category: 'smashs', name: 'Bacon Docinho', desc: 'Bife artesanal 150g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa.', price: 33.90, img: '/src/images/lanches/bacon-docinho.jpg' },
  { id: 13, category: 'smashs', name: 'Bacon Docinho', desc: 'Bife artesanal 150g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa.', price: 33.90, img: '/src/images/lanches/bacon-docinho.jpg' },
  { id: 14, category: 'smashs', name: 'Bacon Docinho', desc: 'Bife artesanal 150g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa.', price: 33.90, img: '/src/images/lanches/bacon-docinho.jpg' },
  { id: 15, category: 'smashs', name: 'Bacon Docinho', desc: 'Bife artesanal 150g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa.', price: 33.90, img: '/src/images/lanches/bacon-docinho.jpg' },
  { id: 16, category: 'acompanhamentos', name: 'Bacon Docinho', desc: 'Bife artesanal 150g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa.', price: 33.90, img: '/src/images/lanches/bacon-docinho.jpg' },
  { id: 17, category: 'acompanhamentos', name: 'Bacon Docinho', desc: 'Bife artesanal 150g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa.', price: 33.90, img: '/src/images/lanches/bacon-docinho.jpg' },
  { id: 18, category: 'bebidas', name: 'Bacon Docinho', desc: 'Bife artesanal 150g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa.', price: 33.90, img: '/src/images/lanches/bacon-docinho.jpg' },
  { id: 19, category: 'bebidas', name: 'Bacon Docinho', desc: 'Bife artesanal 150g, fatias de cheddar, requeijão, bacon caramelado e picles de cebola roxa.', price: 33.90, img: '/src/images/lanches/bacon-docinho.jpg' },
]

const extras = [
  { id: 'cheddar', name: 'Fatias de Cheddar', price: 4.00 },
  { id: 'canastra', name: 'Queijo Canastra', price: 6.00 },
  { id: 'bacon', name: 'Tiras de Bacon', price: 4.00 },
  { id: 'chips', name: 'Chips de Banana', price: 4.00 },
  { id: 'couve', name: 'Couve Crispy', price: 4.00 },
  { id: 'pesto', name: 'Pesto Mineiro', price: 5.00 },
  { id: 'caramel', name: 'Bacon Caramelado', price: 5.00 },
  { id: 'cebolap', name: 'Cebola Caremelizada', price: 5.00 },
  { id: 'requei', name: 'Requeijão', price: 5.00 },
]



let cart = []

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
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function buildProducts() {
  const categories = {
    combos: document.getElementById('grid-combos'),
    hamburgueres: document.getElementById('grid-hamburgueres'),
    smashs: document.getElementById('grid-smashs'),
    acompanhamentos: document.getElementById('grid-acompanhamentos'),
    bebidas: document.getElementById('grid-bebidas')
  };

  productsData.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name} <span class="price">${formatBRL(p.price)}</span></h3>
      <p>${p.desc || ''}</p>
      <div class="controls">
        <select id="meat-${p.id}"><option value="Bovino">Bovino</option><option value="Frango">Frango</option></select>
        <select id="point-${p.id}"><option value="Malpassado">Malpassado</option><option value="AoPonto">Ao Ponto</option><option value="BemPassado">Bem Passado</option></select>
        <select id="qty-${p.id}"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select>
        <button class="btn-add" onclick="addToCart(${p.id})">Adicionar</button>
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

    categories[p.category].appendChild(div);
  });
}


function addToCart(id) {
  const prod = productsData.find(p => p.id === id)
  const meat = document.getElementById(`meat-${id}`).value
  const point = document.getElementById(`point-${id}`).value
  const qty = parseInt(document.getElementById(`qty-${id}`).value)
  const container = event.target.closest('.product')
  const checkedExtras = Array.from(container.querySelectorAll('input[type=checkbox]:checked'))
  const chosenExtras = checkedExtras.map(ch => ({ id: ch.dataset.extra, name: ch.parentNode.textContent.trim(), price: parseFloat(ch.dataset.price) }))

  cart.push({
    id: Date.now() + Math.random(),
    prodId: prod.id,
    name: prod.name,
    price: prod.price,
    qty,
    meat,
    point,
    extras: chosenExtras
  })
  renderCart()
}

function renderCart() {
  // Atualiza lista no aside (desktop)
  const list = document.getElementById('cart-list');
  if (list) {
    list.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      const extrasText = item.extras.length ? '<br><small>Extras: ' + item.extras.map(e => e.name.replace(/^\s+|\s+$/g, '')).join(', ') + '</small>' : '';
      li.innerHTML = `${item.qty}x ${item.name} <br> Carne: ${item.meat} | Ponto: ${item.point} ${extrasText} <br> ${formatBRL(calculateItemTotal(item))} <button onclick="removeItem('${item.id}')" style="margin-left:8px">Remover</button>`;
      list.appendChild(li);
    });
  }

  // Atualiza modal (mobile/confirm)
  if (modalCartList) {
    modalCartList.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      const extrasText = item.extras.length ? ' (Extras: ' + item.extras.map(e => e.name.replace(/^\s+|\s+$/g, '')).join(', ') + ')' : '';
      li.innerHTML = `${item.qty}x ${item.name}${extrasText} — ${formatBRL(calculateItemTotal(item))}`;
      modalCartList.appendChild(li);
    });
  }

  // Atualiza totais na página e no modal
  atualizarTotais(); // mantém sua função para #subtotal, #frete, #total

  // copia valores para modal
  const subtotal = cart.reduce((s,i)=>s+calculateItemTotal(i),0);
  const frete = parseFloat(document.getElementById('bairro').value || 0);
  const total = subtotal + frete;

  if (modalSubtotal) modalSubtotal.textContent = 'Subtotal: ' + formatBRL(subtotal);
  if (modalFrete) modalFrete.textContent = 'Entrega: ' + formatBRL(frete);
  if (modalTotal) modalTotal.textContent = 'Total: ' + formatBRL(total);

  // Atualiza badge do contador
  const totalItems = cart.reduce((s,i)=>s+i.qty,0);
  if (cartCountBadge) cartCountBadge.textContent = totalItems;
}

function openCartModal() {
  // pré-preenche campos do modal com valores atuais
  modalNome.value = document.getElementById('nomecliente')?.value || '';
  modalEndereco.value = document.getElementById('endereco')?.value || '';
  modalPagamento.value = document.getElementById('pagamento')?.value || '';
  modalObs.value = document.getElementById('obs')?.value || '';
  // bairro
  modalBairro.value = document.getElementById('bairro')?.value || '';

  // exibir troco se necessário
  if (modalPagamento.value === 'dinheiro') modalTrocoContainer.style.display = 'block';
  else modalTrocoContainer.style.display = 'none';

  // atualizar listas/totais
  renderCart();

  cartModal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

function closeCartModal() {
  cartModal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}
// listeners de interação
if (floatingCartBtn) floatingCartBtn.addEventListener('click', openCartModal);
if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCartModal);
if (confirmCloseBtn) confirmCloseBtn.addEventListener('click', closeCartModal);

// fecha modal ao clicar fora do conteúdo
cartModal.addEventListener('click', (e) => {
  if (e.target === cartModal) closeCartModal();
});

// máscara simples: aceita R$ 0,00
modalTrocoInput.addEventListener('input', () => {
  let v = modalTrocoInput.value.replace(/\D/g, '');
  if(!v) { modalTrocoInput.value = ''; modalTrocoInfo.textContent = ''; return; }
  v = (parseInt(v) / 100).toFixed(2);
  modalTrocoInput.value = v.toString().replace('.', ',').replace(/^/, 'R$ ');
  calcularTrocoModal();
});

function calcularTrocoModal() {
  // total exibido no modalTotal (texto "Total: R$ X,XX")
  let totalText = modalTotal.textContent.replace(/[^0-9,-]/g,'').replace(',','.');
  let total = parseFloat(totalText) || 0;
  let recebido = modalTrocoInput.value.replace(/[^0-9,-]/g,'').replace(',','.');
  recebido = parseFloat(recebido) || 0;
  if (recebido >= total) {
    const troco = recebido - total;
    modalTrocoInfo.style.color = '#007a00';
    modalTrocoInfo.textContent = `Troco: R$ ${troco.toFixed(2).replace('.',',')}`;
  } else {
    modalTrocoInfo.style.color = '#b30000';
    modalTrocoInfo.textContent = 'Valor menor que o total';
  }
}



function calculateItemTotal(item) {
  const extrasSum = item.extras.reduce((s, e) => s + e.price, 0)
  return (item.price + extrasSum) * item.qty
}

function atualizarTotais() {
  const subtotalEl = document.getElementById('subtotal')
  const freteEl = document.getElementById('frete')
  const totalEl = document.getElementById('total')
  const subtotal = cart.reduce((s, i) => s + calculateItemTotal(i), 0)
  const frete = parseFloat(document.getElementById('bairro').value || 0);

  function syncBairrosToModal() {
  // pega as opções do select original (id="bairro") e copia para modal
  const original = document.getElementById('bairro');
  if (!original || !modalBairro) return;
  modalBairro.innerHTML = original.innerHTML;
}


  subtotalEl.textContent = 'Subtotal: ' + formatBRL(subtotal)
  freteEl.textContent = 'Entrega: ' + formatBRL(frete)
  totalEl.textContent = 'Total: ' + formatBRL(subtotal + frete)
}

function removeItem(id) {
  cart = cart.filter(i => i.id != id)
  renderCart()
}

function calcularEntrega() {
  atualizarTotais()
}

function toggleTroco() {
  const pagamento = document.getElementById('pagamento').value;
  const campoTroco = document.getElementById('campo-troco');

  if (pagamento === 'dinheiro') {
    campoTroco.style.display = 'block';
  } else {
    campoTroco.style.display = 'none';
    document.getElementById('troco').value = '';
  }
}


// function formaPagamento() {
//   atualizarTotais()
// }


confirmSendBtn.addEventListener('click', () => {
  // transferir valores do modal para inputs normais (para manter compatibilidade)
  if (document.getElementById('nomecliente')) document.getElementById('nomecliente').value = modalNome.value;
  if (document.getElementById('endereco')) document.getElementById('endereco').value = modalEndereco.value;
  if (document.getElementById('bairro')) document.getElementById('bairro').value = modalBairro.value;
  if (document.getElementById('pagamento')) document.getElementById('pagamento').value = modalPagamento.value;
  if (document.getElementById('troco')) document.getElementById('troco').value = modalTrocoInput.value.replace(/\s/g,'');
  if (document.getElementById('obs')) document.getElementById('obs').value = modalObs.value;

  // Validações (nome, endereco, bairro, pagamento, troco se dinheiro)
  if (!modalNome.value.trim()) { alert('Por favor, informe seu nome.'); return; }
  if (!modalEndereco.value.trim()) { alert('Por favor, informe o endereço.'); return; }
  if (!modalBairro.value) { alert('Por favor, selecione um bairro.'); return; }
  if (!modalPagamento.value) { alert('Por favor, selecione a forma de pagamento.'); return; }
  if (modalPagamento.value === 'dinheiro') {
    // extrai número do input troco
    const recebidoRaw = modalTrocoInput.value.replace(/[^0-9,]/g,'').replace(',','.');
    const recebido = parseFloat(recebidoRaw) || 0;
    // total:
    const subtotal = cart.reduce((s,i)=>s+calculateItemTotal(i),0);
    const frete = parseFloat(modalBairro.value || 0);
    const total = subtotal + frete;
    if (recebido < total) { alert('Valor de troco informado é menor que o total.'); return; }
  }

  // Se passou nas validações, chama rotina de envio (reaproveita enviarWhatsapp)
  closeCartModal();
  enviarWhatsapp(); // sua função já prepara a mensagem; agora ela encontrará os inputs atualizados
});



function enviarWhatsapp() {
  if (cart.length === 0) { alert('Seu carrinho está vazio!'); return; }

  const nome = document.getElementById('nomecliente').value.trim();
  if (!nome) { alert('Por favor, informe o nome do cliente.'); return; }

  const endereco = document.getElementById('endereco').value.trim();
  if (!endereco) { alert('Por favor, informe o endereço de entrega (ou escreva Retirar no local).'); return; }

  const bairroVal = document.getElementById('bairro').value;
  if (bairroVal === "") { alert("Por favor, selecione um bairro ou escolha 'Retirar no local'."); return; }

  const pagamentoVal = (document.getElementById('pagamento')?.value || document.getElementById('modal-pagamento')?.value);
  if (!pagamentoVal) { alert('Selecione a forma de pagamento!'); return; }

  // 1. Calcula os totais primeiro para poder comparar
  const subtotal = cart.reduce((s, i) => s + calculateItemTotal(i), 0);
  const frete = parseFloat(document.getElementById('bairro').value || 0);
  const total = subtotal + frete;

  // 2. Prepara o valor do troco
  let trocoRaw = (document.getElementById('troco')?.value) || (document.getElementById('modal-troco')?.value) || '';
  let trocoNumber = 0;
  
  if (trocoRaw) {
    // Remove tudo que não é número ou vírgula/ponto
    const cleaned = trocoRaw.replace(/[^0-9,\.]/g, '').replace(',', '.');
    trocoNumber = parseFloat(cleaned) || 0;
  }

  // --- NOVA VALIDAÇÃO DE TROCO ---
  if (pagamentoVal === 'dinheiro') {
    // Se o valor informado for menor que o total (permitimos uma margem de erro mínima para arredondamento)
    if (trocoNumber < total - 0.01) {
      alert(`O valor para troco (${formatBRL(trocoNumber)}) é menor que o total do pedido (${formatBRL(total)}).\n\nPor favor, informe um valor maior ou igual ao total.`);
      return; // O return aqui impede que o código continue e abra o WhatsApp
    }
  }
  // -------------------------------

  const observacao = (document.getElementById('obs')?.value || '').trim();

  // Construir mensagem
  let mensagem = `🍔 *Pedido Mineiro - Hamburgueria Artesanal*%0A`;
  mensagem += `Cliente: ${encodeURIComponent(nome)}%0A`;
  mensagem += `Endereço: ${encodeURIComponent(endereco)}%0A`;
  mensagem += `----%0A`;

  cart.forEach(i => {
    const extrasNames = i.extras.map(e => e.name.replace(/^\s+|\s+$/g, '')).join(', ');
    mensagem += `${i.qty}x ${i.name} - Carne: ${i.meat} | Ponto: ${i.point}`;
    if (extrasNames) mensagem += ` | Extras: ${extrasNames}`;
    mensagem += ` - ${formatBRL(calculateItemTotal(i))}%0A`;
  });

  mensagem += `----%0ASubtotal: ${formatBRL(subtotal)}%0AEntrega: ${formatBRL(frete)}%0ATotal: ${formatBRL(total)}%0A`;
  mensagem += `%0AForma de pagamento: ${encodeURIComponent(pagamentoVal)}`;

  if (pagamentoVal === 'dinheiro' && trocoNumber > 0) {
    mensagem += `%0ATroco para: ${formatBRL(trocoNumber)}`;
    mensagem += `%0ATroco estimado: ${formatBRL(trocoNumber - total)}`;
  }

  if (observacao) mensagem += `%0A%0AObservações: ${encodeURIComponent(observacao)}`;

  const numero = '5532984550411';

  const url = `https://wa.me/${numero}?text=${mensagem}`; 
  window.open(url, '_blank');
}

buildProducts();


syncBairrosToModal();


renderCart();
atualizarTotais();


modalPagamento.addEventListener('change', () => {
  if (modalPagamento.value === 'dinheiro') modalTrocoContainer.style.display = 'block';
  else { modalTrocoContainer.style.display = 'none'; modalTrocoInput.value = ''; modalTrocoInfo.textContent = ''; }
});


document.getElementById('bairro')?.addEventListener('change', () => { renderCart(); });

