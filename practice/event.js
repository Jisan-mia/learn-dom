const colorHeader = document.getElementById('colorHeader')
const colorPara = document.getElementById('colorPara')


function red() {
    colorHeader.setAttribute('style', 'color: red')
    colorPara.setAttribute('style', 'color: red')
}

function blue() {
    colorHeader.setAttribute('style', 'color: blue')
    colorPara.setAttribute('style', 'color: blue')
}



// 
const protoPara = document.getElementById('protoPara')
Element.prototype.green = function() {
    this.style.color = 'green'
}
protoPara.green();