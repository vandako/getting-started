var background = document.querySelector('.body')


var change = document.getElementById('changecolor')
background.style.backgroundColor="blue"

change.addEventListener('click', function() {
    background.style.backgroundColor='red'
    console.log('button clicked!!')
})