// const horizontal = document.querySelector('.horizontal');
// const vertical = document.querySelector('.vertical');

// window.addEventListener('mousemove' , (e) => {
//     const cursorBox = document.querySelector('.cursorBox');
//     cursorBox.style.top = e.clientY + 'px';
//     cursorBox.style.left = e.clientX + 'px';
//     cursorBox.innerHTML = `${e.clientX}, ${e.clientY}`;
// })




const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
const targetRect = target.getBoundingClientRect();
console.log(targetRect);
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;


document.addEventListener( 'mousemove', event => {
    const x = event.clientX;
    const y = event.clientY;
    // console.log(`${x} + ${y}`);

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;
    tag.innerHTML= `${x}, ${y}`;
    // vertical.style.left = `${x}px`;
    // horizontal.style.top = `${y}px`;
    // target.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    // tag.style.left = `${x}px`;
    // tag.style.top = `${y}px`;
    // tag.innerHTML= `${x}, ${y}`;

});