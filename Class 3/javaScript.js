// Task 1

// if else
function min(x,y){
    if(x<y){
        return (x);
    }else{
    return (y);
    }
 }
console.log(min(6,7));

// question-mark-colon operator

function min2(x,y){
return x < y ? x : y;
}
console.log(min2(8,5));

// Task 2
 // max3
function max3(x,y,z){
    if (x > y && x > z){
        return x;
    }else if (y > x && y > z) {
        return y;
    } else {
        return z;
    }
}
console.log(max3(3,4,6));

// max

function max(x,y){
    if(x>y){
        return (x);
    }else{
    return (y);
    }
}

console.log(max(8,4));

// Task 3
var num =99;
while (num > 0) {
    console.log(`${num} Bottles of Beer on the Wall ${num} bottels of Beer! Take one down, pass it around...${num - 1} bottels of Beer on the Wall`);

    num--;
    
  }

 // Task 4


 //Task 5

 function drawConsolePyramid(height) {
    for (let row = 1; row <= height; row++) {
      let rowStr = "";
      // Add spaces before the first star to center the row
      for (let i = 1; i <= height - row; i++) {
        rowStr += " ";
      }
      // Add stars for this row
      for (let i = 1; i <= 2 * row - 1; i++) {
        rowStr += "*";
      }
      console.log(rowStr);
    }
  }
  drawConsolePyramid(8)
  