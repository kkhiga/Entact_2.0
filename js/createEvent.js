function submitClick() {

    /*
    var name = document.getElementById("name");
    var details = document.getElementById("details");
    var location = document.getElementById("location");
    var time = document.getElementById("time");
    var items = document.getElementById("items");
    var members = document.getElementById("members");

    var submitBtn = document.getElementById("submitBtn");

    var firebaseRef = firebase.database().ref();

    var messageText1 = name.value;
    var messageText2 = details.value;
    var messageText3 = location.value;
    var messageText4 = time.value;
    var messageText5 = items.value;
    var messageText6 = members.value;

    firebaseRef.child("New Events").update("Name").set(messageText1);
    firebaseRef.child("New Events").update("Details").set(messageText2);
    firebaseRef.child("New Events").update("Location").set(messageText3);
    firebaseRef.child("New Events").update("Time").set(messageText4);
    firebaseRef.child("New Events").update("Items").set(messageText5);
    firebaseRef.child("New Events").update("Members").set(messageText6);

    window.alert("Working");*/

    
var name = document.getElementById("name");
var creator = document.getElementById("creator");
var details = document.getElementById("details");
var location = document.getElementById("location");
var time = document.getElementById("time");
var items = document.getElementById("items");
var members = document.getElementById("members");
var date = document.getElementById("date");


var messageText1 = name.value;
var messageText7 = creator.value;
var messageText2 = details.value;
var messageText3 = location.value;
var messageText4 = time.value;
var messageText5 = items.value;
var messageText6 = members.value;
var messageText8 = date.value;

var rootRef = firebase.database().ref();
var storesRef = rootRef.child('eventsCreated');
var newStoreRef = storesRef.push();

if(messageText1 != "" && messageText2 != "" && messageText3 != "" && messageText4 != ""
    && messageText5 != "" && messageText6 != "" && messageText7 != "") 
{

    newStoreRef.set
    ({
        EventName: messageText1,
        Details: messageText2,
        Where: messageText3,
        Time: messageText4,
        Items: messageText5,
        Members: messageText6,
        Creator: messageText7,
        Date: messageText8
    }); 
}

document.getElementById("name").value = "";
document.getElementById("creator").value = "";
document.getElementById("details").value = "";
document.getElementById("location").value = "";
document.getElementById("time").value = "";
document.getElementById("items").value = "";
document.getElementById("members").value = "";
document.getElementById("date").value = "";

}
