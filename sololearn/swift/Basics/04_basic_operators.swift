import Foundation

// Arithmetic Operators
let add = 5 + 3       // Addition (8)
let subtract = 5 - 3  // Subtraction (2)
let multiply = 5 * 3  // Multiplication (15)
let divide = 10 / 2   // Division (5)
let modulus = 10 % 3  // Remainder (1)

// Unary Minus and Plus Operators
let minusFive = -5
let plusFive = +5

// Compound Assignment Operators
var a = 5
a += 2  // a = a + 2 (7)
a -= 1  // a = a - 1 (6)

// Comparison Operators
let isEqual = 5 == 5      // true
let isNotEqual = 5 != 4   // true
let isGreaterThan = 5 > 3 // true
let isLessThan = 5 < 6    // true
let isGreaterThanOrEqual = 5 >= 5 // true
let isLessThanOrEqual = 5 <= 5    // true

// Ternary Conditional Operator
let condition = true
let ternaryResult = condition ? "True" : "False" // "True"

// Logical Operators
let and = true && false  // false
let or = true || false   // true
let not = !true          // false

// Bitwise Operators
let bitwiseAnd = 0b1010 & 0b1100  // 0b1000 (8 in decimal)
let bitwiseOr = 0b1010 | 0b1100   // 0b1110 (14 in decimal)
let bitwiseXor = 0b1010 ^ 0b1100  // 0b0110 (6 in decimal)
let bitwiseNot = ~0b1010          // 0b0101 (5 in decimal)
let leftShift = 0b101 << 1        // 0b1010 (10 in decimal)
let rightShift = 0b1010 >> 1      // 0b0101 (5 in decimal)

// Range Operators
let closedRange = 1...5  // 1 to 5, inclusive
let halfOpenRange = 1..<5 // 1 to 4

// Nil-Coalescing Operator
let optionalInt: Int? = nil
let result = optionalInt ?? 0 // 0

// Optional Chaining
class Person {
    var name: String
    init(name: String) {
        self.name = name
    }
}
var person: Person? = Person(name: "John")
let personName = person?.name // "John"

// Identity Operators
class MyClass {}
let object1 = MyClass()
let object2 = MyClass()
let isSameObject = object1 === object2 // false

// Swift also supports Type-Casting Operators, but they're context-specific
// and used in scenarios like checking type, downcasting, etc.
