function calc() {
    const numberOne = document.getElementById('num1').value;
    const numberTwo = document.getElementById('num2').value;

    const result = Number(numberOne) + Number(numberTwo);
    document.getElementById('sum').value = result;


}
