
const ws = new WebSocket("ws://maedn.jojomee.de");
const dataToSend = JSON.stringify(
    {"type": "register",
    "message": "<optional message>",
    "data": {
        "clientName": "Foobars maedn client",
        "clientVersion": 3,
        "playerName": "foobar",
        "requestedColor": "red"
  }
});

ws.addEventListener("open", () => {
    console.log("We Are HERE");
    ws.send(dataToSend);
});

console.log(dataToSend);
ws.onopen = function() {
    console.log(dataToSend);
    ws.send(dataToSend);
}





const dummy = '{"name":"John", "age":30, "city":"New York"}';
let data;

data = JSON.parse(dummy)
console.log(data);

ws.onmessage = function (event) {
    console.log(event.data);
  }

