"use strict";

function Klasa() {
   this.ciagznakow = "Hello";
   this.wartosci = [1, 2, 3];
   this.wartosci.forEach(function (cyferka) {
      console.log(this.ciagznakow, cyferka);
   });
}

function LepszaKlasa() {
   var _this2 = this;

   var _this = 55;

   this.ciagznakow = "Hello";
   this.wartosci = [1, 2, 3];
   this.wartosci.forEach(function (cyferka) {
      console.log(_this2.ciagznakow, cyferka);
   });
}

new Klasa(); // TypeError
new LepszaKlasa(); // "Hello 1", "Hello 2", "Hello 3"

