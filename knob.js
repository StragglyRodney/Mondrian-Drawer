
	
    $(function() {
        $(".depthDial").knob();
      });

    $(function() {
        $(".chanceDial").knob();
      });

    $(function() {
        $(".widthDial").knob();
      });


	$(".depthDial").knob({
        'release' : function (v) { 
          baseLevel = v;
          console.log("depth = " + v); 
        }
      });

  $(".chanceDial").knob({
        'release' : function (v) {    
          chance = v;
          console.log("chance = " + v); 
        }
      });

  $(".widthDial").knob({
        'release' : function (v) {    
          mondrianLineWidth = v;
          console.log("chance = " + v); 
        }
      });


	
