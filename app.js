const result = document.getElementById('result');
const btn = document.getElementById('submit');


const binary = function (e){
    e.preventDefault()
    const num = document.getElementById('number').value;
    if(num === ''){
        alert('please ,write a number')
    }else if(num < 0){
        alert('please, enter a positive number')
    }

    // Converting
    binaryNumber = Number(num).toString(2);
    result.innerHTML = binaryNumber;

    

}

btn.addEventListener('click',binary);

