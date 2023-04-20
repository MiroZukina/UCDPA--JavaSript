/* CheckerBoard
This program displyas the 
CheckerBoard on the graphics window.
*/

const GWINDOW_WIDTH = 1000;
const GWINDOW_HEIGHT = 1000;
const N_COLUMNS= 8;
const SQUARE_SIZE=50;
const N_ROWS= 8;
function CheckerBoard(){
    let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
    let x0 = (gw.getWidth() - N_COLUMNS * SQUARE_SIZE) / 2;
    let y0 = (gw.getHeight() - N_ROWS * SQUARE_SIZE) / 2;
    for (let row =0 ; row < N_ROWS; row++){
        for (let col = 0; col < N_COLUMNS ; col++){
            let x = x0 + col * SQUARE_SIZE;
            let y = y0 + row * SQUARE_SIZE;
            let sg = GRect(x,y, SQUARE_SIZE, SQUARE_SIZE);
            sg.setFilled((row + col) % 2 !==0);
            gw.add(sg);
        }
        }
}