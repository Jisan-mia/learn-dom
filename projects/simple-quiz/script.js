const form = document.querySelector('#quiz-form')
const answerItems = Array.from(document.querySelectorAll('input[type="radio"]'))
const quizItems = Array.from(document.querySelectorAll('.quiz-item'))
const alert = document.querySelector('#alert')
console.log(answerItems)

form.addEventListener('submit', function(e)  {
    e.preventDefault();

    quizItems.forEach(item => {
        item.classList.add('incorrect')
        item.classList.remove('correct')
    })
    const checkedAnswers = answerItems.filter(answer => answer.checked)

    checkedAnswers.forEach(answer => {
        const isCorrect = answer.value === 'true'
        const liItem = answer.closest('.quiz-item')
        console.log(liItem, isCorrect, answer.value)

        if(isCorrect) {
            liItem.classList.add('correct')
            liItem.classList.remove('incorrect')
        } else {
            liItem.classList.add('incorrect')
            liItem.classList.remove('correct')
        }
    })



    const isAllCorrect = quizItems.length === checkedAnswers.length && checkedAnswers.every(ans => ans.value === 'true')
    if(isAllCorrect) {
        alert.classList.add('active')
        setTimeout(() => {
            alert.classList.remove('active')
        }, 3000);
    }
})