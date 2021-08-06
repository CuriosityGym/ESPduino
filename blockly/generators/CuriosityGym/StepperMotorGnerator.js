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


Blockly.Arduino.stepperMotor = function()
{	var stepinputSpeed= Blockly.Arduino.valueToCode(this, 'stepmotorSpeed', Blockly.Arduino.ORDER_ATOMIC)||255;
	var stepchosenMotor= this.getFieldValue('stepmotorChoice')
	var stepchosenDirection= this.getFieldValue('stepdirection')
	Blockly.Arduino.definitions_['include_stepper'] = '#include <AccelStepper.h>';
	Blockly.Arduino.definitions_['include_motor'] = '#include <AFMotor.h>';
	Blockly.Arduino.definitions_['AFmotorobject' + stepchosenMotor] = "AF_Stepper motor"+stepchosenMotor+"(4096,"+stepchosenMotor+" );\n";
	Blockly.Arduino.definitions_['Forward' + stepchosenMotor] = "void FORWARD"+stepchosenMotor+"() { \n motor"+stepchosenMotor+".onestep(FORWARD, SINGLE);\n }\n";
	Blockly.Arduino.definitions_['Backward' + stepchosenMotor] = "void BACKWARD"+stepchosenMotor+"() { \n motor"+stepchosenMotor+".onestep(BACKWARD, SINGLE);\n }\n";
	if(stepchosenDirection == 'FORWARD'){
	Blockly.Arduino.definitions_['Accelstepper' + stepchosenMotor + stepchosenDirection] = "AccelStepper stepper"+stepchosenMotor+"(FORWARD"+stepchosenMotor+",BACKWARD"+stepchosenMotor+");\n";
	}
	else{
	Blockly.Arduino.definitions_['Accelstepper' + stepchosenMotor + stepchosenDirection] = "AccelStepper stepper"+stepchosenMotor+"(BACKWARD"+stepchosenMotor+",FORWARD"+stepchosenMotor+");\n";
	}
	Blockly.Arduino.setups_['stepspeed' + stepchosenMotor]="stepper"+stepchosenMotor+".setSpeed("+stepinputSpeed+");"
	var stepcode="stepper"+stepchosenMotor+".runSpeed();\n"
	return stepcode;
}

Blockly.Arduino.MoveMotor = function()
{	var moveinputSpeed= Blockly.Arduino.valueToCode(this, 'movemotorSpeed', Blockly.Arduino.ORDER_ATOMIC)||255;
	var moveinputSteps= Blockly.Arduino.valueToCode(this, 'Steps', Blockly.Arduino.ORDER_ATOMIC)||1024;
	var movechosenMotor= this.getFieldValue('movemotorChoice')
	var movechosenDirection= this.getFieldValue('movemotordirection')
	Blockly.Arduino.definitions_['include_stepper'] = '#include <AccelStepper.h>';
	Blockly.Arduino.definitions_['include_motor'] = '#include <AFMotor.h>';
	Blockly.Arduino.definitions_['AFmotorobject' + movechosenMotor] = "AF_Stepper motor"+movechosenMotor+"(4096,"+movechosenMotor+" );\n";
	Blockly.Arduino.definitions_['Forward' + movechosenMotor] = "void FORWARD"+movechosenMotor+"() { \n motor"+movechosenMotor+".onestep(FORWARD, SINGLE);\n }\n";
	Blockly.Arduino.definitions_['Backward' + movechosenMotor] = "void BACKWARD"+movechosenMotor+"() { \n motor"+movechosenMotor+".onestep(BACKWARD, SINGLE);\n }\n";
	if(movechosenDirection == 'FORWARD'){
	Blockly.Arduino.definitions_['Accelstepper' + movechosenMotor + movechosenDirection] = "AccelStepper stepper"+movechosenMotor+"(FORWARD"+movechosenMotor+",BACKWARD"+movechosenMotor+");\n";
	}
	else{
	Blockly.Arduino.definitions_['Accelstepper' + movechosenMotor + movechosenDirection] = "AccelStepper stepper"+movechosenMotor+"(BACKWARD"+movechosenMotor+",FORWARD"+movechosenMotor+");\n";
	}
	Blockly.Arduino.setups_['stepspeed' + movechosenMotor]="stepper"+movechosenMotor+".setMaxSpeed("+moveinputSpeed+");"
	Blockly.Arduino.setups_['stepacceleration' + movechosenMotor]="stepper"+movechosenMotor+".setAcceleration("+moveinputSpeed+");"
	Blockly.Arduino.setups_['stepmoveto' + movechosenMotor]="stepper"+movechosenMotor+".moveTo("+moveinputSteps+");\n"
	var stepcode="stepper"+movechosenMotor+".run();\n"
	return stepcode;
}

