function alphabetSort(message) {

    var stringArr = [];
    var sortedMessage = '';

    for(i = 0; i <= message.length - 1; i++) {
        stringArr.push(message[i]);
    }

    stringArr.sort()

    for(i = 0; i <= stringArr.length - 1; i++) {
        sortedMessage = sortedMessage + stringArr[i];
    }

    console.log(sortedMessage);
    return (sortedMessage);

}

alphabetSort('hello');