
console.log('hi'); // test that the JS file is working
var dogOne= $('#first-dog').offset(); //.offset of the first..top dog
var dogOneLeft = dogOne.left; //the corrdinates for the outer area of the dog object
var dogOneTop = dogOne.top; //the corrdinates for the outer area of the dog object
var dogOneRight = dogOneLeft + $('#first-dog').width();  //the corrdinates for the outer area of the dog object
var dogOneBottom = dogOneTop + $('#first-dog').height();  //the corrdinates for the outer area of the dog object
var playerDogOne =[0]; //array for keeping stats about the player - [0] is the points/score of player
var idOneNew = 0;
var dogOneHits = 0; //counter for dog one-top hits the obstical- number NOT indicative of number of intersections
var dogOneAvoid = 0;

var dogTwo= $('#second-dog').offset(); //.offset of the second..bottom dog
var dogTwoLeft = dogTwo.left; //the corrdinates for the outer area of the dog object
var dogTwoTop = dogTwo.top; //the corrdinates for the outer area of the dog object
var dogTwoRight = dogTwoLeft + $('#second-dog').width();  //the corrdinates for the outer area of the dog object
var dogTwoBottom = dogTwoTop + $('#second-dog').height();  //the corrdinates for the outer area of the dog object
var playerDogTwo = [0]; //array for keeping stats about the player - [0] is the points/score of player
var idTwoNew = 0;
var dogTwoHits = 0; //counter for dog two-bottom hits the obstical- number NOT indicative of number of intersections
var dogTwoAvoid = 0;

var boardLevel= 1;

myObsticalOne();
myObsticalTwo();
scoreBoard();
// $("#first-dog img").each(function() {console.log('start');
//     // let cl be (half parent width) - (half element width).
//     cl = ($(this).parent().innerWidth() / 2) - ($(this).innerWidth() / 2);
//     console.log(cl);// we can set the left position to that value to achieve center
//     $(this).css({"left":cl});
// });
$('body').on("keydown", function(e){
    if (e.which == 76){ // 76 is the 'L' key - this makes dog one jump up
        $("#first-dog").animate({top: "15%"}, { duration: 200, easing: "linear", step: locateDogOne}).animate({top: "30%"},{ duration: 400, easing: "linear", step:locateDogOne});}
    else if (e.which == 188) { //188 is the ',' key - this makes  dog one move back
        $("#first-dog").animate({marginLeft: ".5em"},{ duration: 250,easing: "linear", step: locateDogOne}).animate({marginLeft: "3em"},{ duration: 250,easing: "linear", step: locateDogOne});}
    else if (e.which == 190) {//190 is the '.' key - this makes  dog one move forward
        $("#first-dog").animate({marginLeft: "4.5em"},{ duration: 250,easing: "linear", step: locateDogOne}).animate({marginLeft: "3em"},{ duration: 250,easing: "linear", step: locateDogOne});}
    else if (e.which == 83) { //83 is the 'S' key - this makes  dog two jump
        $("#second-dog").animate({top: "45%"},{ duration: 200,easing: "linear", step: locateDogTwo}).animate({top: "60%"},{ duration: 400, easing: "linear", step: locateDogTwo});}
    else if (e.which == 90) { //90 is the 'Z' key - this makes dog two move back
        $("#second-dog").animate({marginLeft: ".5em"},{ duration: 250,easing: "linear", step: locateDogTwo}).animate({marginLeft: "3em"},{ duration: 250,easing: "linear", step: locateDogTwo});}
    else if (e.which == 88) { //88 is the 'X' key - this makes dog two move forward
        $("#second-dog").animate({marginLeft: "4.5em"},{ duration: 250,easing: "linear", step: locateDogTwo}).animate({marginLeft: "3em"},{ duration: 250,easing: "linear", step: locateDogTwo});}
});

