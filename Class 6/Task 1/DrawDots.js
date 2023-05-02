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

function DrawDots() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   gw.addEventListener("click", clickAction);

   function clickAction(e) {
      let ex = (e.getX() - X_SIZE/2,
                      e.getY() - X_SIZE/2,
                      X_SIZE, X_SIZE);
      ex.setFilled(true);
      gw.add(ex);
   }
}
