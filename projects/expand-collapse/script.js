const container = document.querySelector('#container');

container.addEventListener('click', function(e) {
    if(!e.target.matches('.action-btn')) return;


    const card = e.target.parentNode.parentNode
    const cardBody = card.querySelector('#cardBody')

    cardBody.classList.toggle('active')
    e.target.innerText = e.target.innerText === 'Expand' ? 'Collapse' : 'Expand'
})