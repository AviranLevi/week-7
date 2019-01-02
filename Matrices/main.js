////////////////////
//Exercise #1 & #2//
////////////////////

class Matrix {
    constructor(row, column) {
        this.num = 1
        this.matrix = []
        this.generateMatrix(row, column)
    }

    generateMatrix(row, column) {
        for (let i = 0; i < row; i++) {
            this.matrix.push([])
            for (let j = 0; j < column; j++) {
                this.matrix[i].push(".")
            }
        }
    }



    print() {
        let output = ""
        this.matrix.forEach(r => {
            r.join(" ")
            output += r.join(" ") + "\n"
        })

        console.log(output)
    }

    printColumn(columnNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][columnNum])
        }
    }

    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }

    get(rowNum, columnNum) {
        return this.matrix[rowNum][columnNum]
    }

    alter(r, c, v) {
        this.matrix[r][c] = v
    }

    findCoordinate(value) {
        let obj = {}

        for (let r = 0; r < this.matrix.length; r++) {
            for (let c = 0; c < this.matrix[r].length; c++) {
                if (value === this.matrix[r][c]) {
                    obj.x = this.matrix[r].indexOf(this.matrix[r][c])
                    obj.y = obj.y = this.matrix.indexOf(this.matrix[r])
                }
            }
        }

        return obj
    }
}

// let m = new Matrix(3, 4)
// m.print()
// //prints
// /*
// 1       2       3       4
// 5       6       7       8
// 9       10      11      12
// */

// m.alter(0, 0, m.get(1, 1))
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// m.printRow(0) //prints 6, 2, 3, 4 (separate lines)


// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}

////////////////////
//Exercise #3 - #6//
////////////////////


class EmployeeMatrix extends Matrix {
    constructor() {
        super()

    }

    loadData(salaryData) {
        this.matrix = salaryData
        this.matrix.forEach(s => {
            console.log(`${s._id} ${s.name} ${s.department} ${s.salary} \t`)
        })
    }

    getEmployees(department) {
        let arr = []
        this.matrix.forEach(d => {
            department === d.department ? arr.push(d.name) : null
        })

        return arr
    }

    getTotalSalary(department) {
        let sum = 0
        this.matrix.forEach(s => {
            department === s.department ? sum += s.salary : null
        })

        return sum
    }

    findRichest() {
        let sum = 0
        let name
        this.matrix.forEach(s => {
            if (sum < s.salary) {
                sum = s.salary
                name = s.name
            }
        })

        return name
    }
}

let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let em = new EmployeeMatrix()

// em.loadData(data)
// em.print()

// console.log(em.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
// console.log(em.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]

// console.log(em.getTotalSalary("Finance")) //prints 4300
// console.log(em.getTotalSalary("Design")) //prints 5300

// console.log(em.findRichest()) //prints Anisha

////////////////////
//Exercise #7 - ##//
////////////////////

class TicTacToe extends Matrix {
    constructor() {
        super()
    }

    loadBoard() {
        this.generateMatrix(3, 3)
    }

    play(rowNum, columnNum, player) {
        if (player === 1) {
            this.alter(rowNum, columnNum, "x")
        } else if (player === 2) {
            this.alter(rowNum, columnNum, "o")
        }
    }

}

let board = new TicTacToe()
board.loadBoard()
board.print()

board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 2, 1)
board.print()