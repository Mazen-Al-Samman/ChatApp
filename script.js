const socket = io('http://localhost:3000' , {transports: ['websocket', 'polling', 'flashsocket']}) ;
const msgFrom = document.getElementById('msgForm') ;
const msgText = document.getElementById('msg-text') ;
const msgContainer = document.getElementById('msgContainer') ;
const name = prompt("What is your name : ") ;

socket.emit('users' , name)

socket.on('chat-message' , data => {
    appendMessage(`${data.name} : ${data.message}`) ;
});

msgFrom.addEventListener('submit' , e => {
    e.preventDefault();
    const msg = msgText.value ;
    socket.emit('chat' , msg) ;
    msgText.value = '' ;
    appendMessageR(`You : ${msg}`)
}) ;

function appendMessage(message) {
    const elm = document.createElement('div') ;
    elm.innerText = message ;
    elm.className = 'sender'
    msgContainer.append(elm) ;
}
function appendMessageR(message) {
    const elm = document.createElement('div') ;
    elm.innerText = message ;
    elm.className = 'reciever'
    msgContainer.append(elm) ;
}