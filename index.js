const form = document.querySelector('form');    

form.addEventListener('submit', function(e){
    e.preventDefault(); // we used it so that after pressing submit button the details should not be send to backend 

    const height = parseInt(document.querySelector('#height').value); // parse int to convert text to int
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height/100)*(height/100))).toFixed(2); 
        results.innerHTML = `<span>${bmi}</span>`;
        if (bmi<18.6){
            const und = document.querySelector('.under-weight');
            und.style.color = 'red';
        } else if (bmi>18.6 && bmi<24.9){
            const normal = document.querySelector('.normal-weight');
            normal.style.color = 'red';
        } else if (bmi>24.9){
            const over = document.querySelector('.over-weight');
            over.style.color = 'red';
        }
    }

});