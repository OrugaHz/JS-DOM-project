const addElement = (e, node, txt, attr, value) => {
    e.preventDefault();
    const element = document.createElement(node);
    const text = document.createTextNode(txt);
    if (text) {
        const text = document.createTextNode(txt);
        element.appendChild(text);
    }
    if (attr) {
        element.setAttribute(attr, value);
    }
    document.querySelector('.content').appendChild(element);
}


const searchElements = (e, nameElement) => {
    e.preventDefault();
    const infoElement = document.querySelector('.result');
    infoElement.textContent = '';
    // searchElements.elements['searching-element'].value;
    // console.log(nameElement);
    const elements = document.querySelectorAll(nameElement);
    if (elements.length) {
        infoElement.innerHTML = `<p class="result__number-info">Znaleziono ${elements.length} elementów ${nameElement}.</p>`;
        showInfo(elements, infoElement);
    } else {
        infoElement.innerHTML = `<p class="result__number-info">Nie znalezniono elementów ${nameElement}.</p>`;
        return;
    }
}

const showInfo = (elements, infoElement) => {
    console.log(elements);
    elements.forEach(element => {
        const item = document.createElement('div');
        item.className = 'result__element-description';
        item.innerHTML = `
        <div>${element.nodeName}</div>
        <div>klasa/klasy: ${element.className}</div>
        <div>Wysokość elementu: ${element.offsetHeight}</div>
        <div>Szerokość elementu: ${element.offsetWidth}</div>
        <div>Odległość od lewej: ${element.offsetLeft}</div>
        <div>Odległość od góry: ${element.offsetTop}</div>
        <div>Ilość dzieci: ${element.childElementCount}</div>
        `
        infoElement.appendChild(item);
    });

};

//listeners
const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value))

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', (e) => searchElements(e, searchForm.elements['searching-element'].value));