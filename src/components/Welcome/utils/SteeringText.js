import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';

import myFont from './assets/fonts/AvenirNextLTPro-Demi.otf';

function sketch(p5) {
  var font;
  var vehicles = [];

  p5.preload = () => {
    font = p5.loadFont(myFont);
  };

  function Vehicle(x, y) {
    this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
    this.target = p5.createVector(x, y);
    this.vel = p5.constructor.Vector.random2D();
    this.acc = p5.createVector();
    this.r = 6;
    this.maxspeed = 8;
    this.maxforce = 1;
  }

  Vehicle.prototype.behaviors = function () {
    var arrive = this.arrive(this.target);
    var mouse = p5.createVector(p5.mouseX, p5.mouseY);
    var flee = this.flee(mouse);

    arrive.mult(1);
    flee.mult(5);

    this.applyForce(arrive);
    this.applyForce(flee);
  };

  Vehicle.prototype.applyForce = function (f) {
    this.acc.add(f);
  };

  Vehicle.prototype.update = function () {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  };

  Vehicle.prototype.show = function () {
    p5.stroke(255);
    p5.strokeWeight(this.r);
    p5.point(this.pos.x, this.pos.y);
  };

  Vehicle.prototype.arrive = function (target) {
    var desired = p5.constructor.Vector.sub(target, this.pos);
    var d = desired.mag();
    var speed = this.maxspeed;
    if (d < 100) {
      speed = p5.map(d, 0, 100, 0, this.maxspeed);
    }
    desired.setMag(speed);
    var steer = p5.constructor.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  };

  Vehicle.prototype.flee = function (target) {
    var desired = p5.constructor.Vector.sub(target, this.pos);
    var d = desired.mag();
    if (d < 50) {
      desired.setMag(this.maxspeed);
      desired.mult(-1);
      var steer = p5.constructor.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return p5.createVector(0, 0);
    }
  };

  p5.setup = () => {
    p5.createCanvas(1350, 300, p5);
    p5.background(29, 29, 29);

    var points = font.textToPoints("Hi, I'm Gia Zveriachvili", 50, 200, 100, {
      sampleFactor: 0.25,
    });

    for (var i = 0; i < points.length; i++) {
      var pt = points[i];

      var vehicle = new Vehicle(pt.x, pt.y);
      vehicles.push(vehicle);
    }
  };

  p5.draw = () => {
    p5.background(29, 29, 29);
    for (var i = 0; i < vehicles.length; i++) {
      var v = vehicles[i];
      v.behaviors();
      v.update();
      v.show();
    }
  };
}

const SteeringText = () => {
  return <ReactP5Wrapper sketch={sketch} />;
};

export default SteeringText;
