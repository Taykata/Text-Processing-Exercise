function pascalCaseSplitter(str) {
    let buff = '';

    for (let i = 0; i < str.length; i++) {
        let startIndex = 0;
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
            startIndex = str.indexOf(str[i]);
            if (buff === '') {
                buff += str[startIndex];
            } else {
                buff += ' ' + str[startIndex];
            }

        } else {
            buff += str[i];
        }
        
    }

    let result = buff.split(' ');

    console.log(result.join(', '));

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');