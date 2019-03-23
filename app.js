// Initialize Firebase
var config = {
    apiKey: "AIzaSyCbTONDXYhH5Jt2uBlknIhEUKpOn-5puDY",
    authDomain: "portfolioemaildata.firebaseapp.com",
    databaseURL: "https://portfolioemaildata.firebaseio.com",
    projectId: "portfolioemaildata",
    storageBucket: "portfolioemaildata.appspot.com",
    messagingSenderId: "206330548875"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#email").on("click", function(event) {
    event.preventDefault();

    // Grab user input
    var email = $("#emailAddress").val().trim();
    var nameSubject = $("#subject").val().trim();
    var message = $("#textArea").val().trim();

    var newMessage = {
        email = address,
        nameSubject = nameSubject,
        message = body,
    };

    database.ref().push(newMessage);

    console.log(newMessage.address);
    console.log(newMessage.nameSubject);
    console.log(newMessage.body);

    $("#emailAddress").val("");
    $("#subject").val("");
    $("#textArea").val("");

    $("#thanks").text("Thanks a bunch, I'll get back to you soon!");

});