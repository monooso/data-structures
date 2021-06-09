const LinkedList = require('./linked-list')

class Stack {
  constructor() {
    this.list = new LinkedList()
    this.count = 0
  }

  push(value) {
    this.list.prepend(value)
    this.count++
  }

  pop() {
    const value = this.peek()
    if (value) {
      this.list.remove(this.list.head)
      this.count--
    }
    return value
  }

  peek() {
    return this.list.head ? this.list.head.value : null
  }
}

module.exports = Stack