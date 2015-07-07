console.log('hi');

$('body').on("keydown", function(e){console.log(e);
        if (e.which == 76){console.log('L');}
          else if (e.which == 188) { console.log(',');}
          else if (e.which == 190) { console.log('.');}
          else if (e.which == 83) { console.log('S');}
          else if (e.which == 90) { console.log('Z');}
          else if (e.which == 88) { console.log('X');}
    });
