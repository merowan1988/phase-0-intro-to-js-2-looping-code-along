const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";

function writeCards(names, event) {
    let message=[];
    for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift`)
    }
    return message;
}

writeCards(names, event);