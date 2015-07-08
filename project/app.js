//opening of the document on ready jQ function
// $(document).ready(function){
advanceObect1();
advanceObect2();
console.log('hi');
var obsticalArray = ['food','flower', 'cactus', 'smFence']

$('body').on("keydown", function(e){
        if (e.which == 76){console.log('L');
              $("#first-dog").animate({top: "15%"},200,"linear").animate({top: "30%"},400,"linear");}
          else if (e.which == 188) { console.log(',');
              document.querySelector("#first-dog");
              $("#first-dog").animate({marginLeft: ".5em"},400,"linear").animate({marginLeft: "3em"},200,"linear");}
          else if (e.which == 190) { console.log('.');
              $("#first-dog").animate({marginLeft: "4.5em"},400,"linear").animate({marginLeft: "3em"},200,"linear");}
          else if (e.which == 83) { console.log('S');
              $("#second-dog").animate({top: "45%"},200,"linear").animate({top: "60%"},400,"linear");}
          else if (e.which == 90) { console.log('Z');
              $("#second-dog").animate({marginLeft: ".5em"},400,"linear").animate({marginLeft: "3em"},200,"linear");}
          else if (e.which == 88) { console.log('X');
              $("#second-dog").animate({marginLeft: "4.5em"},400,"linear").animate({marginLeft: "3em"},200,"linear");}
    });

      console.log('while log' +i);


var newObstical = 0;


myObstical(){
      $('.convayer_belt').append('<div class="obstical" id="first-obstical'+ newObstical+'"></div>');
      var newIdObstical = $("#first-obstical" + newObstical);
}

      // var smurfCount = 0
      // myFunction() {
        //  $('#test').append('<div id="smurf'+ smurfCount + '" class="smurfs"></div>');
      //   var mySmurf = $('#smurf' + smurfCount);
      //   $(mySmur).animate();
      //
      //
      //   smurfCount += 1;
      // }
function advanceObect1() {$("#first-obstical").delay(1200).animate({marginLeft: '0px'}, 3500, 'linear').animate({opacity:   '0'},200).animate({marginLeft: "100%"},0).animate({opacity: '1'},50, myObstical);
    }
function advanceObect2() {$("#second-obstical").delay(1200).animate({marginLeft: '0px'}, 3500, 'linear').animate({opacity: '0'},200).animate({marginLeft: "100%"}, 0).animate({opacity: '1'},50, myObstical);
    }

// } // closing of 'ready on load' function
