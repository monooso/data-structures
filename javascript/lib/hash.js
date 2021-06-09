class Hash {
  constructor() {
    this.hash = {}
  }

  add(value) {
    this.hash[value] = true
  }

  remove(value) {
    if (this.contains(value)) {
      this.hash[value] = false
    }
  }

  contains(value) {
    return this.hash[value] === true
  }
}

module.exports = Hash

const hash = new Hash()

hash.add(123)
hash.add('xyz')
console.log(hash.contains(123))
hash.remove(123)
console.log(hash.contains(123))