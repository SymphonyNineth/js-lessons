### `Prototype` JavaScript-ում

JavaScript-ում `Prototype`երը հիմնարար հասկացություն են, որը թույլ է տալիս օբյեկտներին ժառանգել հատկություններ և մեթոդներ այլ օբյեկտներից: Յուրաքանչյուր JavaScript օբյեկտ ոնի `Prototype`, որը մեկ այլ օբյեկտ է, որից ժառանգում է հատկությունները:

### `__proto__`, `[[Prototype]]` և `SomeFunction.prototype`

1. **`__proto__`**:
- Սա ``[[Prototype]]`` ներքին սեփականության պատմական հասանելիություն է:

- Այն թույլ է տալիս ուղղակիորեն ստանալ կամ սահմանել օբյեկտի `Prototype`ը:

- **Օրինակ**:

```javascript
let obj = {};

let proto = { greeting: "hello" };

obj.__proto__ = proto;

console.log(obj.greeting); // 'hello
```

2. **``[[Prototype]]``**:
- Սա այն ներքին հատկությունն է, որն  պահպանում է օբյեկտի `Prototype`ը, այն օգտագործվում է `Javascript`ի ինտերպրետատորի կողմից:

- Այն ուղղակիորեն հասանելի չէ կոդով, բայց կարող է օգտագործվելլ՝ `__proto__` կամ `Object.getPrototypeOf` և `Object.setPrototypeOf`:

- **Օրինակ**:

```
let obj = {};
let proto = { greeting: "hello" };
Object.setPrototypeOf(obj, proto);
console.log(Object.getPrototypeOf(obj)); // { greeting: 'hello' }
console.log(obj.greeting); // 'hello'
```

3. **`SomeFunction.prototype`**:
- Սա կոնստրուկտորի ֆունկցիաների `property` է: Երբ դուք ստեղծում եք նոր օբյեկտ՝ օգտագործելով `new`, օբյեկտի `Prototype` է սահմնավում կոնստրուկտորի `Prototype` `property`ն:

- **Օրինակ**:

```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let person = new Person("Alice");
person.greet(); // 'Hello, my name is Alice'
console.log(Object.getPrototypeOf(person) === Person.prototype); // true
```

### Ինչպես է աշխատում `Prototype`ի շղթան

Երբ փորձում եք ստանալ օբյեկտի `property`ն, JavaScript-ը նախ կփնտրի տվյալ օբյեկտի մեջ: Եթե ​​այն չգտնի, այն կփնտրի օբյեկտի `Prototype`ի մեջ, այնուհետև եթե չգտնի կփնտրի `Prototyp`ի `prototype`ի մեջ և այդպես շարունակ, մինչև այն `Prototype`ը լինի `null`։

**Օրինակ**:
   

```javascript
let grandparent = { a: 1 };
let parent = Object.create(grandparent);
parent.b = 2;
let child = Object.create(parent);
child.c = 3;

console.log(child.c); // 3, found on child
console.log(child.b); // 2, found on parent
console.log(child.a); // 1, found on grandparent
console.log(child.d); // undefined, not found in the chain
```

https://learn.javascript.ru/prototypes
