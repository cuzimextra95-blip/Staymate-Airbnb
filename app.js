const stays = [
  {
    id: 'villa-solara',
    name: 'Villa Solara with Private Pool',
    location: 'Candolim, North Goa',
    type: 'Entire villa · 2 bedrooms · Private pool',
    rating: '4.92',
    reviewCount: '128',
    match: 96,
    price: 14200,
    total: 42600,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDq5rt778dT6NqF4GZpptw5FdlBMPHoyMbs_-x9oi57hPieuyRGya1_WWDUb3z5QelKPxVr-LfJv5Oi32fcK64gxdK2lFWbI8JEMKjUUNKgz3BwuDOghSAvbz4tmgo33LPn-Zf4uOlAQSF74D1xZFAKeRGPE8DLXFC7Ab0CmbQE3dB5fQ16M39b0FuNS5Q36c8aNAriuAzk1KU1Bb6-gDNtJwuOEoiHZAZsiOZ9EhGi5PZ4SP4v_KRb_g',
    imageAlt: 'Sunlit villa and private swimming pool in a tropical garden',
    fit: 'A flat walk to the beach and a pool gate suit your family priorities.',
    tradeoff: 'The sample nightly price is close to your budget ceiling.',
    reviews: [
      ['Cleanliness', 'Guests often describe the rooms and shared spaces as spotless.', 'Positive theme · sample review data'],
      ['Family suitability', 'Families mention the pool setup and room to settle in.', 'Positive theme · sample review data'],
      ['Location', 'The beach route is described as a short, mostly flat walk.', 'Mixed theme · sample review data'],
      ['Quiet nights', 'Most sample comments mention quiet evenings; a few note weekend activity.', 'Mixed theme · sample review data']
    ]
  },
  {
    id: 'casa-palms',
    name: 'Casa Palms Beachside Heritage',
    location: 'Anjuna Beach, Goa',
    type: 'Entire cottage · Sea view · Chef on request',
    rating: '4.88',
    reviewCount: '94',
    match: 74,
    price: 13500,
    total: 40500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDP3xVvNv3d1XZjvWOp29hCfcD05sn5gxW-nk0a6wNBPyN2x-lYXq0SWZ_o4F5GxRVfxfdD9n9alF4Ktpyxf7Mj9DMpPEdbdxPMOAnZZ4IWmceMKUTaPrZdGNUpKoApbKXwYaJ3nFcni8ud9ZK9jbojtvJ_PR9bUdXXTgrEmE_gU8cjZVlH-EgqilqugJCrtffRwAHPkXktPXkV_cSq7VPBp8tjSj9orDLDQ3ALvmJuXxpaaoXgNK0oqg',
    imageAlt: 'Coastal heritage cottage with palms and a sea view',
    fit: 'A beachside setting and lower nightly price stand out.',
    tradeoff: 'The route to the beach includes steep steps and may not suit a stroller.',
    reviews: [
      ['Cleanliness', 'Guests commonly praise the linen and well-kept interiors.', 'Positive theme · sample review data'],
      ['Family suitability', 'The layout works for families, but access to the beach needs planning.', 'Trade-off · sample review data'],
      ['Location', 'Close to the shoreline, with a steep stair route noted in sample comments.', 'Mixed theme · sample review data'],
      ['Quiet nights', 'Evenings are generally calm, with some weekend noise reported.', 'Mixed theme · sample review data']
    ]
  },
  {
    id: 'susegad-coco',
    name: 'Susegad Coco Haven',
    location: 'Morjim, North Goa',
    type: 'Eco villa · 2 bedrooms · Wading pool',
    rating: '4.91',
    reviewCount: '86',
    match: 92,
    price: 15800,
    total: 47400,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmY1OlO4muCuj_DMWKvvaUbI3-XJDZOHpiQ1g5bc4KSS0md2kcRd9wEQqkEc4-jVZX0qwQIdAnb_1T5fzbn-hkBT0liK1xIgCwLko9879e18ZkKo8XL-LlWHk8pe2bhju-bruL4q6hxC76hvf_77CrSf4KSdV4jyaycD76_0OxrGAMsDcGDvOII9ic13sYqf6WzMdpgbcOHfQTZk-fPnV7svJKLAzUjFKcRESECikGymOKLkqED8ixlA',
    imageAlt: 'Open-air tropical villa beside a shallow pool and coconut grove',
    fit: 'A peaceful setting and family-friendly layout are strong matches.',
    tradeoff: 'The example nightly price is above your current budget.',
    reviews: [
      ['Cleanliness', 'Sample guests describe the rooms as clean and thoughtfully maintained.', 'Positive theme · sample review data'],
      ['Family suitability', 'Families like the open layout and shallow wading pool.', 'Positive theme · sample review data'],
      ['Location', 'The beach is nearby, though most visitors use a short ride.', 'Mixed theme · sample review data'],
      ['Quiet nights', 'The surrounding grove is often described as peaceful.', 'Positive theme · sample review data']
    ]
  }
];

