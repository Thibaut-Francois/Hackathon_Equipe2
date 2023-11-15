btn = document.querySelector(".btn_window")
window_test = document.querySelector(".window")
onScreen = false

console.log('A')

btn.addEventListener("click", (fonction) => {
    console.log('B')
    if (onScreen == true) {
        console.log('D')

        window_test.classList.remove("animate")
        window_test.classList.add("animate_back")

        onScreen = false
    }else{
        console.log('C')

        window_test.classList.remove("animate_back")
        window_test.classList.add("animate")

        onScreen = true
    }
})