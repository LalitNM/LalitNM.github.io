AOS.init();

const sheetID = '1_WaQKagDYDmCu4NjxDXRBVRNnepaVw35UNEuXsSqtV8';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json&sheet=`;

let isDark = false;

document.getElementById('themeToggle').addEventListener('click', () => {
    isDark = !isDark;
    const body = document.body;
    body.classList.toggle('theme-dark', isDark);
    body.classList.toggle('theme-light', !isDark);
    document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌙';

    // Switch all cards
    document.querySelectorAll('.card-theme').forEach(card => {
        card.classList.toggle('theme-dark', isDark);
        card.classList.toggle('theme-light', !isDark);
    });
});

async function fetchSheet(sheetName) {
    const res = await fetch(base + sheetName);
    const text = await res.text();
    const json = JSON.parse(text.substr(47).slice(0, -2));
    return json.table;
}

function renderTimeline(containerID, rows) {
    const container = document.getElementById(containerID);
    rows.forEach(row => {
        const [role, org, start, end, desc] = row.c.map(c => c?.v || '');
        const html = `
      <div class="timeline-item" data-aos="fade-up">
        <h5><strong>${role}</strong> – ${org}</h5>
        <small>${start} – ${end}</small>
        <p>${desc}</p>
      </div>`;
        container.insertAdjacentHTML('beforeend', html);
    });
}

function renderProjects(rows) {
    const grid = document.getElementById('projects-grid');
    rows.forEach(row => {
        const [title, desc, link] = row.c.map(c => c?.v || '');
        const html = `
      <div class="col-md-6 mb-4" data-aos="fade-up">
        <div class="card card-theme h-100 p-3 d-flex flex-column justify-content-between">
          <div>
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${desc}</p>
          </div>
          ${link ? `<a href="${link}" target="_blank" class="btn btn-sm btn-outline-teal align-self-start mt-2">🔗 View</a>` : ''}
        </div>
      </div>`;
        grid.insertAdjacentHTML('beforeend', html);
    });
}

function renderPublications(rows) {
    const grid = document.getElementById('publications-grid');
    rows.forEach(row => {
        const [title, journal, year, link] = row.c.map(c => c?.v || '');
        const html = `
      <div class="col-md-6 mb-4" data-aos="fade-up">
        <div class="card card-theme p-3 h-100">
          <h6><strong>${title}</strong></h6>
          <p class="mb-1"><em>${journal}</em>, ${year}</p>
          ${link ? `<a href="${link}" target="_blank">📄 View Publication</a>` : ''}
        </div>
      </div>`;
        grid.insertAdjacentHTML('beforeend', html);
    });
}
function renderAchievements(rows) {
    const grid = document.getElementById('achievements-grid');
    rows.forEach(row => {
        const [title, year, org, desc] = row.c.map(c => c?.v || '');
        const html = `
      <div class="col-md-6 mb-4" data-aos="fade-up">
        <div class="card card-theme p-3 h-100">
          <h6 class="fw-bold">${title}</h6>
          <small class="text-muted">${org}, ${year}</small>
          <p class="mt-2">${desc}</p>
        </div>
      </div>`;
        grid.insertAdjacentHTML('beforeend', html);
    });
}

function renderSkills(rows) {
    const container = document.getElementById('skills-list');
    rows.forEach(row => {
        const skill = row.c[0]?.v || '';
        if (skill) {
            container.insertAdjacentHTML('beforeend', `<span class="badge-skill">${skill}</span>`);
        }
    });
}

async function loadSite() {
    const profile = await fetchSheet('Profile');
    const data = {};
    profile.rows.forEach(row => {
        if (row.c[0] && row.c[1]) data[row.c[0].v.toLowerCase()] = row.c[1].v;
    });

    const fullName = data.prefix ? `${data.prefix} ${data.name}` : data.name;

    document.getElementById('site-title').textContent = fullName;
    document.getElementById('name').textContent = fullName;
    document.getElementById('footer-name').textContent = fullName;

    document.getElementById('title').textContent = data.title;
    document.getElementById('summary').textContent = data.summary;
    document.getElementById('email').textContent = data.email;
    document.getElementById('email').href = `mailto:${data.email}`;
    document.getElementById('linkedin').href = data.linkedin;
    document.getElementById('github').href = data.github;
    document.getElementById('profile-pic').src = data.photo;

    renderTimeline('experience-timeline', (await fetchSheet('Experience')).rows);
    renderTimeline('education-timeline', (await fetchSheet('Education')).rows);
    renderProjects((await fetchSheet('Projects')).rows);
    renderPublications((await fetchSheet('Publications')).rows);
    renderAchievements((await fetchSheet('Achievements')).rows);
    renderSkills((await fetchSheet('Skills')).rows);

}

loadSite();
