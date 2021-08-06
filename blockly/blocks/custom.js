goog.provide('Blockly.Blocks.custom');

goog.require('Blockly.Blocks');

var servo = {  
  wemos_servo: {
    description: "Generic ESP8266 Module",
    digital: [["D7", "D7"]],
	//analog: [["A0", "A0"]],
	//virtual:[["V0", "V0"],["V1", "V1"], ["V2", "V2"], ["V3", "V3"], ["V4", "V4"], ["V5", "V5"], ["V6", "V6"], ["V7", "V7"], ["V8", "V8"]],
    //serial: 115200
  }
};





Blockly.Blocks['ultrasonic_sensor'] = {
  helpUrl: 'https://howtomechatronics.com/tutorials/arduino/ultrasonic-sensor-hc-sr04/',
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
    	.appendField("Measure Distance (cm)")
    this.appendDummyInput()
    	.setAlign(Blockly.Align_RIGHT)
    	.appendField("Trigger Pin:")
    	.appendField(new Blockly.FieldDropdown([["D4","D4"]]), "Trigger")
    this.appendDummyInput()
    	.setAlign(Blockly.Align_RIGHT)
    	.appendField("Echo Pin:")
    	.appendField(new Blockly.FieldDropdown([["D0","D0"]]), "Echo")
    this.appendDummyInput()
    	.setAlign(Blockly.Align_RIGHT)
    	.appendField("Unit:")
    	.appendField(new Blockly.FieldDropdown([["cm","cm"]]), "Unit")
    
    this.setOutput(true, "Number")
    //this.setInputsInline(true);
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    this.setTooltip('Measure Distance using ultrasonic sensor');
  }
};

//DHT11
Blockly.Blocks['dht_begin'] = {
  init: function() {
  
	this.appendDummyInput().appendField("Initialise DHT11");	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(120);
  this.setTooltip('Initialize DHT11 library');
  }
}

Blockly.Blocks['measure_temp'] = {
  helpUrl: 'https://howtomechatronics.com/tutorials/arduino/ultrasonic-sensor-hc-sr04/',
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
    	.appendField("Temperature(celcius)")
    this.appendDummyInput()
    	.setAlign(Blockly.Align_RIGHT)
    	.appendField("DHT11")
    	.appendField(new Blockly.FieldDropdown([["D6","D6"]]), "dht11")
    
    this.setOutput(true, "Number")
    this.setInputsInline(true);
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    this.setTooltip('Measure temperature in celcius');
  }
};
Blockly.Blocks['measure_hum'] = {
  helpUrl: 'https://howtomechatronics.com/tutorials/arduino/ultrasonic-sensor-hc-sr04/',
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
    	.appendField("Humidity")
    this.appendDummyInput()
    	.setAlign(Blockly.Align_RIGHT)
    	.appendField("DHT11")
    	.appendField(new Blockly.FieldDropdown([["D6","D6"]]), "dht11")
    
    this.setOutput(true, "Number")
    this.setInputsInline(true);
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    this.setTooltip('Measure humidity');
  }
};

//WS2812
Blockly.Blocks['rgb_begin'] = {
  init: function() {
  
	this.appendDummyInput().appendField("Initialise WS2812b RGB Led");	
	this.appendValueInput('pixel', 'Number')
		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendField('Pixel');

    //this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(315);
    this.setTooltip('Initialze Adafruit Neopixel library');

  }
}

Blockly.Blocks['set_brightness'] = {
  init: function() {  
  	this.appendValueInput('set_brightness', 'Number')
  		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  	.appendField('Set brightness');	
	//this.appendDummyInput().appendField("Set Font");	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(315);
    this.setTooltip('Set brightness of WS2812b RGB Led (0-255)');

  }
}

