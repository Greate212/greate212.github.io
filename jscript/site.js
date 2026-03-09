// Dynamic Welcome Message
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcomeDiv = document.getElementById('welcome')
const welcomeH1 = document.createElement('h1')

if (hours >= 4 && hours < 12) {
    welcomeH1.textContent = "Good Morning, Welcome to my site!"
}
else if (hours >= 12 && hours < 17) {
    welcomeH1.textContent = "Good Afternoon, Welcome to my site!"
}
else {
    welcomeH1.textContent = "Good Evening, Welcome to my site!"
}

welcomeDiv.appendChild(welcomeH1)



// Secret Message
const key = "It's a secret to everbody."
localStorage.setItem(key, "HEY, LISTEN!")



// Image Carousel
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

//      5 Second Interval
setInterval(() => {
    showImages()
    currentImage++
}, 5000)

//      Variables for Buttons
const btnNext = document.querySelector("#next")
const btnPrev = document.querySelector("#prev")

//      Next Button
btnNext.addEventListener("click", () => {
    currentImage++
    showImages()
})

//      Prev Button
btnPrev.addEventListener("click", () => {
    currentImage--
    showImages()
})
