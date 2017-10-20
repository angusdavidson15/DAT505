var five = require("johnny-five");
var board = new five.Board();

var cmRead = 0.;

board.on("ready", function() {
  var proximity = new five.Proximity({
     controller: "HCSR04",
      pin: 7
  });

  proximity.on("data", function() {
    //console.log("inches: ", this.inches);
      cmRead = this.cm;
      console.log("cm: ", this.cm);
  });
});

/*
void checkDistance(){
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
*/
/*
//Setup the MongoDB
var MongoClient = require('mongodb').MongoClient;
//URL of the database
//dbuser1 - username of the database
//dbuser1pass - password for the user
//file-test - name of the database
var url = 'mongodb://angusdavidson15:Apple11.10@ds151014.mlab.com:51014/yeahboi';

//the setInterval function process the content every 1000ms
setInterval(function(){
	//format the date and time to use for the value log
	var date = new Date();
	
	//if the seconds equal to 0, then store the values to the db
	//if(seconds.getSeconds() == 0){
		console.log("Write to database")

		//format the data for the mongoDB
		var mongoLog = [{
			time: date,
			value: cmRead
		}]

		//connect to the client
		MongoClient.connect(url, function (err, db) {
			//Collection1 is the name of the db's collection
			var col = db.collection('Collection1');
			//insert the results, and close the connection
			col.insert(mongoLog, function(err, result){
				db.close();
			});
			console.log("Connected to server");
		}); 
	//}
}, 5000);
*/