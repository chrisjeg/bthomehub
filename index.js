"use strict";

var request = require('request-promise');
var cheerio = require('cheerio');
var ipAddress = 'http://192.168.1.254/';

var init = function(ipadd) {
	if(ipadd) ipAddress = ipadd;
	return actions;
};

var getConnectedDevices = function(){
	let devices = {};
	return request(ipAddress)
		.then(function (html) {
	    var $ = cheerio.load(html);
	    $('td').each(function(){
	    	if($(this).attr('width') === '25%' && 
	    		$(this).prev().attr('width') === $(this).next().attr('width') &&
	    		$(this).text() !== 'No devices detected') {
							let device = $(this).text();
							let mac = $(this).next().text();
							let ip = $(this).next().next().text();
							devices[device.substr(0,10)] = {mac, ip};
	    		}
	    });
		  return devices;
		});
};

var actions = {
	getConnectedDevices: getConnectedDevices
};

module.exports = init;