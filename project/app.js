//opening of the document on ready jQ function
// $(document).ready(function){
// advanceObect1();
// advanceObect2();
console.log('hi'); // test that the JS file is working
var dogOne= $('#first-dog').offset(); //.offset of the first-top dog
var dogOneLeft = dogOne.left; //the corrdinates for the outer area of the dog object
var dogOneTop = dogOne.top; //the corrdinates for the outer area of the dog object
var dogOneRight = dogOneLeft + $('#first-dog').width();  //the corrdinates for the outer area of the dog object
var dogOneBottom = dogOneTop + $('#first-dog').height();  //the corrdinates for the outer area of the dog object

myObstical();
$('body').on("keydown", function(e){
        if (e.which == 76){ // 76 is the 'L' key - this makes dog one jump up
              $("#first-dog").animate({top: "15%"},200,"linear").animate({top: "30%"},400,"linear");}
          else if (e.which == 188) { //188 is the ',' key - this makes  dog one move back
              document.querySelector("#first-dog");
              $("#first-dog").animate({marginLeft: ".5em"},400,"linear").animate({marginLeft: "3em"},200,"linear");}
          else if (e.which == 190) {//190 is the '.' key - this makes  dog one move forward
              $("#first-dog").animate({marginLeft: "4.5em"},400,"linear").animate({marginLeft: "3em"},200,"linear");}
          else if (e.which == 83) { //83 is the 'S' key - this makes  dog two jump
              $("#second-dog").animate({top: "45%"},200,"linear").animate({top: "60%"},400,"linear");}
          else if (e.which == 90) { //90 is the 'Z' key - this makes dog two move back
              $("#second-dog").animate({marginLeft: ".5em"},400,"linear").animate({marginLeft: "3em"},200,"linear");}
          else if (e.which == 88) { //88 is the 'X' key - this makes dog two move forward
              $("#second-dog").animate({marginLeft: "4.5em"},400,"linear").animate({marginLeft: "3em"},200,"linear");}
    });


var newObstical = 0;


function myObstical(){
        $('.convayer_belt').append('<div class="obstical" id="first-obstical'+ newObstical+'"></div>');
        newObsticalId = $("#first-obstical" + newObstical);

        $(newObsticalId).delay(1200).animate({marginLeft: '0px'}, {duration: 5500, easing: 'linear', step:locateObst, complete: removeObst});
        console.log(newObstical);
        newObstical +=1;
        function removeObst(){
            $(newObsticalId).remove();
            myObstical();
        }
        function locateObst(){
                   dogOneHits = 0;
                   dogTwoHits = 0;
                   var obstLeft = $(newObsticalId).offset().left;
                   var obstTop = $(newObsticalId).offset().top;
                   var obstBottom = obstTop + $(newObsticalId).height();
                   var obstRight = obstLeft + $(newObsticalId).width();
                   if ( (obstLeft <= dogOneRight) && (obstLeft >= dogOneLeft) && (dogOneBottom<= obstBottom) && (dogOneBottom >= obstTop) ) {

                     alert("we have a collision");
                   }

 // console.log(obstBottom);
        }


}
