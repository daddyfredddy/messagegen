//let a = 5;
//console.log(a * 2);
const workMessages = ["standby", "camera on air", "pan left", "pan right", "tilt camera"];

function messageGen() {
    let randomMessage = Math.floor(Math.random * 4);
    for (let i = 0; i < workMessages.length; i++){
        console.log(`Director says: ${workMessages[i]}`);
    }

}
console.log(messageGen());
