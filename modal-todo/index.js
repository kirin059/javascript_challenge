'use strict';

$(document).ready(function() {
    $('.open').click(function() {
        $('.modal_bg').css({ "display" : "block" })
    })
});
l
const input = document.querySelector('.write'); // input
const btn = document.querySelector('.btn');  // button
const listContainer = document.querySelector('.list_container'); // ul

btn.addEventListener('click', (e) => {
    //console.log(e)
    let txt = input.value;

    if(txt.length === 0) {
        alert("Write your list first")
    }

    let li = document.createElement('li');
    li.innerHTML = `${txt} <button class="del">❌<button>`
     
    listContainer.appendChild(li);
    input.value =  '';
} )