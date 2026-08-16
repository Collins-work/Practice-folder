const input = document.getElementById(`Input`);
const ctf = document.getElementById(`CtF`);
const ftc = document.getElementById(`FtC`);
const submitbtn = document.getElementById(`Submitbtn`);
const result = document.getElementById(`Result`);

function Conversion(number){
    if(ctf.checked){
        return (number* 1.8) + 32;
    }else if(ftc.checked){
        return (number - 32)* 5/9
    }else{
        result.textContent = `Select a Unit`;
    }
}

submitbtn.onclick = function(){
    let answer = Conversion(input.value);
    result.textContent = `Your answer is ${answer}`;
}