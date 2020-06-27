function insertVal(num){
    var screen = document.getElementById("screen");
    screen.value += num;
}
function calcAll(){
    try {
    var screen = document.getElementById("screen");
    var resultVal = eval(screen.value)
    screen.value = resultVal;   
        
    } catch (error) {
        screen.value = "Math Error";
 
document.querySelectorAll("button").forEach((btn)=>{
    btn.setAttribute("disabled","")
    })
        document.querySelectorAll(".btn-long")[0].style.backgroundColor = "red";
        document.querySelectorAll(".btn-long")[0].style.color = "white";
        document.querySelectorAll(".btn-long")[0].removeAttribute("disabled")
        document.querySelectorAll(".btn-long")[0].style.backgroundColor = "green";
        document.querySelectorAll(".btn-long")[0].style.color = "white";
    }
}
function clearAll() {
    var screen = document.getElementById("screen");
    screen.value = 0;
    
    document.querySelectorAll("button").forEach((btn)=>{
        btn.removeAttribute("disabled","")
        })
    
}