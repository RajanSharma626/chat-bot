

let ChatBot = {
    "Hello": "Hi There!  <br>",
    "hello": "Hi There! <br>",
    "Hi": "Hi There! <br>",
    "hi": "Hi There! <br>",
    "Hii": "Hi There! <br>",
    "hii": "Hi There! <br>",
    "hlo": "Hi There! <br>",
    "Hlo": "Hi There! <br>",
    "i love you": "I Love You Too <3 <br>",
    "I love you": "I Love You Too <3 <br>",
    "i Love you": "I Love You Too <3 <br>",
    "i love You": "I Love You Too <3 <br>",
    "I LOVE YOU": "I Love You Too <3 <br>",
    "I Love You": "I Love You Too <3 <br>",
    "who are you": "I'm Rajan Assistant <br>",
    "Who Are You": "I'm Rajan Assistant <br>",
    "WHO ARE YOU": "I'm Rajan Assistant <br>",
    "Who are you": "I'm Rajan Assistant <br>",
    "who Are you": "I'm Rajan Assistant <br>",
    "who are You": "I'm Rajan Assistant <br>",
    "How are you": "I'm Fine, What about You :) <br>",
    "HOW ARE YOU": "I'm Fine, What about You :) <br>",
    "How Are You": "I'm Fine, What about You :) <br>",
    "How Are You": "I'm Fine, What about You :) <br>",
    "how Are you": "I'm Fine, What about You :) <br>",
    "how are You": "I'm Fine, What about You :) <br>",
    "how are you": "I'm Fine, What about You :) <br>",
    "good morning": "Very Good Morning :) <br>",
    "GOOD MORNING": "Very Good Morning :) <br>",
    "Good Morning": "Very Good Morning :) <br>",
    "good Morning": "Very Good Morning :) <br>",
    "Good morning": "Very Good Morning :) <br>",
    "me too": "Oh Great <br>",
    "Me Too": "Oh Great <br>",
    "ME TOO": "Oh Great! :) <br>",
    "ME too": "Oh Great! :) <br>"

};


let input = document.getElementById('msg');
let btn = document.getElementById('btn');
let chat = document.getElementById('chat');


btn.addEventListener('click', function sentmsg() {
    let paraDiv = document.createElement('div');
    chat.append(paraDiv);
    paraDiv.classList.add('divStyle');

    let para = document.createElement('p');
    paraDiv.append(para);
    para.classList.add('msgPara');

    para.innerHTML = input.value;
    input.value = "";

    //ChatBotSide


    if (para.innerHTML in ChatBot) {
        setTimeout(() => {

            let botDiv = document.createElement('div');
            botDiv.classList.add('botStyle');
            chat.append(botDiv);
            let botPara = document.createElement('p');
            botPara.classList.add('botMsgPara');
            botDiv.append(botPara);

            botPara.innerHTML += ChatBot[para.innerHTML];
        }, 1000);
    } else {
        setTimeout(() => {

            let botDiv = document.createElement('div');
            botDiv.classList.add('botStyle');
            chat.append(botDiv);
            let botPara = document.createElement('p');
            botDiv.append(botPara);
            botPara.classList.add('botMsgPara');
            botPara.innerHTML += "SORRY! I Don't Understand :( <br>";
        }, 1000);
    }

})

