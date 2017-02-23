$(document).ready(function() {
    var rootRef = firebase.database().ref().child("eventsCreated");

    rootRef.on("child_added", snap => {
        var eventName = snap.child("EventName").val();
        var creator = snap.child("Creator").val();
        var details = snap.child("Details").val();
        var location = snap.child("Where").val();
        var time = snap.child("Time").val();
        var items = snap.child("Items").val();
        var members = snap.child("Members").val();

        $("#event_tiles").append(
                                    
                                        '<div class="col-md-6">' +
                                            '<div class="event-card card">' +
                                                '<div style="text-align:center"><h3 class="event-name card-header">' + eventName + '</h3></div>' + '<br />' +
                                                '<div style="text-align:center"><h5>' + "Max Members: " + members + '</h5></div>' +
                                                '<i class="event-star text-right glyphicon glyphicon-star-empty"></i>' + 
                                                '<div class="progress">' + 
                                                    '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="' + '40' + '" aria-valuemin="0" aria-valuemax="100" style="width: 40%">' +
                                                        '<span class="sr-only">40% Complete (success)</span>' +
                                                    '</div>' + 
                                                '</div>' +
                                                '<div class="card-block">' +
                                                    '<i class="glyphicon glyphicon-map-marker"></i>' +
                                                    '<h4 class="event-location card-title">' + "Location: " + location + '</h4>' +
                                                    '<h4 class="card-title">' + "Date & Time: " + time + '</h4>' +
                                                    '<h4 class="card-text">' + "Event Details: " + details + '</h4>' +
                                                    '<h4 class="card-text">' + "Items Required: " + items + '</h4>' +
                                                    '<p class="no-margin text-right"><em>' + "Created by: " + creator + '</em></p>' + 
                                                '</div>' +
                                            '</div>' +
                                        '</div>' 
                                    
                                );
    });
});