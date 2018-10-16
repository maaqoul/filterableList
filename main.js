let filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterNames);

function filterNames () {
    let filterValue = filterInput.value.toUpperCase();
    let ul = document.getElementById('names');
    let li = ul.querySelectorAll('li.collection-item'); 
    for (const singleLi of li) {
        let a = singleLi.getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > - 1) {
            singleLi.style.display = '';
        } else {
            singleLi.style.display = 'none';
        }
    }
}

