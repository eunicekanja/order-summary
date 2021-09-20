'use strict'
const btn=document.querySelector('.btn')
const order=document.querySelector('.order')

btn.addEventListener('click',function(){
    order.classList.toggle('show')
})