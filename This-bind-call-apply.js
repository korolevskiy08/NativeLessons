// this - ссылка на текущий обект, которая определяется в момент выполнения функций


// this, call, bind, apply, function constructor

// ! 'use strict' this => object

// 1 global context
// 2 this внутри функций (function, arrow function, object methods)
// 3 .bind .call .apply
// 4 function constructor

// ================================ 1 Global object ==============

//console.log(this === window)

// this.a = 'a'

//console.log(window.a)

// ================================= 2 FUNCTIONS ==================
// смотрим на то, кто вызывает функцию тот и будет this. Если ничего нет, то не в 'use strict' => undefined => window. Если в 'use strict' => undefined

// decloration
// const alex = {
//     name: 'Alex',
//     showName() {
//         console.log(this.name)
//     }
// }

// const hanna = {
//     name: 'Hanna',
//     showName: alex.showName // ссылка на функцию из alex.showName
// }

// function foo() {
//     return console.log(this)
// }

//alex.showName()  // this => alex (смотрим кто вызывает функцию слева от точки)
//hanna.showName() // this => hanna (слева от точки вызывает obj. hanna)

// const showName = alex.showName()
// console.log(showName(this))  // this = undefined ===> window (так как слева нету ничего, то undefined который движком превращается в window)

//foo() // this === undefined ===> window (так как не 'use strict')

// expression
// стрелки всегда ищут контекст во внешнем скоупе

// const foo = () => {
//     console.log(name)
// }

//foo() // this === window

// const user = {
//     name: 'Alex',
//     age: 23,
//     showName: () => {
//         (() => {
//             console.log(this.name) // this === window так как нет this нет в showName стрелка выпрыгнет в глобальный обьект
//         })()
//     },
//     showAge() {
//         (() => {
//             console.log(this.age) // 23
//         })()
//     }
// }

//user.showName() // this === undefined === window
//user.showAge() // this === 23

// ========================== .bind .call .apply ===================================

// const alex = {
//     name: 'Alex',
//     showName() {
//         console.log(this.name)
//     }
// }
//
// const hanna = {
//     name: 'Hanna',
//     showName() {
//         console.log(this.name)
//     }
// }

// function foo(a, b, c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(this)
// }

//foo.call(alex, 1, 2, 3) // метод call вызывает функцию с УКАЗАННЫМ this которым мы хотим

//foo.apply(hanna, [1, 2, 3]) // метод apple вызывает функцию с УКАЗАННЫМ this которым мы хотим, но аргументы передаем в массиве

//foo.bind(hanna, 1, 2, 3)() // метод bind создает обертку с указанным контекстом, но не вызываем функцию
// возвращает новую функцию с привзяным контекстом

//setTimeout(alex.showName.bind(alex), 1000) // чтобы не потерять this в коллбеках мы можем привязать его методом .bind

// ===================================== CONSTRUCTOR ============================
// constructor всегда новый обьект
// внутри конструктора мы не можем изменить контекст

// function User(name) {
//     this.name = name
// }
//
// const alex = new User('Alex')
// const hanna = new User('Hanna')






