const state = {
  view: 'discover',
  savedIds: new Set(),
  compareIds: new Set(),
  activeReviewId: stays[0].id,
  destination: 'North Goa',
  dates: '12–15 Jan',
  guests: 3,
  budget: 15000,
  brief: 'Find me a family-friendly stay in North Goa with great location and cleanliness under ₹15,000 a night.',
  preferences: new Set(['Family-friendly', 'Great location', 'Cleanliness'])
};

const money = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 });
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const byId = (id) => document.getElementById(id);
let toastTimer;

function formatRupees(amount) {
  return `₹${money.format(amount)}`;
}

function sortedStays() {
  const order = byId('sort-order').value;
  return [...stays].sort((first, second) => {
    if (order === 'price-low') return first.price - second.price;
    if (order === 'rating') return Number(second.rating) - Number(first.rating);
    return second.match - first.match;
  });
}

function cardMarkup(stay) {
  const saved = state.savedIds.has(stay.id);
  const compared = state.compareIds.has(stay.id);
  const budgetMessage = stay.price <= state.budget ? 'Within your nightly budget' : `${formatRupees(stay.price - state.budget)} above your budget`;
  return `
    <article class="stay-card" data-testid="stay-card-${stay.id}">
      <div class="stay-photo-wrap">
        <img class="stay-photo" src="${stay.image}" alt="${escapeHtml(stay.imageAlt)}" loading="lazy">
        <span class="match-label"><span class="material-symbols-outlined" aria-hidden="true">auto_awesome</span>${stay.match}% preference fit</span>
        <span class="photo-label">Example listing</span>
      </div>
      <div class="stay-card-content">
        <div class="card-meta"><span>${escapeHtml(stay.location)}</span><span class="card-rating"><span class="star" aria-hidden="true">★</span>${stay.rating} <span>(${stay.reviewCount})</span></span></div>
        <h3 class="stay-title">${escapeHtml(stay.name)}</h3>
        <p class="stay-description">${escapeHtml(stay.type)}</p>
        <div class="match-reason"><span class="material-symbols-outlined" aria-hidden="true">check_circle</span><span>${escapeHtml(stay.fit)}</span></div>
        <div class="tradeoff"><span class="material-symbols-outlined" aria-hidden="true">info</span><span>${escapeHtml(stay.tradeoff)} <strong>${escapeHtml(budgetMessage)}.</strong></span></div>
        <div class="price-row"><div><span class="price-amount">${formatRupees(stay.price)}</span><span class="price-unit"> / night</span><span class="total-price">${formatRupees(stay.total)} example total · 3 nights</span></div></div>
        <div class="card-actions">
          <button class="secondary-button" type="button" data-action="reviews" data-id="${stay.id}"><span class="material-symbols-outlined" aria-hidden="true">rate_review</span>Review insights</button>
          <button class="save-button" type="button" data-action="save" data-id="${stay.id}" aria-pressed="${saved}" aria-label="${saved ? 'Remove' : 'Save'} ${escapeHtml(stay.name)}"><span class="material-symbols-outlined" aria-hidden="true">${saved ? 'bookmark_added' : 'bookmark_add'}</span>${saved ? 'Saved' : 'Save'}</button>
          <button class="compare-button" type="button" data-action="compare" data-id="${stay.id}" aria-pressed="${compared}"><span class="material-symbols-outlined" aria-hidden="true">${compared ? 'check' : 'add'}</span>${compared ? 'Comparing' : 'Compare'}</button>
          <button class="quiet-button" type="button" data-action="handoff" data-id="${stay.id}"><span class="material-symbols-outlined" aria-hidden="true">open_in_new</span>View stay</button>
        </div>
      </div>
    </article>`;
}

