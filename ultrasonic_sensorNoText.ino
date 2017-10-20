#define LED 13

const int trigPin = 10;
const int echoPin = 9;
//const int buzzerPin = 11;

long duration;
int distance;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  //pinMode(buzzerPin, OUTPUT);
  pinMode(LED, OUTPUT);
  Serial.begin(9600);
}
void loop() {
  digitalWrite(trigPin, LOW);
  delay(5000); //creates 5 second delay between each read

  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);
  distance = duration * 0.034 / 2;

  //Serial.print("You're sitting ");
  Serial.println(distance);
  //Serial.print("cm from the computer. ");

  checkDistance();
}

void checkDistance() {
  //if user is sitting too closer to the PC, it will suggest moving further away
  if (distance < 20) {
    //Serial.println(" You're too far from the computer,  I suggest you moved closer from the device");
    flashLED();
    //tone(buzzerPin, 100);
  }

  //if user is sitting at a healthy distance instructions will be provided
  else if (distance > 21 and distance < 200) {
    digitalWrite(LED, LOW);
    //Serial.println("You're sitting at an apporpriate distance.");
    //Serial.println("Remember to frequently stand up and hydrate");
    //delay(1000 * 60 * 5); //5 minute delay
    loop();
  }

  //if user is sitting too far from the PC, it will suggest moving closer to the device
  else if (distance > 201) {
    //Serial.println(" You're sitting too far from the computer, I suggest you moved closer to the device");
    flashLED();

    //tone(buzzerPin, 100);
  }
}

void flashLED() {
  digitalWrite(LED, HIGH);
  delay(1000);
  digitalWrite(LED, LOW);
  delay(1000);
  digitalWrite(LED, HIGH);
}




