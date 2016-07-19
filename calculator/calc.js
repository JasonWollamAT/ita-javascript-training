/**
 * Created by Jason Wollam on 6/30/2016.
 */

var p = 0
var data = {};
var rl = require('readline').createInterface(process.stdin, process.stdout);
var prompts = ['Number1', 'Operation', 'Number2']

/********************************** Boilerplate *********************************/

var parseInput = function(data){
    if(data.Operation === '+') {
        return addNumbers(data);
    }
}


var addNumbers = function(data){
    return (parseInt(data.Number1) + parseInt(data.Number2))
}


/********************************** Boilerplate *********************************/

var handleInput = function() {
    rl.setPrompt(prompts[p] + '> ');
    rl.prompt();

    p++
};

handleInput();

rl.on('line', function(line) {
    data[prompts[p - 1]] = line;

    if(p === prompts.length) {
        return rl.close();
    }

    handleInput();

}).on('close', function() {
    console.log("\n\nCalculating: " + data.Number1 + " " + data.Operation + " " + data.Number2 +" = " + parseInput(data) + "\n\n")
    console.log('Exiting Program.');
    process.exit(0);
});

module.exports = {
    AddNumbers : addNumbers
}