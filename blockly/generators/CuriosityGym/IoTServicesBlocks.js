<<<<<<< HEAD
	/**
=======
<<<<<<< HEAD
	/**
=======
/**
>>>>>>> 69eeee76cc03a386a614f0d0a78b2e26060e4c50
>>>>>>> 9c8539873c66bd6e039e5ebd29409b04bf5cff4b
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9c8539873c66bd6e039e5ebd29409b04bf5cff4b
//Added By Dinesh Parmar
Blockly.Blocks['WiFiclient'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("Create a Client");
	  this.setPreviousStatement(true);
	  this.setNextStatement(true);
	  this.setColour(120);
	  this.setTooltip('');
	}
  };
  //ThingSpeak Connect
  	// ThingSpeak Write to Field
	  Blockly.Blocks['thingspeak_write_to_field'] = {
		init: function() {
		  this.appendDummyInput()
			  .appendField("ThingSpeak.WriteToField");
		  this.appendValueInput("ThingSpeakChannel")
			  .setCheck("Number")
			  .setAlign(Blockly.ALIGN_RIGHT)
			  .appendField("Channel ID");
		  this.appendValueInput("API_Key")
			  .setCheck(null)
			  .setAlign(Blockly.ALIGN_RIGHT)
			  .appendField("API Key");
		  this.appendValueInput("Field Name")
			  .setCheck("Number")
			  .setAlign(Blockly.ALIGN_RIGHT)
			  .appendField("Field");
		  this.appendValueInput("Data")
			  .setCheck("Number")
			  .setAlign(Blockly.ALIGN_RIGHT)
			  .appendField("Data");
		  this.setOutput(true, "Number");
		  this.setColour(65);
		  this.setTooltip('');
		  this.setHelpUrl('');
		}
	  };
  	//ThingSpeak Begin and connect to Client
  Blockly.Blocks['thingspeak_begin'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("ThingSpeak Begin");
	 
	  this.setPreviousStatement(true);
	  this.setNextStatement(true);
	  this.setColour(120);
	  this.setTooltip('');
	  this.setHelpUrl('');
	}
  };
  
<<<<<<< HEAD
=======
=======
>>>>>>> 69eeee76cc03a386a614f0d0a78b2e26060e4c50
>>>>>>> 9c8539873c66bd6e039e5ebd29409b04bf5cff4b

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



<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9c8539873c66bd6e039e5ebd29409b04bf5cff4b
//Added By Dinesh Parmar
// AdaFruit IO dashboard Connection

Blockly.Blocks['adafruitconnect'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("Connect to My Adafruit_IO");
	  this.appendValueInput("io_username")
		  .setCheck("String")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField("IO_USERNAME");
	  this.appendValueInput("IO_Password")
		  .setCheck("String")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField("IO_KEY");
	  this.setPreviousStatement(true);
	  this.setNextStatement(true);
	  this.setColour(290);
	  this.setTooltip('');
	  this.setHelpUrl('');
	}
  };

  // Adafruit Feed connection


  Blockly.Blocks['feedinitializer'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("Connect ");
	  this.appendValueInput("feed_var")
		  .setCheck("String")
		  .appendField(new Blockly.FieldDropdown([["MyFeed1", "feed_1"], ["MyFeed2", "feed_2"], ["MyFeed3", "feed_3"], ["MyFeed4", "feed_4"], ["MyFeed5", "feed_5"], ["MyFeed6", "feed_6"], ["MyFeed7", "feed_7"], ["MyFeed8", "feed_8"], ["MyFeed9", "feed_9"], ["MyFeed10", "feed_10"]]), "FeedVAR")
		  .appendField("to");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true);
	  this.setNextStatement(true);
	  this.setColour(290);
	  this.setTooltip('');
	  this.setHelpUrl('');
	}
  };

// Adafruit Send data to feed

Blockly.Blocks['adafruit_send_data_to_feed'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("Send data to ")
		  .appendField(new Blockly.FieldDropdown([["MyFeed1", "feed_1"], ["MyFeed2", "feed_2"], ["MyFeed3", "feed_3"], ["MyFeed4", "feed_4"], ["MyFeed5", "feed_5"], ["MyFeed6", "feed_6"], ["MyFeed7", "feed_7"], ["MyFeed8", "feed_8"], ["MyFeed9", "feed_9"], ["MyFeed10", "feed_10"]]), "FeedVAR");
	  this.appendValueInput("value")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField("Value");
	  this.appendValueInput("lat")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField("lat");
	  this.appendValueInput("long")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField("long");
	  this.appendValueInput("precision")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField("precision of data");
	  this.appendValueInput("UpdateRate")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField("Update Rate");
	  this.setPreviousStatement(true);
	  this.setNextStatement(true);
	  this.setColour(290);
	  this.setTooltip('A block to update your feed with value. Put Lat and long value by default as 0 if there is no GPS data you havta send. \n Only select the feed from the dropdown which is initialized. Update Rate is the frequency of data you want to send(in minutes)');
	  this.setHelpUrl('');
	}
  };


<<<<<<< HEAD
=======
=======
>>>>>>> 69eeee76cc03a386a614f0d0a78b2e26060e4c50
>>>>>>> 9c8539873c66bd6e039e5ebd29409b04bf5cff4b






