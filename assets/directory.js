const records = {
  classes: [
    {
      title: 'Baila DC Salsa Level 1A - June/July 2026',
      summary: 'Absolute beginner Salsa On2 progressive series reviewed from the official Baila DC class page.',
      style: ['salsa'],
      area: 'dc',
      location: 'Union Market, Washington, DC',
      schedule: 'Mondays 7:00-8:00 PM, 06/01 to 07/06',
      level: 'Absolute beginner',
      source: 'https://bailadc.com/classes',
      policy: ['Registration source link only', 'Price hidden', 'Direct contacts hidden']
    },
    {
      title: 'Salsa With Silvia Tier 0 Group Classes',
      summary: 'Beginner group class entry path for DC and Bethesda schedules, reviewed from official studio pages.',
      style: ['salsa', 'bachata'],
      area: 'dc',
      location: 'Washington, DC',
      schedule: 'See official schedule before attending',
      level: 'Beginner',
      source: 'https://salsawithsilvia.com/group/',
      policy: ['Schedule source link only', 'Price hidden', 'Direct contacts hidden']
    },
    {
      title: 'Ardiente Salsa Social Dance Techniques',
      summary: 'On2 Mambo/Salsa class for Levels 2 and 3, reviewed from the official Ardiente Dance page.',
      style: ['salsa', 'mambo'],
      area: 'md',
      location: 'Rockville, MD',
      schedule: 'Tuesdays 8:30-9:30 PM, 5-week cycle',
      level: 'Levels 2 and 3',
      source: 'https://ardientedance.com/',
      policy: ['Price source link only', 'Registration source link only', 'Direct contacts hidden']
    },
    {
      title: 'Ferocity Bachata Training Team Level 2',
      summary: 'Intermediate-and-up Bachata training team reviewed from the official Ferocity group classes page.',
      style: ['bachata'],
      area: 'dmv',
      location: 'See official source for exact location',
      schedule: 'Wednesdays 8:00-10:00 PM',
      level: 'Intermediate and up',
      source: 'https://www.ferocitydance.com/group-classes.html',
      policy: ['Location source link only', 'Price hidden', 'Direct contacts hidden']
    }
  ],
  studios: [
    {
      title: 'Baila DC',
      summary: 'Salsa organization in the DC metro area offering On2 salsa classes and Baila Thursdays socials.',
      style: ['salsa'],
      area: 'dc',
      location: 'Union Market, Washington, DC',
      source: 'https://bailadc.com/about-us',
      policy: ['Address source link only', 'Direct contacts hidden']
    },
    {
      title: 'Salsa With Silvia - DC',
      summary: 'Washington DC studio location offering group and private dance classes.',
      style: ['salsa', 'bachata'],
      area: 'dc',
      location: 'Georgia Ave NW, Washington, DC',
      source: 'https://salsawithsilvia.com/about/contact/',
      policy: ['Address source link only', 'Direct contacts hidden']
    },
    {
      title: 'Ardiente Dance',
      summary: 'Dance company performing and teaching On2 Mambo/Salsa in DC, Maryland, and Virginia.',
      style: ['salsa', 'mambo'],
      area: 'md',
      location: 'Rockville, MD',
      source: 'https://ardientedance.com/',
      policy: ['Address source link only', 'Direct contacts hidden']
    },
    {
      title: 'Ferocity Dance Company',
      summary: 'Bachata-focused dance company offering group classes, training teams, and studio instruction.',
      style: ['bachata', 'salsa'],
      area: 'dmv',
      location: 'See official source for exact location',
      source: 'https://www.ferocitydance.com/group-classes.html',
      policy: ['Location source link only', 'Direct contacts hidden']
    }
  ],
  instructors: [
    {
      title: 'Luz',
      summary: 'Baila DC instructor listed on the official Baila DC about page.',
      style: ['salsa'],
      area: 'dc',
      location: 'Washington, DC',
      source: 'https://bailadc.com/about-us',
      policy: ['No direct contact displayed', 'Source confirms instructor listing']
    },
    {
      title: 'Silvia Alexiev',
      summary: 'Owner of Salsa With Silvia with an official studio profile.',
      style: ['salsa'],
      area: 'dc',
      location: 'Washington, DC and Bethesda',
      source: 'https://salsawithsilvia.com/about/instructor/silvia-alexiev/',
      policy: ['Profile source link only', 'Direct contacts hidden']
    },
    {
      title: 'David Cuevas',
      summary: 'Ardiente Dance leader and instructor for On2 Mambo/Salsa classes in the DMV area.',
      style: ['salsa', 'mambo'],
      area: 'md',
      location: 'Rockville, MD',
      source: 'https://ardientedance.com/',
      policy: ['Profile source link only', 'Direct contacts hidden']
    },
    {
      title: 'Kat Arias',
      summary: 'Ferocity Dance Company owner, managing director, Bachata choreographer, dancer, and instructor.',
      style: ['bachata'],
      area: 'dmv',
      location: 'See official source for service area',
      source: 'https://www.ferocitydance.com/katarias.html',
      policy: ['Profile source link only', 'Direct contacts hidden']
    }
  ]
};

const filters = {
  style: 'all',
  area: 'all',
  search: ''
};

function normalize(value) {
  return String(value ?? '').toLowerCase();
}

function recordMatches(record) {
  const query = filters.search;
  const text = normalize([record.title, record.summary, record.location, record.level, record.schedule].join(' '));
  const styleMatches = filters.style === 'all' || record.style.includes(filters.style);
  const areaMatches = filters.area === 'all' || record.area === filters.area;
  const searchMatches = query === '' || text.includes(query);
  return styleMatches && areaMatches && searchMatches;
}

function createMeta(label, value) {
  if (!value) return '';
  return `<li><span>${label}</span><strong>${value}</strong></li>`;
}

function renderCard(record, type) {
  const meta = [
    createMeta('Location', record.location),
    createMeta('Schedule', record.schedule),
    createMeta('Level', record.level)
  ].join('');

  return `
    <article class="record-card" data-record-type="${type}" data-visible="true">
      <div>
        <div class="tag-row">${record.style.map((item) => `<span class="tag">${item.replace('_', ' ')}</span>`).join('')}</div>
        <h3>${record.title}</h3>
        <p>${record.summary}</p>
      </div>
      <ul class="meta-list">${meta}</ul>
      <ul class="policy-list">
        ${record.policy.map((item) => `<li><span>Policy</span><strong>${item}</strong></li>`).join('')}
      </ul>
      <div class="card-actions">
        <a class="source-link" href="${record.source}" target="_blank" rel="noreferrer">Official source</a>
      </div>
    </article>
  `;
}

function renderGroup(id, items, type) {
  const container = document.getElementById(id);
  const visibleItems = items.filter(recordMatches);
  container.innerHTML = visibleItems.length
    ? visibleItems.map((record) => renderCard(record, type)).join('')
    : '<div class="empty-state">No reviewed records match the current filters.</div>';
}

function render() {
  renderGroup('class-grid', records.classes, 'class');
  renderGroup('studio-grid', records.studios, 'studio');
  renderGroup('instructor-grid', records.instructors, 'instructor');
}

document.querySelectorAll('[data-filter-group]').forEach((button) => {
  button.addEventListener('click', () => {
    const group = button.dataset.filterGroup;
    filters[group] = button.dataset.filterValue;
    document.querySelectorAll(`[data-filter-group="${group}"]`).forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    render();
  });
});

document.getElementById('search').addEventListener('input', (event) => {
  filters.search = normalize(event.target.value.trim());
  render();
});

render();
