$(document).ready(function() {

const firebaseConfig = {
    apiKey: "AIzaSyDiswSLQ5bJ1B-905daR7fx-q5aCPhK2PI",
    authDomain: "inclasscodingbootcamp.firebaseapp.com",
    databaseURL: "https://inclasscodingbootcamp.firebaseio.com",
    projectId: "inclasscodingbootcamp",
    storageBucket: "inclasscodingbootcamp.appspot.com",
    messagingSenderId: "393099230304",
    appId: "1:393099230304:web:833ec82fdfba9d58"
    };
   firebase.initializeApp(firebaseConfig);

    var database= firebase.database();
    var trainName = "";
    var destination = "";
    var firsttrain = "";
    var frequency = "";


    $("#submit").on("click " , function(event) {
        event.preventDefault();
         trainName = $("#name").val().trim();
         destination = $("#dest").val().trim();
         firsttrain = $("#firsttrain").val().trim();
         frequency = $("#frequency").val().trim();
    database.ref().push({
        trainName: trainName,
        destination: destination,
        firsttrain: firsttrain,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
        });  
    });
    database.ref().on("child_added" , function(snapshot) {
        console.log(snapshot.val());
        console.log(snapshot.val().trainName);
        console.log(snapshot.val().destination);
       // console.log(snap.destination);
        //train list
    $("#content").append() 
        $("#trainListName").append(snapshot.val().trainName);
        $("#trainListDest").append(snapshot.val().destination);
        $("#firstTrain").append(snapshot.val().firsttrain);
        $("#Freq").append(snapshot.val().frequency);
    }) , function(errorObjects) {
        console.log("errors handled: " + errorObjects)
    }
    var tFrequency = 5;
    var firstTime = "1:00";
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(firstTimeConverted, "minutes");
    //console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    //console.log(tRemainder);
    $("#frequency").append(tRemainder);
    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    //console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
    $("#Min").append(tMinutesTillTrain);
    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
   // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

})