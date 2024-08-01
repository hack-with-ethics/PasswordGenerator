lowerCase = "abcdefghijklmnopqrstuvwxyz"
upperCase = lowerCase.toUpperCase()
Symbols = "@!#$%^&*"
Numbers = "0123456789"
// function changeMode(){
 
//     const head = document.getElementById("Header");
//     const con = document.getElementById("con");
//     const P = document.getElementById("p");
//     head.style.color = "rgb(255,255,255)";
//     con.style.backgroundColor = "black"
//     P.style.color = "whitesmoke"
// }
function generatePassword(){
    let RenderWordlist = ""
    const N = document.getElementById("num")
    const L = document.getElementById("lower")
    const U = document.getElementById("upper")
    const S = document.getElementById("sym")
    if(N.checked){
        RenderWordlist+=Numbers
    }if(L.checked){
        RenderWordlist+=lowerCase
    }if(U.checked){
        RenderWordlist+=upperCase
    }if(S.checked){
        RenderWordlist+=Symbols
    }
    return RenderWordlist

}
function Copy(){
    var Display = document.getElementById("Disp")
    if(Display.value.length!=0){
        // Display.select()
        navigator.clipboard.writeText(Display.value)
        const b = document.getElementById("clip")
        b.style.backgroundColor="rgb(36, 227, 36)"
        b.innerHTML = '<i class="fa-solid fa-check"></i> Copied'
    }
}
function change(){
    const b = document.getElementById("clip")
    b.innerHTML = '<i class="fa-regular fa-clipboard"></i> Copy to ClipBoard'
    b.style.backgroundColor = "rgb(46, 46, 205)"
    const strengthLoader = document.getElementById("status")
    len = document.getElementById("len").value
    var Display = document.getElementById("Disp")

    if(len>=15 && len<=18){
        strengthLoader.style.backgroundColor = "rgb(245, 179, 66)"
        strengthLoader.textContent = "Medium"
    }else if(len>18 && len<=25){
        strengthLoader.style.backgroundColor = "rgb(36, 227, 36)"
        strengthLoader.textContent = "Strong"
    }else if(len>25){
        strengthLoader.style.backgroundColor = "rgb(36, 255, 36)"
        strengthLoader.textContent = "Very Strong"
    }else{
        strengthLoader.style.backgroundColor = "red"
        strengthLoader.textContent = "Poor"
    }
    wordlist = generatePassword()
   
    var Passwd = ""
    for(i=0;i<len;i++){
        Passwd+=wordlist[Math.floor(Math.random()*wordlist.length)]
    }
    Display.value = Passwd
}