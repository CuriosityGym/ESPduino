goog.provide('Blockly.Arduino.custom');

goog.require('Blockly.Arduino');


Blockly.Arduino.base_delay_example = function() {
    var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000'
    var code = 'delay(' + delay_time + ');\n';
    return code;
};


Blockly.Arduino.ultrasonic_sensor = function() {
    var a = this.getFieldValue("Trigger");
    var b = this.getFieldValue("Echo");
    var dropdown_unit = this.getFieldValue("Unit")
    Blockly.Arduino.setups_['setup_ultrasonic'] = 'pinMode(' + a + ', OUTPUT);\n' +
        '  pinMode(' + b + ', INPUT);\n';
    var code = '';
    if (dropdown_unit === "cm") {
        Blockly.Arduino.definitions_['define_distance'] = 'int measure_distance()\n' +
            '{\n' +
            'digitalWrite(' + a + ', LOW);\n' +
            'delayMicroseconds(2);\n' +
            'digitalWrite(' + a + ', HIGH);\n' +
            'delayMicroseconds(10);\n' +
            'digitalWrite(' + a + ', LOW);\n' +
            'long duration = pulseIn(' + b + ', HIGH);\n' +
            'int cm = duration / 29 / 2;\n' +
            'return cm;\n' +
            '}\n\n';

        code = 'measure_distance()';
    } else if (dropdown_unit === "inch") {
        Blockly.Arduino.definitions_['define_distance'] = 'int measure_distance()\n' +
            '{\n' +
            'digitalWrite(' + a + ', LOW);\n' +
            'delayMicroseconds(2);\n' +
            'digitalWrite(' + a + ', HIGH);\n' +
            'delayMicroseconds(10);\n' +
            'digitalWrite(' + a + ', LOW);\n' +
            'long duration = pulseIn(' + b + ', HIGH);\n' +
            'int inch = duration / 74 / 2;\n' +
            'return inch;\n' +
            '}\n\n';

        code = 'measure_distance()';
    }
    //var code = 'servo_' + a + '.write(' + b + ');\n';
    //return code;
    return [code, Blockly.Arduino.ORDER_NONE];
};




