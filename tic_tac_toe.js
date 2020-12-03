const play_now_=document.querySelector(".play ");
const cells_=document.querySelectorAll(".cell");
const mess_=document.querySelector(".messege");
const grid_=document.querySelector(".grid");
const winner_=document.querySelector(".messege > .winner");
const res_=document.querySelector(".messege > .res");

let turn=true;
let draw=false;
let end=false;


play_now_.addEventListener("click",()=>{

    grid_.style.visibility="visible";
    grid_.style.marginTop="-20px";
    play_now_.style.visibility="hidden";
    end=false;
    turn=true;
    for( i=0;i<cells_.length;i++){
    cells_[i].style.cursor="pointer";
    cells_[i].style.backgroundImage="";
    }

    for(i=0;i<cells_.length;i++){
        cells_[i].classList.remove('x');
        cells_[i].classList.remove('o');
    }

    winner_.innerHTML="";

});

res_.addEventListener("click",()=>{
    play_now_.innerHTML="New Game";
    mess_.classList.remove("out");
    mess_.classList.remove("celebration");
    end=false;
    turn=true;
    for( i=0;i<cells_.length;i++){
    cells_[i].style.cursor="pointer";
    cells_[i].style.backgroundImage="";
    }

    for(i=0;i<cells_.length;i++){
        cells_[i].classList.remove('x');
        cells_[i].classList.remove('o');
    }

    winner_.innerHTML="";

});

for (i=0;i<cells_.length;i++){

    if(end) break;
    cells_[i].addEventListener("click",(x)=>{   
        if(end)  return;
        if(x.target.classList[1]=='x'||x.target.classList[1]=='o'){
            return;
        }
        if(turn){
            x.target.classList.add('x');
        }
        else{
            x.target.classList.add('o');
        }

        let win=winner();

        if(win=='x'|| win=='o'||win=='d'){

            end=true;
            for (i=0;i<cells_.length;i++) cells_[i].style.cursor="default";

            if(win=='x') {
                winner_.innerHTML="Player 1 Wins";
                
            }
            else if(win=='o') {
                winner_.innerHTML="Player 2 wins";
            }
            else{
                winner_.innerHTML="Draw";
            }
            play_now_.innerHTML="New Game";
            mess_.classList.add('out');
            if(win=='x'||win=='o') { 
               mess_.classList.add('celebration');
            }
            winner_.style.margin="20px";
            return;
        }
        turn=!turn;

    });
}

function winner()
{
    let one=cells_[0].classList[1];
    let two=cells_[1].classList[1];
    let three=cells_[2].classList[1];
    let four=cells_[3].classList[1];
    let five=cells_[4].classList[1];
    let six=cells_[5].classList[1];
    let seven=cells_[6].classList[1];
    let eight=cells_[7].classList[1];
    let nine=cells_[8].classList[1];

    let arr=[   [one,two,three],
                [four,five,six],
                [seven,eight,nine],
                [one,four,seven],
                [two,five,eight],
                [three,six,nine],
                [one,five,nine],
                [three,five,seven]
            ];

    let alter=[ [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
           ];

    for(i=0;i<arr.length;i++){
        if(arr[i][0]&&arr[i][0]==arr[i][1]&&arr[i][0]==arr[i][2]) {
            cells_[alter[i][0]].style.backgroundImage="linear-gradient(rgb(196, 86, 190),rgb(106, 106, 209))";
            cells_[alter[i][1]].style.backgroundImage="linear-gradient(rgb(196, 86, 190),rgb(106, 106, 209))";
            cells_[alter[i][2]].style.backgroundImage="linear-gradient(rgb(196, 86, 190),rgb(106, 106, 209))";
            if(arr[i][0]=='x') return 'x';
            else return 'o';
        }
    }
    if(one&&two&&three&&four&&five&&six&&seven&&eight&&nine) return 'd';

     return 'r';
}
