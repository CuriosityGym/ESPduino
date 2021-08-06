/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.CGRobot');

goog.require('Blockly.Arduino');



Blockly.Arduino["ConnectToWifi"]=function()
{
	var includesString="#include <ESP8266WiFi.h>\n#include <DNSServer.h>\n#include <ESP8266WebServer.h>\n#include <WiFiManager.h>\n";
	Blockly.Arduino.definitions_.define_wifi_includes=includesString;
	Blockly.Arduino.definitions_.wifimanager_instance="WiFiManager wifiManager;\n"
	var AP_NAME=Blockly.Arduino.valueToCode(this, 'AP_NAME', Blockly.Arduino.ORDER_ATOMIC);
	var AP_PASSWORD=Blockly.Arduino.valueToCode(this, 'AP_PASSWORD', Blockly.Arduino.ORDER_ATOMIC);
	//console.log(AP_NAME)
	//console.log(AP_PASSWORD);
	var codeStatement="Serial.begin(115200);\n";
	if(AP_NAME=="" || !AP_NAME)
	{
		codeStatement=codeStatement+"wifiManager.autoConnect();\nwifiManager.setConfigPortalTimeout(180);"
	}
	else if(AP_PASSWORD =="" || !AP_PASSWORD)
	{
		codeStatement=codeStatement+"wifiManager.autoConnect("+AP_NAME+");\nwifiManager.setConfigPortalTimeout(180);"
	}
	else
	{
		codeStatement=codeStatement+"wifiManager.autoConnect("+AP_NAME+","+AP_PASSWORD+");\nwifiManager.setConfigPortalTimeout(180);"
	}
	Blockly.Arduino.setups_['wifi_manager_setup'] = codeStatement+"\n";         
	return "";
};

Blockly.Arduino["InitDeviceParams"]=function()
{
	var branch = Blockly.Arduino.statementToCode(this, 'DO');
	return branch;
};



