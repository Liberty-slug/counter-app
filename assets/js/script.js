const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const increment = document.getElementById("increment");

decrement.addEventListener('click', function(){
    document.getElementById("counter").innerHTML--;
})
reset.addEventListener('click', function(){
    document.getElementById("counter").innerHTML = 0;
})
increment.addEventListener('click', function(){
    document.getElementById("counter").innerHTML++;
})