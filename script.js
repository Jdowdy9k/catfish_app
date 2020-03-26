






$(document).ready(function() {

$("#profile-info-div").hide();

$("#start-button").on("click", function() {
    $("#generate-profile-div").hide();
    $("#profile-info-div").show();
    runProfile();
})

$("#go-back").on("click", function() {
    $("#generate-profile-div").show();
    $("#profile-info-div").hide();
})


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
               width: 300
             });
        
          console.log(data);
          $("#picture-li").html(img);
          $("#gender-li").text("Gender: " + gender);
          
          $("#name-li").text("Name: " + nameFirst + ", " + nameLast);
          $("#location-li").text("Location: " + locationCity + ", " + locationState + ", " + locationCountry);
          $("#email-li").text("Email: " + email);
          $("#username-li").text("Username: " + userName);
          $("#age-li").text("Age: " + age);
          
          generateQuote();
          getPet();
          
       
          
        }
      });

    }

    function generateQuote() {
        newQuoteApi = "https://quote-garden.herokuapp.com/quotes/random";

        $.getJSON(newQuoteApi, function(data) {
            console.log(data);
            var quote = data.quoteText;
            var author = data.quoteAuthor;

            $("#quote-li").text('"' + quote + '"' + " -" + author);
            
        });
    }
     
    })

    function getPet() {
        petApi = "https://aws.random.cat/meow";
        $.getJSON(petApi, function(data){
            console.log(data);
            var petUrl = data.file;
            console.log(petUrl);
            var petImage = $("<img>").attr("src", petUrl);
            $("#cat-pic-li").append(petImage);
        });
     };
getDog();
