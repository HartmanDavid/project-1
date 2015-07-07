console.log('hi');

$('body').on("keydown", function(e){;
        if (e.which == 76){console.log('L');
            $("#first-dog").animate({top: "15%"},200,"linear").animate({top: "30%"},400,"linear");}
          else if (e.which == 188) { console.log(',');}
          else if (e.which == 190) { console.log('.');}
          else if (e.which == 83) { console.log('S');
          $("#second-dog").animate({top: "45%"},200,"linear").animate({top: "60%"},400,"linear");}
          else if (e.which == 90) { console.log('Z');}
          else if (e.which == 88) { console.log('X');}
    });
