//Jquery function to ready DOM   
$(document).ready(function () {
    console.log("ready!");
});

// Initial array of movies
var topics = ["Butters", "Bugs Bunny", "Snoopy", "Donald Duck", "Snoopy", "Fred Flintstone", "Bart Simpson", "Scooby Doo", "Spongebob", "Tigger", "Stewie Griffin", "Pink Panther", "Metalocalypse"];


function renderButtons() {
    // Delete the content inside the buttons-view div prior to adding new movies
    $("#buttons-view").empty();
    // (this is necessary otherwise you will have repeat buttons)
    // Loop through the array of movies, then generate buttons for each movie in the array
    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>");
            // Adds a class of movie to our button
        button.addClass("cartoon");
            // Added a data-attribute
        button.attr("data-name", topics[i]);
         // Provided the initial button text
        button.text(topics[i]);
      // Added the button to the buttons-view div
        $("#buttons-view").append(button);
    }
}

// This function handles events where the add movie button is clicked
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
    console.log(topics)    
    

});


// Calling the renderButtons function to display the initial list of movies
renderButtons();




