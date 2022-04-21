// let numbers = [20, 30, 820, 987, 54]

// let cost = numbers.reduce((total, num) => {
//     return total = total * num;

// })


// let minprice = numbers.reduce((min, price) => {
//     if (price < min) {
//         return price;
//     }
//     return min;
// })


let numbers = [20, 30, 820, 987, 54]

let collect = numbers.reduce((sum, num) => {
    return sum + num;
}, 100)