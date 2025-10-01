import { Chatroom } from './chat.js';
import { Lielements } from './lielement.js';
import "@fortawesome/fontawesome-free/css/all.min.css";

// UI

const chatrooms = document.querySelector(".chatrooms");
const chatul = document.querySelector(".chat-ul");
const chatform = document.querySelector(".chat-form");
const userform = document.querySelector(".user-form");
const msg = document.querySelector(".msg");
const roomtitle = document.querySelector(".roomtitle");

// Create LI handler
const { newli } = Lielements(chatul);

const getlocalname = localStorage.username ? localStorage.username : "Guest";
userform.username.placeholder = `username is ${getlocalname}`;

// Chatroom instance 
const chatroom = Chatroom("general", getlocalname);
roomtitle.textContent = "General";

// Start chat
chatform.addEventListener('submit', (e) => {
  e.preventDefault();

  const message = chatform.message.value.trim();
  chatroom.addChat(message).then(() => chatform.reset()
  ).catch(err => console.log(err));
});

// Update username 
userform.addEventListener('submit', (e) => {
  e.preventDefault();

  const newusername = userform.username.value.trim();
  chatroom.updateUsername(newusername);
  userform.reset();

  // show & hide msg 
  msg.innerText = `New name updated to ${newusername}`;
  userform.username.placeholder = `username is ${newusername}`;

  setTimeout(() => msg.innerText = '', 3000);
});

// Update chat room 

chatrooms.addEventListener("click", (e) => {
  e.preventDefault();

  const getbtn = e.target.closest('button');
  // console.log(getbtn);

  if (getbtn) {
    const getroomid = getbtn.getAttribute('id');
    // console.log(getroomid);
    const gettitle = getbtn.querySelector('h3').innerText;

    roomtitle.textContent = gettitle;

    // Clear old chats before loading new room
    chatul.innerHTML = '';

    chatroom.updateChatroom(getroomid);
    chatroom.getChats((data) => newli(data)); // re-render messages
  }
});

// Get chats 
// chatroom.getChats((data) => {
//   return data;
// });

// Get chats (initial load)
chatroom.getChats((data) => newli(data));
