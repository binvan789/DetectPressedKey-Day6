var eKey = document.querySelector('.card.key p:first-child');
var eLocation = document.querySelector('.card.location p:first-child');
var eWhich = document.querySelector('.card.which p:first-child');
var eCode = document.querySelector('.card.code p:first-child');
var alert = document.querySelector('.alert')
var box = document.querySelector('.box')
var result = document.querySelector('.result')

document.addEventListener('keydown', e => {
    alert.classList.add('hide')
    box.classList.remove('hide')
    result.innerHTML = e.keyCode
    eKey.nextElementSibling.innerHTML = e.key.toUpperCase()
    eLocation.nextElementSibling.innerHTML = e.location
    eWhich.nextElementSibling.innerHTML = e.keyCode
    eCode.nextElementSibling.innerHTML = e.code
    console.log(e)
})
