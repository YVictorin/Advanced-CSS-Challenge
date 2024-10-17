const table = document.querySelector('.table-container');

for(let i = 0; i < 8; i++) {
    const tableRows = document.createElement('tr');
    
   
    for(let i = 0; i < 8; i++) { 
        const divsForTable = document.createElement('div');
        tableRows.appendChild(divsForTable);
    }


    table.appendChild(tableRows);
    


}
