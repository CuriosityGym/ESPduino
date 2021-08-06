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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9c8539873c66bd6e039e5ebd29409b04bf5cff4b
//Added By DineshParmar
Blockly.Arduino['WiFiclient'] = function(block) {
	// TODO: Assemble Arduino into code variable.
	var code = 'WiFiClient client;\n';
	Blockly.Arduino.definitions_.wificlientDefine=code+"\n";
	Blockly.Arduino.setups_.WifiMode="WiFi.mode(WIFI_STA);\n"
	return "";
  };

//ThingSpeak Connect

Blockly.Arduino['thingspeak_write_to_field'] = function(block) {
	var value_thingspeakchannel = Blockly.Arduino.valueToCode(block, 'ThingSpeakChannel', Blockly.Arduino.ORDER_ATOMIC);
	var value_api_key = Blockly.Arduino.valueToCode(block, 'API_Key', Blockly.Arduino.ORDER_ATOMIC);
	var value_field_name = Blockly.Arduino.valueToCode(block, 'Field Name', Blockly.Arduino.ORDER_ATOMIC);
	var value_data = Blockly.Arduino.valueToCode(block, 'Data', Blockly.Arduino.ORDER_ATOMIC);
	// TODO: Assemble Arduino into code variable.
	var ThingSpeakWrite = 'ThingSpeak.writeField('
	var code = ThingSpeakWrite.concat(value_thingspeakchannel,',',value_field_name,',',value_data,',',value_api_key,')');
	// TODO: Change ORDER_NONE to the correct strength.
	return [code,Blockly.Arduino.ORDER_NONE];
  };

  Blockly.Arduino['thingspeak_begin'] = function(block) {
	// TODO: Assemble Arduino into code variable.
	var includesString="#include<ThingSpeak.h> \n";
	var codeStatement="ThingSpeak.begin(client); \n "
	Blockly.Arduino.definitions_.thingspeakinclude = includesString;
	Blockly.Arduino.setups_['Thingspeak Begin'] = codeStatement+"\n";
	return "";
  };  
<<<<<<< HEAD
=======
=======

>>>>>>> 69eeee76cc03a386a614f0d0a78b2e26060e4c50
>>>>>>> 9c8539873c66bd6e039e5ebd29409b04bf5cff4b

Blockly.Arduino["BlynkAUTH"]=function()
{
	var includesString="#include <BlynkSimpleEsp8266.h>\n";
	Blockly.Arduino.definitions_.blynkincludes=includesString;	
	var AUTH_CODE=Blockly.Arduino.valueToCode(this, 'AUTH_CODE', Blockly.Arduino.ORDER_ATOMIC);	
	Blockly.Arduino.definitions_.blynkdefines="#define BLYNK_DEBUG\n#define BLYNK_PRINT Serial\n"
	Blockly.Arduino.definitions_.blynkauthcode='char auth[] = '+AUTH_CODE+';';	
	return "";
};

Blockly.Arduino["BlynkConnect"]=function()
{
	var codeStatement="Blynk.config(auth);";
	Blockly.Arduino.setups_['blynkauthcode'] = codeStatement+"\n";         
	return "";
};

Blockly.Arduino["BlynkRun"]=function()
{
	return "Blynk.run();\n";
};

