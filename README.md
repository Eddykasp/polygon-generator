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
