# 📘 JavaScript Notes

## 🖨️ Printing / Output
```js
console.log("Hello World!!"); // Printing/Output
// single and double quote are same
```

---

## 🗂️ Variables
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

## 📝 Assignment Operator
```js
a = b; // put value of right side into left side
```

---

## 🏷️ var, let & const

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

## 📦 Scope
- **var** → global scope (accessible anywhere).  
- **let / const** → block scope (only inside `{}`).  

```js
{
    let f = 10;
}
console.log(f); // ❌ Error → block scope
```

---

## 🧩 Data Types

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

## 🔢 BigInt and Symbol
```js
j = BigInt('112334');
console.log(j); // 112334n

j = Symbol('dfgdfg');
console.log(j); // Symbol(dfgdfg)
```

---

## 🧑‍🎓 Objects
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

✨ These notes summarize the **JavaScript basics** from your original notes only — formatted neatly for GitHub.
