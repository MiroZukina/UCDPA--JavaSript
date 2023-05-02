/*
 * File: DrawDots.js
 * -----------------
 * This program draws a smal "x" every time the user clicks the mouse.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 300;
const X=5;
const X_SIZE = 6;

/* Main program */





function DrawLines() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let line = null;
   gw.addEventListener("mousedown", mousedownAction);
   gw.addEventListener("drag", dragAction);

   function mousedownAction(e) {
      let line = GRect(e.getX() - X_SIZE,
                      e.getY() - X_SIZE,
                      X_SIZE, X_SIZE);
      line.setFilled(true);
      gw.add(line);
   }

   function dragAction(e) {
      line.setEndPoint(e.getX(), e.getY());
   }
}
