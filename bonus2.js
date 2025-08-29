let bankIshKuni = Number(prompt("ish kunini kiriting: "))
function bankOchiqKun(num) {
    let today = new Date();
    today.setDate(today.getDate() + num);
    return `${today.getMonth() + 1}.${today.getDate()}.${today.getFullYear()}`;
}
console.log(bankOchiqKun(bankIshKuni));