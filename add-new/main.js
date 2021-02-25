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

const btn = document.querySelector('.btn');

const companies = [];

btn.addEventListener('click', () => {
  companies.push(companyName.value);
  companies.push(aboutCompany.value);
  companies.push(employeesCount.value);
  companies.push(advantages.value);
  companies.push(companyValues.value);
  companies.push(beneficiary.value);
  companies.push(departments.value);
  companies.push(branches.value);
  companies.push(website.value);
  companies.push(eventCity.value);
  console.log(companies);
  data.companies.push(companies);
  console.log(data.companies);
})
