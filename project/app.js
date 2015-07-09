
console.log('hi'); // test that the JS file is working
var dogOne= $('#first-dog').offset(); //.offset of the first..top dog
var dogOneLeft = dogOne.left; //the corrdinates for the outer area of the dog object
var dogOneTop = dogOne.top; //the corrdinates for the outer area of the dog object
var dogOneRight = dogOneLeft + $('#first-dog').width();  //the corrdinates for the outer area of the dog object
var dogOneBottom = dogOneTop + $('#first-dog').height();  //the corrdinates for the outer area of the dog object

var dogTwo= $('#second-dog').offset(); //.offset of the second..bottom dog
var dogTwoLeft = dogTwo.left; //the corrdinates for the outer area of the dog object
var dogTwoTop = dogTwo.top; //the corrdinates for the outer area of the dog object
var dogTwoRight = dogTwoLeft + $('#second-dog').width();  //the corrdinates for the outer area of the dog object
var dogTwoBottom = dogTwoTop + $('#second-dog').height();  //the corrdinates for the outer area of the dog object

myObstical();
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
                   dogOneHits = 0; //counter for times dog one-top hits the obstical
                   dogTwoHits = 0; //counter for times dog two-bottom hits the obstical
                   var obstLeft = $(newObsticalId).offset().left;
                   var obstTop = $(newObsticalId).offset().top;
                   var obstBottom = obstTop + $(newObsticalId).height();
                   var obstRight = obstLeft + $(newObsticalId).width();
                   if ( (obstLeft <= dogOneRight) && (obstLeft >= dogOneLeft) && (dogOneBottom<= obstBottom) && (dogOneBottom >= obstTop) ) {
                     console.log('collison');
  // alert("we have a collision");
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
//console.log('two-easing');
}
