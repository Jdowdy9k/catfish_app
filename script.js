$(document).ready(function() {

    var maleCheck = document.querySelector("#male-check");
    var femaleCheck = document.querySelector("#female-check");
    var catCheck = document.querySelector("#cat-check");
    var dogCheck = document.querySelector("#dog-check");
    var noPetCheck = document.querySelector("#no-pet-check");
    var catfishGender;
    

    $("#gender-div").hide();
    $("#pic-selector-div").hide();
    $("#info-selector-div").hide();
    $("#quote-selector-div").hide();
    $("#profile-info-div").hide();
    $("#dog-selector-div").hide();
    $("#cat-selector-div").hide();
    $("#pet-div").hide();

$("#start-button").on("click", function(){
    $("#gender-div").show();
    $("#pic-selector-div").hide();
    $("#info-selector-div").hide();
    $("#quote-selector-div").hide();
    $("#profile-info-div").hide();
    $("#dog-selector-div").hide();
    $("#cat-selector-div").hide();
    $("#pet-div").hide();
    $("#generate-profile-div").hide();

})

$("#gender-save").on("click", function(){
    $("#gender-div").hide();
    $("#pic-selector-div").show();
    $("#info-selector-div").hide();
    $("#quote-selector-div").hide();
    $("#profile-info-div").hide();
    $("#dog-selector-div").hide();
    $("#cat-selector-div").hide();
    $("#pet-div").hide();
    $("#generate-profile-div").hide();
    whichGender();
    getPic(catfishGender);

})

$("#pic-save").on("click", function(){
    $("#gender-div").hide();
    $("#pic-selector-div").hide();
    $("#info-selector-div").show();
    $("#quote-selector-div").hide();
    $("#profile-info-div").hide();
    $("#dog-selector-div").hide();
    $("#cat-selector-div").hide();
    $("#pet-div").hide();
    $("#generate-profile-div").hide();
    getInfo(catfishGender);
 
})

$("#info-save").on("click", function(){
    $("#gender-div").hide();
    $("#pic-selector-div").hide();
    $("#info-selector-div").hide();
    $("#quote-selector-div").show();
    $("#profile-info-div").hide();
    $("#dog-selector-div").hide();
    $("#cat-selector-div").hide();
    $("#pet-div").hide();
    $("#generate-profile-div").hide();
    generateQuote();
 
})

$("#quote-save").on("click", function(){
    $("#gender-div").hide();
    $("#pic-selector-div").hide();
    $("#info-selector-div").hide();
    $("#quote-selector-div").hide();
    $("#profile-info-div").hide();
    $("#dog-selector-div").hide();
    $("#cat-selector-div").hide();
    $("#pet-div").show();
    $("#generate-profile-div").hide();
 
})

$("#pet-save").on("click", function() {
    $("#gender-div").hide();
    $("#pic-selector-div").hide();
    $("#info-selector-div").hide();
    $("#quote-selector-div").hide();
    $("#profile-info-div").hide();
    $("#dog-selector-div").show();
    $("#cat-selector-div").hide();
    $("#pet-div").hide();
    $("#generate-profile-div").hide();
    whichPet();
})

$("#dog-save").on("click", function() {
    $("#gender-div").hide();
    $("#pic-selector-div").hide();
    $("#info-selector-div").hide();
    $("#quote-selector-div").hide();
    $("#profile-info-div").show();
    $("#dog-selector-div").hide();
    $("#cat-selector-div").hide();
    $("#pet-div").hide();
    $("#generate-profile-div").hide();
})

$("#go-back").on("click", function() {
    $("#gender-div").hide();
    $("#pic-selector-div").hide();
    $("#info-selector-div").hide();
    $("#quote-selector-div").hide();
    $("#profile-info-div").hide();
    $("#dog-selector-div").hide();
    $("#cat-selector-div").hide();
    $("#pet-div").hide();
    $("#generate-profile-div").show();
})


$("#pic-reload").on("click", function() {
    getPic(catfishGender);
})

$("#info-reload").on("click", function() {
    getInfo(catfishGender);
})

$("#quote-reload").on("click", function() {
    generateQuote();
})


function whichGender() {
    if (maleCheck.checked == true)  {
      catfishGender = "male";
    };

    if (femaleCheck.checked == true)  {
        catfishGender = "female";
      };

}

function getPic(x) {
    $.ajax({
        url: 'https://randomuser.me/api/?gender=' + x,
        dataType: 'json',
        success: function(data) {
            var picture = data.results[0].picture.large;
            var img = $('<img />',
            { id: 'Myid',
              src: picture, 
              width: 200
            });
            $("#pic-result").html(img);
    
          
        }
    
    });
}


function getInfo(x) {
    $.ajax({
        url: 'https://randomuser.me/api/?gender=' + x,
        dataType: 'json',
        success: function(data) {

            var gender = data.results[0].gender;
            var nameFirst = data.results[0].name.first;
            var nameLast = data.results[0].name.last;
            var locationCity = data.results[0].location.city;
            var locationState = data.results[0].location.state;
            var locationCountry = data.results[0].location.country;
            var email = data.results[0].email;
            var userName = data.results[0].login.username;
            var age = data.results[0].dob.age;

    
            $("#gender-li").text("Gender: " + gender);   
            $("#name-li").text("Name: " + nameFirst + ", " + nameLast);
            $("#location-li").text("Location: " + locationCity + ", " + locationState + ", " + locationCountry);
            $("#email-li").text("Email: " + email);
            $("#username-li").text("User Name: " + userName);
            $("#age-li").text("Age: " + age);
      
          
        }
    
    });

}

function whichPet() {
    if (dogCheck.checked == true)  {
        console.log("dog")
      };
  
    if (catCheck.checked == true)  {
          console.log("cat");
        };

    if (noPetCheck.checked == true)  {
            console.log("no pet");
        };
}

function runProfile() {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            var gender = data.results[0].gender;
            var nameFirst = data.results[0].name.first;
            var nameLast = data.results[0].name.last;
            var locationCity = data.results[0].location.city;
            var locationState = data.results[0].location.state;
            var locationCountry = data.results[0].location.country;
            var email = data.results[0].email;
            var userName = data.results[0].login.username;
            var age = data.results[0].dob.age;
            var picture = data.results[0].picture.large;
            var img = $('<img />',
             { id: 'Myid',
               src: picture, 
               width: 200
             });
        
          console.log(data);
          $("#picture-li").html(img);
          $("#gender-li").text(gender);    
          $("#name-li").text(nameFirst + ", " + nameLast);
          $("#location-li").text(locationCity + ", " + locationState + ", " + locationCountry);
          $("#email-li").text(email);
          $("#username-li").text(userName);
          $("#age-li").text(age);
          
          generateQuote();
       
          
        }
      });

    }

    function generateQuote() {
        newQuoteApi = "https://quote-garden.herokuapp.com/quotes/random";

        $.getJSON(newQuoteApi, function(data) {
            console.log(data);
            var quote = data.quoteText;
            var author = data.quoteAuthor;

            $("#quote-div").text('"' + quote + '"' + " -" + author);
            
        });
    }

    
});