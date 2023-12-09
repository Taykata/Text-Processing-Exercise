function cutAndReverse(str) {

    let middleIndex = str.length / 2;

    let firstHalf = str.slice(0, middleIndex).split('').reverse().join('');
    let secondHalf = str.slice(middleIndex).split('').reverse().join('');

    console.log(firstHalf);
    console.log(secondHalf);

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');