Blockly.Blocks['set_color'] = {
  init: function() {
  	this.appendValueInput("pixel", 'Number')
        .setCheck('Number')
        .appendField("Set color to Pixel");

    this.appendValueInput("red", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Red");
    this.appendValueInput("green", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Green");
    this.appendValueInput("blue", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Blue");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("Set color on WS2812b RGB led. Red color(0-255), Green color(0-255), Blue color(0-255)");
 this.setHelpUrl("");
  }
};

//fill the RGB Strip //Added by Dinesh Parmar

Blockly.Blocks['strip_fill'] = {
  init: function() {
    this.appendValueInput("strip.fill.from")
        .setCheck("Number")
        .appendField("Fill the LED From");
    this.appendValueInput("strip.fill.to")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("To");
    this.appendValueInput("red_pixel")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("RED");
    this.appendValueInput("green_pixel")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("GREEN");
    this.appendValueInput("blue_pixel")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("BLUE");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('Multiple pixels can be set to the same color. "From" is the index of the first pixel to fill, where 0 is the first pixel in the strip, and (Number of Pixel - 1) is the last. Must be a positive value or 0.');
    this.setHelpUrl('');
  }
};

//OLED
Blockly.Blocks['oled_begin'] = {
  init: function() {
	 
	  
	this.appendDummyInput().appendField("Initialise OLED");	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(315);
  this.setTooltip('Initialze u8g2 library for OLED display');
  }
};

Blockly.Blocks['oled_set_font'] = {
  init: function() {  
  	this.appendValueInput('set_font')
  		.setAlign(Blockly.ALIGN_RIGHT)
  	.appendField('set font to');	
	//this.appendDummyInput().appendField("Set Font");	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(315);
  this.setTooltip('Set font to print text');
  }
};

Blockly.Blocks['oled_font_list'] = {
  init: function() {
    this.appendDummyInput().appendField("font list")
        .appendField(new Blockly.FieldDropdown([["Default font","u8g2_font_ncenB08_tr"], ["12 Pixel Height","u8g2_font_ncenB12_tr"], 
                                                ["14 Pixel Height","u8g2_font_ncenB14_te"], ["15 Pixel Height","u8g2_font_courB18_tr"], 
                                                ["16 Pixel Height","u8g2_font_crox5tb_tr"], ["18 Pixel Height","u8g2_font_ncenB18_te"],
                                                ["24 Pixel Height","u8g2_font_ncenB24_tf"], ["35 Pixel Height","u8g2_font_fub35_tr"]]), "font");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(135);
 this.setTooltip("available font list");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['oled_print_text'] = {
  init: function() {  
  	this.appendDummyInput().appendField('Print Text')
  	this.appendValueInput('x_cord', 'Number')
      .setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  	.appendField('X');
  	this.appendValueInput('y_cord', 'Number')
      .setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  	.appendField('Y')
  	this.appendValueInput('text')
  		.setAlign(Blockly.ALIGN_RIGHT)
  	.appendField('Text')	
	//this.appendDummyInput().appendField("Set Font");	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(315);
    this.setTooltip('Print text on OLED display. Top left is starting position(0,0).');

  }
}

Blockly.Blocks['oled_print_triangle'] = {
  init: function() {  
  	this.appendDummyInput().appendField('Draw Triangle')
  	this.appendValueInput('x1_cord', 'Number')
  		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendField('X1');
  	this.appendValueInput('y1_cord', 'Number')
  		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendField('Y1')
  	this.appendValueInput('x2_cord', 'Number')
  		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendField('X2');
  	this.appendValueInput('y2_cord', 'Number')
  		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendField('Y2')
  	this.appendValueInput('x3_cord', 'Number')
  		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendField('X3');
  	this.appendValueInput('y3_cord', 'Number')
  		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendField('Y3')	
	//this.appendDummyInput().appendField("Set Font");	
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(315);
    this.setTooltip('Draw triangle on OLED display.');

  }
}

Blockly.Blocks['oled_print_line'] = {
  init: function() {  
  	this.appendDummyInput().appendField('Draw Line')
  	this.appendValueInput('x1_cord', 'Number')
  		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendField('X1');
  	this.appendValueInput('y1_cord', 'Number')
  		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendField('Y1')
  	this.appendValueInput('x2_cord', 'Number')
  		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendField('X2');
  	this.appendValueInput('y2_cord', 'Number')
  		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendField('Y2')
  	
	//this.appendDummyInput().appendField("Set Font");	
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(315);
    this.setTooltip('Darw line on OLED display');

  }
}

Blockly.Blocks['oled_print_rectangle'] = {
  init: function() {  
    this.appendDummyInput().appendField('Draw Rectangle')
    this.appendValueInput('x1_cord', 'Number')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('X1');
    this.appendValueInput('y1_cord', 'Number')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('Y1')
    this.appendValueInput('x2_cord', 'Number')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('X2');
    this.appendValueInput('y2_cord', 'Number')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('Y2')
    
  //this.appendDummyInput().appendField("Set Font");
  this.setInputsInline(true); 
  this.setPreviousStatement(true);
  this.setNextStatement(true);
    this.setColour(315);
    this.setTooltip('Darw rectangle on OLED display');

  }
}

Blockly.Blocks['oled_print_box'] = {
  init: function() {  
  	this.appendDummyInput().appendField('Draw Box')
  	this.appendValueInput('x1_cord', 'Number')
  		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendField('X1');
  	this.appendValueInput('y1_cord', 'Number')
  		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendField('Y1')
  	this.appendValueInput('x2_cord', 'Number')
  		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendField('X2');
  	this.appendValueInput('y2_cord', 'Number')
  		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendField('Y2')
  	
	//this.appendDummyInput().appendField("Set Font");
	this.setInputsInline(true);	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(315);
    this.setTooltip('Darw rectangle on OLED display');

  }
}

Blockly.Blocks['oled_print_circle'] = {
  init: function() {  
  	this.appendDummyInput().appendField('Draw circle')
  	this.appendValueInput('x_cord', 'Number')
  		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendField('X');
  	this.appendValueInput('y_cord', 'Number')
  		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendField('Y')
  	this.appendValueInput('radius', 'Number')
  		.setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendField('Radius');
  	
	//this.appendDummyInput().appendField("Set Font");	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(315);
    this.setTooltip('Darw circle on OLED display');

  }
}
Blockly.Blocks['clear_oled'] = {
  init: function() {
	 
	  
	this.appendDummyInput().appendField("Clear display");	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(315);
  this.setTooltip('Clear oled display');
  }
}

Blockly.Blocks['send_buffer'] = {
  init: function() {
	 
	  
	this.appendDummyInput().appendField("Send Data");	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(315);
  this.setTooltip('Send data to print on oled display. use this block everytime you want to print something on oled display');
  }
}

//WIFI
Blockly.Blocks['wifi_begin'] = {
  init: function() {  
  	this.appendDummyInput().appendField('Connect to WiFi')
  	this.appendValueInput('WiFi_NAME')
  		.setAlign(Blockly.ALIGN_RIGHT)
  	.appendField('Name');
  	this.appendValueInput('WiFi_PASSWORD')
  		.setAlign(Blockly.ALIGN_RIGHT)
  	.appendField('Password')	
	//this.appendDummyInput().appendField("Set Font");	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(105);
  this.setTooltip('Connect to WiFi network. Enter valid WiFi name and WiFi pssaword');
  }
};

Blockly.Blocks["wifi_connected"]={
  init:function()
  {
    this.appendDummyInput()
      .appendField("Is WiFi Connected?") 
      //.appendField(new Blockly.FieldDropdown(sensorCount), 'sensorNumber');     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
    this.setTooltip('Check wheather Wemos is connected to WiFi or not. If it connects, Green led turns on for 3 seconds. If it fails to connect, Red led turns on for 3 seconds.');
  }
};

// ifttt block
Blockly.Blocks['connect_ifttt'] = {
  init: function() {  
  	this.appendDummyInput().appendField('Connect to IFTTT')
  	this.appendValueInput('IFTTT_URL')
  		.setAlign(Blockly.ALIGN_RIGHT)
  	.appendField('IFTTT URL');
  	this.appendValueInput('Port', 'Number')
      .setCheck('Number')
  		.setAlign(Blockly.ALIGN_RIGHT)
  	.appendField('Port')	
	//this.appendDummyInput().appendField("Set Font");	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(345);
  this.setTooltip('Connect to Ifttt server.');
  }
}

Blockly.Blocks['ifttt_url'] = {
  init: function() {
    this.appendDummyInput().appendField('IFTTT')
        .appendField(new Blockly.FieldTextInput("maker.ifttt.com"), "url");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(135);
 this.setTooltip("ifttt server url");
 this.setHelpUrl("");

  }
};

Blockly.Blocks['trigger_event'] = {
  init: function() {  
  	this.appendDummyInput().appendField('Trigger Event')
  	this.appendValueInput('Event_Name')
  		.setAlign(Blockly.ALIGN_RIGHT)
  	.appendField('Event Name');
  	this.appendValueInput('IFTTT_KEY')
  		.setAlign(Blockly.ALIGN_RIGHT)
  	.appendField('IFTTT Key')	
	//this.appendDummyInput().appendField("Set Font");	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(345);
  this.setTooltip('Trigger the event you created on ifttt website. use IFTTT key and event name you got while creating IFTTT applet.');
  }
}

//blynk block
Blockly.Blocks['BlynkAUTH'] = {
  init: function() {
	 
	  
	//this.appendDummyInput().appendField("Configure WIFI Device");
	this.appendValueInput('AUTH_CODE')
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField('Set Blynk Auth Token to');
	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);
  this.setTooltip('Blynk Auth Token. Check your email for blynk Auth Token');
  }
}

Blockly.Blocks['BlynkConnect'] = {
  init: function() {
	 
	  
	this.appendDummyInput().appendField("Connect to Blynk");	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);
  this.setTooltip('Connect to Blynk server');
  }
}

Blockly.Blocks['BlynkRun'] = {
  init: function() {
	 
	  
	this.appendDummyInput().appendField("Run Blynk");
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);
  this.setTooltip('Run the Blynk service.');
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
		this.setTooltip('Check if wemos is connectd to Blynk or not');
	}
};

Blockly.Blocks['button_slider_step'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("Get Data")	
        .appendField(new Blockly.FieldDropdown([["V1","V1"], ["V2","V2"], ["V3","V3"],
        										["V4","V4"], ["V5","V5"], ["V6","V6"],
        										["V7","V7"], ["V8","V8"], ["V9","V9"],
        										["V10","V10"], ["V11","V11"], ["V12","V12"],
        										["V13","V13"], ["V14","V14"], ["V15","V15"],
        										["V16","V16"], ["V17","V17"], ["V18","V18"]]), "VirtualPin");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("Use this block to get values from button, slider, step widgets on Blynk app. Enter valid virtual pin");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['value_display'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Send Data")
        .appendField(new Blockly.FieldDropdown([["V1","V1"], ["V2","V2"], ["V3","V3"],
        										["V4","V4"], ["V5","V5"], ["V6","V6"],
        										["V7","V7"], ["V8","V8"], ["V9","V9"],
        										["V10","V10"], ["V11","V11"], ["V12","V12"],
        										["V13","V13"], ["V14","V14"], ["V15","V15"],
        										["V16","V16"], ["V17","V17"], ["V18","V18"]]), "VirtualPin");
    this.appendValueInput("Data to send")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Value");
    this.appendValueInput("frequency")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Update Rate");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("Use this block Send values to blynk app. Use value display, Gauge widgets on Blynk app. Please dont send more that 10 values per second");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['zeRGBa_ws2812'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ZeRGBa WS2812 RGB Led")
        .appendField(new Blockly.FieldDropdown([["V1","V1"], ["V2","V2"], ["V3","V3"],
                                                ["V4","V4"], ["V5","V5"], ["V6","V6"],
                                                ["V7","V7"], ["V8","V8"], ["V9","V9"],
                                                ["V10","V10"], ["V11","V11"], ["V12","V12"],
                                                ["V13","V13"], ["V14","V14"], ["V15","V15"],
                                                ["V16","V16"], ["V17","V17"], ["V18","V18"]]), "rgb");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("control ws2812 rgb led sing zeRGBa widget on Blynk app. Use valid virtual pin.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['zeRGBa_rgb'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ZeRGBa On-Board RGB")
        .appendField(new Blockly.FieldDropdown([["V1","V1"], ["V2","V2"], ["V3","V3"],
                                                ["V4","V4"], ["V5","V5"], ["V6","V6"],
                                                ["V7","V7"], ["V8","V8"], ["V9","V9"],
                                                ["V10","V10"], ["V11","V11"], ["V12","V12"],
                                                ["V13","V13"], ["V14","V14"], ["V15","V15"],
                                                ["V16","V16"], ["V17","V17"], ["V18","V18"]]), "rgb");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("control on-board rgb led sing zeRGBa widget on Blynk app. Use valid virtual pin");
 this.setHelpUrl("");
  }
};

//servo block
//http://www.seeedstudio.com/depot/emax-9g-es08a-high-sensitive-mini-servo-p-760.html?cPath=170_171
Blockly.Blocks['servo_move'] = {
  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendField("Set Servo")
        .appendField(new Blockly.FieldImage("https://statics3.seeedstudio.com/images/product/EMAX%20Servo.jpg", 64, 64))
        .appendField("PIN#")
        .appendField(new Blockly.FieldDropdown([["D7","D7"]]), "PIN")
    this.appendValueInput("DEGREE", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Degree (0~180)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('move servo motor between 0~180 degree');
  }
};

Blockly.Blocks['servo_read_degrees'] = {
  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendField("Get Servo")
        .appendField(new Blockly.FieldImage("https://statics3.seeedstudio.com/images/product/EMAX%20Servo.jpg", 64, 64))
        .appendField("PIN#")
        .appendField(new Blockly.FieldDropdown([["D7","D7"]]), "PIN");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Read Degrees")
    this.setOutput(true, 'Number');
    this.setTooltip('return that degree with the last servo position.');
  }
};



