# polygon-generator
```
polygon = require('polygon-generator');
```
## coordinates method
Calculate coordinates of an equilateral polygon. The returned object is an array of the following structure:
```
[{x: 0, y: 0}, {x: 1, y: 0}, {x: 0.5, y: 0.866}]
```
The vectors form an anti-clockwise path with the last vector connecting back to the first one.
All coordinates will be in the first quadrant of a cartesian coordinate system meaning there will be no negative numbers.
This method takes three parameters:
- sides: the number of sides of the polygon (minimum is 3)
- sideLength: the length of each side (default is 1)
- startingAngle: determines the angle of the first edge, rotates anti-clockwise (default is 0, horizontal line)
```
sides = 3;
sideLength = 1;
startingAngle = 10;
vertices = polygon.coordinates(sides, sideLength, startingAngle);
```

## polygon wrapper
The polygon object provides transform, rotation and scaling methods for polygons. To create one simply pass in an array of vectors representing the vertices.
```
poly = polygon.polygon([{x: 0, y: 0}, {x: 1, y: 0}, {x: 0.5, y: 0.866}]);
```
You can also directly pass in the results of the coordinates method.
```
poly = polygon.polygon(polygon.coordinates(5,2,20));
```
### transform
```
poly.transform(vector);
```
Transform shifts a polygon along a vector. The vector needs to be an object with a field `x` and `y`, which should both be numbers.

### rotate
```
poly.rotate(angle, point);
```
Rotate a polygon anti-clockwise around a given point `{x: ?, y: ?}` by the specified angle. If no point is specified then the centroid of the polygon will be used.

### scale
```
poly.rotate(factor, point);
```
Scale a polygon by a certain factor with regard to a given point. If no point is specified then the centroid of the polygon will be used.

### area
```
poly.area();
```
Returns the area of the polygon.

### centroid
```
poly.centroid();
```
Returns the coordinates of the centroid `{x: Cx, y: Cy}`.
