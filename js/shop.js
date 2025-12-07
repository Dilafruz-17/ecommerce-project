let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let num = document.getElementById("number")
let count = 0

minus.addEventListener("click", function(){
    count--
    num.textContent = count
})

plus.addEventListener("click", function(){
    count++
    num.textContent = count
}
)