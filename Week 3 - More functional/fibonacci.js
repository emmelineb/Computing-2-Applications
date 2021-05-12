const curry = function (f) {
    return function (first) {
        return function (second) {
            return f(first, second);
        };
    };
};

const add = function (x, y) {
    return x + y;
};

const add_n = curry(add);

console.log("Hello");

debugger;