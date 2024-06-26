JavaScript-ում ֆունկցիաները կարող են սահմանվել երկու հիմնական ձևով՝ Function Declaration և Function Expression։

### Function Declaration

Function Declaration'ը սահմանում է նշված անունով ֆունկցիա: Այս տեսակի ֆունկցիան բարձրացվում է, այսինքն՝ այն կարելի է կանչել նախքան կոդում սահմանված լինելը:

```javascript
function greet() {
 console.log ("Hello World");
}

greet(); // Արդյունք. Hello World
```

### Function Expression

Ֆունկցիայի արտահայտությունը functionը սահմանում է որպես ավելի մեծ արտահայտության մաս՝ սովորաբար այն վերագրելով փոփոխականին: function expression'ները կարող են անվանվել կամ անանուն լինել։ ինչը նշանակում է, որ դրանք չեն կարող կանչվել նախքան դրանք սահմանելը:

```javascript
const greet = function() {
 console.log ("Hello World");
};

greet(); // Hello World
```

### Տարբերություններ

1. **Բարձրացում**:
   
   - **Function Declaration** բարձրացված են, ուստի դրանք կարող են օգտագործվել նախքան կոդում դրանց սահմանումը:
   - **Function Expression** թեև բարձրացվում են, սակայն դրանք չեն կարող օգտագործվել նախքան դրանք սահմանելը:

2. **Անվանում**:
   
   - **Function Declaration** պետք է ունենան անուն:
   - **Function Expression** կարող են լինել անանուն(առանց անվան) կամ անվանակոչված:

3. **Օգտագործում**:
   
   - **Function Declaration** ինքնուրույն կառուցվածքներ են:
   - **Function Expression** հաճախ օգտագործվում են որպես վերագրման կամ այլ արտահայտության մաս:

https://learn.javascript.ru/function-basics

https://learn.javascript.ru/advanced-functions
