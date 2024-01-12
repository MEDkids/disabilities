function nextPage(pageNumber) {
    var x = document.getElementById("page_" + pageNumber);
    var nextPageNumber = pageNumber + 1;
    var y = document.getElementById("page_" + nextPageNumber);
    x.style.display = 'none';
    y.style.display = 'block';
}

function previousPage(pageNumber) {
    var x = document.getElementById("page_" + pageNumber);
    var nextPageNumber = pageNumber - 1;
    var y = document.getElementById("page_" + nextPageNumber);
    x.style.display = 'none';
    y.style.display = 'block';
}