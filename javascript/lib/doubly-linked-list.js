class Node {
  constructor(value, next = null, previous = null) {
    this.value = value
    this.next = next
    this.previous = previous
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
  }

  traverse(callback) {
    let current = this.head

    while (current) {
      if (callback(current)) return current
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
      newNode.previous = lastNode
      lastNode.next = newNode
    }

    return this
  }

  insertAt(node, value) {
    const newNode = new Node(value, node.next, node)
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

    this.traverse(current => {
      if (current.value !== target.value) {
        return
      }
      if (current.previous) {
        current.previous.next = current.next
      }
      if (current.next) {
        current.next.previous = current.previous
      }
    })
  }

  dump() {
    this.traverse((current) => console.log(current.value))
  }
}

module.exports = DoublyLinkedList
