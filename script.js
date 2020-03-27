$(document).ready(function () {

    var elems = $('.modal');
    var instances = M.Modal.init(elems);

    $("modal-trigger").on("click", function() {
        instances.open();
    })
    

    var maleCheck = document.querySelector("#male-check");
    var femaleCheck = document.querySelector("#female-check");
    var catCheck = document.querySelector("#cat-check");
    var dogCheck = document.querySelector("#dog-check");
    var noPetCheck = document.querySelector("#no-pet-check");
    var catfishGender;


    $("#final-div").hide();
    $("#gender-div").hide();
    $("#pic-selector-div").hide();
    $("#info-selector-div").hide();
    $("#quote-selector-div").hide();
    $("#profile-info-div").hide();
    $("#cat-selector-div").hide();


    $("#start-button").on("click", function () {
        $("#gender-div").show();
        $("#pic-selector-div").hide();
        $("#info-selector-div").hide();
        $("#quote-selector-div").hide();
        $("#profile-info-div").hide();
        $("#cat-selector-div").hide();
        $("#generate-profile-div").hide();

    })

    $("#gender-save").on("click", function () {
        $("#gender-div").hide();
        $("#pic-selector-div").show();
        $("#info-selector-div").hide();
        $("#quote-selector-div").hide();
        $("#profile-info-div").hide();
        $("#cat-selector-div").hide();
        $("#generate-profile-div").hide();
        whichGender();
        getPic(catfishGender);

    })

    $("#pic-save").on("click", function () {
        $("#gender-div").hide();
        $("#pic-selector-div").hide();
        $("#info-selector-div").show();
        $("#quote-selector-div").hide();
        $("#profile-info-div").hide();
        $("#cat-selector-div").hide();
        $("#generate-profile-div").hide();
        getInfo(catfishGender);

    })

    $("#info-save").on("click", function () {
        $("#gender-div").hide();
        $("#pic-selector-div").hide();
        $("#info-selector-div").hide();
        $("#quote-selector-div").show();
        $("#profile-info-div").hide();
        $("#cat-selector-div").hide();
        $("#generate-profile-div").hide();
        generateQuote();

    })

    $("#quote-save").on("click", function () {
        $("#gender-div").hide();
        $("#pic-selector-div").hide();
        $("#info-selector-div").hide();
        $("#quote-selector-div").hide();
        $("#profile-info-div").hide();
        $("#cat-selector-div").show();
        $("#generate-profile-div").hide();
        getPet();

    })



    $("#cat-save").on("click", function () {
        $("#gender-div").hide();
        $("#pic-selector-div").hide();
        $("#info-selector-div").hide();
        $("#quote-selector-div").hide();
        $("#profile-info-div").show();
        $("#dog-selector-div").hide();
        $("#cat-selector-div").hide();
        $("#pet-div").hide();
        $("#generate-profile-div").hide();
        runProfile();
    })

    $("#go-back").on("click", function () {
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


    $("#pic-reload").on("click", function () {
        getPic(catfishGender);
    })

    $("#info-reload").on("click", function () {
        getInfo(catfishGender);
    })

    $("#quote-reload").on("click", function () {
        generateQuote();
    })

    $("#cat-reload").on("click", function () {
        getPet();
    })

    $("#cat-save").on("click", function () {
        $("#final-div").show();
    })


    function whichGender() {
        if (maleCheck.checked == true) {
            catfishGender = "male";
        };

        if (femaleCheck.checked == true) {
            catfishGender = "female";
        };

    }

    function getPic(x) {
        $.ajax({
            url: 'https://randomuser.me/api/?gender=' + x,
            dataType: 'json',
            success: function (data) {
                var picture = data.results[0].picture.large;
                var img = $('<img />',
                    {
                        id: 'Myid',
                        src: picture,
                        width: 200
                    });
                $("#pic-result").html(img);

            }

        });
    }

    function getPet() {
        petApi = "https://aws.random.cat/meow";
        $.getJSON(petApi, function (data) {
            console.log(data);
            var petUrl = data.file;
            console.log(petUrl);
            var petImage = $("<img>").attr("src", petUrl);

            $("#cat-pic-div").html($(petImage).attr("class", "cat-pic"));



        });
    };

    function getInfo(x) {
        $.ajax({
            url: 'https://randomuser.me/api/?gender=' + x,
            dataType: 'json',
            success: function (data) {

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


    function runProfile() {

        finalPic = $("#pic-result").html();
        $("#final-picture").html(finalPic);

        finalName = $("#name-li").text();
        $("#final-name").text(finalName);

        finalAge = $("#age-li").text();
        $("#final-age").text(finalAge);

        finalGender = $("#gender-li").text();
        $("#final-gender").html(finalGender);

        finalEmail = $("#email-li").text();
        $("#final-email").text(finalEmail);

        finalUserName = $("#username-li").text();
        $("#final-username").text(finalUserName);

        finalQuote = $("#quote-div").text();
        $("#final-quote").text(finalQuote);

        finalCat = $("#cat-pic-div").html();
        $("#final-cat").html(finalCat);










        // <h3 id="name"></h3>
        // <li id="age"></li>
        // <li id="gender"></li>
        // <li id="location"></li>
        // <li id="email"></li>
        // <li id="username"></li>
        // <li id="quote"></li>


    }

    function generateQuote() {
        newQuoteApi = "https://quote-garden.herokuapp.com/quotes/random";

        $.getJSON(newQuoteApi, function (data) {
            console.log(data);
            var quote = data.quoteText;
            var author = data.quoteAuthor;

            $("#quote-div").text('"' + quote + '"' + " -" + author);

        });
    }


});