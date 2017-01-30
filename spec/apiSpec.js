// 'use strict';
// var request = require('request');
// const base_url = 'http://localhost:5000/api/'
// const baseLunch_url = 'http://localhost:5000/api/lunch'

// const slackResponse = require('../lunch/slackresponse.js');

// describe("Lunch Time Slack API", function () {
//     describe("GET api/", function () {
//         it("returns status code 200", function (done) {
//             request(base_url, function (error, response, body) {
//                 expect(response.statusCode).toEqual(200);
//                 done();
//             });
//         });
//     });

//     describe("POST api/lunch", function () {
//         it("Returns unknown request message when syntax is not correct", function (done) {
//             request.post(baseLunch_url, { form: { text: 'sdsd' } }, function (error, response, body) {
//                 expect(JSON.parse(body).text).toEqual(slackResponse.unknownCommand());
//                 done();
//             });
//         });

//         it("Returns about message when post argument text is about", function (done) {
//             request.post(baseLunch_url, { form: { text: 'about' } }, function (error, response, body) {
//                 expect(JSON.parse(body).text).toEqual(slackResponse.about());
//                 done();
//             });
//         });

//         it("Returns help message when post argument text is help", function (done) {
//             request.post(baseLunch_url, { form: { text: 'help' } }, function (error, response, body) {
//                 expect(JSON.parse(body).text).toEqual(slackResponse.help());
//                 done();
//             });
//         });
//     });

//     //     // it("Returns about message", function (done) {
//     //     //     request.post(base_url, { text: 'about' }, function (error, response, body) {
//     //     //         expect(response.statusCode).toEqual(slackResponse.about());
//     //     //         done();
//     //     //     });
//     //     // });
//     // });
// });