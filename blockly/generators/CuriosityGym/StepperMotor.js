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


Blockly.Blocks['stepperMotor'] = {
  init: function() {
	  var Stepmotoroptions = [['1', '1'], ['2', '2']];
	  var StepdirectionOptions = [['FORWARD', 'FORWARD'], ['BACKWARD', 'BACKWARD']];
	  
	this.appendValueInput('stepmotorSpeed')
        .setCheck('Number')
        .appendField('Turn Motor ')
		.appendField(new Blockly.FieldDropdown(Stepmotoroptions), 'stepmotorChoice')
		.appendField('continuously in')
		.appendField(new Blockly.FieldDropdown(StepdirectionOptions), 'stepdirection')
		.appendField('direction with speed ');
		
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(100);

  }
}

Blockly.Blocks['MoveMotor'] = {
  init: function() {
	  var Movemotoroptions = [['1', '1'], ['2', '2']];
	  var MovedirectionOptions = [['FORWARD', 'FORWARD'], ['BACKWARD', 'BACKWARD']];
	  
	this.appendValueInput('movemotorSpeed')
        .setCheck('Number')
        .appendField('Move Motor')
		.appendField(new Blockly.FieldDropdown(Movemotoroptions), 'movemotorChoice')
		.appendField('in')
		.appendField(new Blockly.FieldDropdown(MovedirectionOptions), 'movemotordirection')
		.appendField('direction with speed ');	
	this.appendValueInput("Steps", 'Number')
        .appendField("up to")
        .setCheck('Number');
	this.appendDummyInput()
	    .appendField("steps");
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(100);

  }
}
