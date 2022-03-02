var memberArray = ['algoroot', 'algosqure', 'leezche'];
// group에서 groupEnd까지 묶어서 들여쓰기 해준다. 
console.group('array loop');
var i = 0;
while(i< memberArray.length){
    console.log(i, memberArray[i]);
    i = i + 1
}
console.groupEnd('array loop');


var memberObject = {
    manager:'algoroot',
    developer:'algosqure',
    designer:'leezche'
}

console.group('object loop');
for(var name in memberObject){
    console.log(name, memberObject[name]);
}
console.groupEnd('object loop');

// 객체에도 for을 쓴다. for(var 객체가 반복적으로 싫행될때마다 그 순번에 해당하는 이름. 주입될 변수 in 객체)






