const chai = require('chai'),
    config = require('../config/env'),
    method = require('../helpers/methods'),
    should = chai.should();
describe('Memohis API Test', function () {


    it('URL1 GET', function (done) {

        method.sendGet(config.URL1,null,null, (err, response, body) => {
            if (err) throw new Error(err);
            // response.statusCode.should.equal(200);
            // body.response.should.have.property("id");
            // body.response.should.have.property("email");
            // body.response.should.have.property("firstName");
            // body.response.should.have.property("lastName");                      TODO: Проверка с помощью chai.should
            // body.response.should.have.property("countryCode");
            // body.response.should.have.property("isSuperadmin");
            // body.response.should.have.property("isValidated");
            // body.response.should.have.property("phone");
            // body.response.should.have.property("wantReceiveEmails");
            // body.response.email.should.be.equal(superAdmin.credentials.email);
            // body.response.isSuperadmin.should.be.equal(true);
            done();
        });
    });

    it('URL2 POST', function (done) {


        method.sendPost(config.URL2, {profileId: 'profit'},null,{id: 12, user: 3}, (err, response, body) => {
            if (err) throw new Error(err);
            response.statusCode.should.equal(200);
            done();
        });
    });

    it('URL3 PUT', function (done) {


        method.sendPut(config.URL3, {profileId: 'profit2', cardId: 'card2'}, null, {id: 12, user: 3}, (err, response, body) => {
            if (err) throw new Error(err);
            response.statusCode.should.equal(200);
            done();
        });
    });

    it('URL4 DELETE', function (done) {


        method.sendDelete(config.URL4, {profileId: 'profit3', cardId: 'card3'}, null,(err, response, body) => {
            if (err) throw new Error(err);
            response.statusCode.should.equal(200);
            done();
        });
    });

});