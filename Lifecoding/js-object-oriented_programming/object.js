var memberArray = ['algoroot', 'algosqure', 'leezhce'];
console.log("memberArray[2]", memberArray[2]);

var memberObject = {
    manager:'algoroot',
    developer:'algosqure',
    designer:'leezhce'
}

// 수정 : 위처럼 객체에 저장된 원소의 값을 업데이트 할 수 있다. 
memberObject.designer = 'leezche'; 

// 배열에서는 배열에있는 값에 접근할 때 []를 쓰지만, 객체에서는 .과 []둘다 쓸 수 있다.
// 배열은 .을 통해 접근을 못한다. 
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);

// 삭제: 
delete memberObject.manager
console.log('after delete memberObject.manager', memberObject.manager)


// 객체
// 1. 이름이 있는 정보를 정리정돈할 때 쓰는 도구
// 2. 객체에 있는 값을 읽을 때는 . 이나 []를 통해 읽을 수 있다. 
// 3. 값을 업데이트하거나 삭제할 수 있다. 




