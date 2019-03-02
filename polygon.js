function toRadians(angle) {
  return angle * (Math.PI / 180);
}

function rotate(vector, angle) {
  let newX = vector.x*Math.cos(toRadians(angle)) - vector.y*Math.sin(toRadians(angle));
  let newY = vector.x*Math.sin(toRadians(angle)) + vector.y*Math.cos(toRadians(angle));
  return {x: newX, y: newY};
}

function sidesCheck(sides) {
  if (sides < 3) {
    return 3;
  } else {
    return sides;
  }
}

function sideLengthCheck(sideLength) {
  if (sideLength <= 0) {
    return 1;
  } else {
    return sideLength;
  }
}

function pointCheck(polygon, point) {
  if (typeof point == "undefined") {
    return polygon.centroid();
  } else {
    return point;
  }
}

module.exports = {
  coordinates (sides, sideLength = 1, startingAngle = 0){
    sides = sidesCheck(sides);
    sideLength = sideLengthCheck(sideLength);
    let vector = {x: sideLength, y: 0.0};
    vector = rotate(vector, startingAngle);
    let vertices = [];
    let totalAngle = (sides-2)*180;
    let innerAngle = totalAngle/sides;
    vertices.push({x: 0.0, y: 0.0});
    for(let i=0;i<sides-1;i++){
      // add next vector
      vertices.push({x: vertices[i].x+vector.x, y: vertices[i].y+vector.y});
      // rotate for next iteration
      vector = rotate(vector, 180-innerAngle);
    }
    // move all vertices into first quadrant
    let minx = 0;
    for(let v of vertices){
      if (minx > v.x){
        minx = v.x;
      }
    }
    let xshift = -1*minx;
    let miny = 0;
    for(let v of vertices){
      if (miny > v.y){
        miny = v.y;
      }
    }
    let yshift = -1*miny;
    for(let i = 0; i < vertices.length; i++){
      vertices[i].x = vertices[i].x + xshift;
      vertices[i].y = vertices[i].y + yshift;
    }

    return vertices;
  },
  polygon (vertices){
    this.vertices = vertices;
    this.transform = function(vector){
      process.emitWarning("The method \'transform\' is deprecated and will be removed in a future version, use \'translate\' instead.", "DeprecationWarning");
      this.translate(vector);
    };
    this.translate = function(vector){
      this.vertices.forEach(function(vertix){
        vertix.x += vector.x;
        vertix.y += vector.y;
      });
    };
    this.rotate = function(angle, point){
      point = pointCheck(this, point);
      for(let i = 0; i < this.vertices.length; i++){
        let deltaVector = {
          x: this.vertices[i].x - point.x,
          y: this.vertices[i].y - point.y
        };
        deltaVector = rotate(deltaVector, angle);
        this.vertices[i].x = point.x + deltaVector.x;
        this.vertices[i].y = point.y + deltaVector.y;
      }
    };
    this.scale = function(factor, point){
      point = pointCheck(this, point);
      for(let i = 0; i < this.vertices.length; i++){
        let scaleVector = {
          x: this.vertices[i].x - point.x,
          y: this.vertices[i].y - point.y
        };
        this.vertices[i].x = point.x + factor*scaleVector.x;
        this.vertices[i].y = point.y + factor*scaleVector.y;
      }
    };
    this.centroid = function(){
      let sumx = 0;
      let sumy = 0;
      for(let i = 0; i < this.vertices.length-1; i++){
        sumx += (this.vertices[i].x + this.vertices[i+1].x)*(this.vertices[i].x * this.vertices[i+1].y - this.vertices[i+1].x * this.vertices[i].y);
        sumy += (this.vertices[i].y + this.vertices[i+1].y)*(this.vertices[i].x * this.vertices[i+1].y - this.vertices[i+1].x * this.vertices[i].y);
      }
      let last = this.vertices.length-1;
      sumx += (this.vertices[last].x+this.vertices[0].x)*(this.vertices[last].x * this.vertices[0].y - this.vertices[0].x * this.vertices[last].y);
      sumy += (this.vertices[last].y+this.vertices[0].y)*(this.vertices[last].x * this.vertices[0].y - this.vertices[0].x * this.vertices[last].y);

      let a = this.area();
      let centroid = {
        x: (1/(6*a)) * sumx,
        y: (1/(6*a)) * sumy
      };
      return centroid;
    };
    this.area = function(){
      let sum = 0;
      for(let i = 0; i < this.vertices.length-1; i++){
        sum += this.vertices[i].x * this.vertices[i+1].y - this.vertices[i+1].x * this.vertices[i].y;
      }
      let last = this.vertices.length-1;
      sum += this.vertices[last].x * this.vertices[0].y - this.vertices[0].x * this.vertices[last].y;
      return 0.5*sum;
    };
    return this;
  }
};
