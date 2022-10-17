const answer = document.querySelectorAll('.answer');
const question = document.querySelectorAll('.question');

questSelected()

function questSelected() {
    question.forEach((e, i) => {

        e.addEventListener('click', () => {
    
            e.classList.toggle('selected')
            answer[i].classList.toggle('answer')
    
        })
    })
}