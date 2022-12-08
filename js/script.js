const secArr = document.querySelector(".s")
const minArr = document.querySelector(".m")
const hourArr = document.querySelector(".h")
const hourNum = document.querySelector('.hours')
const minNum = document.querySelector('.minutes')

const addZero = (number) => (number < 10 ? "0" + number : number)


const time = new Date()
let second = time.getSeconds() * 6
let minute = time.getMinutes() * 6
let hour = time.getHours() * 30

function clock() {
    const time = new Date()
    let second = time.getSeconds() * 6
    let minute = time.getMinutes() * 6
    let hour = time.getHours() * 30

    secArr.style.transform = `rotate(${second}deg)`
    minArr.style.transform = `rotate(${minute}deg)`
    hourArr.style.transform = `rotate(${hour}deg)`

    hourNum.innerHTML = addZero(time.getHours())
    minNum.innerHTML = addZero(time.getMinutes())

    setTimeout(clock, 1000)
}

clock()

const tabsItem = document.querySelectorAll('.tabsItem')
const tabsContentItem = document.querySelectorAll('.tabsContentItem')

function switcher(bosilgan) {
    for (let i = 0; i < tabsItem.length; i++) {
        tabsItem[i].classList.remove("active")
        tabsContentItem[i].classList.remove("active")
    }
    tabsItem[bosilgan].classList.add("active")
    tabsContentItem[bosilgan].classList.add("active")
}

for (let i = 0; i < tabsItem.length; i++) {
    const item = tabsItem[i]
    item.onclick = () => switcher(i)
}