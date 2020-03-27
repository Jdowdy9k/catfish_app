$(document).ready(function () {
<<<<<<< HEAD
// Modal Creation
=======

>>>>>>> 97f0ff52f36b990efe0bf27db2a676f8119ad429
    var elems = $('.modal');
    var instances = M.Modal.init(elems);

    $("modal-trigger").on("click", function() {
        instances.open();
    })
    
<<<<<<< HEAD
// Variables set for gender
    var maleCheck = document.querySelector("#male-check");
    var femaleCheck = document.querySelector("#female-check");
    var catfishGender;

// Hides and shows appropriate divs
    $("#final-div").hide();
    $("#gender-div").hide();
    $("#pic-selector-div").hide();
    $("#info-selector-div").hide();
    $("#quote-selector-div").hide();
    $("#profile-info-div").hide();
    $("#cat-selector-div").hide();
    $("#book-selector-div").hide();
    $("#book-selected-div").hide();
   

// Hides and shows appropriate divs
    $("#start-button").on("click", function () {
        $("#gender-div").show();
        $("#pic-selector-div").hide();
        $("#info-selector-div").hide();
        $("#quote-selector-div").hide();
        $("#profile-info-div").hide();
        $("#cat-selector-div").hide();
        $("#generate-profile-div").hide();

    })
// Calls the whichGender and getPic function
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
// Calls the getInfo based of catfish gender
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
// Calls the generateQuote function
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
// Calls the getPet function
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
        $("#book-selector-div").show();
        $("#cat-selector-div").hide();
        $("#final-div").hide();
    })
