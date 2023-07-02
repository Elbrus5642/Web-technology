const temp1 = Number.parseFloat(prompt(`Input temperature(Celsius):`));
const temp2 = ((9 / 5) * temp1 + 32).toFixed(2);
//var twoPlacedFloat = parseFloat(yourString).toFixed(2)
alert(`Celsius = ${temp1},Fahrenheit =${temp2}`);