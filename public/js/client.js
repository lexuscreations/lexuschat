// local variables decleration
let Uname, loopExit, passKey, reqFullscreen, reqExitFullscreen
let FullScrElement = document.documentElement
let themeOut = "default",
    themeIn = "default"

// valid users
const validUser = [
    [26111995, 'Mis. Divya'],
    [26111999, 'Mr. Lokesh']
]

// authoncation || user identification || getting user name
do {
    passKey = prompt('Please enter Pass Key: ')
    if (validUser[0][0] == passKey || validUser[1][0] == passKey) {
        if (passKey == validUser[0][0]) {
            Uname = validUser[0][1]
        } else {
            Uname = validUser[1][1]
        }
        loopExit = "exit"
    }
} while (!loopExit)
document.querySelector('.userName').innerHTML = Uname

// dom elements selection
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')
let Sbutton = document.querySelector('.Sbutton')

// importing notification audio
let successSoud = "./media/audio/beep.mp3"
let successAudio = new Audio(successSoud)

// socket connection
const socket = io()

// Broadcast New Connected UserName To All Connected Users
socket.emit('userConnected', Uname, Uname + ' Connected...')

// getting chat msg on submit btn and broadcast
Sbutton.addEventListener('click', () => {
    sendMessage(textarea.value)
})

function sendMessage(message) {
    // Message Validation And Filtration
    let Umessage = message.trim()

    let msg = {
        user: Uname,
        message: Umessage
    }

    // Append to dom calling
    appendMessage(msg, 'outgoing', themeOut)

    // clearing textarea
    textarea.value = ''

    // Send to server | Broadcast
    socket.emit('message', msg)
    successAudio.play()

    //scroll to last chat at very bottom 
    scrollToBottom()
}

// Append to dom decleration
function appendMessage(msg, type, theme) {
    let mainDiv = document.createElement('div')
    mainDiv.classList.add(type, theme, 'message')

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
    successAudio.play()
}

// Recieve messages 
socket.on('message', (msg) => {
    appendMessage(msg, 'incoming', themeIn)
    scrollToBottom()
})

socket.on('userConnected', (Uname, usermsg) => {
    let msg = {
        user: Uname,
        message: usermsg
    }
    appendMessage(msg, 'incoming', themeIn)
})