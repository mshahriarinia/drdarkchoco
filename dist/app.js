'use strict';
const menu = document.querySelector('.menu');
const nav = document.querySelector('#main-nav');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? 'Close' : 'Menu';
  nav.classList.toggle('open', open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    menu.click(); menu.focus();
  }
});
const filters = [...document.querySelectorAll('[data-filter]')];
function filterCollections(category, updateUrl = true) {
  const valid = filters.some(button => button.dataset.filter === category) ? category : 'all';
  let count = 0;
  document.querySelectorAll('.catalog [data-category]').forEach(card => {
    card.hidden = valid !== 'all' && card.dataset.category !== valid;
    if (!card.hidden) count++;
  });
  filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === valid)));
  const status = document.querySelector('#result-count');
  if (status) status.textContent = `${count} ${count === 1 ? 'collection' : 'collections'}`;
  if (updateUrl) {
    const url = new URL(location.href);
    valid === 'all' ? url.searchParams.delete('category') : url.searchParams.set('category', valid);
    history.pushState({}, '', url);
  }
}
if (filters.length) {
  filterCollections(new URLSearchParams(location.search).get('category') || 'all', false);
  filters.forEach(button => button.addEventListener('click', () => filterCollections(button.dataset.filter)));
  addEventListener('popstate', () => filterCollections(new URLSearchParams(location.search).get('category') || 'all', false));
}
const form = document.querySelector('#inquiry-form');
if (form) {
  const product = document.querySelector('#product');
  const selected = new URLSearchParams(location.search).get('product');
  if ([...product.options].some(option => option.value === selected)) product.value = selected;
  const output = document.querySelector('#inquiry-output');
  const name = document.querySelector('#name');
  const message = document.querySelector('#message');
  form.addEventListener('input', () => {
    name.setCustomValidity(''); message.setCustomValidity('');
    output.hidden = true;
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    name.setCustomValidity(name.value.trim() ? '' : 'Please enter your name.');
    message.setCustomValidity(message.value.trim().length >= 10 ? '' : 'Please write at least 10 characters.');
    if (!form.reportValidity()) return;
    const topic = product.value === 'general' ? 'your chocolates' : product.selectedOptions[0].text;
    document.querySelector('#inquiry-draft').value = `Hello Dr.darkChoco! My name is ${name.value.trim()}. I’m interested in ${topic}.\n\n${message.value.trim()}\n\nCould you let me know the available options and prices? Thank you!`;
    document.querySelector('#copy-status').textContent = '';
    output.hidden = false;
    document.querySelector('#inquiry-draft').focus();
  });
  document.querySelector('#copy-message').addEventListener('click', async () => {
    const draft = document.querySelector('#inquiry-draft');
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText(draft.value);
      status.textContent = 'Copied. Open Instagram to paste and send your message. Nothing has been sent yet.';
    } catch {
      draft.focus(); draft.select();
      status.textContent = 'Automatic copying is unavailable. Your text is selected; use Copy on your device, then paste it into Instagram.';
    }
  });
}
