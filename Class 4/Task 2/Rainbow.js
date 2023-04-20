/* Rainbow
This program displyas the Rainbow on sky 

*/

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;

function Rainbow(){
    let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT );
   let rect =GRect(500, 200);
   rect.setColor("skyblue");
   rect.setFilled(true);
   gw.add(rect);

   //red
    let oval = GOval (250,450,850 );
    oval.setFilled(true);
    oval.setColor("red");
    gw.add(oval);

    //orange
    let oval1 = GOval (250,450,830 );
    oval1.setFilled(true);
    oval1.setColor("orange");
    gw.add(oval1);

    //yellow
    let oval2 = GOval (250,450,810 );
    oval2.setFilled(true);
    oval2.setColor("yellow");
    gw.add(oval2);

    // green
    let oval3 = GOval (250,450,790);
    oval3.setFilled(true);
    oval3.setColor("green");
    gw.add(oval3);

    //blue
    let oval4 = GOval (250,450,770);
    oval4.setFilled(true);
    oval4.setColor("blue");
    gw.add(oval4);

    //purple
    let oval5 = GOval (250,450,750);
    oval5.setFilled(true);
    oval5.setColor("purple");
    gw.add(oval5);

    //pink
    let oval6 = GOval (250,450,730);
    oval6.setFilled(true);
    oval6.setColor("pink");
    gw.add(oval6);

    //skyblue-  for rest of sky
    let oval7 = GOval (250,450,710);
    oval7.setFilled(true);
    oval7.setColor("skyblue");
    gw.add(oval7);
}