if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration=>{
        console.log(registration)
    }).catch(error=>{
        console.log(error)
    })
}
var msg=new SpeechSynthesisUtterance()
const speech = (alphabet) => {
    msg.text=alphabet
    window.speechSynthesis.speak(msg)
    console.log(alphabet)
}
if(window.outerWidth>480){
    const x = document.getElementsByClassName("alph")
    for (let index = 0; index < x.length; index++) {
        x[index].addEventListener("mouseover", function () {
            speech(x[index].innerHTML[0])
        })
    }
}else{
    const x = document.getElementsByClassName("alph")
    for (let index = 0; index < x.length; index++) {
        x[index].addEventListener("click", function () {
            speech(x[index].innerHTML[0])
        })
    }
}