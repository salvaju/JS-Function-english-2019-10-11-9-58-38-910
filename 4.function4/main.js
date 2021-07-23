function countWords(message) {

    var stringArr = [];
    var slicedMessage = '';

    for(i = 0; i <= message.length - 1; i++) {

        if (message[i] == ' ') {
            stringArr.push(slicedMessage);
            slicedMessage = '';
            continue;
        }

        if (i == message.length - 1) {
            stringArr.push(slicedMessage);
            slicedMessage = '';
            continue;
        }

        slicedMessage = slicedMessage + message[i];

    }

    console.log(stringArr.length);
    return(stringArr.length);
}

countWords('Good morning, I love JavaScript.');