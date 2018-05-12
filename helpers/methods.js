const _        = require("lodash"),
      request  = require("request"),
      env      = require("../config/env");


module.exports = {

    buildUrl(url, pathVars, getVars){
        url = this.attachHost(url);
        url = this.replacePlaceholders(url, pathVars);
        // url += "?" + this.buildGetArguments(getVars);
        return url;
    },


    attachHost(url){
        return this.replacePlaceholders(url, {
            url: env.api.url
        });
    },


    replacePlaceholders(str, data){
        if (!data) data = {};
        return str.replace(/:([^:/]+)/g, (str, variable) => {
            let val = data[variable];
            return val != undefined ? val : str
        });
    },


    buildGetArguments(data){
        return _.map(data || {}, (val, key) => key + "=" + encodeURIComponent(val)).join("&");

    },


    sendGet(url, pathVars,getVars, cb){
        let compiledUrl = this.buildUrl(url, pathVars, getVars),
        options = {
            uri: compiledUrl,
            method: 'GET',
            headers:
                {
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/json'
                },
            json: true
        };

        request(options, (error, response, body) => {
            if(error) return cb(error);
            if(response.statusCode != 200) return cb(response.statusCode + " " + body);
            cb(null,response, body);
        });
    },

    sendPost(url, pathVars, getVars, postVars, cb){
        let compiledUrl = this.buildUrl(url, pathVars, getVars),
            options = {
                uri: compiledUrl,
                method: 'POST',
                headers:
                        {
                            'Cache-Control': 'no-cache',
                            'Content-Type': 'application/json'
                        },
                body: postVars,
                json: true
            };

        request(options, function(error, response, body){
            if(error) return cb(error);
            if(response.statusCode != 200) return cb(response.statusCode + " " + body);
            cb(null, response, body);
        });


    },


    sendPut(url, pathVars, getVars, postVars, cb){
        let compiledUrl = this.buildUrl(url, pathVars, getVars),
            options = {
                uri: compiledUrl,

                method: 'PUT',
                headers:
                    {
                        'Cache-Control': 'no-cache',
                        'Content-Type': 'application/json'
                    },
                body: postVars,
                json: true
            };

        request(options, function(error, response, body){
            if(error) return cb(error);
            if(response.statusCode != 200) return cb(response.statusCode + " " + body);
            cb(null, response, body);
        });


    },

    sendDelete(url, pathVars, getVars, cb){
        let compiledUrl = this.buildUrl(url, pathVars, getVars),
            options = {
                uri: compiledUrl,
                method: 'DELETE',
                headers:
                    {
                        'Cache-Control': 'no-cache',
                        'Content-Type': 'application/json'
                    },
                json: true
            };

        request(options, (error, response, body) => {
            if(error) return cb(error);
            if(response.statusCode != 200) return cb(response.statusCode + " " + body);
            cb(null,response, body);
        });
    }
};