Blockly.Arduino["BlynkConnected"]=function()
{
	var blynkConnectedStatus="Blynk.connected()"
	//return["200",Blockly.Arduino.ORDER_ATOMIC];
	return[blynkConnectedStatus,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["RGBLED"]=function()
{
	var v_pin=this.getFieldValue("v_pin")
	var d_pin=this.getFieldValue("d_pin");
	var includesString="#include <NeoPixelBus.h>\n";
	Blockly.Arduino.definitions_.define_blynk_includes=includesString;	
	
	var RGBLEDString= "const uint16_t numberOfPixels = 1;\n";
	RGBLEDString=RGBLEDString+"const uint8_t PixelPin ="+ d_pin+";\n";
	RGBLEDString=RGBLEDString+"NeoPixelBus<NeoGrbFeature, NeoEsp8266BitBang800KbpsMethod> pixel(numberOfPixels, PixelPin);\n"
	Blockly.Arduino.definitions_.neopixeldefines=RGBLEDString
	
	var setupString="pixel.Begin();\n pixel.Show();\n"
	Blockly.Arduino.setups_['RGBLED'] = setupString+"\n"; 

	
	
	var virtualFunction="BLYNK_WRITE("+v_pin+")\n{\n";
	virtualFunction=virtualFunction+ "\tint red = param[0].asInt();\n";
	virtualFunction=virtualFunction+ "\tint green = param[1].asInt();\n";
	virtualFunction=virtualFunction+ "\tint blue = param[2].asInt();\n"
	virtualFunction=virtualFunction+ "\tRgbColor newColor(red, green,blue);\n";
	virtualFunction=virtualFunction+ "\tpixel.SetPixelColor(0, newColor);\n";
	virtualFunction=virtualFunction+ "\tpixel.Show();\n";
    virtualFunction=virtualFunction+ "}"
	
	Blockly.Arduino.definitions_.RGBLEDVirtual=virtualFunction;
	return "";
	
};



<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9c8539873c66bd6e039e5ebd29409b04bf5cff4b
// Added By Dinesh Parmar

// Adafruit Connection


Blockly.Arduino['adafruitconnect'] = function(block) {
	var value_io_username = Blockly.Arduino.valueToCode(block, 'io_username', Blockly.Arduino.ORDER_ATOMIC);
	var value_io_password = Blockly.Arduino.valueToCode(block, 'IO_Password', Blockly.Arduino.ORDER_ATOMIC);
	// TODO: Assemble Arduino into code variable.
	var include_string = "#include \"AdafruitIO_WiFi.h\" \n";

	Blockly.Arduino.definitions_.adafruitInclude=include_string;

	Blockly.Arduino.definitions_['Adafruit']='#define IO_USERNAME '+value_io_username+'\n'+'#define IO_KEY '+value_io_password+'\n';
	Blockly.Arduino.definitions_['AdafruitConnection']='AdafruitIO_WiFi io(IO_USERNAME, IO_KEY, wifi_ssid, wifi_password);\n';

	
	
	Blockly.Arduino.setups_['AdafruitBegin']='io.connect(); \n'
	var code = '// io.run(); is required for all sketches \n // it should always be present at the top of your loop \n // function. it keeps the client connected to \n // io.adafruit.com, and processes any incoming data. \n io.run();\n';
	return code;
  };

// Adafruit Feed Initializer

Blockly.Arduino['feedinitializer'] = function(block) {
	var dropdown_feedvar = block.getFieldValue('FeedVAR');
	var value_feed_var = Blockly.Arduino.valueToCode(block, 'feed_var', Blockly.Arduino.ORDER_ATOMIC);
	// TODO: Assemble Arduino into code variable.
	Blockly.Arduino.definitions_['AdafruitFeedInitialize'+dropdown_feedvar]='AdafruitIO_Feed *'+dropdown_feedvar+' ='+' io.feed('+value_feed_var+');\n';
	return "";
  };

// Adafruit send data to feed

Blockly.Arduino['adafruit_send_data_to_feed'] = function(block) {
	var dropdown_feedvar = block.getFieldValue('FeedVAR');
	var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
	var value_lat = Blockly.Arduino.valueToCode(block, 'lat', Blockly.Arduino.ORDER_ATOMIC);
	var value_long = Blockly.Arduino.valueToCode(block, 'long', Blockly.Arduino.ORDER_ATOMIC);
	var value_precision = Blockly.Arduino.valueToCode(block, 'precision', Blockly.Arduino.ORDER_ATOMIC);
	var value_updaterate = Blockly.Arduino.valueToCode(block, 'UpdateRate', Blockly.Arduino.ORDER_ATOMIC);
	// TODO: Assemble Arduino into code variable.
	var codeLine1= dropdown_feedvar+' -> save(float('+value_value+'),'+value_lat+', '+value_long+', '+value_precision+'); \n';
	var codeLine2='Serial.print("Waiting "); \n Serial.print('+value_updaterate+'); \n Serial.println("seconds");\n\n for (int i = 0; i <'+value_updaterate+'*60'+' ; i++) \n { \n delay(1000); \n} \n';
	return codeLine1+codeLine2;
  };





<<<<<<< HEAD
=======
=======
>>>>>>> 69eeee76cc03a386a614f0d0a78b2e26060e4c50
>>>>>>> 9c8539873c66bd6e039e5ebd29409b04bf5cff4b
