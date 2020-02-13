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



