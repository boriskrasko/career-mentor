const description = document.querySelector('.description');
const employees = document.querySelector('.employees');
const opportunities = document.querySelector('.opportunities');
const companyValues = document.querySelector('.company-values');
const benefits = document.querySelector('.benefits');
const departments = document.querySelector('.departments');
const locations = document.querySelector('.locations');
const website = document.querySelector('.website');
const hiringLocations = document.querySelector('.hiring-locations');
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
  company = data.companies[id].name.toLowerCase().replace(/\s/g, '');
  companyLogo.src = `logos/${company}.png`;
  companyLogo.setAttribute('alt', `${company} company logo`);
  description.textContent = data.companies[id].description;
  employees.textContent = data.companies[id].employees;
  opportunities.textContent = data.companies[id].opportunities;
  companyValues.textContent = data.companies[id].values;

  benefits.innerHTML = '';
  departments.innerHTML = '';
  locations.innerHTML = '';
  hiringLocations.innerHTML = '';

  data.companies[id].benefits.forEach((benefit) => {
    let item = document.createElement('li');
    item.textContent = benefit;
    benefits.appendChild(item);
  });

  data.companies[id].departments.forEach((department) => {
    let item = document.createElement('li');
    item.textContent = department;
    departments.appendChild(item);
  });

  data.companies[id].locations.forEach((location) => {
    let item = document.createElement('li');
    item.textContent = location;
    locations.appendChild(item);
  });

  data.companies[id].hiring_locations.forEach((hiringLocation) => {
    let item = document.createElement('span');
    item.textContent = `${hiringLocation} `;
    hiringLocations.appendChild(item);
  });

  website.href = data.companies[id].website;
  website.textContent = data.companies[id].website;

  let z = data.companies.length - 1;
  btnText[0].textContent = (id > 0) ? data.companies[id - 1].name : data.companies[z].name;
  btnText[1].textContent = (id < z) ? data.companies[id + 1].name : data.companies[0].name;
}

showCompany(id);

all.addEventListener('click', () => {
  section.style.display = 'none';
  tableContents.style.display = 'block';
  all.style.display = 'none';

  data.companies.forEach((company, i) => {
    let item = document.createElement('li');
    item.textContent = company.name;
    companyList.appendChild(item);
    item.addEventListener('click', () => {
      companyList.innerHTML = '';
      tableContents.style.display = 'none';
      section.style.display = 'block';
      all.style.display = 'block';
      showCompany(i);
    });
  });
});

btn.forEach((button, i) => {
  let x = data.companies.length - 1;
  button.addEventListener('click', () => {
    benefits.innerHTML = '';
    departments.innerHTML = '';
    locations.innerHTML = '';
    hiringLocations.innerHTML = '';
    id = (i === 0) ? (id > 0 ? id - 1 : x) : (id < x ? id + 1 : 0);
    showCompany(id);
  });
});
