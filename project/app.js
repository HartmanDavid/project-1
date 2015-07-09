//opening of the document on ready jQ function
// $(document).ready(function){
// advanceObect1();
// advanceObect2();
console.log('hi');
var obsticalArray = ['food','flower', 'cactus', 'smFence'];
var dogOne= $('#first-dog').offset();
var dogOneLeft = dogOne.left;
var dogOneTop = dogOne.top;
var dogOneRight = dogOneLeft + $('#first-dog').width();
var dogOneBottom = dogOneTop + $('#first-dog').height();

myObstical();
$('body').on("keydown", function(e){
        if (e.which == 76){ // 76 is the 'L' key - this makes the dog jump up
              $("#first-dog").animate({top: "15%"},200,"linear").animate({top: "30%"},400,"linear");}
          else if (e.which == 188) {
              document.querySelector("#first-dog");
              $("#first-dog").animate({marginLeft: ".5em"},400,"linear").animate({marginLeft: "3em"},200,"linear");}
          else if (e.which == 190) {
              $("#first-dog").animate({marginLeft: "4.5em"},400,"linear").animate({marginLeft: "3em"},200,"linear");}
          else if (e.which == 83) {
              $("#second-dog").animate({top: "45%"},200,"linear").animate({top: "60%"},400,"linear");}
          else if (e.which == 90) {
              $("#second-dog").animate({marginLeft: ".5em"},400,"linear").animate({marginLeft: "3em"},200,"linear");}
          else if (e.which == 88) {
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
