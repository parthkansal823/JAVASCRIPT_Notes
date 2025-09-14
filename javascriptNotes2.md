# 📘 JavaScript Notes

---

# ⚡ JavaScript Operators

In JavaScript, **operators** are special symbols used to perform operations on values and variables.  

---

## 🔢 1. Arithmetic Operators
Used to perform mathematical calculations.

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `+`      | Addition    | `5 + 2` | `7` |
| `-`      | Subtraction | `5 - 2` | `3` |
| `*`      | Multiplication | `5 * 2` | `10` |
| `/`      | Division    | `10 / 2` | `5` |
| `%`      | Modulus (remainder) | `10 % 3` | `1` |
| `**`     | Exponentiation (power) | `2 ** 3` | `8` |
| `++`     | Increment (add 1) | `let a=5; a++` | `6` |
| `--`     | Decrement (subtract 1) | `let a=5; a--` | `4` |

---

## 🧮 2. Assignment Operators
Used to assign values to variables.

| Operator | Example | Equivalent to |
|----------|---------|----------------|
| `=`  | `x = 10` | `x = 10` |
| `+=` | `x += 5` | `x = x + 5` |
| `-=` | `x -= 5` | `x = x - 5` |
| `*=` | `x *= 5` | `x = x * 5` |
| `/=` | `x /= 5` | `x = x / 5` |
| `%=` | `x %= 5` | `x = x % 5` |
| `**=`| `x **= 2`| `x = x ** 2` |

---

## ⚖️ 3. Comparison Operators
Used to compare values (returns `true` or `false`).

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `==`     | Equal (loose, checks value only) | `5 == "5"` | `true` |
| `===`    | Strict equal (checks value + type) | `5 === "5"` | `false` |
| `!=`     | Not equal (value only) | `5 != "5"` | `false` |
| `!==`    | Strict not equal (value + type) | `5 !== "5"` | `true` |
| `>`      | Greater than | `10 > 5` | `true` |
| `<`      | Less than | `10 < 5` | `false` |
| `>=`     | Greater than or equal | `5 >= 5` | `true` |
| `<=`     | Less than or equal | `3 <= 5` | `true` |

---

## 🧩 4. Logical Operators
Used for boolean (true/false) logic.

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `&&` | AND → true if both are true | `(5 > 3 && 10 > 5)` | `true` |
| `|/|/` | OR → true if at least one is true | `(5 > 10 || 10 > 5)` | `true` |
| `!` | NOT → reverses result | `!(5 > 3)` | `false` |

---

## 🔀 5. Bitwise Operators
Work on numbers at the binary level.

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `&`  | AND | `5 & 1` → `0101 & 0001` | `1` |
| `|/`  | OR | `5 | 1` → `0101 | 0001` | `5` |
| `^`  | XOR | `5 ^ 1` → `0101 ^ 0001` | `4` |
| `~`  | NOT | `~5` → inverts bits | `-6` |
| `<<` | Left shift | `5 << 1` → `10` |
| `>>` | Right shift | `5 >> 1` | `2` |
| `>>>`| Unsigned right shift | `5 >>> 1` | `2` |

---

## 📝 6. Ternary (Conditional) Operator
Shorthand for `if...else`.

```js
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // "Adult"
```

---

## 🔗 7. String Operators
- The `+` operator is also used for **string concatenation**.  
- `+=` appends strings.

```js
let a = "Hello";
let b = "World";
console.log(a + " " + b); // "Hello World"
a += " JS";
console.log(a); // "Hello JS"
```

---

## 🧮 8. Type Operators
Operators related to types.

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `typeof` | Returns type | `typeof 123` | `"number"` |
| `instanceof` | Checks object type | `[] instanceof Array` | `true` |

---

## 🔥 Summary of Operators
- Arithmetic → `+ - * / % ** ++ --`  
- Assignment → `= += -= *= /= %= **=`  
- Comparison → `== === != !== > < >= <=`  
- Logical → `&& || !`  
- Bitwise → `& | ^ ~ << >> >>>`  
- Ternary → `? :`  
- String → `+` (concatenation)  
- Type → `typeof`, `instanceof`  

---

# 🧭 Conditional Statements

Conditional statements are used to **make decisions** in programs.

---

## 📝 1. if Statement
Executes a block if the condition is true.

```js
let age = 18;
if (age >= 18) {
    console.log("You are an adult");
}
```

---

## 📝 2. if...else Statement
Executes one block if true, another if false.

```js
let age = 16;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

---

## 📝 3. if...else if...else Statement
Multiple conditions.

```js
let marks = 85;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
```

---

## 📝 4. switch Statement
Checks multiple values of a variable.

```js
let day = 2;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Other day");
}
```

---

## 📝 5. Ternary Operator (Shorthand if...else)
```js
let num = 10;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result); // "Even"
```

---

## 🔥 Summary of Conditional Statements
- `if` → runs block if condition is true.  
- `if...else` → runs one block if true, another if false.  
- `if...else if...else` → multiple conditions.  
- `switch` → multiple case matching.  
- `? :` (ternary) → shorthand conditional.

---

✨ These notes now cover **JavaScript Operators** and **Conditional Statements** clearly with examples.
