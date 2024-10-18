const flagContainer = document.querySelector('.flag-container');

for(let i = 0; i < 12; i++) {
    const td = document.createElement('tr');
    const tr = document.createElement('td');

    flagContainer.appendChild(td);
    td.appendChild(tr);
}

