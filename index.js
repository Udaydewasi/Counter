let content = document.querySelector('#num');
function decrement(){
    let value = parseInt(content.innerText);
    value = value - 1;
    content.innerText = value;
    console.log('decrement work successfully');
};

function increment(){
    let value = parseInt(content.innerText);
    value = value + 1;
    content.innerText = value;
    console.log('increment work successfully');
};
