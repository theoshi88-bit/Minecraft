export function initInventory() {
  const slots = document.getElementById('slots');
  const items = ['grass', 'stone', 'dirt', 'sand'];

  items.forEach(item => {
    const el = document.createElement('div');
    el.classList.add('cell');
    el.textContent = item[0].toUpperCase();
    el.dataset.item = item;
    el.onclick = () => selectItem(item);
    slots.appendChild(el);
  });
}

function selectItem(item) {
  console.log('Selected:', item);
}
