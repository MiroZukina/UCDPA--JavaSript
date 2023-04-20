/* GraphicsHelloWorld
This program displyas the 
the string "hello, world" at location (50, 100) on the graphics window.
*/
const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;

function GraphicsHelloWorld(){
    let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
    let msg = GLabel("hello, world", 50, 100);
    gw.add(msg);
}