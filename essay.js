const main_div = document.createElement('div');
main_div.classList.add("main_div");




const elem = document.createElement('p');
elem.textContent = document.title;
elem.classList.add('titleofessay')
main_div.appendChild(elem)

const firstTable = document.querySelector('table');
if (firstTable) {
    firstTable.parentNode.insertBefore(main_div, firstTable);
} else {
    document.body.appendChild(main_div);
}

const elem22 = document.createElement('a');
elem22.textContent = " ⬅️ Go To Home 🏠";
elem22.href = "https://paulgraham.com/index.html";
elem22.classList.add('gohome')
main_div.appendChild(elem22)
