'use strict';

const allBtn = document.querySelector('.all');
const checks = document.querySelectorAll('input[name="ch"]');
//console.log(checks)

function checkbox() {
    checks.forEach(check => {
        if(allBtn.checked) {
            check.checked = true;
        }
        else {
            check.checked = false;
        }
    })
}

allBtn.addEventListener('click', checkbox);

function checkSelectAll() {
    const checkedAll = document.querySelectorAll('input[name="ch"]:checked')

    if(checks.length === checkedAll.length) {
        allBtn.checked = true;
    }
    else {
        allBtn.checked = false;
    }
}

checks.forEach(check => check.addEventListener('click', checkSelectAll))