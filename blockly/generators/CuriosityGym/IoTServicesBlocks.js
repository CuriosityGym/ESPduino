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
var customProfile = {  
  ESP8266: {
    description: "Generic ESP8266 Module",
    digital: [["D0", "D0"],["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"], ["D5", "D5"], ["D6", "D6"], ["D7", "D7"], ["D8", "D8"]],
	analog: [["A0", "A0"]],
	virtual:[["V0", "V0"],["V1", "V1"], ["V2", "V2"], ["V3", "V3"], ["V4", "V4"], ["V5", "V5"], ["V6", "V6"], ["V7", "V7"], ["V8", "V8"]],
    serial: 115200
  }
};


//Added by Rupin 
Blockly.Blocks['BlynkAUTH'] = {
  init: function() {
	 
	  
	//this.appendDummyInput().appendField("Configure WIFI Device");
	this.appendValueInput('AUTH_CODE')
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField('Set Blynk Auth Token to');
	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);

  }
}

Blockly.Blocks['BlynkConnect'] = {
  init: function() {
	 
	  
	this.appendDummyInput().appendField("Connect to Blynk");	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);

  }
}

Blockly.Blocks['BlynkRun'] = {
  init: function() {
	 
	  
	this.appendDummyInput().appendField("Run Blynk");
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);

  }
}

Blockly.Blocks["BlynkConnected"]={
	init:function()
	{
		this.appendDummyInput()
			.appendField("Is Blynk Connected?")	
			//.appendField(new Blockly.FieldDropdown(sensorCount), 'sensorNumber');			
		this.setOutput(true, 'Boolean');
		this.setColour(120);
		
	}
};

Blockly.Blocks["RGBLED"]={
	init:function()
	{
		
		this.appendDummyInput()
			.appendField("Show Color on LED");
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("Digital Pin:")
			.appendField(new Blockly.FieldDropdown(customProfile["ESP8266"].digital),"d_pin");	
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("Virtual Pin:")
			.appendField(new Blockly.FieldDropdown(customProfile["ESP8266"].virtual),"v_pin");
			
			
	//this.setPreviousStatement(true);
	//this.setNextStatement(true);			
			//.appendField(new Blockly.FieldDropdown(sensorCount), 'sensorNumber');			
		//this.setOutput(true, 'Boolean');
		this.setColour(120);
		
	}
};









