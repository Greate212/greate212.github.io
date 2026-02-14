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
