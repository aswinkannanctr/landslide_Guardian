#include <Arduino.h>
#include <SoftwareSerial.h>

#define MOISTURE_PIN A0 // Analog pin for moisture sensor

// Configure the software serial port for communication with SIM800L
SoftwareSerial SIM800Serial(2, 3); // RX, TX

void setup() {
Serial.begin(9600); // Serial monitor baud rate
Serial.println("Setup initialized.");

SIM800Serial.begin(9600); // Start the software serial communication with SIM800L
delay(1000); // Allow time for the SIM800L module to initialize

Serial.println("Initializing SIM800L...");
SIM800Serial.println("AT"); // Check if the module is responding
delay(1000);

// Set the SIM800L to the correct mode (single connection mode)
SIM800Serial.println("AT+CIPMUX=0");
delay(1000);
}

void loop() {
// Read moisture sensor data
int moistureValue = analogRead(MOISTURE_PIN);
int percentageMoisture = map(moistureValue, 0, 1023, 0, 100);

Serial.print("Moisture Value = ");
Serial.println(percentageMoisture);

// Replace 'YOUR_API_KEY' with your ThingSpeak API key
String apiKey = "76A0YENELSWIZWSQ";

// Construct the HTTP GET request with moistureValue as field1
String getRequest = "GET /update?api_key=" + apiKey + "&field1=" + String(percentageMoisture);
getRequest += " HTTP/1.1\r\n";
getRequest += "Host: api.thingspeak.com\r\n";
getRequest += "Connection: close\r\n\r\n";

// Set up the TCP connection
SIM800Serial.println("AT+CIPSTART="TCP","api.thingspeak.com",80");
delay(2000);

// Send the HTTP GET request
SIM800Serial.print("AT+CIPSEND=");
SIM800Serial.println(getRequest.length());
delay(1000);
SIM800Serial.println(getRequest);
delay(5000); // Wait for the server to respond

// Close the TCP connection
SIM800Serial.println("AT+CIPCLOSE");
delay(1000);

Serial.println("Data sent to ThingSpeak!");

delay(1000); // Send data every 15 seconds (ThingSpeak free account limit)
}
