
  let gutter = 10;
  let pieceDiameter = 40;
  let boardX = pieceDiameter * 15 + gutter * 6;
  let boardY = pieceDiameter * 13 + gutter * 2;
  let overDarkRoll = false;
  let r = 0;
  let point = 0;
  let pieceCenter = [gutter*2+pieceDiameter*1.5+pieceDiameter*point, gutter+pieceDiameter*0.5]

  // Page Setup
function setup() {
  createCanvas(640, 540);
  background(80, 40, 80);
  rect(0, 0, boardX, boardY);
  background(80, 40, 80);
}

// How to roll Die
function roll() {
  console.log("r before roll: " + r);
  r = floor(random(6)) + 1;
  
  console.log("r after roll: " + r);
  return r;
}

function mouseClicked() {
  // test if cursor is over clicking zone
    if (
      mouseX > gutter &&
      mouseX < gutter+pieceDiameter &&
      mouseY > gutter &&
      mouseY < gutter+pieceDiameter*5
    ) {
  roll();
  console.log("current r:" + r);
  } else {
    // Tell user to click in area
    fill(255, 36, 60);
    rect(gutter, gutter*1.5+pieceDiameter*2, 40, 20);
    fill(255, 255, 255);
    text("Here", gutter*1.4, gutter*3+pieceDiameter*2);
  }
  // tests if cursor is over piece
  if (
    mouseX > pieceCenter[0] - (pieceDiameter/2) &&
    mouseX < pieceCenter[0] + (pieceDiameter/2) &&
    mouseY > pieceCenter[1] - (pieceDiameter/2) &&
    mouseY < pieceCenter[1] + (pieceDiameter/2)
  ) {
    // Add roll to point (this will move the piece)
    if (point + r < 6) {
      point += r;
    } else {
      ///////////////
    }
    // Update pieceCenter with new point after roll
    pieceCenter = [gutter*2+pieceDiameter*1.5+pieceDiameter*point, gutter+pieceDiameter*0.5];
    console.log("point: " + point);
    }
}


function draw() {
  
  // Draw the board
  noStroke();
  fill(80, 40, 80)
    rect(gutter*2+pieceDiameter*7, gutter, pieceDiameter, boardY - 2 * gutter);
  stroke(0);
  fill(230, 160, 100);
  rect(gutter, gutter, pieceDiameter, boardY - 2 * gutter);
  rect(gutter * 2 + pieceDiameter, gutter, pieceDiameter * 6, boardY - 2 * gutter);
  rect(gutter * 3 + pieceDiameter * 7, 0, 10, boardY);
  rect(gutter * 4 + pieceDiameter * 7, 0, 10, boardY);
  rect(340, gutter, pieceDiameter * 6, boardY - 2 * gutter);
  rect(590, gutter, pieceDiameter, boardY - 2 * gutter);

  
  //Draw Triangles
  var trianglesFunction = function (start, num, baseSide, side) {
    // sets fill color based on sequence
    if (num === 0) {
      fill(230, 210, 170);
    } else if (num % 2 === 0) {
      fill(230, 210, 170);
    } else {
      fill(66, 36, 60);
    }
    triangle(
      start + pieceDiameter * num,
      baseSide,
      start + pieceDiameter + pieceDiameter * num,
      baseSide,
      start + pieceDiameter * 0.5 + pieceDiameter * num,
      baseSide + pieceDiameter * 5 * side
    );
  };

  
  // single quadrant arrays of triangles
  var q1Triangles = function () {
    for (i = 0; i < 6; i++) {
      trianglesFunction(
        gutter * 2 + pieceDiameter * 13, -i, boardY - gutter, -1);
    }
  };

  var q2Triangles = function () {
    for (i = 0; i < 6; i++) {
      trianglesFunction(
        gutter * 2 + pieceDiameter * 6, -i, boardY - gutter, -1);
    }
  };

  var q3Triangles = function () {
    for (i = 0; i < 6; i++) {
      trianglesFunction(gutter * 2 + pieceDiameter, i, gutter, 1);
    }
  };

  var q4Triangles = function () {
    for (i = 0; i < 6; i++) {
      trianglesFunction(gutter * 2 + pieceDiameter * 8, i, gutter, 1);
    }
  };
  
  // Print triangles
  q1Triangles();
  q2Triangles();
  q3Triangles();
  q4Triangles();
  
  
// Make peices with parameter of point number (and quadrant eventually)
  function whitePiece(point) {
    fill(240, 220, 200);
    ellipse((gutter*2+pieceDiameter+pieceDiameter/2)+pieceDiameter*point, gutter+pieceDiameter/2, pieceDiameter, pieceDiameter);
  };
  whitePiece(point);

  
  // Print die roll
  fill(66, 36, 60);
  rect(gutter, gutter*1.5+pieceDiameter*2, 40, 20);
  fill(255, 255, 255);
  text("Roll: " + r, gutter*1.4, gutter*3+pieceDiameter*2);
}




// function draw() {

//   // Test if the cursor is over the box
//   if (
//     mouseX > gutter &&
//     mouseX < gutter+pieceDiameter &&
//     mouseY > gutter &&
//     mouseY < gutter+pieceDiameter*5
//   ) {
//     overDarkRoll = true;
//   } else {
//     overDarkRoll = false;
//       }
//   }

/////////////////

// var blackPiece = function(point) {
//   fill(0, 40, 68);
//   ellipse((gutter*2+pieceDiameter+pieceDiameter/2)+pieceDiameter*point, gutter+pieceDiameter/2, pieceDiameter, pieceDiameter);
// };


// Make rule about stacking pieces on the same point
  // store number of pieces on point in point array
  
// Make a rule to move pieces from point to point
  // store position of piece in piece location array
  // make that array a parameter of piece location function
  
// Make rule to move peices from quadrant to quadrant in respective direction
  
// Make a rule that the roll number can move pieces.
// Make starting set up of the board