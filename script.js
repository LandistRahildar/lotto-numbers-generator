{
    document.getElementById("randomLottoNumbersButton").onclick = function () {
        const numberFirst = Math.floor(Math.random() * 49 + 1);
        const numberSecond = Math.floor(Math.random() * 49 + 1);
        const numberThird = Math.floor(Math.random() * 49 + 1);
        const numberFourth = Math.floor(Math.random() * 49 + 1);
        const numberFifth = Math.floor(Math.random() * 49 + 1);
        const numberSixth = Math.floor(Math.random() * 49 + 1);
        document.getElementById("randomLottoNumbers").innerHTML = `Your random lotto numbers are ${numberFirst}, ${numberSecond}, ${numberThird}, ${numberFourth}, ${numberFifth}, ${numberSixth}.`;
    }
}

//TO IMPROVE: lotto numbers can't repeat itself, but at this moment (10 V 23) I don't know how to do that condition(?) (I think I need use 'if' and 'else' for this); in the future I will update this little project
//SOLUTION: ???