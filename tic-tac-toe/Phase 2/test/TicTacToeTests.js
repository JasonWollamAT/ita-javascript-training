/**
 * Created by Jason Wollam on 6/26/2016.
 */

//TicTacToeTests.js

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect();

var scriptToTest = require('../MainGame.js');
var playTurn = scriptToTest;


describe("When executing the PlayTurn method", function(){
    it("should not throw an exception", function(){
        assert.doesNotThrow(function(){
            scriptToTest.PlayTurn(0);
            scriptToTest.PlayTurn(4)
        });
    });

    it("should return a winning condition with a horizontal win", function(){

        scriptToTest.PlayTurn(0);
        scriptToTest.PlayTurn(4);
        scriptToTest.PlayTurn(1);
        scriptToTest.PlayTurn(5);

        var returnValue = scriptToTest.PlayTurn(2);

        assert(returnValue);
    });

    it("should return a winning condition with a vertical win", function(){

        scriptToTest.PlayTurn(0);
        scriptToTest.PlayTurn(4);
        scriptToTest.PlayTurn(3);
        scriptToTest.PlayTurn(7);

        var returnValue = scriptToTest.PlayTurn(6);

        assert(returnValue);
    });

    it("should return a winning condition with a right diagonal win", function(){

        scriptToTest.PlayTurn(0);
        scriptToTest.PlayTurn(2);
        scriptToTest.PlayTurn(4);
        scriptToTest.PlayTurn(6);

        var returnValue = scriptToTest.PlayTurn(8);

        assert(returnValue);
    });

    it("should return a winning condition with a left diagonal win", function(){

        scriptToTest.PlayTurn(2);
        scriptToTest.PlayTurn(6);
        scriptToTest.PlayTurn(4);
        scriptToTest.PlayTurn(5);

        var returnValue = scriptToTest.PlayTurn(6);

        assert(returnValue);
    });
});

