
// var Kim = {
//     name:'Kim',
//     first:10,
//     second:20,
//     sum:function(f, s){
//         return f+s;
//     }
// }
// console.log("Kim.sum(Kim.first, Kim.second)", Kim.sum(Kim.first, Kim.second));
// 객체를 바꿀 때 다 바꿔야된다. 불편하다. 




// 어떤 Method (함수)가 있으면, Method가 자신이 속해있는 객체를 가리키는 특수한 키워드를 만들기로 약속한다. = this
var Kim = {
    name:'Kim',
    first:10,
    second:20,
    sum:function(){
        return this.first+this.second;
    }
}
// console.log("Kim.sum(Kim.first, Kim.second)", Kim.sum(Kim.first, Kim.second));
console.log("()", Kim.sum());