Blockly.Arduino['wifi_begin'] = function() {

    var includeString = "#include <ESP8266WiFi.h>\n";
    Blockly.Arduino.definitions_.define_wifi_include = includeString;
    var wifi_name = Blockly.Arduino.valueToCode(this, 'WiFi_NAME', Blockly.Arduino.ORDER_ATOMIC);
    var wifi_password = Blockly.Arduino.valueToCode(this, 'WiFi_PASSWORD', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_.wifiName = 'const char* wifi_ssid = ' + wifi_name + ';';
    Blockly.Arduino.definitions_.wifiPass = 'const char* wifi_password = ' + wifi_password + ';';
    Blockly.Arduino.setups_['serial_begin_setup'] = "Serial.begin(115200);\n";
    Blockly.Arduino.setups_['wifi_begin_setup'] = "WiFi.begin(wifi_ssid, wifi_password);\n" +
        "  int i=0;\n  while (WiFi.status() != WL_CONNECTED && i<50) {\n" + "    delay(500);\n" + '    Serial.print(".");\n' + '  }';
    return "";
};

Blockly.Arduino['wifi_connected'] = function() {


    Blockly.Arduino.setups_['wifi_connected'] = "pinMode(D1, OUTPUT);\n pinMode(D2, OUTPUT);\n if(WiFi.status() != WL_CONNECTED){\n" +
        "  digitalWrite(D1, HIGH);\n  delay(3000);\n  digitalWrite(D1, LOW);\n  }\n " +
        "if(WiFi.status() == WL_CONNECTED){\n " + "  digitalWrite(D2, HIGH);\n   delay(3000);\n   digitalWrite(D2, LOW);\n  } \n";
    return "";
};

//ifttt code
Blockly.Arduino['connect_ifttt'] = function() {

    var wifi_instance = "WiFiClient client;\n";
    Blockly.Arduino.definitions_.define_wifi_instance = wifi_instance;
    var host = Blockly.Arduino.valueToCode(this, 'IFTTT_URL', Blockly.Arduino.ORDER_ATOMIC);
    var port = Blockly.Arduino.valueToCode(this, 'Port', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_.iftttHost = 'const char* host = ' + host + ';';
    Blockly.Arduino.definitions_.iftttPort = 'const int http_port = ' + port + ';';
    var code = 'if (!client.connect(host, http_port)){\n' + '   Serial.println("connection failed");\n' + '   return;\n' + ' } \n'
    return code;

};

Blockly.Arduino['ifttt_url'] = function() {

    var text_url = this.getFieldValue('url');
    var code = '"maker.ifttt.com"';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_ATOMIC];

};


Blockly.Arduino['trigger_event'] = function() {

    var eventName = Blockly.Arduino.valueToCode(this, 'Event_Name', Blockly.Arduino.ORDER_ATOMIC);
    var key = Blockly.Arduino.valueToCode(this, 'IFTTT_KEY', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_.apiKey = 'const char* ifttt_key = ' + key + ';';
    Blockly.Arduino.definitions_.event_name = 'const char* event_name = ' + eventName + ';';
    var code = 'Serial.print("Triggering Event: ");\n' + 'Serial.println(event_name);\n' + 'client.print(String("POST ") ' +
        '+ "/trigger/" +' + 'event_name' + '+ "/with/key/" +' + 'ifttt_key' + ' + " HTTP/1.1\\r\\n"' + ' +\n' + '"Host: " + ' + 'host' + ' +' + '"\\r\\n" +\n' +
        '"Content-Type: application/x-www-form-urlencoded\\r\\n" +\n' + '"Content-Length: 13\\r\\n\\r\\n" +\n' +
        '"value1=......\\r\\n");\n'
    return code;

};

//blynk
Blockly.Arduino["BlynkAUTH"] = function() {
    var includesString = "#include <BlynkSimpleEsp8266.h>\n";
    Blockly.Arduino.definitions_.blynkincludes = includesString;
    var AUTH_CODE = Blockly.Arduino.valueToCode(this, 'AUTH_CODE', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_.blynkdefines = "#define BLYNK_DEBUG\n#define BLYNK_PRINT Serial\n"
    Blockly.Arduino.definitions_.blynkauthcode = 'char auth[] = ' + AUTH_CODE + ';';
    return "";
};

Blockly.Arduino["BlynkConnect"] = function() {
    var codeStatement = "Blynk.config(auth);";
    Blockly.Arduino.setups_['blynkauthcode'] = codeStatement + "\n";
    return "";
};

Blockly.Arduino["BlynkRun"] = function() {
    return "Blynk.run();\n";
};

Blockly.Arduino["BlynkConnected"] = function() {
    var blynkConnectedStatus = "Blynk.connected()"
        //return["200",Blockly.Arduino.ORDER_ATOMIC];
    return [blynkConnectedStatus, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.button_slider_step = function() {
    var virtualPin = this.getFieldValue("VirtualPin");

    Blockly.Arduino.definitions_['blynk_write'] = 'BLYNK_WRITE(' + virtualPin + ')\n' +
        '{\n' +
        '   ' + virtualPin + '_value = param.asInt();\n' +
        '   // You can also use:\n' +
        '   // String i = param.asStr();\n' +
        '   // double d = param.asDouble();\n' +
        '   Serial.print("Virtual pin ' + virtualPin + ' value is: ");\n' +
        '   Serial.println(' + virtualPin + '_value);\n' +
        '}\n\n';
    return "";
};

Blockly.Arduino.value_display = function() {
    var virtualPin = this.getFieldValue("VirtualPin");
    var sendValue = Blockly.Arduino.valueToCode(this, 'Data to send', Blockly.Arduino.ORDER_ATOMIC);
    var updateRate = Blockly.Arduino.valueToCode(this, 'frequency', Blockly.Arduino.ORDER_ATOMIC);
    var timer_instance = "BlynkTimer timer;";
    Blockly.Arduino.definitions_.timer_inst = timer_instance;
    Blockly.Arduino.setups_['timer'] = 'timer.setInterval(' + updateRate + 'L , myTimerEvent_' + virtualPin + ');\n';

    Blockly.Arduino.definitions_['send_data'] = 'void myTimerEvent_' + virtualPin + '()\n' +
        '{\n' +
        '   // You can send any value at any time\n' +
        '   // Please dont send more that 10 values per second.\n' +
        '   Blynk.virtualWrite(' + virtualPin + ',' + sendValue + ');\n' +
        '   Serial.println(' + sendValue + ');\n' +
        '}\n\n';
    return "timer.run();";
};

Blockly.Arduino.zeRGBa_ws2812 = function() {
    var virtualPin = this.getFieldValue("rgb");

    Blockly.Arduino.definitions_['ws2812_rgb'] = 'BLYNK_WRITE(' + virtualPin + ')\n' +
        '{\n' +
        '   int red = param[0].asInt();\n' +
        '   int green = param[1].asInt();\n' +
        '   int blue = param[2].asInt();\n' +
        '   for (int i = 0; i <+ pixel; i++)\n' +
        '      {\n' +
        '         strip.setPixelColor(i, red, green, blue);\n' +
        '      }\n' +
        '   strip.show();\n' +
        '}\n\n';
    return "";
};

Blockly.Arduino.zeRGBa_rgb = function() {
    var virtualPin = this.getFieldValue("rgb");

    Blockly.Arduino.definitions_['ws2812_rgb'] = 'BLYNK_WRITE(' + virtualPin + ')\n' +
        '{\n' +
        '   int red = param[0].asInt();\n' +
        '   int green = param[1].asInt();\n' +
        '   int blue = param[2].asInt();\n' +
        '   analogWrite(D1, red);\n' + '   analogWrite(D2, green);\n' + '   analogWrite(D3, blue);\n' +
        '}\n\n';
    return "";
};


//Strip Fill Funtion //Added By Dinesh Parmar

Blockly.Arduino['strip_fill'] = function(block) {
    var value_strip_fill_from = Blockly.Arduino.valueToCode(block, 'strip.fill.from', Blockly.Arduino.ORDER_ATOMIC);
    var value_strip_fill_to = Blockly.Arduino.valueToCode(block, 'strip.fill.to', Blockly.Arduino.ORDER_ATOMIC);
    var value_red_pixel = Blockly.Arduino.valueToCode(block, 'red_pixel', Blockly.Arduino.ORDER_ATOMIC);
    var value_green_pixel = Blockly.Arduino.valueToCode(block, 'green_pixel', Blockly.Arduino.ORDER_ATOMIC);
    var value_blue_pixel = Blockly.Arduino.valueToCode(block, 'blue_pixel', Blockly.Arduino.ORDER_ATOMIC);
    // TODO: Assemble Arduino into code variable.
    var code = 'strip.fill(' + 'strip.Color(' + value_red_pixel + ',' + value_green_pixel + ',' + value_blue_pixel + '),' + value_strip_fill_from + ',' + value_strip_fill_to + '); \n strip.show(); \n';
    return code;
};

//servo
Blockly.Arduino.servo_move = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
    Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';\n';
    Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');\n';

    var code = 'servo_' + dropdown_pin + '.write(' + value_degree + ');\n';
    return code;
};

Blockly.Arduino.servo_read_degrees = function() {
    var dropdown_pin = this.getFieldValue('PIN');

    Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
    Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';\n';
    Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');\n';

    var code = 'servo_' + dropdown_pin + '.read()';
    return code;
};

//OLED
Blockly.Arduino.oled_begin = function() {
    var codeStatement = "u8g2.begin(); ";
    var includesString = "#include <Arduino.h>\n#include <U8g2lib.h>\n";
    Blockly.Arduino.definitions_.oledincludes = includesString;
    var oled_instance = "U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, SCL, SDA, U8X8_PIN_NONE);";
    Blockly.Arduino.definitions_.oled_inst = oled_instance;
    Blockly.Arduino.setups_['oledBegin'] = codeStatement + "\n";
    Blockly.Arduino.setups_['setfont'] = "u8g2.setFont(u8g2_font_ncenB08_tr);\n";
    return "";
};

Blockly.Arduino['oled_set_font'] = function() {
    var font = Blockly.Arduino.valueToCode(this, 'set_font', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'u8g2.setFont(' + font + ');\n';
    return code;
};

Blockly.Arduino['oled_font_list'] = function() {

    var text_font = this.getFieldValue('font');
    var code = text_font;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_ATOMIC];

};

Blockly.Arduino['oled_print_text'] = function() {

    var x = Blockly.Arduino.valueToCode(this, 'x_cord', Blockly.Arduino.ORDER_ATOMIC);
    var y = Blockly.Arduino.valueToCode(this, 'y_cord', Blockly.Arduino.ORDER_ATOMIC);
    var text = Blockly.Arduino.valueToCode(this, 'text', Blockly.Arduino.ORDER_ATOMIC);
    var code = "u8g2.setCursor(" + x + ", " + y + ");\n" + "u8g2.print(" + text + ");\n";
    return code;
};

Blockly.Arduino['send_buffer'] = function() {

    var code = "u8g2.sendBuffer();\n";
    return code;
};

Blockly.Arduino['clear_oled'] = function() {

    var code = "u8g2.clearBuffer();\n";
    return code;
};

Blockly.Arduino['oled_print_triangle'] = function() {

    var x1 = Blockly.Arduino.valueToCode(this, 'x1_cord', Blockly.Arduino.ORDER_ATOMIC);
    var y1 = Blockly.Arduino.valueToCode(this, 'y1_cord', Blockly.Arduino.ORDER_ATOMIC);
    var x2 = Blockly.Arduino.valueToCode(this, 'x2_cord', Blockly.Arduino.ORDER_ATOMIC);
    var y2 = Blockly.Arduino.valueToCode(this, 'y2_cord', Blockly.Arduino.ORDER_ATOMIC);
    var x3 = Blockly.Arduino.valueToCode(this, 'x3_cord', Blockly.Arduino.ORDER_ATOMIC);
    var y3 = Blockly.Arduino.valueToCode(this, 'y3_cord', Blockly.Arduino.ORDER_ATOMIC);

    var code = "u8g2.drawTriangle(" + x1 + ", " + y1 + ", " + x2 + ", " + y2 + ", " + x3 + ", " + y3 + ");\n";
    return code;
};
Blockly.Arduino['oled_print_rectangle'] = function() {

    var x1 = Blockly.Arduino.valueToCode(this, 'x1_cord', Blockly.Arduino.ORDER_ATOMIC);
    var y1 = Blockly.Arduino.valueToCode(this, 'y1_cord', Blockly.Arduino.ORDER_ATOMIC);
    var x2 = Blockly.Arduino.valueToCode(this, 'x2_cord', Blockly.Arduino.ORDER_ATOMIC);
    var y2 = Blockly.Arduino.valueToCode(this, 'y2_cord', Blockly.Arduino.ORDER_ATOMIC);

    var code = "u8g2.drawFrame(" + x1 + ", " + y1 + ", " + x2 + ", " + y2 + ");\n";
    return code;
};

Blockly.Arduino['oled_print_box'] = function() {

    var x1 = Blockly.Arduino.valueToCode(this, 'x1_cord', Blockly.Arduino.ORDER_ATOMIC);
    var y1 = Blockly.Arduino.valueToCode(this, 'y1_cord', Blockly.Arduino.ORDER_ATOMIC);
    var x2 = Blockly.Arduino.valueToCode(this, 'x2_cord', Blockly.Arduino.ORDER_ATOMIC);
    var y2 = Blockly.Arduino.valueToCode(this, 'y2_cord', Blockly.Arduino.ORDER_ATOMIC);

    var code = "u8g2.drawBox(" + x1 + ", " + y1 + ", " + x2 + ", " + y2 + ");\n";
    return code;
};

Blockly.Arduino['oled_print_line'] = function() {

    var x1 = Blockly.Arduino.valueToCode(this, 'x1_cord', Blockly.Arduino.ORDER_ATOMIC);
    var y1 = Blockly.Arduino.valueToCode(this, 'y1_cord', Blockly.Arduino.ORDER_ATOMIC);
    var x2 = Blockly.Arduino.valueToCode(this, 'x2_cord', Blockly.Arduino.ORDER_ATOMIC);
    var y2 = Blockly.Arduino.valueToCode(this, 'y2_cord', Blockly.Arduino.ORDER_ATOMIC);

    var code = "u8g2.drawLine(" + x1 + ", " + y1 + ", " + x2 + ", " + y2 + ");\n";
    return code;
};

Blockly.Arduino['oled_print_circle'] = function() {

    var x = Blockly.Arduino.valueToCode(this, 'x_cord', Blockly.Arduino.ORDER_ATOMIC);
    var y = Blockly.Arduino.valueToCode(this, 'y_cord', Blockly.Arduino.ORDER_ATOMIC);
    var radius = Blockly.Arduino.valueToCode(this, 'radius', Blockly.Arduino.ORDER_ATOMIC);

    var code = "u8g2.drawCircle(" + x + ", " + y + ", " + radius + ");\n";
    return code;
};

//DHT11
Blockly.Arduino.dht_begin = function() {
    var codeStatement = "dht.begin();\n";
    var includesString = '#include "DHT.h"\n';
    Blockly.Arduino.definitions_.oledincludes = includesString;
    var oled_instance = "#define DHTPIN 12\n#define DHTTYPE DHT11\nDHT dht(DHTPIN, DHTTYPE);\n";
    Blockly.Arduino.definitions_.oled_inst = oled_instance;
    Blockly.Arduino.setups_['dhtBegin'] = codeStatement + "\n";
    return "";
};

Blockly.Arduino.measure_temp = function() {


    var code = 'dht.readTemperature()';

    //var code = 'servo_' + a + '.write(' + b + ');\n';
    //return code;
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.measure_hum = function() {


    var code = 'dht.readHumidity()';

    return [code, Blockly.Arduino.ORDER_NONE];
};

//WS2812b

Blockly.Arduino.rgb_begin = function() {
    var codeStatement = "strip.begin();\n  strip.show();\n";
    var includesString = "#include <Adafruit_NeoPixel.h>";
    var value_pixel = Blockly.Arduino.valueToCode(this, 'pixel', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_.rgbincludes = includesString;
    var int_pixel = "int pixel = " + value_pixel + ";\n";
    Blockly.Arduino.definitions_.intPixel = int_pixel;
    var rgb_instance = "Adafruit_NeoPixel strip(pixel, D7, NEO_GRB + NEO_KHZ800);\n";
    Blockly.Arduino.definitions_.rgb_inst = rgb_instance;
    Blockly.Arduino.setups_['rgbBegin'] = codeStatement + "\n";
    return "";
};

Blockly.Arduino['set_brightness'] = function() {
    var value_brightness = Blockly.Arduino.valueToCode(this, 'set_brightness', Blockly.Arduino.ORDER_ATOMIC);
    // TODO: Assemble Arduino into code variable.
    if (value_brightness > 255) {
        value_brightness = 255;
    }
    var code = 'strip.setBrightness(' + value_brightness + ');\n';
    return code;
};

Blockly.Arduino['set_color'] = function() {
    var value_pixel = Blockly.Arduino.valueToCode(this, 'pixel', Blockly.Arduino.ORDER_ATOMIC);
    var value_red = Blockly.Arduino.valueToCode(this, 'red', Blockly.Arduino.ORDER_ATOMIC);
    var value_green = Blockly.Arduino.valueToCode(this, 'green', Blockly.Arduino.ORDER_ATOMIC);
    var value_blue = Blockly.Arduino.valueToCode(this, 'blue', Blockly.Arduino.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    if (value_red > 255) {
        value_red = 255;
    }
    if (value_green > 255) {
        value_green = 255;
    }
    if (value_blue > 255) {
        value_blue = 255;
    }
    var code = 'strip.setPixelColor(' + value_pixel + ', ' + value_red + ', ' +
        value_green + ', ' + value_blue + ');\nstrip.show();\n';
    return code;
};
//input output
Blockly.Arduino['digital_write'] = function() {

    var value_pin = this.getFieldValue('PIN');
    var dropdown_stat = this.getFieldValue('STATE');
    Blockly.Arduino.setups_['setup_output_' + value_pin] = 'pinMode(' + value_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + value_pin + ', ' + dropdown_stat + ');\n'
    return code;
};

Blockly.Arduino.digital_read = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'digitalRead(' + dropdown_pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.analog_write = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    //var dropdown_stat = this.getFieldValue('STAT');
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    //Blockly.Arduino.setups_['setup_output'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
    var code = 'analogWrite(' + dropdown_pin + ', ' + value_num + ');\n';
    return code;
};

Blockly.Arduino.rgbled = function() {
    var value_red = Blockly.Arduino.valueToCode(this, 'red', Blockly.Arduino.ORDER_ATOMIC);
    var value_green = Blockly.Arduino.valueToCode(this, 'green', Blockly.Arduino.ORDER_ATOMIC);
    var value_blue = Blockly.Arduino.valueToCode(this, 'blue', Blockly.Arduino.ORDER_ATOMIC);
    //Blockly.Arduino.setups_['setup_output'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
    var code = 'analogWrite(D1, ' + value_red + ');\n' +
        'analogWrite(D2, ' + value_green + ');\n' +
        'analogWrite(D3, ' + value_blue + ');\n';
    return code;
};

Blockly.Arduino.analog_read = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = 'analogRead(A0)';
    return [code, Blockly.Arduino.ORDER_NONE];
};


Blockly.Arduino.tone = function() {
    var dropdown_pin = this.getFieldValue("PIN");
    var value_num = Blockly.Arduino.valueToCode(this, "NUM", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = "tone(" + dropdown_pin + ", " + value_num + ");\n";
    return code;
};
Blockly.Arduino.tone_melody = function() {
    var dropdown_pin = this.getFieldValue("PIN");
    var value_num = Blockly.Arduino.valueToCode(this, "NUM", Blockly.Arduino.ORDER_ATOMIC);
    var value_duration = Blockly.Arduino.valueToCode(this, "duration", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    if (value_num >= 4978) { value_num = 4978; }
    var code = "tone(" + dropdown_pin + ", " + value_num + ", " + value_duration + ");\n";
    return code;
};

Blockly.Arduino.notone = function() {
    var dropdown_pin = this.getFieldValue("PIN");
    Blockly.Arduino.setups_['setup_output' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = "noTone(" + dropdown_pin + ");\n";
    return code;
};

Blockly.Arduino.highlow = function() {
    // Boolean values HIGH and LOW.
    var code = (this.getFieldValue('BOOL') == 'HIGH') ? 'HIGH' : 'LOW';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//serialprint

Blockly.Arduino.serialprint = function() {
    var content = Blockly.Arduino.valueToCode(this, 'serial_print', Blockly.Arduino.ORDER_ATOMIC) || '0'
        //content = content.replace('(','').replace(')','');

    Blockly.Arduino.setups_['setup_serial_' + profile.default.serial] = 'Serial.begin(' + profile.default.serial + ');\n';

    var code = 'Serial.print(' + content + ');\n';
    return code;
};

Blockly.Arduino.serialprintln = function() {
    var content = Blockly.Arduino.valueToCode(this, 'serial_println', Blockly.Arduino.ORDER_ATOMIC) || '0'
        //content = content.replace('(','').replace(')','');

    Blockly.Arduino.setups_['setup_serial_' + profile.default.serial] = 'Serial.begin(' + profile.default.serial + ');\n';

    var code = 'Serial.println(' + content + ');\n';
    return code;
};

//time
Blockly.Arduino.base_delay = function() {
    var value_delay = Blockly.Arduino.valueToCode(this, 'delay', Blockly.Arduino.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'delay(' + value_delay + ');\n';
    return code;
};

Blockly.Arduino.micro_delay = function() {
    var value_delay = Blockly.Arduino.valueToCode(this, 'delayMicroseconds', Blockly.Arduino.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'delayMicroseconds(' + value_delay + ');\n';
    return code;
};
goog.provide('Blockly.Arduino.custom');

goog.require('Blockly.Arduino');