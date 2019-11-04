let frutas = ["banana", "morango", "bacurí", "laranja"];

let btn = document.getElementById('btn')
    console.log(btn);
    
let input = document.getElementById('input')
    console.log(input);

btn.addEventListener("click", function () {
    let arrAchou = frutas.filter(fruta => fruta === input.value)
    console.log(arrAchou)
    if(arrAchou.length > 0){
        alert(`Achou o ${input.value}`)
    }else{
        alert(`Não achou o ${input.value}`)
    }
})