//Input Output


Blockly.Blocks['digital_write'] = {
  helpUrl: 'http://arduino.cc/en/Reference/DigitalWrite',
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
	    this.appendDummyInput()
        .appendField("DigitalWrite")
        .appendField(new Blockly.FieldDropdown([["Red Led", "D1"], ["Green Led", "D2"], ["Blue Led", "D3"],
        										["Wemos Built-in Led", "D4"],["Motor", "D7"],["Buzzer", "D5"]]), "PIN");
    this.appendDummyInput()
	       .appendField("State")
	       .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STATE");
	this.setInputsInline(true);       
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write digital value to a specific Port');
  }
};

Blockly.Blocks['digital_read'] = {
  helpUrl: 'http://arduino.cc/en/Reference/DigitalRead',
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
	      .appendField("DigitalRead")
	      .appendField(new Blockly.FieldDropdown([["Pushbutton", "D8"], ["PIR", "D6"]]), "PIN");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Read the values from sensor');
  }
};

Blockly.Blocks['analog_write'] = {
  helpUrl: 'http://arduino.cc/en/Reference/AnalogWrite',
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("AnalogWrite")
        .appendField(new Blockly.FieldDropdown([["Red Led", "D1"], ["Green Led", "D2"], ["Blue Led", "D3"],
        										["Wemos Built-in_Led", "D4"],["Motor", "D7"]]), "PIN");
    this.appendValueInput("NUM", 'Number')
        .appendField("value")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Write analog value between 0 and 1023 to a specific Port');
  }
};

