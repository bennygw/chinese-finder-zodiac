function checkZodiac() {
    const year = document.getElementById('yearInput').value;
    const resultDiv = document.getElementById('result');
    const zodiacName = document.getElementById('zodiacName');

    if (!year) {
        alert("Please enter a valid year!");
        return;
    }

    const animals = [
        'Monkey 🐒', 'Rooster 🐓', 'Dog 🐕', 'Pig 🐖', 
        'Rat 🐀', 'Ox 🐂', 'Tiger 🐅', 'Rabbit 🐇', 
        'Dragon 🐉', 'Snake 🐍', 'Horse 🐎', 'Sheep 🐑'
    ];

    const remainder = year % 12;
    const result = animals[remainder];

    zodiacName.innerText = `Your Zodiac is ${result}`;
    resultDiv.classList.remove('hidden');
}