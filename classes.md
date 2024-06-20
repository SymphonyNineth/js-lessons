

# Կլասներ (Classes)

Կլասները (`Classes`) `JavaScript`-ում նախատեսված են օբյեկտների կառուցվածքն ու վարքը սահմանելու համար: Դրանք օգտագործվում են՝ ստեղծելու և կառավարելու օբյեկտների խմբեր, որոնք ունեն նույն հատկություններն ու մեթոդները:

### Կլասների հիմնական հատկությունները

- Կլասի սահմանում: Կլասները սահմանվում են class բանալի բառով:

- Կոնստրուկտոր (`constructor`): Կլասի մեթոդ, որը կանչվում է օբյեկտի ստեղծման ժամանակ՝ նախնական արժեքներ տալու համար:

- Մեթոդներ: Կլասի ներսում սահմանված ֆունկցիաներ, որոնք կարող են կիրառվել կլասի օբյեկտների վրա:

- Ժառանգում (`Inheritance`): Կլասը կարող է ժառանգել մեկ այլ կլասի հատկություններն ու մեթոդները `extends` բանալի բառի միջոցով:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;

    this.age = age;
  }

  greet() {
    console.log(`Բարև, իմ անունը ${this.name} է, և ես ${this.age} տարեկան եմ։`);
  }
}

// Օբյեկտի ստեղծում

const person1 = new Person("Արմեն", 30);

person1.greet(); // Բարև, իմ անունը Արմեն է, և ես 30 տարեկան եմ

```

### Ժառանգման օրինակ

```javascript
class Person {
  constructor(name, age) {
    this.name = name;

    this.age = age;
  }

  greet() {
    console.log(`Բարև, իմ անունը ${this.name} է, և ես ${this.age} տարեկան եմ։`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Կանչում է վերին կլասի կոնստրուկտորը

    this.grade = grade;
  }

  study() {
    console.log(`${this.name} սովորում է ${this.grade} դասարանում։`);
  }
}

// Օբյեկտի ստեղծում

const student1 = new Student("Անահիտ", 20, "վերջին");

student1.greet(); // Բարև, իմ անունը Անահիտ է, և ես 20 տարեկան եմ։

student1.study(); // Անահիտ սովորում է վերջին դասարանում։

```

### Կլասների հիմնական բաղադրիչները

1. Կոնստրուկտոր (`constructor`): Ֆունկցիա, որը կանչվում է օբյեկտի ստեղծման ժամանակ՝ նախնական արժեքներ տալու համար:

2. Մեթոդներ: Կլասի ներսում սահմանված ֆունկցիաներ, որոնք կիրառվում են կլասի օբյեկտների վրա:

3. Հատկություններ: Փոփոխականներ, որոնք սահմանվում են կոնստրուկտորում և վերաբերելի են օբյեկտին:

4. Ժառանգում (`Inheritance`): Կլասը կարող է ժառանգել մեկ այլ կլասի հատկություններն ու մեթոդները `extends` բանալի բառի միջոցով:

### Կլասների առավելություններն ու թերությունները

Առավելություններ

- Կոդի կազմակերպում: Կլասները թույլ են տալիս կոդը ավելի կազմակերպված և մոդուլային գրել:

- Վերաօգտագործելիություն: Կլասները հեշտացնում են կոդի վերաօգտագործումը և ընդլայնումը:

- Ապահովություն: Կլասները կարող են ապահովել տվյալների անվտանգությունը և վերահսկումը:

Թերություններ

- Բարդություն: Կարող են ավելացնել բարդություն պարզ ծրագրերում:

- Կատարողականություն: Երբեմն կլասները կարող են ունենալ որոշակի կատարողականության խնդիրներ:

### Եզրակացություն

Կլասները `JavaScript`-ում կարևոր գործիք են օբյեկտների և տվյալների կառավարման համար: Դրանք թույլ են տալիս ստեղծել կազմակերպված, վերաօգտագործվող և ընդլայնվող կոդ, ինչը հատկապես կարևոր է մեծ նախագծերում: Կլասների օգտագործումը հեշտացնում է ծրագրավորողի աշխատանքը և ապահովում կոդի կարդացվողությունն ու մոդուլայնությունը: