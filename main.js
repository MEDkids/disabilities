function nextPage(pageNumber) {
    var x = document.getElementById("page_" + pageNumber);
    var nextPageNumber = pageNumber + 1;
    var y = document.getElementById("page_" + nextPageNumber);

    x.style.display = 'none';
    y.style.display = 'block';

    var z = document.getElementById("elevator_arrow");
    z.style.visibility = 'hidden';

    window.scroll(0, 250);
}

function previousPage(pageNumber) {
    var x = document.getElementById("page_" + pageNumber);
    var nextPageNumber = pageNumber - 1;
    var y = document.getElementById("page_" + nextPageNumber);
    x.style.display = 'none';
    y.style.display = 'block';

    var z = document.getElementById("elevator_arrow");
    z.style.visibility = 'hidden';

    window.scroll(0, 0);
}

function showHint() {
    var z = document.getElementById("elevator_arrow");
    z.style.visibility = 'visible';
}

function restart() {
    window.scroll(0, 0);
    var x = document.getElementById("page_7");
    var y = document.getElementById("page_1");

    x.style.display = 'none';
    y.style.display = 'block';
}

function goToPage(currentNumber, pageNumber) {
    window.scroll(0, 0);
    var x = document.getElementById("page_" + currentNumber);
    var y = document.getElementById("page_" + pageNumber);

    x.style.display = 'none';
    y.style.display = 'block';
}