// Calls runProfile after deciding book.
    $("#book-save").on("click", function() {
        runProfile();
        $("#final-div").show();
        $("#book-selected-div").hide();
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

    $("#book-back").on("click", function() {
        $("#book-selected-div").hide();
        $("#book-selector-div").show();
    })

    // These buttons generate a new photo if user does not like choice
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

    
//  Book search button calls, findBook function
    $("#book-search").on("click", function () {
        var userBook = $("#book-input").val().trim();
        findBook(userBook);
        $("#book-input").val("");

    })
// Refresh button
    $("#reload-button").on("click", function() {
        location.reload();
    })

//  Determines which gender user chooses
    function whichGender() {
        if (maleCheck.checked == true) {
            catfishGender = "male";
        };

        if (femaleCheck.checked == true) {
            catfishGender = "female";
        };

    }
// Api call to random user that displays a randomized photo
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
// Api call to random cat photo generator
    function getPet() {
        petApi = "https://aws.random.cat/meow";
        $.getJSON(petApi, function (data) {
            console.log(data);
            var petUrl = data.file;
            console.log(petUrl);
            var petImage = $("<img>").attr("src", petUrl);

            $("#cat-pic-div").html($(petImage).attr("class", "cat-pic"));

=======

    var maleCheck = document.querySelector("#male-check");
    var femaleCheck = document.querySelector("#female-check");
    var catfishGender;


    $("#final-div").hide();
    $("#gender-div").hide();
    $("#pic-selector-div").hide();
    $("#info-selector-div").hide();
    $("#quote-selector-div").hide();
    $("#profile-info-div").hide();
    $("#cat-selector-div").hide();
    $("#book-selector-div").hide();
    $("#book-selected-div").hide();
   


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
        $("#book-selector-div").show();
        $("#cat-selector-div").hide();
        $("#final-div").hide();
    })

    $("#book-save").on("click", function() {
        runProfile();
        $("#final-div").show();
        $("#book-selected-div").hide();
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

    $("#book-back").on("click", function() {
        $("#book-selected-div").hide();
        $("#book-selector-div").show();
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

    

    $("#book-search").on("click", function () {
        var userBook = $("#book-input").val().trim();
        findBook(userBook);
        $("#book-input").val("");

    })

    $("#reload-button").on("click", function() {
        location.reload();
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
>>>>>>> 97f0ff52f36b990efe0bf27db2a676f8119ad429

    function getInfo(x) {
        $.ajax({
            url: 'https://randomuser.me/api/?gender=' + x,
            dataType: 'json',
            success: function (data) {

<<<<<<< HEAD
        });
    };
// Api call that recieves random info
    function getInfo(x) {
        $.ajax({
            url: 'https://randomuser.me/api/?gender=' + x,
            dataType: 'json',
            success: function (data) {

=======
>>>>>>> 97f0ff52f36b990efe0bf27db2a676f8119ad429
                var gender = data.results[0].gender;
                var nameFirst = data.results[0].name.first;
                var nameLast = data.results[0].name.last;
                var locationCity = data.results[0].location.city;
                var locationState = data.results[0].location.state;
                var locationCountry = data.results[0].location.country;
                var email = data.results[0].email;
                var userName = data.results[0].login.username;
                var age = data.results[0].dob.age;
<<<<<<< HEAD


                $("#gender-li").text("Gender: " + gender);
                $("#name-li").text("Name: " + nameFirst + ", " + nameLast);
                $("#location-li").text("Location: " + locationCity + ", " + locationState + ", " + locationCountry);
                $("#email-li").text("Email: " + email);
                $("#username-li").text("User Name: " + userName);
                $("#age-li").text("Age: " + age);


            }

        });

    }

// Function that stores all data into final div
=======


                $("#gender-li").text("Gender: " + gender);
                $("#name-li").text("Name: " + nameFirst + ", " + nameLast);
                $("#location-li").text("Location: " + locationCity + ", " + locationState + ", " + locationCountry);
                $("#email-li").text("Email: " + email);
                $("#username-li").text("User Name: " + userName);
                $("#age-li").text("Age: " + age);


            }

        });

    }


>>>>>>> 97f0ff52f36b990efe0bf27db2a676f8119ad429
    function runProfile() {

        finalPic = $("#pic-result").html();
        $("#final-picture").html(finalPic);

        finalName = $("#name-li").text();
        $("#final-name").text(finalName);

        finalAge = $("#age-li").text();
        $("#final-age").text(finalAge);

        finalGender = $("#gender-li").text();
        $("#final-gender").html(finalGender);

        finalLocation = $("#location-li").text();
        $("#final-location").html(finalLocation);

        finalEmail = $("#email-li").text();
        $("#final-email").text(finalEmail);

        finalUserName = $("#username-li").text();
        $("#final-username").text(finalUserName);

        finalQuote = $("#quote-div").text();
        $("#final-quote").text(finalQuote);

        finalCat = $("#cat-pic-div").html();
        $("#final-cat").html(finalCat);

        finalBook = $("#book-pic-div3").html();
        $("#final-book").html(finalBook);
<<<<<<< HEAD
=======

    }

    $(document).on('click', '.book-pic-select' , function(event){
        event.preventDefault();
        userBookSelect = this.innerHTML;
       userSelectsBook(userBookSelect);
       $("#book-selector-div").hide();
       $("#book-selected-div").show();
       
    })

    function userSelectsBook(x) {
        console.log(x);
        $("#book-pic-div3").html(x);
>>>>>>> 97f0ff52f36b990efe0bf27db2a676f8119ad429

    }
// book pic selection
    $(document).on('click', '.book-pic-select' , function(event){
        event.preventDefault();
        userBookSelect = this.innerHTML;
       userSelectsBook(userBookSelect);
       $("#book-selector-div").hide();
       $("#book-selected-div").show();
       
    })

    function userSelectsBook(x) {
        console.log(x);
        $("#book-pic-div3").html(x);

    }
// Api call to quote generator
    function generateQuote() {
        newQuoteApi = "https://quote-garden.herokuapp.com/quotes/random";

        $.getJSON(newQuoteApi, function (data) {
            console.log(data);
            var quote = data.quoteText;
            var author = data.quoteAuthor;

            $("#quote-div").text('"' + quote + '"' + " -" + author);

        });
    }

   

  
<<<<<<< HEAD
// Api call to random book
=======

>>>>>>> 97f0ff52f36b990efe0bf27db2a676f8119ad429
    function findBook(x) {
        newBookApi = "http://openlibrary.org/search.json?q=" + x;

        $.getJSON(newBookApi, function (data) {
            console.log(data);
         

            var bookCover2 = $("<img>").attr("src", imgUrl2);
            $("#book-pic-div2").html($(bookCover2).attr("class", "cat-pic"));
            $("#book-pic-div2").html("");
            for (i=0; i <= 4; i++) {

                var olid = data.docs[i].cover_edition_key;

                if (olid === undefined) {
                    $("#book-pic-div2").append("");
                }
                else {
                var imgUrl2 = 'https://covers.openlibrary.org/b/olid/' + olid + '-L.jpg'; 
                console.log(imgUrl2);
                console.log(olid);
             
               
                $("#book-pic-div2").append('<a class="book-pic-select"><img class="book-pic-select" src=' + imgUrl2 + '></img></a>');
                }
            }
     
        });
    }


});