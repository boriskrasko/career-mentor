const companyName = document.querySelector('.company-name');
const aboutCompany = document.querySelector('.about-company');
const employeesCount = document.querySelector('.employees-count');
const advantages = document.querySelector('.advantages');
const companyValues = document.querySelector('.company-values');
const beneficiary = document.querySelector('.beneficiary');
const departments = document.querySelector('.departments');
const branches = document.querySelector('.branches');
const website = document.querySelector('.website');
const companyLogo = document.querySelector('.company-logo');

companyName.textContent = data.companies.abb[0];
aboutCompany.textContent = data.companies.abb[1];
employeesCount.textContent = data.companies.abb[2];
advantages.textContent = data.companies.abb[3];
companyValues.textContent = data.companies.abb[4];
companyLogo.src = `logos/${data.companies.abb[0].toLowerCase()}.png`;
companyLogo.setAttribute(`alt`, `${data.companies.abb[0].toLowerCase()} company logo`);
for (let i = 0; i < data.companies.abb[5].length; i++) {
  let item = document.createElement('li');
  item.textContent = data.companies.abb[5][i];
  beneficiary.appendChild(item);
}
for (let i = 0; i < data.companies.abb[6].length; i++) {
  let item = document.createElement('li');
  item.textContent = data.companies.abb[6][i];
  departments.appendChild(item);
}
for (let i = 0; i < data.companies.abb[7].length; i++) {
  let item = document.createElement('li');
  item.textContent = data.companies.abb[7][i];
  branches.appendChild(item);
}
website.href = data.companies.abb[8];
website.textContent = data.companies.abb[8];
