### EVENT LOOP

`Event loop`-ը անվերջ ցիկլ է, որը որոշում է կոդի կատարման հաջորդականությունը (համակարգում է հիշողության տիրույթների աշխատունակության հաջորդականությունը)։

**Բրաուզերում ունենք `javascript engine`, որը իր մեջ ունի հիշողությնան հետևյալ տիրույթները։**:

- `heap`

- `stack`

`Javascript Engine` -ից դուրս ուեննք `web api`, որը մեզ տալիս է բրաուզերը։ Բացի դրանից ունենք նաև `Macrotask Queue` (կամ task queue) և `Micro task Queue`:
Կոդի կատարումը սկսվում է stack-ից։ Stack-ից ասինխռոն կոդի հատվածները գնում են web api ( կամ web workers)։ Էնտեղից setTimeout-ի, setInterval֊ի և event listener֊ների callback-երը գնում են macro task queue, իսկ promise-ի մեթոդների (then, catch, finally) callback-երը գնում են micro task queue: Promise-ի callback-ը սինխռոն է։

Stack-ում գտնվող կոդը կատարվում է առաջինը, ապա կատարվում է micro task queue-ում գտնվող կոդը։ Microtask queue- ի դատարկվելուց հետո event loop-ը կրկին ստուգում է stack-ը, եթե stack-ում նոր կոդ կա, աշախատում է այդ կոդը, եթե ոչ, ապա event loop-ը նայում է կրկին micro task queue-ին։ Եթե թե stack֊ը թե micro task queue֊ն դատարկ են, ապա event loop-ը կատարում է macro task queue-ից մեկ գործողություն, որից հետո նորից ստուգում է stack֊ը, դրանից հետ micro task queue-ն։
