`Arrow functions` JavaScript-ում ապահովում են գործառույթներ գրելու հակիրճ շարահյուսություն: Նրանք ունեն մի քանի հիմնական բնութագրեր, որոնք դրանք տարբերում են `function expression` և `function declaration`ից.

1. **Ավելի կարճ Syntax**: `Arrow function`ները օգտագործում են ավելի կարճ սինտանքս՝ դարձնելով կոդը ավելի հակիրճ և հեշտ ընթերցվող:

2. **Lexical `this` Binding**: Ի տարբերություն  սովորական ֆունկցիաների, սլաքների գործառույթները չունեն իրենց `this` համատեքստը: Փոխարենը, նրանք `this` ժառանգում են կատարման կոնտեքստից (այսինքն՝ այն տեսանելիության տիրույթից, որտեղ դրանք սահմանված են): Սա հատկապես օգտակար է `callBack`երի և մեթոդների դեպքում, որտեղ ճիշտ `this` կոնտեքստի պահպանումը կարող է դժվար լինել:

3. **Անուղղակի վերադարձ**: Մի արտահայտություն վերադարձնող `arrow function`նները անուղղակիորեն վերադարձնում են արտահայտության արդյունքը՝ առանց `return` գրելու անհրաժեշտության եթե ֆունկցիայի բլոկ չի բացվում:
   Օրինակ: `const sum = (a, b) => a + b`

4. **Բացակայում է `arguments` օբյեկտը**: `Arrow function`նները չունեն իրենց `arguments` օբյեկտը: Եթե ​​անհրաժեշտ է ստանալ անհայտ քանակի արգումենտներ, ապա պետք է օգտագործել [Rest Operator](https://learn.javascript.ru/rest-parameters-spread-operator#ostatochnye-parametry) :

5. **Չեն կարող օգտագործվել որպես `Constructor` ֆունկցիա**: `Arrow function`նները չեն կարող օգտագործվել որպես կոնստրուկտոր ֆունկցիաներ և սխալ կառաջացնեն, եթե օգտագործվեն `new`ի հետ:.

6. **Չունեն `super` հետևաբար չեն կարող օգտագործվել որպես կլասսի `constructor`**: `Arrow function`նները Չունեն `super` հետևաբար չեն կարող օգտագործվել որպես կլասսի `constructor`.
   
   ### Օրինակ
   
   ```javascript
   // Ուղղակի վերադարձ
   const greet = (name) => {
     return `Hello, ${name}!`;
   };
   // Անուղղակի վերադարձ
   const sumTwoNumbers = (a, b) => a + b
   // Rest Operator
   const sum = (...numbers) => numbers.reduce((acc, current) => acc + current, 0
   
   console.log(greet("John")); // Outputs: Hello, John!
   console.log(sum(1, 2, 3)) // Outputs 6:
   console.log(sumTwoNumbers(1, 2)) // Outputs: 3
   ```

https://learn.javascript.ru/arrow-functions-basics

https://learn.javascript.ru/arrow-functions
