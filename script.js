'use strict';
/*Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2, 3]) і генерує список з елементів:

<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
<ul>
    <li>1</li>
    <li>2</li>
    <li>
        <ul>
            <li>1.1</li>
            <li>1.2</li>
            <li>1.3</li>
        </ul>
    </li>
    <li>3</li>
</ul>*/

function generateList(array){
    let html = '';
    array.forEach(element => {
        if(Array.isArray(element)) {
            html += '<ul>';
            html += generateList(element);
            html += '</ul>';
        } else {
            html += `<li>${element}</li>`
        }
    });
    return html;
}

const array = [1, 2, [1.1, 1.2, 1.3], 3];
const listHTML = generateList(array);

document.body.innerHTML = `<ul>${listHTML}</ul>`;