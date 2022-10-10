const answer = document.querySelectorAll('.answer');


document.querySelectorAll('.question').forEach((e, i) => {

    e.addEventListener('click', () => {

        e.classList.toggle('selected')
        answer[i].classList.toggle('answer')

    })
})
