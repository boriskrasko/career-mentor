const companyList = document.querySelector('.company-list');

function showComnaniesList() {
  for (let i = 0; i < data.companies.length; i++) {
    let item = document.createElement('li');
    companyList.appendChild(item);
    let a = document.createElement('a');
    a.textContent = `${data.companies[i][0]}`;
    item.appendChild(a);
    a.href = `${data.companies[i][0]}/index.html`
  }
}

showComnaniesList();
