"use strict";

var funkcja = function funkcja(x) {
    for (var _len = arguments.length, y = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        y[_key - 1] = arguments[_key];
    }

    console.log(y);
};

funkcja("a", 1, 2, 3, 4); // [1,2,3,4]

var funkcja2 = function funkcja2(x, y, z) {
    console.log(x * y * z);
};

funkcja2.apply(undefined, [2, 4, 5]); // 40

