const form = document.getElementById('bmiForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const results = document.getElementById('results');

    // Reset results and weight guide colors
    results.innerHTML = '';
    document.querySelector('.under-weight').style.color = '#f5f5f5';
    document.querySelector('.normal-weight').style.color = '#f5f5f5';
    document.querySelector('.over-weight').style.color = '#f5f5f5';

    // Validate inputs
    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please enter a valid height.`;
        results.style.color = '#ff6f61';
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please enter a valid weight.`;
        results.style.color = '#ff6f61';
    } else {
        // Calculate BMI
        const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        results.innerHTML = `Your BMI: <span>${bmi}</span>`;
        results.style.color = '#f5f5f5';

        // Highlight the appropriate weight guide
        if (bmi < 18.6) {
            document.querySelector('.under-weight').style.color = '#ff6f61';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            document.querySelector('.normal-weight').style.color = '#2ecc71';
        } else if (bmi > 24.9) {
            document.querySelector('.over-weight').style.color = '#ff6f61';
        }
    }

    // Clear input fields after calculation
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
});
