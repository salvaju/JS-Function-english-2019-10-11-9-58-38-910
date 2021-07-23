function reverseString(message) {

    var reversedStrArr = [];
    var reversedStr = '';

    for(i =  message.length - 1; i >= 0; i--) {
        reversedStrArr.push(message[i]);
    }

    for(i = 0; i <= reversedStrArr.length - 1; i++) {
        reversedStr = reversedStr + reversedStrArr[i];
    }

    console.log(reversedStr);
    return reversedStr;

}

reverseString('hello');