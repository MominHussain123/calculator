function getnum(num){
    var results = document.getElementById("result")
    results.value += num
} 
function getremove(){
    var results = document.getElementById("result")
    results.value = " "   
}
function getfinal(){
    var results = document.getElementById("result")
    results.value = eval(results.value)
}  
function getlastremove(){
    var results = document.getElementById("result")
    results.value = results.value.slice(0,-1)
}