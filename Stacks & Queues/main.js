///////////////
//Exercise #1//
///////////////
// class Queue {
//     constructor() {
//         this.array = []
//     }

//     print() {
//         console.log(this.array)
//     }

//     isEmpty() {
//         if (!this.array[0]) {
//             return true

//         } else {
//             return false
//         }
//     }

//     enqueue(item) {
//         this.array.unshift(item)
//     }

//     peek() {
//         if (this.array[0]) {
//             return this.array[this.array.length - 1]

//         } else {
//             return null
//         }
//     }

//     dequeue() {
//         this.array.pop()
//     }
// }


// let q = new Queue()

// console.log(q.isEmpty())    //true

// q.print()                   //[]
// q.enqueue(2)

// console.log(q.isEmpty())    //false

// q.enqueue(4)
// q.print()                   //[4,2]

// console.log(q.peek())       //2

// q.dequeue()
// q.dequeue()

// console.log(q.peek())       //null

// console.log(q.isEmpty())    //true

///////////////
//Exercise #2//
///////////////

class MinStack {
    constructor() {
        this.array = []
        this.length = 0;
    }

    push(item) {
        this.array.push(item)
    }

    getMin() {
        if (this.array[0]) {
            return Math.min(...this.array)

        } else {
            return null
        }
    }

    pop() {
        return this.array.pop()
    }

    print() {
        console.log(this.array)
    }
}


let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12

ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null


ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19

ms.push(3)
console.log(ms.getMin())    //3

ms.pop()
ms.pop()
console.log(ms.getMin())    //19
























