// ----- get information for Html --------
let loginSignUp = document.querySelector('.loginSignUp');
let container = document.querySelector('.container');
let body = document.querySelector('body');
let GoTo = false;
let goTomain = true;
let takePhoto = false;
//  buttons ti show or hide a password when user write it
let buttons = document.querySelectorAll('.showorhide');
    // add class clearnone to clear 'display : none;'
    loginSignUp.classList.add('clearnone');
    setTimeout(()=>{ // add class 'trasnslate' to add animation
        loginSignUp.classList.add('translate');
    },1);
    // add class intro
    // when send page after this page add class 'Goto' to this page
    if(GoTo){
        loginSignUp.classList.add('Goto');
    };
    // get info form
    let username =document.querySelector('input[type="text"]');
    let numbercard = document.querySelector('input[type="number"]'); 
    let password = document.querySelectorAll('input[type="password"]');
    let email = document.querySelector('input[type="email"]');

document.querySelector('#send').onclick = function(e){
    // e.preventDefault();
    usernamevalid(username);
    numbercardvalid(numbercard)
    emailvalid(email);
    if(password[0].value == '' || password[0].value !== password[1].value ){
        goTomain = false;
        password.forEach((pass)=>{
            pass.parentNode.classList.add('warning');
        setTimeout(()=>{
            pass.parentNode.classList.remove('warning');
        },2000);
        });
    }
    if(goTomain){
        // send information to server if variable main is true
    } else{
        goTomain = true;
    }
};
// runs functions 
passwordvalid(password[0]);
// when click at camera go to next page 'upload'
document.querySelector('.takePhoto').onclick = function(){
    document.querySelector('.imgUser a').click(); 
}
// this condition is correct when user he dont take any photo
if(!takePhoto){
    username.addEventListener('keyup',()=>{
        if(/[a-zA-Z]{1}/i.test(username.value)){
            changeBackground();
        }
        if(username.value.length === 0){
            document.querySelector('letter').innerText = '';
            document.querySelector('letter').parentNode.style.backgroundColor = '#f2f2f2'
        }
    });
}
password[1].onfocus = function(){
        checkof(this,password[0].value);
        buttons[0].classList.remove('block');
        buttons[1].classList.add('block');
}
password[0].onfocus = function(){
        checkof(this,password[1].value);
        buttons[1].classList.remove('block');
        buttons[0].classList.add('block');
}
// create function to checkof confirm password to confirm about password entred by user
// my english is bad 'hhhh' i'm sorry but your developer your smart you know what I says
function checkof(inputps,lastps){
    // ps === password okay
        inputps.addEventListener('keyup',()=>{
            if(inputps.value === lastps && inputps.value !== '' && lastps !== ''){
                // change border color to green and show img 'check' by adding class 'checking'
                password[1].style = `border-color:#1bec1b;`;
                document.querySelector('#checkicon').classList.add('checking');
            }else{
                // rest last border color 
                password[1].style = `border: 1px solid #00000057;`;
                document.querySelector('#checkicon').classList.remove('checking');
            }
    });
}
// create function getColor
function getcolor(l){
    let arrletters = [];
    l = l.toUpperCase();
    // fuling arr of letters
    for(let i =65;i<=90;i++){
        arrletters.push(String.fromCharCode(i));
    }
    return `${arrcolors[arrletters.indexOf(l)]}`
}
// block code to set background at photo div when user it does not have an img
// function changeBackground
let arrcolors = ['2DCBCB', '712591', '7C83D4', 'E9F45F',
                 '3A2F16', 'DE6687', '21D46D', 'A28D41',
                  'C959D5', 'CA65C7', 'C918EC', '88C143',
                   '2277FE', 'FF57D9', '989ED8', '3C2F71',
                    'A47E6F', '45256D', '369275', '4285C1',
                     'F5E8B8', '96FF56', '6B76EE', '676B85',
                      'C149E6', '353AAE'];
