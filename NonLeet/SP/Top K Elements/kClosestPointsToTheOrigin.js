// Given an array of points in a 2D plane, find ‘K’ closest points to the origin.

class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get_point() {
        return "[" + this.x + ", " + this.y + "] ";
    }

    get_distance() {
        return (this.x * this.x) + (this.y * this.y);
    }
};

const find_closest_points = function (points, k) {
    function heapify(length, index) {
        while (index < length) {
            let largest = index;
            let leftIndex = index * 2 + 1;
            let rightIndex = leftIndex + 1;
            if (leftIndex < length && points[leftIndex].get_distance() > points[largest].get_distance())
                largest = leftIndex;
            else if (rightIndex < length && points[rightIndex].get_distance() > points[largest].get_distance())
                largest = rightIndex;
            if (largest != index)
                [points[index], points[largest]] = [points[largest], points[index]];
            else
                break;

            index = largest;
        }
    }
    // put length - k elements with maximum distance in front
    for (let i = 0; i < points.length - k; i++) {
        heapify(points.length, i);
    }
    // we need to get k with minimum distance
    return points.slice(points.length - k);
};

let points = find_closest_points([new Point(1, 2), new Point(1, 3)], 1);
let result = "Here are the k points closest the origin: ";
for (i = 0; i < points.length; i++)
    result += points[i].get_point();
console.log(result);

points = find_closest_points([new Point(1, 3), new Point(3, 4), new Point(2, -1)], 2);
result = "Here are the k points closest the origin: ";
for (i = 0; i < points.length; i++)
    result += points[i].get_point();
console.log(result);