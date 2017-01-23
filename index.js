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
	    let $ = cheerio.load(html);
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

var getInternetStatus = function(){
	return request(ipAddress)
		.then(function (html) {
			let $ = cheerio.load(html);
			return $('#connection_status').text();
		});
};

var getWifiStatus = function(){
	return request(ipAddress)
		.then(function (html) {
			let $ = cheerio.load(html);
			return $('td:contains("BT Wi-fi Status:")').next().text();
		});
};

var actions = {
	getConnectedDevices: getConnectedDevices,
	getInternetStatus : getInternetStatus,
	getWifiStatus: getWifiStatus
};

module.exports = init;