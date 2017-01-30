'use strict';

const parser = require('../lunch/parser.js');
const helpCommand = require('../lunch/commands/helpCommand.js');

/*Test helpers*/
const notFoundCommand = 'sdsd ssd sd sdlsmd adla dad asd';

describe("Api input parser should", function () {

    it("return command NotFound when command is not recognized", function (done) {

        var resultCommand = parser.parse(notFoundCommand);
        expect('notFoundCommand').toEqual(resultCommand.name);
        done();
    });

    it("return undefined when parsing object is null or undefined ", function (done) {
        var resultCommand = parser.parse(undefined);
        expect('notFoundCommand').toEqual(resultCommand.name);

        var resultCommand = parser.parse(null);
        expect('notFoundCommand').toEqual(resultCommand.name);
        done();
    });

    it("return command help when command help was typed", function (done) {
        var resultCommand = parser.parse("help");
        expect(helpCommand.name).toEqual(resultCommand.name);
        done();
    });

    it("return command was typed in changing camelcase", function (done) {
        var resultCommand = parser.parse("hElP");
        expect('notFoundCommand').not.toEqual(resultCommand.name);
        done();
    });

    it("return command about when about help was typed", function (done) {
        var resultCommand = parser.parse("about");
        expect('aboutCommand').toEqual(resultCommand.name);
        done();
    });

    it("return help command when help is first word and other are different", function (done) {
        var resultCommand = parser.parse("help me babe");
        expect('helpCommand').toEqual(resultCommand.name);
        done();
    });

    describe("return command with order in typing", function () {
        it("return order command list when command is single instruction", function (done) {
            var resultCommand = parser.parse("order");
            expect('orderCommandListCommand').toEqual(resultCommand.name);
            done();
        });

        it("return orderbegin command when command order begin is typed", function (done) {
            var resultCommand = parser.parse("order begin");
            expect('orderBeginCommand').toEqual(resultCommand.name);
            done();
        });

        it("return orderEnds command when command order ends is typed", function (done) {
            var resultCommand = parser.parse("order end");
            expect('orderEndsCommand').toEqual(resultCommand.name);
            done();
        });

    });

});
