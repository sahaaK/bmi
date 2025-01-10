function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // hadi lo geliyo cm waxan u bedelayna meter

    if (isNaN(weight) || isNaN(height) || height === 0) {
        document.getElementById('result').innerHTML = 'Please enter valid values!';
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    document.getElementById('result').innerHTML = `
        Your BMI is <span>${bmi}</span> (<span>${category}</span>)
    `;
}
