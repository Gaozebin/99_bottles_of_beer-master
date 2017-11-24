var judge = function (num) {
    if(num === 1){
        return "bottle";
    }else{
        return "bottles";
    }
};

var test = function () {
    let X;
    let str = "";

    for(X = 99; X > 1; X --){
        str += X + " bottles of beer on the wall, " + X + " bottles of beer.\n" +
            "Take one down and pass it around, " + (X - 1) + " " + judge(X - 1) + " of beer on the wall.\n"
    }

    str += "1 bottle of beer on the wall, 1 bottle of beer.\n" +
        "Take one down and pass it around, no more bottles of beer on the wall.\n"  +
        "No more bottles of beer on the wall, no more bottles of beer.\n" +
        "Go to the store and buy some more, 99 bottles of beer on the wall.\n";

    return str;
};

module.exports = test;