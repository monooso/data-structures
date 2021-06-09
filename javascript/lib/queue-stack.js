const Stack = require('./stack')

class QueueStack {
  constructor() {
    this.list = new Stack()
    this.count = 0
  }

  enqueue(value) {
    const temp = new Stack()

    this.flush(this.list, (v) => temp.push(v))
    this.list.push(value)
    this.flush(temp, (v) => this.list.push(v))
    this.count++
  }

  flush(list, callback) {
    let popped
    while (popped = list.pop()) {
      callback(popped)
    }
  }

  dequeue() {
    const value = this.peek()
    if (value) {
      this.list.pop()
      this.count--
    }
    return value
  }

  peek() {
    return this.list.peek()
  }
}

module.exports = QueueStack

const queue = new QueueStack()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())