function changeBackground(){
    let l = [...username.value];
    l = l[0];
    // set this letter on element 'letter' on HTML 
    document.querySelector('letter').innerText = l;
    document.querySelector('.imgUser').style.backgroundColor = `#${getcolor(l)}`;
}
// check strong password
function rgx(value){
    return /(\w+\W+|\W+\w+)(\w+)?(\W+)?(\w+)?(\W+)?/ig.test(value);
};
// functions that check valid input
function usernamevalid(username){
    // start check input username
if(username.value.length <5){
    username.parentNode.classList.add('warning');
    setTimeout(()=>{
        username.parentNode.classList.remove('warning');
    },2000);
    goTomain = false;
}
else{
            // check of userName
            if(username.value.length<20){
                let rgx = /([a-z]+(\s)?[a-z]+(\s)?([a-z]+)?(\s)?([a-z+]+)?)/ig;
                let valueAftermatch = username.value.match(rgx);
               if(valueAftermatch !==null){
                if(valueAftermatch[0] !==username.value){
                    username.parentNode.classList.add('warning');
                    setTimeout(()=>{
                        username.parentNode.classList.remove('warning');
                    },2000);
                    goTomain = false;
                }
               }
            //    else{
            //     username.parentNode.classList.add('warning');
            //     setTimeout(()=>{
            //         username.parentNode.classList.remove('warning');
            //     },2000);
            //    }
            }else{
                username.parentNode.classList.add('warning');
                setTimeout(()=>{
                    username.parentNode.classList.remove('warning');
                },2000);
                goTomain = false;
            };
}
}
function numbercardvalid(nbrcard){
        if(!(nbrcard.value.length ===12 && /\d{12}/ig.test(nbrcard.value))){
            nbrcard.parentNode.classList.add('warning');
            setTimeout(()=>{
                nbrcard.parentNode.classList.remove('warning');
            },2000);
            goTomain = false;
}
}
function passwordvalid(password){
    // strat check password
            password.addEventListener('keyup',()=>{
                if(password.value.length <=4){
                    document.querySelector(`.loginSignUp .scurity`).style = `display:block;color:red;`
                    password.style = `border-color: red;`
                    document.querySelector(`.loginSignUp .scurity`).innerText = 'easy';
                }
                if(password.value.length >4 && password.value.length <=8){
                    document.querySelector(`.loginSignUp .scurity`).style = `display:block;color:#fb7612;`
                    document.querySelector(`.loginSignUp .scurity`).innerText = 'Medium';
                    password.style = `border-color: #fb7612;`
                }
                if(password.value.length >8 ){
                    document.querySelector(`.loginSignUp .scurity`).style = `display:block;color:rgb(108 202 240);`
                    document.querySelector(`.loginSignUp .scurity`).innerText = 'normal';
                    password.style = `border-color:rgb(108 202 240);`
                }
                if(password.value.length >12 && rgx(password.value)){
                    document.querySelector(`.loginSignUp .scurity`).style = `display:block;color:#1bec1b;`
                    document.querySelector(`.loginSignUp .scurity`).innerText = 'strong';
                    password.style = `border-color:#1bec1b;`
                }
                if(password.value == ''){
                    document.querySelector(`.loginSignUp .scurity`).style = 'display:none;'
                    password.style = `border-color:#00000057;`
    };
    });

}
function emailvalid(email){
    //   check email valid
    if(!/\w+(\W+)?(\w+)?(\W+)?(\w+)?(\W+)?(\w+)?(\W+)?(\w+)?@\w+.\w+/ig.test(email.value)){
        email.parentNode.classList.add('warning');
        setTimeout(()=>{
            email.parentNode.classList.remove('warning');
        },2000);
        goTomain = false;
      }
}
buttons.forEach((btn)=>{
        btn.onclick = function(e){
            e.preventDefault();
            let input = document.querySelector(`.${btn.parentNode.classList} input`);
            btn.classList.toggle('show');
            if(btn.classList.contains('show')){
                input.setAttribute('type','text');
            }else{
                input.setAttribute('type','password');
            }
        }
    });
// export this function to next page 