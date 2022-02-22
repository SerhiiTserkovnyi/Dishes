let getTable = document.getElementById('tabled');
let upModal = document.getElementById('upload');
let rows = [];
let filteredRows = [];
let sortOrder = false;
let iconTable = document.getElementById("icon");
let searchInput = document.getElementById('search');
let tbodyRow = getTable.querySelectorAll('tr');
let editTds = document.querySelector('btn-save');
let closeTds = getTable.querySelector('.btn-close');
getTable.addEventListener("click", (e) => {
    if (e.target.closest('.deleteRow')) {
        e.target.closest('tr').remove();
    }
});
upModal.addEventListener("click", (e) => {
    e.preventDefault();
    let myText = document.getElementById("textToJson").value;
    let text = myText;
    let json = JSON.parse(text);
    rows = [...rows, ...json];
    filteredRows = getFilteredRows();
    getTable.innerHTML = generateTable();
});

function generateTable() {
    let newRows = '';
    filteredRows.forEach(({ name, price, count }) => {
        newRows += `<tr class="item"><td class="my-cell" name="name">${name}</td>
        <td class="my-cell" name="price">${price}</td><td class="my-cell" name="count">${count}</td><td class="table-editor"><button class="edit-row" onclick="editTd(this)">Edit</button></td><td><button class="deleteRow">Delete</button></td></tr>`;
    });
    return newRows;
}

function sortTable(columName) {
    sortOrder = !sortOrder;
    let result = 0;
    rows.sort(function(a, b) {
        if (columName == 'Name') {
            if (a.name.toLowerCase() < b.name.toLowerCase()) { result = -1; }
            if (a.name.toLowerCase() > b.name.toLowerCase()) { result = 1; }
        }
        if (columName == 'Price') {
            iconTable.classList.remove("mystyle");
            result = a.price - b.price;
        }
        if (columName == 'Count') {
            iconTable.classList.add("mystyle");
            result = a.count - b.count;
        }
        if (sortOrder) {
            result = 0 - result;
        }
        return result;
    });
    getTable.innerHTML = generateTable();

}

function getFilteredRows() {
    let searchText = searchInput.value.toUpperCase();
    if (searchText.length < 2) {
        return rows;
    }
    //Make filter
    return filteredRows.filter((item) => {
        return item.name.toUpperCase().indexOf(searchText.toUpperCase()) > -1;
    });
}

function mySearch() {
    filteredRows = getFilteredRows();
    getTable.innerHTML = generateTable();
}
//Edit tabled
/*console.log(editTd);
for (let i = 0; i< editTd.length; i++) {
    editTd[i].addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = this.innerHTML;
        this.innerHTML = '';
        this.appendChild(input);
        let td = this;
        input.addEventListener('blur', () => {
            td.innerHTML = this.value;
            td.addEventListener('click', func);
        });
        this.removeEventListener('click', func);
    });
}*/
function editTd(src) {
    let input;
    let tr = src.parentNode.parentNode;
    let allTDs = tr.querySelectorAll('.my-cell');
    let editModal = document.createElement('div');
    editModal.className = "edit-modal";
    let btnSave = document.createElement('button');
    btnSave.setAttribute("id", "btnsave");
    btnSave.setAttribute("onclick", "saveAll(this)");
    btnSave.className = "btn-save";
    btnSave.textContent = "Save";
    let btnClose = document.createElement('button');
    btnClose.className = "btn-close";
    btnClose.textContent = "Close";
    let editRow = tr.querySelector('.edit-row');
    let tableEditor = tr.querySelector('.table-editor');
    editRow.classList.add('active-edit');
    tableEditor.appendChild(editModal);
    editModal.appendChild(btnSave);
    editModal.appendChild(btnClose);
    allTDs.forEach(td => {
        input = document.createElement('input');
        input.value = td.innerHTML;
        td.innerHTML = '';
        td.appendChild(input);
    });

}



function saveAll(src) {
    let sRs = src.parentNode.parentNode.parentNode;
    console.log(sRs);
    let allInput = sRs.querySelectorAll('input');
    for (let i = 0; i < allInput.length; i++) {
        let input = allInput.querySelectorAll('input');
    }
    console.log(input.value);
    let demoTr = sRs.querySelectorAll('.my-cell');
    console.log(demoTr);
    demoTr.forEach(td => {
        this.innerHTML = this.value;
    });
}