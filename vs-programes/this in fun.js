let details = {
    name: 'naveen',
    dist: 'guntur',
    state: 'ap',

    fullname() {
        console.log('${this.dist},${this.name}');
    }


}
// // example-2------------>

// let hen = {
//     name: 'helen',
//     eggcount: 0,
//     display: "EGG",
//     layegg() {
//         for (let i = 0; i >= 1; i++) {
//             console.log(this.display)
//         }
//     }
// }