function myObsticalOne(){ //generate the first-top obstical for first-top dog
    $('.convayer_belt').append('<div class="obstical" id="first-obstical'+ idOneNew+'"></div>');
    newObsticalOneId = $("#first-obstical" + idOneNew);
    $(newObsticalOneId).delay(1000).animate({marginLeft: '0px'}, {duration: 4500, easing: 'linear', step:locateObstOne, complete: function (){removeObst(); keepingScoreOne();}});
    //console.log(idOneNew);
    idOneNew +=1;
    function removeObst(){
        $(newObsticalOneId).remove();
        myObsticalOne();
    }
    function locateObstOne(){
        var obstLeft = $(newObsticalOneId).offset().left;
        var obstTop = $(newObsticalOneId).offset().top;
        var obstBottom = obstTop + $(newObsticalOneId).height();
        var obstRight = obstLeft + $(newObsticalOneId).width();
        //console.log(dogOneRight);
        if ( (obstLeft <= dogOneRight) && (obstLeft >= dogOneLeft) && (dogOneBottom >= obstTop) ) {
            dogOneHits +=1;
            console.log(dogOneHits);
        }
    }
}



function myObsticalTwo(){ //generate the second-bottom obstical for second-bottom dog
    $('.convayer_belt').append('<div class="obstical" id="second-obstical'+ idTwoNew+'"></div>');
    newObsticalTwoId = $("#second-obstical" + idTwoNew);
    $(newObsticalTwoId).delay(1000).animate({marginLeft: '0px'}, {duration: 4500, easing: 'linear', step:locateObst, complete:  function(){removeObst(); keepingScoreTwo();}});
    //console.log(idTwoNew);
    idTwoNew +=1;
    function removeObst(){
        $(newObsticalTwoId).remove();
        myObsticalTwo();
    }
    function locateObst(){// collison dectecting function
        var obstLeft = $(newObsticalTwoId).offset().left;
        var obstTop = $(newObsticalTwoId).offset().top;
        var obstBottom = obstTop + $(newObsticalTwoId).height();
        var obstRight = obstLeft + $(newObsticalTwoId).width();
        //console.log(obstBottom);
        if ( (obstLeft <= dogTwoRight) && (obstLeft >= dogTwoLeft) && (dogTwoBottom >= obstTop)) {
            //confirms a collision between player and object
            dogTwoHits +=1;
        }
    }
}

function locateDogOne() {
    dogOne= $('#first-dog').offset(); //.offset of the first-top dog
    dogOneLeft = dogOne.left; //the corrdinates for the outer area of the dog object
    dogOneTop = dogOne.top; //the corrdinates for the outer area of the dog object
    dogOneRight = dogOneLeft + $('#first-dog').width();  //the corrdinates for the outer area of the dog object
    dogOneBottom = dogOneTop + $('#first-dog').height();  //the corrdinates for the outer area of the dog object
    //console.log('one-easing');
}

function locateDogTwo() {
    dogTwo= $('#second-dog').offset(); //.offset of the second-bottom dog
    dogTwoLeft = dogTwo.left; //the corrdinates for the outer area of the dog object
    dogTwoTop = dogTwo.top; //the corrdinates for the outer area of the dog object
    dogTwoRight = dogTwoLeft + $('#second-dog').width();  //the corrdinates for the outer area of the dog object
    dogTwoBottom = dogTwoTop + $('#second-dog').height();  //the corrdinates for the outer area of the dog object
    // console.log(dogTwoLeft);
}
function keepingScoreOne(){
    if (dogOneHits > 0){
        playerDogOne[0] -=10;
        console.log('one'+ playerDogOne[0]);
        dogOneHits = 0;
    }else{
        playerDogOne[0] +=15;
        console.log( 'one'+ playerDogOne[0]);
        dogOneHits = 0;
    }
    scoreBoard();
}

function keepingScoreTwo(){
    if (dogTwoHits > 0){
        playerDogTwo[0] -=10;
        console.log('two' +playerDogTwo[0]);
        dogTwoHits = 0;
    }else{
        playerDogTwo[0] +=15;
        console.log( 'two'+playerDogTwo[0]);
        dogTwoHits = 0;
    }
    scoreBoard();
}
function scoreBoard(){
    $('#player-one span').text(playerDogOne[0]);
    $('#player-two span').text(playerDogTwo[0]);
    $('#level span').text(boardLevel);
}
