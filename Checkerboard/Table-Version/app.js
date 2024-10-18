const table = document.querySelector('.table-container');

let i = 0;
let j = 0;

do {
    const tableRows = document.createElement('tr');

    
    do {
        const divsForTable = document.createElement('div');
        tableRows.appendChild(divsForTable);
        j++;
    } 
    while(j < 8);

    table.appendChild(tableRows);
    i++;
}
while(i < 8);