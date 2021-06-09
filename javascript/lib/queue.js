const LinkedList = require('./linked-list')

class Queue {
  constructor() {
    this.list = new LinkedList()
    this.count = 0
  }

  enqueue(value) {
    this.list.append(value)
    this.count++
  }

  dequeue() {
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

module.exports = Queue