Blockly.Blocks['rgbled'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set color to RGB Led")
    this.appendDummyInput()
        .appendField("Red Led");
    this.appendValueInput("red")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("Green Led");
    this.appendValueInput("green")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("Blue Led");
    this.appendValueInput("blue")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("set color on on-board RGB led. Red(0-1023),Green(0-1023),Blue(0-1023) ");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['analog_read'] = {
  helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("AnalogRead")
        .appendField(new Blockly.FieldDropdown([["LDR", "A0"], ["Piezo", "A1"], ["Flex", "A2"]]), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip('Return value between 0 and 1024');
  }
};


Blockly.Blocks['tone'] = {
  helpUrl: 'http://www.arduino.cc/en/Reference/Tone',
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("Tone")
        .appendField(new Blockly.FieldDropdown([["Buzzer", "D5"]]), "PIN");
    this.appendValueInput("NUM", "Number")
        .appendField("frequency")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Generate audio tones on a pin");
  }
};


Blockly.Blocks['tone_melody'] = {
  helpUrl: 'http://www.arduino.cc/en/Reference/Tone',
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("Tone")
        .appendField(new Blockly.FieldDropdown([["Buzzer", "D5"]]), "PIN");
    this.appendValueInput("NUM", "Number")
        .appendField("Frequency")
        .setCheck("Number");
    this.appendValueInput("duration", "Number")
        .appendField("Duration")
        .setCheck("Number");    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Generate audio tones on a pin. Set frequency between 0-4980");
  }
};

