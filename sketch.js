var marks = [30,40,45,35];
// total and average 
var total = 0
function setup() {
  createCanvas(400, 400);
  for(var index=0;index<marks.length;index=index+1){
    
total=total+marks[index];
  }
  var average=total/marks.length
}

function draw() {
  background(150);
}
