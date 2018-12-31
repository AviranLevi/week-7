class UniqeArray {
    constructor() {
        this.array = []
        this.checkObject = {}
        this.length = 0
    }

    add(item) {
        this.array[this.length] = item
        this.checkObject[item] = item
        this.length++
    }

    showAll() {
        console.log(this.array)
    }

    exists(item) {
        this.checkObject[item] === item ? console.log(true) : console.log(false)
    }

    get(index) {
        this.array[index] ? console.log(this.array[index]) : console.log(-1)
    }
}

const arr = new UniqeArray()
arr.add("yo")
arr.add(23)
arr.add("ok")
arr.get(2)