Blockly.Blocks['notone'] = {
  helpUrl: 'http://www.arduino.cc/en/Reference/NoTone',
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("No tone")
        .appendField(new Blockly.FieldDropdown([["Buzzer", "D5"]]), "PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Stop generating a tone on a pin");
  }
};

Blockly.Blocks['highlow'] = {
  helpUrl: 'http://arduino.cc/en/Reference/Constants',
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), 'BOOL')
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
  }
};


//serial

Blockly.Blocks['serialprint'] = {
  init: function() {
    this.appendValueInput("serial_print")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Serial.print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("Print on serial monitor");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['serialprintln'] = {
  init: function() {
    this.appendValueInput("serial_println")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Serial.println");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("Print on new line on serial monitor");
 this.setHelpUrl("");
  }
};

//time


Blockly.Blocks['base_delay'] = {
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {
    this.setColour(120);
    this.appendValueInput("delay", 'NUM')
        .appendField("delay")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Delay specific time in miliseconds');
  }
};

Blockly.Blocks['micro_delay'] = {
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {
    this.setColour(120);
    this.appendValueInput("delayMicroseconds", 'NUM')
        .appendField("delayMicroseconds")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Delay specific time in microseconds');
  }
};


goog.provide('Blockly.Blocks.custom');

goog.require('Blockly.Blocks');