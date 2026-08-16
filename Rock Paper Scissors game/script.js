
const rock = document.getElementById(`Rock`);
const paper = document.getElementById(`Paper`);
const scissors = document.getElementById(`Scissors`);
const Startbtn = document.getElementById(`Start-btn`);
let Result = document.getElementById(`result`);
let Useranswer = 0;
let Botanswer = 0;
let score = 0;

let counter = document.getElementById(`counter`);
let count = 3;
rock.onclick = function(){
    Useranswer = 1;
    paper.style.display = 'none';
    scissors.style.display = 'none';
}
paper.onclick = function(){
    Useranswer = 2;
    rock.style.display = 'none';
    scissors.style.display = 'none';
}
scissors.onclick = function(){
    Useranswer = 3;
    rock.style.display = 'none';
    paper.style.display = 'none';
}

Startbtn.onclick = function(){
    const timer = setInterval(() => {
        counter.textContent = count;

        if(count == 0){
            clearInterval(timer);
            counter.textContent = "Go!";
        }
        if(count < 0){
            count = 3;
        }
        count--;
    }, 10);

    Botanswer = Math.floor(Math.random()* 3) +1;
    console.log(Botanswer);
    console.log(Useranswer);

    if(Useranswer === Botanswer){
        Result.style.color = "Grey";
        Result.textContent = `Its a tie, Try again`;
        Startbtn.textContent = `Try again`;
        setTimeout(() => {
            location.reload();
        }, 2000);
    }else if(Useranswer == 1 && Botanswer == 3){
        Result.style.color = "Green";
        Result.textContent = `You won this round, Bot picked ✌️`;
        Startbtn.textContent = `Go again`;
        score++;
        setTimeout(() => {
            location.reload();
        }, 2000);
    }else if(Useranswer == 2 && Botanswer == 3){
        Result.style.color = "Red";
        Result.textContent = `You lost this round, Bot picked ✌️`;
        Startbtn.textContent = `Go again`;
        score--;
        setTimeout(() => {
            location.reload();
        }, 2000);
    }else if(Useranswer == 3 && Botanswer == 1){
        Result.style.color = "Red";
        Result.textContent = `You lost this round, Bot picked 👊`;
        Startbtn.textContent = `Go again`;
        score--;
        setTimeout(() => {
            location.reload();
        }, 2000);
    }else if(Useranswer == 3 && Botanswer == 2){
        Result.style.color = "Green";
        Result.textContent = `You won this round, Bot picked ✋`;
        Startbtn.textContent = `Go again`;
        score++;
        setTimeout(() => {
            location.reload();
        }, 2000);
    }else if(Useranswer == 1 && Botanswer == 2){
        Result.style.color = "Grey";
        Result.textContent = `You lost this round, Bot picked ✋`;
        Startbtn.textContent = `Go again`;
        score--;
        setTimeout(() => {
            location.reload();
        }, 2000);
    }else if(Useranswer == 2 && Botanswer == 1){
        Result.style.color = "Green";
        Result.textContent = `You won this round. Bot picked 👊`;
        Startbtn.textContent = `Go again`;
        score++;
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
}
