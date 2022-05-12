// Your code here
class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        let sideCount =0
        this.array.forEach((side) => {
            sideCount++
        })
        return sideCount
    }

    get perimeter() {
        let sideSum = 0
        for (const side of this.array) {
            sideSum += side
        }
        return sideSum
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            if (this.array[0] + this.array[1] > this.array[2] && this.array[1] + this.array[2] > this.array[0] && this.array[0] + this.array[2]> this.array[1]) {
                return true
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.perimeter / 4 === this.array[0]) {
            return true
        }
        else {
            return false
        }
    }

    get area() {
        if (this.isValid === true) {
            return this.array[0] * this.array[1]
        }
    }
}