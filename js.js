var msg=new SpeechSynthesisUtterance()
const speech = (alphabet) => {
    msg.text=alphabet
    window.speechSynthesis.speak(msg)
    console.log(alphabet)
}
const x = document.getElementsByClassName("alph")
for (let index = 0; index < x.length; index++) {
    x[index].addEventListener("mouseover", function () {
        speech(x[index].innerHTML[0])
    })
}