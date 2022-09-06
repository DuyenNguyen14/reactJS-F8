// /*
//     1. ARROW FUNCTION
// */
// // const logger = function (log) {
// //   console.log(log);
// // };

// // const logger = (log) => {
// //   console.log(log);
// // };

// const logger = (log) => console.log(log);

// logger("Message...");

// // const sum = (a, b) => {
// //   return a + b;
// // };

// // const sum = (a, b) => a + b; // nếu không có cặp dấu {} thì không cần từ khoá return

// const sum = (a, b) => ({ a: b, b: b }); // return trả về 1 object mà không có từ khoá return thì phải gói lại bằng cặp ()

// console.log(sum(2, 1));

// const course = {
//   name: "javascript basic",
//   getName: function () {
//     return this; // context, arrow function không có context => ở đây không dùng arrow function được
//   },
// };

// console.log(course.getName());

// // không thể dùng arrow function để làm function constructor
// const Course = function (name, price) {
//   // constructor function
//   this.name = name;
//   this.price = price;
// };

// const jsCourse = new Course("Javascript", 1000);
// console.log(jsCourse);

// /*
//     2. ENHANCED OBJECT LIERALS
//         - Định nghĩa key: value cho object
//         - Định nghĩa method cho object
//         - Định nghĩa key cho object dưới dạng biến
// */
// // example 1
// var name = "javascript";
// var price = 1000;

// var course_1 = {
//   //   name: name,
//   //   price: price

//   name,
//   price,
//   // getName: function() {}
//   getName() {
//     return this.name;
//   },
// };

// console.log(course_1);

// // example 2
// var fieldName = "name";
// var fieldPrice = "price";

// const course_2 = {
//   [fieldName]: "javascript", // name: "javascript",
//   [fieldPrice]: 1000,
// };

// console.log(course_2);

// // BÀI TẬP: Viết hàm chuyển đổi array thành object sử dụng hàm reduce
// var courses = [
//   {
//     id: 1,
//     name: "javascript",
//     coin: 100,
//   },
//   {
//     id: 2,
//     name: "html, css",
//     coin: 320,
//   },
//   {
//     id: 3,
//     name: "php",
//     coin: 480,
//   },
// ];

// // var totalCoin = 0; // biến lưu trữ

// // // lặp qua các phần tử
// // for (var course_3 of courses) {

// //   // thực hiện lưu trữ
// //   totalCoin += course_3.coin;
// // };

// // console.log(totalCoin);

// // sử dụng reduce
// // hàm nhận vào tham số là một biến lưu trữ

// // Thực hiện việc lưu trữ
// var i = 0;

// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//   i++;

//   var total = accumulator + currentValue.coin;
//   //   console.table({
//   //     "Lượt chạy:": i,
//   //     "Biến lưu trữ:": accumulator,
//   //   });
//   //   console.log(currentValue);

//   console.table({
//     "Lượt chạy:": i,
//     "Biến lưu trữ:": accumulator,
//     "Giá khoá học:": currentValue.coin,
//     "Tích trữ được:": total,
//   });
//   return total;
// }

// // hàm reduce nhận vào 2 đối số: 1 hàm và một giá trị khởi tạo (initial value)
// // khi hàm reduce thực thi sẽ gọi hàm là đối số đầu tiên, truyền giá trị khởi tạo vào làm tham số của hàm
// var totalCoin = courses.reduce(coinHandler, 0);
// console.log(totalCoin);

// function arrToObj(arr) {
//   let obj = arr.reduce((o, [key, value]) => {
//     // o: accumulator, [key,vaue]: currentValue
//     // console.log([key, value]); // ["name", "Son Dang"]
//     o[key] = value;
//     return o;
//   }, {});
//   return obj;
// }

// const obj1 = [
//   ["name", "Son Dang"],
//   ["age", 21],
//   ["address", "Ha Noi"],
// ];
// console.log(arrToObj(obj1));

// /*
//   3. DESTRUCTURING, REST PARAMETER
// */
// var array = ["javascript", "php", "ruby"];
// var courses = {
//   name: "javascript",
//   price: 2000,
//   img: "img-address",
//   children: {
//     name: "reactjs",
//   },
// };

// // destructuring
// var [a, b, c] = array;
// console.log(a, b, c);

// var { name, price } = courses;
// console.log(name, price);

// // lấy ra một thuộc tính của object con trong 1 object
// var {
//   name: parentName,
//   children: { name: childrenName },
// } = courses;

// console.log(parentName, childrenName);

// // lấy ra một value không tồn tại trong object --> dùng destructuring gán giá trị default cho value đó
// var { description = "default description" } = courses;
// console.log(description);

// // rest param
// var [a, ...rest] = array;
// console.log(rest);

// var { name, ...rest } = courses;
// console.log(rest);

// function logger_1(...params) {
//   console.log(params);
// }
// // console.log(logger_1(1, 2, 3, 4, 5, 6, 7, 8)); // [1,2,3,4,5,6,7,8]

// function logger_2({ name, price, ...rest }) {
//   console.log(name);
//   console.log(price);
// }
// logger_2({ name: "javascript", price: 1000, desc: "content" });

// /*
//   4. SPREAD OPERATOR
// */
// var array_2 = ["Javascript", "php", "ruby"];

// function logger_3(...rest) {
//   for (var i = 0; i < rest.length; i++) {
//     console.log(rest[i]);
//   }
// }

// logger_3(...array_2);

/*
  4. MODULES: IMPORTS/EXPORT
*/
import { logger2 } from "./logger/index.js";

// import { TYPE_LOG, TYPE_ERROR, TYPE_WARN } from "./constants.js";
import * as constants from "./constants.js";
console.log(constants);
// console.log(logger_4);
logger2("test message ...", constants.TYPE_ERROR);
