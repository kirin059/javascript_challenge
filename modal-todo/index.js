'use strict';

$(document).ready(function() {
    $('.open').click(function() {
        $('.modal_bg').css({ "display" : "block" })
    })
});

const listContainer = document.querySelector('.list_container');
const input = document.querySelector('.write');
const btn = document.querySelector('.exit');

btn.addEventListener('click', (e) => {
console.log(e)
} )