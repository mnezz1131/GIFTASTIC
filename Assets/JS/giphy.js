//Jquery function to ready DOM   
$(document).ready(function () {
    console.log("ready!");
});

// Variables for the website
var topics = ["Butters", "Bugs Bunny", "Snoopy", "Donald Duck", "Powerpuff Girls", "Fred Flintstone", "Bart Simpson", "Scooby Doo", "Spongebob", "Tigger", "Stewie Griffin", "Pink Panther", "Metalocalypse"];
// This is My API key
var APIKey = "RBvbkTz8S3Uy5xCmLpFZyIdDzlUOK63E";

//=====================================================================================================================================  
// Function for displaying topics data 
function renderButtons() {
    // Delete the content inside the buttons-view div prior to adding new movies
    $("#buttons-view").empty();      // (this is necessary otherwise you will have repeat buttons)
    // Loop through the array of movies, then generate buttons for each movie in the array
    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>");           //Making a button for each item in the array
        button.addClass("cartoonButton");     // Adds a class of cartoonButton to thebutton
            // Added a data-attribute
        button.attr("data-name",topics[i]);
        button.attr("data-still",topics[i]);   //Adding all these data attributes to the button
        button.attr("data-state",topics[i]);
        button.attr("data-animate",topics[i]);
         // Provided the initial button text
        button.text(topics[i]);
      // Added the button to the buttons-view div
        $("#buttons-view").append(button);
        console.log(topics[i]);
    }
}
//=========================================================================================================================================
// This function handles events where the add cartoon button is clicked
$("#add-cartoon").on("click", function (event) {
    // event.preventDefault() prevents submit button from trying to send a form.
    // Using a submit button instead of a regular button allows the user to hit
    // "Enter" instead of clicking the button if desired
    event.preventDefault();
    // Write code to grab the text the user types into the input field
    var cartoon = $("#cartoon-input").val().trim();
    // Write code to add the new movie into the topics array
    topics.push(cartoon);
    // The renderButtons function is called, rendering the list of movie buttons
    renderButtons();
        
});
// Calling the renderButtons function to display the initial list of movies
renderButtons();


//Sets up onclick function for when cartoonButton is clicked
    $("button").on("click", function() {
      $("#gifs-appear-here").empty();  //clears out the div
      //this refers to the button that was clicked
      var toon = $(this).attr("data-name");  //Setting variable toon equal the value of whatever this button was that got clicked
      //sets up a var for the api query of my cartoon characters called toon
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + toon + "&api_key="+APIKey+"&limit=10";
  
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
            cartoonImage.attr("src", results[i].images.fixed_height_still.url);  //Sets the attribute to the 

            gifDiv.prepend(p);
            gifDiv.prepend(cartoonImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        });
    });

