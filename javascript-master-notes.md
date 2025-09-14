# 📘 JavaScript Notes (Complete)

---

# 🖨️ Printing / Output
```js
console.log("Hello World!!"); // Printing/Output
// single and double quote are same
```

---

# 🗂️ Variables
- **Containers of data** → data can be changed  
- Make variable names meaningful  

```js
age = 24;          // number
fullname = "Tony Stark"; // string
console.log(fullname);

price = 99.30;     // float

x = null;          // ❌ no value
y = undefined;     // 🤷 value not known
z = true;          // ✅ boolean (true / false)
```

### 🔄 Dynamically Typed Language
JavaScript does not require specifying the datatype of variables.

```js
p = 100;
console.log(p); // 100
p = "Dynamic";
console.log(p); // Dynamic
```

---

# 📝 Assignment Operator
```js
a = b; // put value of right side into left side
```

---

# 🏷️ var, let & const

| Keyword | Redeclare ♻️ | Update ✏️ | Scope 🌍 |
|---------|--------------|-----------|----------|
| `var`   | ✅ Allowed   | ✅ Allowed| Global scope |
| `let`   | ❌ Not allowed| ✅ Allowed| Block `{}` |
| `const` | ❌ Not allowed| ❌ Not allowed| Block `{}` |

### Examples

```js
// var
var a = 10;
var a = 30; // ✅ redeclaring allowed

// let
let fullName = "Tony Stark";
fullName = "Hello"; // ✅ updating
// let fullName = "Tony Stark"; // ❌ redeclaring not allowed

// const
const q = 10; // ❌ cannot redeclare or update
```

---

# 📦 Scope
- **var** → global scope (accessible anywhere).  
- **let / const** → block scope (only inside `{}`).  

```js
{
    let f = 10;
}
console.log(f); // ❌ Error → block scope
```

---

# 🧩 Data Types

### Two Types:
1. **Primitive** → `number`, `string`, `boolean`, `undefined`, `null`, `BigInt`, `symbol`  
2. **Non-Primitive** → Objects (Arrays, Functions)

### Examples
```js
let g = 10;
console.log(typeof(g)); // number

let h = null;
console.log(typeof(h)); // object (primitive but special case)
```

---

# 🔢 BigInt and Symbol
```js
j = BigInt('112334');
console.log(j); // 112334n

j = Symbol('dfgdfg');
console.log(j); // Symbol(dfgdfg)
```

---

# 🧑‍🎓 Objects
Objects are collections of **key:value pairs**.

```js
const student = {
    fullName2: "Parth Kansal",
    age : 19,
    cgpa: 7.9,
    isPass: false
};

console.log(student);
```

### 🔍 Accessing Object Values
```js
console.log(student.fullName2);    // Method 1 ✅
console.log(student['fullName2']); // Method 2 ✅
```

### ✏️ Updating Values
```js
student['age'] = student['age'] + 20;
console.log(student['age']); // 39
```

---

# ⚡ JavaScript Operators

In JavaScript, **operators** are special symbols used to perform operations on values and variables.  

---

## 🔢 Arithmetic Operators
| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `+`      | Addition    | `5 + 2` | `7` |
| `-`      | Subtraction | `5 - 2` | `3` |
| `*`      | Multiplication | `5 * 2` | `10` |
| `/`      | Division    | `10 / 2` | `5` |
| `%`      | Modulus     | `10 % 3` | `1` |
| `**`     | Exponent    | `2 ** 3` | `8` |
| `++`     | Increment   | `let a=5; a++` | `6` |
| `--`     | Decrement   | `let a=5; a--` | `4` |

---

## 🧮 Assignment Operators
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

## ⚖️ Comparison Operators
| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `==`     | Equal (loose) | `5 == "5"` | `true` |
| `===`    | Strict equal | `5 === "5"` | `false` |
| `!=`     | Not equal    | `5 != "5"` | `false` |
| `!==`    | Strict not equal | `5 !== "5"` | `true` |
| `>`      | Greater than | `10 > 5` | `true` |
| `<`      | Less than    | `10 < 5` | `false` |
| `>=`     | Greater or equal | `5 >= 5` | `true` |
| `<=`     | Less or equal | `3 <= 5` | `true` |

---

## 🧩 Logical Operators
| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `&&` | AND | `(5 > 3 && 10 > 5)` | `true` |
| `\|\|` | OR | `(5 > 10 \|\| 10 > 5)` | `true` |
| `!` | NOT | `!(5 > 3)` | `false` |

---

## 🔀 Bitwise Operators
| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `&`  | AND | `5 & 1` → `1` |
| `\|` | OR  | `5 \| 1` → `5` |
| `^`  | XOR | `5 ^ 1` → `4` |
| `~`  | NOT | `~5` → `-6` |
| `<<` | Left shift | `5 << 1` → `10` |
| `>>` | Right shift | `5 >> 1` → `2` |
| `>>>`| Unsigned right shift | `5 >>> 1` → `2` |

---

## 📝 Ternary Operator
```js
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
```

---

# 🧭 Conditional Statements

## if
```js
if (age >= 18) {
    console.log("You are an adult");
}
```

## if...else
```js
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

## if...else if...else
```js
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
```

## switch
```js
switch(day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    default: console.log("Other day");
}
```

---

# 🔁 Loops in JavaScript

## for Loop
```js
for (let i = 1; i <= 5; i++) {
    console.log("Apna College");
}
```

## while Loop
```js
while (condition) {
    // work
}
```

## do...while Loop
```js
do {
    // work
} while (condition);
```

## for-of Loop
```js
for (let val of strVar) {
    console.log(val);
}
```

## for-in Loop
```js
for (let key in objVar) {
    console.log(key, objVar[key]);
}
```

### Practice Qs
**Q1:** Print all even numbers 0–100  
**Q2:** Guessing game using random number + while loop.

---

# 🎵 Strings in JavaScript

## Creating Strings
```js
let str = "Apna College";
```

## Length & Indices
```js
console.log(str.length);
console.log(str[0]);
```

## Template Literals
```js
let name = "Parth";
console.log(`Hello ${name}`);
```

## String Methods
- `str.toUpperCase()`  
- `str.toLowerCase()`  
- `str.trim()`  
- `str.concat(str2)`  
- `str.replace(search, newVal)`  
- `str.charAt(idx)`  
- `str.slice(start, end?)`  

### Practice Qs
Generate username → `@fullname + length`.  
Example: `"shradhakhapra"` → `"@shradhakhapra13"`

---

✨ This master file covers: **Variables, DataTypes, Objects, Operators, Conditionals, Loops, and Strings**.
