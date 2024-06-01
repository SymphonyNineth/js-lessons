### JavaScript Constructor Functions

JavaScript-ում կոնստրուկտոր ֆունկցիան օգտագործվում է օբյեկտների օրինակներ(`instance`) ստեղծելու համար: Երբ ֆունկցիան նախատեսվում է օգտագործել որպես կոնստրուկտոր, այն սովորաբար կոչվում է մեծատառով(Օրինակ User): «Նոր» հիմնաբառը օգտագործվում է կոնստրուկտոր ֆունկցիայից օբյեկտի նոր օրինակ ստեղծելու համար:

Օրինակ:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Alice", 30);
console.log(person1.name); // Outputs: Alice
```

Այս օրինակում «Person»-ը կոնստրուկտոր ֆունկցիա է: Օգտագործելով «new Person('Alice', 30)»-ը` ստեղծում է նոր օբյեկտ` «name» և «age» հատկություններով:

### `this`

JavaScript-ում `this`-ը վերաբերում է այն կոնտեքստին, որում կանչվում է ֆունկցիան: Կոնստրուկտոր ֆունկցիայի շրջանակներում `this`-ը վերաբերում է ստեղծվող նոր օբյեկտի

Օրինակ:

```javascript
function Car(maker, model) {
  this.maker = maker;
  this.model = model;
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.make); // Outputs: Toyota
```

Այստեղ `this.make`-ը վերաբերում է նոր `myCar` օբյեկտի `make` հատկությանը(`property`):

### Prototype

JavaScript-ի յուրաքանչյուր ֆունկցիա կարող է ունենալ `prototype` հատկություն, որը օբյեկտ է: Երբ դուք ստեղծում եք օբյեկտ՝ օգտագործելով կոնստրուկտոր ֆունկցիա, այդ օբյեկտի ներքին «[[Prototype]]» (հասանելի է `__proto__ ` կամ `Object.getPrototypeOf` մեթոդով) սահմանվում է կոնստրուկտորի `prototype` օբյեկտը: Սա թույլ է տալիս այդ կոնստրուկտորի միջոցով ստեղծված բոլոր օբյեկտներին կիսվել նախատիպի վրա սահմանված հատկություններով(`property`) և մեթոդներով(`method`):

Example:

```javascript
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  console.log(`${this.type} makes a sound.`);
};

const dog = new Animal("Dog");
dog.speak(); // Outputs: Dog makes a sound.
```

Այս օրինակում `speak` մեթոդը սահմանված է `Animal.prototype`-ում, ուստի `Animal`-ի բոլոր օրինակները(`instance`) կարող են օգտագործել այս մեթոդը:

### Ամփոփում

- **Constructor Functions**: Oգտագործվում է հատուկ կառուցվածքով և հատկություններով նոր օբյեկտներ ստեղծելու համար:
- **`this`**: Վերաբերում է կոնստրուկտորի ֆունկցիայի շրջանակներում գտնվող օբյեկտի ընթացիկ օրինակին:
- **Prototype**: Օբյեկտ, որից այլ օբյեկտները ժառանգում են հատկություններ և մեթոդներ, ինչը թույլ է տալիս ստեղծել օբյեկտներ նույն պրոտոտիպով

https://learn.javascript.ru/object-methods

https://learn.javascript.ru/constructor-new