function renderCards() {
  const cards = sortedStays().map(cardMarkup).join('');
  byId('stay-grid').innerHTML = cards;
  const savedStays = sortedStays().filter((stay) => state.savedIds.has(stay.id));
  byId('saved-grid').innerHTML = savedStays.length
    ? savedStays.map(cardMarkup).join('')
    : '<div class="empty-state"><div><span class="material-symbols-outlined" aria-hidden="true">bookmark_add</span><h3>Your shortlist starts here</h3><p>Save a stay to keep it close while you explore and compare your options.</p><button class="text-button" type="button" data-view="discover">Explore stays →</button></div></div>';
  updateCounts();
}

function updateCounts() {
  const compareCount = state.compareIds.size;
  const savedCount = state.savedIds.size;
  byId('compare-count').textContent = compareCount;
  byId('saved-count').textContent = savedCount;
  byId('mobile-compare-count').textContent = compareCount;
  byId('mobile-saved-count').textContent = savedCount;
  byId('compare-tray-count').textContent = `${compareCount} ${compareCount === 1 ? 'stay' : 'stays'} selected`;
  byId('compare-tray').hidden = compareCount === 0 || state.view === 'compare';
}

function setView(view) {
  state.view = view;
  document.querySelectorAll('[data-panel]').forEach((panel) => {
    panel.hidden = panel.dataset.panel !== view;
  });
  document.querySelectorAll('[data-view]').forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });
  byId('compare-tray').hidden = state.compareIds.size === 0 || view === 'compare';
  if (view === 'compare') renderComparison();
  if (view === 'reviews') renderReviews();
  if (view === 'saved') renderCards();
  if (window.matchMedia('(max-width: 760px)').matches) {
    byId('results-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function updateBriefSummary() {
  const tags = [...state.preferences].map((preference) => `<span class="brief-chip">${escapeHtml(preference)}</span>`).join('');
  byId('applied-brief').innerHTML = `<span class="brief-label">YOUR PRIORITIES</span>${tags || '<span class="brief-chip">No priorities selected</span>'}<span class="brief-chip">${escapeHtml(state.guests)} guests</span><span class="brief-chip">${escapeHtml(state.dates)}</span><span class="brief-chip">Up to ${formatRupees(state.budget)} / night</span>`;
  byId('results-context').textContent = `EXAMPLE STAYS · ${state.destination.toUpperCase()}`;
  byId('results-description').textContent = `Showing concept listings against your ${formatRupees(state.budget)} nightly budget. Inventory is sample data, not a live search.`;
}

function renderComparison() {
  const selected = stays.filter((stay) => state.compareIds.has(stay.id));
  if (selected.length < 2) {
    byId('comparison-content').innerHTML = `<div class="empty-state comparison-empty"><div><span class="material-symbols-outlined" aria-hidden="true">compare_arrows</span><h3>Select at least two stays</h3><p>Go back to Discover and choose Compare on the stays you want to weigh side by side.</p><button class="primary-button" type="button" data-view="discover">Explore stays</button></div></div>`;
    return;
  }
  const rows = [
    ['Nightly price', (stay) => formatRupees(stay.price), (stay) => stay.price <= state.budget ? 'is-positive' : 'is-caution'],
    ['Guest rating', (stay) => `${stay.rating} / 5`, () => ''],
    ['Preference fit', (stay) => `${stay.match}%`, () => 'is-positive'],
    ['Location', (stay) => stay.location, () => ''],
    ['Best for', (stay) => stay.fit, () => ''],
    ['Trade-off', (stay) => stay.tradeoff, () => 'is-caution']
  ];
  const columns = `minmax(135px, 0.72fr) repeat(${selected.length}, minmax(190px, 1fr))`;
  const cells = [];
  cells.push('<div class="comparison-cell comparison-label">STAY</div>');
  selected.forEach((stay) => {
    cells.push(`<div class="comparison-cell comparison-property"><img src="${stay.image}" alt="${escapeHtml(stay.imageAlt)}" loading="lazy"><h3>${escapeHtml(stay.name)}</h3><p>${escapeHtml(stay.location)}</p></div>`);
  });
  rows.forEach(([label, value, tone]) => {
    cells.push(`<div class="comparison-cell comparison-label">${label}</div>`);
    selected.forEach((stay) => cells.push(`<div class="comparison-cell comparison-value ${tone(stay)}">${escapeHtml(value(stay))}</div>`));
  });
  byId('comparison-content').innerHTML = `<div class="comparison-scroll" role="region" aria-label="Stay comparison table" tabindex="0"><div class="comparison-grid" style="grid-template-columns:${columns}">${cells.join('')}</div></div><p class="review-disclaimer">Comparison values are illustrative. Check listing details and current prices before booking.</p>`;
}

function renderReviews() {
  const select = byId('review-stay');
  select.innerHTML = stays.map((stay) => `<option value="${stay.id}" ${stay.id === state.activeReviewId ? 'selected' : ''}>${escapeHtml(stay.name)}</option>`).join('');
  const stay = stays.find((item) => item.id === state.activeReviewId) || stays[0];
  byId('review-content').innerHTML = `
    <div class="review-layout">
      <article class="review-property"><img src="${stay.image}" alt="${escapeHtml(stay.imageAlt)}" loading="lazy"><div class="review-property-copy"><p class="section-kicker">ILLUSTRATIVE STAY</p><h3>${escapeHtml(stay.name)}</h3><p>${escapeHtml(stay.location)} · ${stay.rating} guest rating</p></div></article>
      <div><div class="review-list">${stay.reviews.map(([topic, summary, source]) => `<article class="review-insight"><div class="review-insight-head"><h3>${escapeHtml(topic)}</h3><span class="review-sentiment">Sample theme</span></div><p>${escapeHtml(summary)}</p><span class="review-evidence"><span class="material-symbols-outlined" aria-hidden="true">format_quote</span>${escapeHtml(source)}</span></article>`).join('')}</div><p class="review-disclaimer">These summaries demonstrate the interface only. They are not generated from actual guest reviews.</p></div>
    </div>`;
}

function showToast(message) {
  const toast = byId('toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2400);
}

function handleAction(action, id) {
  const stay = stays.find((item) => item.id === id);
  if (action === 'save' && stay) {
    if (state.savedIds.has(id)) state.savedIds.delete(id);
    else state.savedIds.add(id);
    renderCards();
    showToast(state.savedIds.has(id) ? `${stay.name} added to your shortlist.` : `${stay.name} removed from your shortlist.`);
  }
  if (action === 'compare' && stay) {
    if (state.compareIds.has(id)) {
      state.compareIds.delete(id);
    } else if (state.compareIds.size < 3) {
      state.compareIds.add(id);
    } else {
      showToast('Compare up to three stays at a time.');
      return;
    }
    renderCards();
    updateCounts();
  }
  if (action === 'reviews' && stay) {
    state.activeReviewId = id;
    setView('reviews');
  }
  if (action === 'handoff' && stay) {
    byId('handoff-title').textContent = `Review ${stay.name}`;
    byId('handoff-description').textContent = 'This concept would hand off to the stay listing. No booking is made from this prototype.';
    byId('handoff-dialog').showModal();
  }
}

document.addEventListener('click', (event) => {
  const viewButton = event.target.closest('[data-view]');
  if (viewButton) {
    setView(viewButton.dataset.view);
    return;
  }
  const actionButton = event.target.closest('[data-action]');
  if (actionButton) handleAction(actionButton.dataset.action, actionButton.dataset.id);
  if (event.target.closest('[data-close-dialog]')) byId('handoff-dialog').close();
});

byId('preference-chips').addEventListener('click', (event) => {
  const chip = event.target.closest('[data-preference]');
  if (!chip) return;
  const preference = chip.dataset.preference;
  if (state.preferences.has(preference)) state.preferences.delete(preference);
  else state.preferences.add(preference);
  chip.classList.toggle('is-selected', state.preferences.has(preference));
  chip.setAttribute('aria-pressed', String(state.preferences.has(preference)));
});

byId('search-form').addEventListener('submit', (event) => {
  event.preventDefault();
  state.destination = byId('destination').value.trim() || 'your destination';
  state.dates = byId('dates').value.trim() || 'Dates flexible';
  state.guests = Number(byId('guests').value);
  state.budget = Math.max(1000, Number(byId('budget').value) || 15000);
  state.brief = byId('trip-brief').value.trim();
  updateBriefSummary();
  renderCards();
  setView('discover');
  showToast('Your trip brief is ready. These are example stays, not live results.');
  byId('results-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

byId('sort-order').addEventListener('change', renderCards);
byId('review-stay').addEventListener('change', (event) => {
  state.activeReviewId = event.target.value;
  renderReviews();
});

updateBriefSummary();
renderCards();
renderReviews();
