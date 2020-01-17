//Jquery function to ready DOM   
$(document).ready(function () {
  console.log("ready!");
});

// Variables for the website
var topics = ["Butters", "Butthead", "Bugs Bunny", "Hank Hill",  "Snoopy", "Stimpy", "Donald Duck", "Powerpuff Girls", "Fred Flintstone", "Porky Pig", "Bart Simpson", "Scooby Doo", "Spongebob", "Tigger", "Stewie Griffin", "Pink Panther", "Metalocalypse", "Bender"];
// This is My API key
var APIKey = "RBvbkTz8S3Uy5xCmLpFZyIdDzlUOK63E";

//=====================================================================================================================================  

function displayToonInfo() {
    var toon = $(this).attr("data-name");  //Setting variable toon equal the value of whatever this button was that got clicked
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + toon + "&api_key="+APIKey+"&limit=10";
    $("#gifs-appear-here").empty();  //clears out the div
    //executes the function going to the api to the info
    $.ajax({
      url: queryURL,
      method: "GET"
    }) // getting the response and telling it to do go through the loop 10 times
      .then(function(response) {
        console.log(response);
        var results = response.data;  //Results = an array of the ten items returned
       console.log(response.data);

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");  //Variable gifDiv uses J Query to create a div

          var rating = results[i].rating;
         // console.log(rating);
          var p = $("<p>").text("Rating: " + rating); //creates a <p> block in the HTML for the rating
         
          var cartoonImage = $("<img>");   //creates an <img> tag on HTML 
          cartoonImage.attr("src", results[i].images.fixed_height_still.url); 
          cartoonImage.attr("data-still",results[i].images.fixed_height_still.url); //Sets the attribute to the 
          cartoonImage.attr("data-animate", results[i].images.fixed_height.url);  //Sets the attribute to the 
          cartoonImage.attr("data-state","still");
          cartoonImage.addClass("gif")
          gifDiv.prepend(p);
          gifDiv.prepend(cartoonImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  }
//===============================================================================================================================================================

// Function for displaying topics data 
function renderButtons() {
   
    // Delete the content inside the buttons-view div prior to adding new movies
    $("#buttons-view").empty();      // (this is necessary otherwise you will have repeat buttons)
    // Loop through the array of movies, then generate buttons for each movie in the array
    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>");           //Making a button for each item in the array
        button.addClass("cartoonButton");    
            // Added a data-attribute
        button.attr("data-name",topics[i]);
         // Provided the initial button text
        button.text(topics[i]);
      // Added the button to the buttons-view div
        $("#buttons-view").append(button);
        console.log(topics[i]);
    }
  }

 // $("button").on("click", function() {
  

//=========================================================================================================================================
// This function handles events where the add cartoon button is clicked
$("#add-cartoon").on("click", function (event) {
  
  // event.preventDefault() prevents submit button from trying to send a form.
  // Using a submit button instead of a regular button allows the user to hit
  // "Enter" instead of clicking the button if desired
  event.preventDefault();
  $("#gifs-appear-here").empty();  //clears out the div
  // Write code to grab the text the user types into the input field
  var cartoon = $("#cartoon-input").val().trim();
  // Write code to add the new movie into the topics array
  topics.push(cartoon);
  // The renderButtons function is called, rendering the list of movie buttons
  renderButtons();
      
});

$(document).on("click", ".cartoonButton", displayToonInfo);

// Calling the renderButtons function to display the initial list of movies
renderButtons();
//==========================================================================================================================================


//=======================================================================================================================================================

$(document).on("click", ".gif", function() {
  

var state = $(this).attr("data-state");

// STEP THREE: Check if the variable state is equal to 'still',
// then update the src attribute of this image to it's data-animate value,
// and update the data-state attribute to 'animate'.
if(state === "still") {
 var animateVal = $(this).attr("data-animate");
$(this).attr("src", animateVal);
  $(this).attr("data-state", "animate");
} else {
// If state is equal to 'animate', then update the src attribute of this
// image to it's data-still value and update the data-state attribute to 'still'
// ============== FILL IN CODE HERE FOR STEP THREE =========================
 var stillVal = $(this).attr("data-still");
 $(this).attr("src", stillVal);
  $(this).attr("data-state", "still");
}

});

 //=================================================================================================================================================================