const companyName = document.querySelector('.company-name');
const aboutCompany = document.querySelector('.about-company');
const employeesCount = document.querySelector('.employees-count');
const advantages = document.querySelector('.advantages');
const companyValues = document.querySelector('.company-values');
const beneficiary = document.querySelector('.beneficiary');
const departments = document.querySelector('.departments');
const branches = document.querySelector('.branches');
const website = document.querySelector('.website');
const eventCity = document.querySelector('.event-cities');
const companyLogo = document.querySelector('.company-logo');
let id = 0;
let company;
const btn = document.querySelector('.btn');

function showCompany(id) {
  company = data.companies[id][0].toLowerCase();
  companyLogo.src = `logos/${company}.png`;
  companyLogo.setAttribute(`alt`, `${company} company logo`);
  companyName.textContent = data.companies[id][0];
  aboutCompany.textContent = data.companies[id][1];
  employeesCount.textContent = data.companies[id][2];
  advantages.textContent = data.companies[id][3];
  companyValues.textContent = data.companies[id][4];

  for (let i = 0; i < data.companies[id][5].length; i++) {
    let item = document.createElement('li');
    item.textContent = data.companies[id][5][i];
    beneficiary.appendChild(item);
  }
  for (let i = 0; i < data.companies[id][6].length; i++) {
    let item = document.createElement('li');
    item.textContent = data.companies[id][6][i];
    departments.appendChild(item);
  }
  for (let i = 0; i < data.companies[id][7].length; i++) {
    let item = document.createElement('li');
    item.textContent = data.companies[id][7][i];
    branches.appendChild(item);
  }
  website.href = data.companies[id][8];
  website.textContent = data.companies[id][8];
  eventCity.textContent = data.companies[id][9];
}

showCompany(id);

btn.addEventListener('click', () => {
  beneficiary.innerHTML = ``;
  departments.innerHTML = ``;
  branches.innerHTML = ``;
  id = id == 0 ? 1 : 0;
  showCompany(id);
})

