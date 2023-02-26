function receivesAFunction(callback) {
    callback();
}
receivesAFunction()

 function returnsANamedFunction() {
    return function namedFunction() {};
 }

 function returnsAnAnonymousFunction() {
    return function() {};
 }
 returnsAnAnonymousFunction();