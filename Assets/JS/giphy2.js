//Jquery function to ready DOM   
$(document).ready(function () {
    console.log("ready!");
});

// Initial array of Characters
var topics = ["Butters", "Bugs Bunny", "Snoopy", "Donald Duck", "Powerpuff Girls", "Fred Flintstone", "Bart Simpson", "Scooby Doo", "Spongebob", "Tigger", "Stewie Griffin", "Pink Panther", "Metalocalypse"];

// Function for displaying topics data 
function renderButtons() {
    // Delete the content inside the buttons-view div prior to adding new movies
    $("#buttons-view").empty();
    // (this is necessary otherwise you will have repeat buttons)
    // Loop through the array of movies, then generate buttons for each movie in the array
    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>");
            // Adds a class of movie to our button
        button.addClass("cartoonButton");
            // Added a data-attribute
        button.attr("data-name", "data-still", topics[i]);
         // Provided the initial button text
        button.text(topics[i]);
      // Added the button to the buttons-view div
        $("#buttons-view").append(button);
        console.log(topics[i]);
    }
}
//Executes the rendering of buttons from the array
renderButtons();


// This .on("click") function will trigger the AJAX Call
$("#cartoonButton").on("click", function (event) {
    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
   // event.preventDefault();
    // Here we grab the text from the input box
    var giphy = $("#giphy-input").val();
 // Here we construct our URL
 var queryURL ="https://api.giphy.com/v1/gifs/search?api_key=RBvbkTz8S3Uy5xCmLpFZyIdDzlUOK63E&q=" + giphy +"&limit=25&offset=0&rating=G&lang=en"


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {  // We store all of the retrieved data inside of an object called "response"
      // Log the queryURL
      console.log(queryURL);
      // Log the resulting object
      console.log(response);
      // Transfer content to HTML
    //response is an object JSON turns it into a string

     // $("#giphy-view").text(JSON.stringify(response));
    });
});


//callback function 

function usedLater (){
    alert("I was created and called in a button - I can be used mutlitple times in many places")
}


//use it in an html , js file etc. 

//Event Function : awaitng for an event (or action) to occur - in order to execute 

//function(e)
//function(event)

onClick
onload

$("whatClassOrId").on("the event", function(){
    alert("Once a button is clicked i will be excuted - but ONLY when a button is clicked")
})

