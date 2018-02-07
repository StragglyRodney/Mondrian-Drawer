var mondrianLineWidth = 2; //width of black seperating lines
var mondrianSideMinimum = 20; //minimum side below which no more splitting takes place

var chance = 45; // chance to create a sub-mondrian

var baseLevel = 4; // how deeply sub-mondrians may be nested


function draw() {
	
  noLoop();

  var myCanvas = createCanvas(920,680);

  myCanvas.parent('mondrian');
  

  var margin = 0; //margin to canvas edges
  
  //get canvas size
  var wid = width - margin;
  var hei = height;
  
  clear();
  //strokeWeight(mondrianLineWidth);
  
  //calculate co-ordinates of first mondrian patch
  var x1 = margin;
  var y1 = margin;
  var x2 = margin + (wid - margin);
  var y2 = margin + (hei - 2*margin);
  
  
  //draw the first mondrian, and all smaller ones
  drawMondrian(x1, y1, x2, y2, baseLevel);
  
  //draw the frame last to cover unfinished areas
  //strokeWeight(mondrianLineWidth);
  noFill();
  rect(x1, y1, x2-x1, y2-y1);  
}




function drawMondrian(x1, y1, x2, y2, currentLevel) {

  //mondrian colors  
  //create multiple whites so there is a higher chance of getting white
  var monWhite = color(245);
  var monWhite2 = color(245);
  var monWhite3 = color(245);

  var monYellow = color(255,221,10);
  var monRed = color(223,12,29);
  var monBlue = color(8,56,138);
  
  var colorList = [monWhite, monWhite2, monWhite3, monYellow, monRed, monBlue];
  var col = random(colorList); //chooses a random mondrian color from the array
  
  // draw the color patch that may or may not be divided
  fill(col);
  //strokeWeight(mondrianLineWidth);
  rect(x1+mondrianLineWidth/2, y1+mondrianLineWidth/2,    // do not paint over already painted lines
                       x2-x1-mondrianLineWidth, y2-y1-mondrianLineWidth);
  
  if (currentLevel === 0) return;
  if (x2-x1-mondrianLineWidth < mondrianSideMinimum || y2-y1-mondrianLineWidth < mondrianSideMinimum) return;
  if (chance <= 0) return; 
  
  //get width and height
  var wid = abs(x1-x2) - mondrianLineWidth/2;
  var hei = abs(y1-y2) - mondrianLineWidth/2;
  
  //get split point
  
  var splitPointX = x1 + wid/4 + random(wid/2);
  var splitPointY = y1 + hei/4 + random(hei/2);
  
  //draw splitpoint
  fill(0);
  
  strokeWeight(mondrianLineWidth);
  line(x1, splitPointY, x2, splitPointY);
  line(splitPointX, y1, splitPointX, y2);
  
  //random values for checking against chance
  var r1 = random() * 100;
  var r2 = random() * 100;
  var r3 = random() * 100;
  var r4 = random() * 100;
  
  //recursive calls
  if (r1 <= chance) {
    drawMondrian(x1, y1, splitPointX, splitPointY, currentLevel-1);
  }
  if (r2 <= chance) {
    drawMondrian(splitPointX, y1, x2, splitPointY, currentLevel-1);
  }
  if (r3 <= chance) {
    drawMondrian(x1, splitPointY, splitPointX, y2, currentLevel-1);
  }
  if (r4 <= chance) {
    drawMondrian(splitPointX, splitPointY, x2, y2, currentLevel-1);
  }

 console.log("baselevel = " + baseLevel);

}