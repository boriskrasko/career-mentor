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
const btn = document.querySelectorAll('.btn');
const btnText = document.querySelectorAll('.btn-text');
const all = document.querySelector('.all');
const section = document.querySelector('.section');
const companyList = document.querySelector('.company-list');
const tableContents = document.querySelector('.table-contents');
let company;
let id = 0;


function showCompany(id) {
  company = data.companies[id][0].toLowerCase().replace(/\s/g, ``);
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
  for (let i = 0; i < data.companies[id][9].length; i++) {
    let item = document.createElement('span');
    item.textContent = `${data.companies[id][9][i]} `;
    eventCity.appendChild(item);
  }
  website.href = data.companies[id][8];
  website.textContent = data.companies[id][8];
  btnText[0].textContent = (id > 0) ? data.companies[id - 1][0] : data.companies[2][0];
  btnText[1].textContent = (id < 2) ? data.companies[id + 1][0] : data.companies[0][0];
}

showCompany(id);

all.addEventListener('click', () => {
  section.style.display = `none`;
  tableContents.style.display = `block`;
  all.style.display = `none`;

  for (let i = 0; i < data.companies.length; i ++) {
    let item = document.createElement('li');
    item.textContent = `${data.companies[i][0]}`;
    companyList.appendChild(item);
    item.addEventListener('click', () => {
      companyList.innerHTML = ``;
      tableContents.style.display = `none`;
      section.style.display = `block`;
      all.style.display = `block`;
      showCompany(i); 
    });
  }
});

for (let i = 0; i < btn.length; i++) {
  let x = data.companies.length - 1;
  btn[i].addEventListener('click', () => {
    beneficiary.innerHTML = ``;
    departments.innerHTML = ``;
    branches.innerHTML = ``;
    eventCity.innerHTML = ``;
    id = (i === 0) ? 
    id > 0 ? id - 1 : x : 
    id < x ? id + 1 : 0
    showCompany(id);
  })
}
