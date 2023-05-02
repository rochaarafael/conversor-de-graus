var botao = document.getElementById('botao')
botao.addEventListener('click', converter)

function converter() {
    var tempini = document.querySelector('input#numerotxt').value
    var temp1 = document.getElementsByName('radtemp1')
    var temp2 = document.getElementsByName('radtemp2')
   
    if (tempini.length == 0) {
        res.style.color = 'lime';
        res.innerHTML = '<strong>Digite uma temperatura!</strong>'
        res.style.font = 'normal 20px Arial'
    } else if (temp1[0].checked && temp2[0].checked) {
        res.style.color = 'orange';
        res.innerHTML = '<strong>Para poder realizar a conversão selecione duas medições DIFERENTES!</strong>'
        res.style.font = 'normal 20px Arial'
    } else if (temp1[1].checked && temp2[1].checked) {
        res.style.color = 'purple';
        res.innerHTML = '<strong>Para poder realizar a conversão selecione duas medições DIFERENTES!</strong>'
        res.style.font = 'normal 20px Arial'
    } else if (temp1[0].checked && temp2[1].checked) {
        var temp = tempini * 1.8 + 32
        res.innerHTML = `${temp} °F`
        res.style.font = 'normal 60px Arial'
    } else if (temp1[1].checked && temp2[0].checked) {
        var temp = (tempini - 32) / 1.8
        res.innerHTML = `${temp} °C`
        res.style.font = 'normal 60px Arial'
    }
}