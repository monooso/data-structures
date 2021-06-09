class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  traverse(callback) {
    let previous = null
    let current = this.head

    while (current) {
      if (callback(current, previous)) return current
      previous = current
      current = current.next
    }

    return null
  }

  append(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
    } else {
      const lastNode = this.last()
      lastNode.next = newNode
    }

    return this
  }

  prepend(value) {
    const newNode = new Node(value, this.head)
    this.head = newNode
  }

  insertAt(node, value) {
    const newNode = new Node(value, node.next)
    node.next = newNode

    return newNode
  }

  find(value) {
    return list.traverse(current => current.value === value)
  }

  last() {
    return this.traverse(current => current.next === null)
  }

  remove(target) {
    if (this.head && this.head.value === target.value) {
      this.head = this.head.next
      return
    }

    this.traverse((current, previous) => {
      if (current.value !== target.value) {
        return
      }
      if (previous) {
        previous.next = current.next
      }
    })
  }

  dump() {
    this.traverse((current) => console.log(current.value))
  }
}

module.exports = LinkedList
