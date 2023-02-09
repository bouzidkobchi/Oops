// ----- get information for Html --------
import {CreateIconPassword as f} from "../js file/exp.js"
let loginSignUp = document.querySelector('.loginSignUp');
let container = document.querySelector('.container');
let body = document.querySelector('body');
let goTomain = true;
let takePhoto = false;
//  buttons ti show or hide a password when user write it
let svgs = document.querySelectorAll('#eyes');
console.log(svgs);
// add class clearnone to clear 'display : none;'
loginSignUp.classList.add('clearnone');
setTimeout(() => { // add class 'trasnslate' to add animation
    loginSignUp.classList.add('translate');
}, 1);
// add class intro
// get info form
let username = document.querySelector('input[type="text"]');
let numbercard = document.querySelector('input[type="number"]');
let password = document.querySelectorAll('input[type="password"]');
let email = document.querySelector('input[type="email"]');

document.querySelector('#send').onclick = function (e) {
    // e.preventDefault();
    usernamevalid(username);
    numbercardvalid(numbercard)
    emailvalid(email);
    cheakofPasswordAndCnfrmPassrd(password[0], password[1]);
    if (goTomain) {
        // send information to server if variable main is true
    } else {
        goTomain = true;
        e.preventDefault();
    }
};
// runs functions 
passwordvalid(password[0]);
// when click at camera go to next page 'upload'
document.querySelector('.takePhoto').onclick = function () {
    createPagePic();
    setTimeout(() => {
        document.querySelector('.uploadphoto').classList.add('show');
    }, 10);
    loginSignUp.style = `display:none;`
    loginSignUp.classList.remove('translate');
}
// this condition is correct when user he dont take any photo
if (!takePhoto) {
    username.addEventListener('keyup', () => {
        if (/[a-zA-Z]{1}/i.test(username.value) && !document.querySelector('.imgUser img')) {
            changeBackground();
        }
        if (username.value.length === 0) {
            document.querySelector('letter').innerText = '';
            document.querySelector('letter').parentNode.style.backgroundColor = '#f2f2f2'
        }
    });
}
password[1].onfocus = function () {
    checkof(this, password[0].value);
    if(!document.querySelector('.Confpassword .show-hide-psrd')){
    f('Confpassword',this,'loginSignUp');
    }
}
password[0].onfocus = function () {
    checkof(this, password[1].value);
    if(!document.querySelector('.password .show-hide-psrd')){
        f('password',this,'loginSignUp');
        }
}
// create function to checkof confirm password to confirm about password entred by user
// my english is bad 'hhhh' i'm sorry but your developer your smart you know what I says
function checkof(inputps, lastps) {
    // ps === password okay
    inputps.addEventListener('keyup', () => {
        if (inputps.value === lastps && inputps.value !== '' && lastps !== '') {
            // change border color to green and show img 'check' by adding class 'checking'
            password[1].style = `border-color:#1bec1b;`;
            document.querySelector('#checkicon').classList.add('checking');
        } else {
            // rest last border color 
            password[1].style = `border: 1px solid #00000057;`;
            document.querySelector('#checkicon').classList.remove('checking');
        }
    });
}
// create function getColor
function getcolor(l) {
    let arrletters = [];
    l = l.toUpperCase();
    // fuling arr of letters
    for (let i = 65; i <= 90; i++) {
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
function changeBackground() {
    let l = [...username.value];
    l = l[0];
    // set this letter on element 'letter' on HTML 
    document.querySelector('letter').innerText = l;
    document.querySelector('.imgUser').style.backgroundColor = `#${getcolor(l)}`;
}
// check strong password
function rgx(value) {
    return /(\w+\W+|\W+\w+)(\w+)?(\W+)?(\w+)?(\W+)?/ig.test(value);
};
// functions that check valid input
function usernamevalid(username) {
    0
    // start check input username
    if (username.value.length < 5) {
        username.parentNode.classList.add('warning');
        setTimeout(() => {
            username.parentNode.classList.remove('warning');
        }, 2000);
        goTomain = false;
    }
    else {
        // check of userName
        if (username.value.length < 20) {
            let rgx = /([a-z]+(\s)?[a-z]+(\s)?([a-z]+)?(\s)?([a-z+]+)?)/ig;
            let valueAftermatch = username.value.match(rgx);
            if (valueAftermatch !== null) {
                if (valueAftermatch[0] !== username.value) {
                    username.parentNode.classList.add('warning');
                    setTimeout(() => {
                        username.parentNode.classList.remove('warning');
                    }, 2000);
                    goTomain = false;
                }
            }
        } else {
            username.parentNode.classList.add('warning');
            setTimeout(() => {
                username.parentNode.classList.remove('warning');
            }, 2000);
            goTomain = false;
        };
    }
}
function numbercardvalid(nbrcard) {
    if (!(nbrcard.value.length === 12 && /\d{12}/ig.test(nbrcard.value))) {
        nbrcard.parentNode.classList.add('warning');
        setTimeout(() => {
            nbrcard.parentNode.classList.remove('warning');
        }, 2000);
        goTomain = false;
    }
}
function passwordvalid(password) {
    // strat check password
    password.addEventListener('keyup', () => {
        if (password.value.length <= 4) {
            document.querySelector(`.loginSignUp .scurity`).style = `display:block;color:red;`
            password.style = `border-color: red;`
            document.querySelector(`.loginSignUp .scurity`).innerText = 'easy';
        }
        if (password.value.length > 4 && password.value.length <= 8) {
            document.querySelector(`.loginSignUp .scurity`).style = `display:block;color:#fb7612;`
            document.querySelector(`.loginSignUp .scurity`).innerText = 'Medium';
            password.style = `border-color: #fb7612;`
        }
        if (password.value.length > 8) {
            document.querySelector(`.loginSignUp .scurity`).style = `display:block;color:rgb(108 202 240);`
            document.querySelector(`.loginSignUp .scurity`).innerText = 'normal';
            password.style = `border-color:rgb(108 202 240);`
        }
        if (password.value.length > 12 && rgx(password.value)) {
            document.querySelector(`.loginSignUp .scurity`).style = `display:block;color:#1bec1b;`
            document.querySelector(`.loginSignUp .scurity`).innerText = 'strong';
            password.style = `border-color:#1bec1b;`
        }
        if (password.value == '') {
            document.querySelector(`.loginSignUp .scurity`).style = 'display:none;'
            password.style = `border-color:#00000057;`
        };
    });

}
function emailvalid(email) {
    //   check email valid
    if (!/\w+(\W+)?(\w+)?(\W+)?(\w+)?(\W+)?(\w+)?(\W+)?(\w+)?@\w+.\w+/ig.test(email.value)) {
        email.parentNode.classList.add('warning');
        setTimeout(() => {
            email.parentNode.classList.remove('warning');
        }, 2000);
        goTomain = false;
    }
}
// function to cheakof password input value equal confirm password input value 
function cheakofPasswordAndCnfrmPassrd(passwordorigin, confirmpassword) {
    if (passwordorigin.value == '' || passwordorigin.value !== confirmpassword.value) {
        goTomain = false;
        password.forEach((pass) => {
            pass.parentNode.classList.add('warning');
            setTimeout(() => {
                pass.parentNode.classList.remove('warning');
            }, 2000);
        });
    }
}
// // function to create a icon shoa or Hide eyes in input password
// function CreateIconPassword(elementAppend,input){
//     // check if any element has class call 'show-hide-psrd' remove;
//     if(document.querySelector('.show-hide-psrd')){
//         document.querySelector('.show-hide-psrd').remove();
//     }
//     // create icon svg show password when click it
//     let div = document.createElement('div');
//     div.classList = 'show-hide-psrd';
//     div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>';
//     document.querySelector(`.loginSignUp .${elementAppend}`).appendChild(div);
//     document.querySelector('.show-hide-psrd').onclick = ()=>{
//         // remove class 'line' from this div
//        if(document.querySelector('.show-hide-psrd').classList.toggle('line')) 
//        {
//         input.setAttribute('type','text');
//        }else{
//         input.setAttribute('type','password');
//        }
        
//         }
// }

// create function to create page upload in same page
function createPagePic() {
    // create div container
    // let container = document.createElement('div');
    // container.classList = 'container';
    let span = document.createElement('span');
    span.classList = 'title';
    container.appendChild(span);
    let h1 = document.createElement('h1');
    let h1text = document.createTextNode('Welcom!!');
    h1.appendChild(h1text);
    span.appendChild(h1);
    let h2 = document.createElement('h2');
    let h2text = document.createTextNode('take a Photo for your Profile');
    h2.appendChild(h2text);
    span.appendChild(h2);
    ////////////////////////
    let upload = document.createElement('div');
    upload.classList = 'uploadphoto';
    let button = document.createElement('button');
    button.innerText = 'x';
    upload.appendChild(button);
    let imgupload = document.createElement('div');
    imgupload.classList = 'imgupload';
    upload.appendChild(imgupload);
    let img = document.createElement('img');
    img.src = '../all img/imgsignUp/camera.svg';
    let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
    `
    imgupload.innerHTML = svg;
    imgupload.appendChild(img);
    let textupload = document.createElement('div');
    textupload.classList = 'textupload';
    let h1two = document.createElement('h1');
    let h1twotext = document.createTextNode('Darg And Drop');
    h1two.appendChild(h1twotext);
    textupload.appendChild(h1two);
    textupload.appendChild(document.createTextNode('Upload any photo from your Galeary or take a Photo Now'));
    upload.appendChild(textupload);
    ////////// upload and take div
    let uploadtake = document.createElement('div');
    uploadtake.classList = 'uploadandtake';
    let spanupload = document.createElement('span');
    spanupload.id = 'upload';
    spanupload.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z"/></svg>`
    let spantake = document.createElement('span');
    spantake.id = 'take';
    spantake.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 384c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z"></path></svg>`;
    uploadtake.appendChild(spanupload);
    uploadtake.appendChild(spantake);
    upload.appendChild(uploadtake);
    document.querySelector('.container').appendChild(upload);
    SelectorElement();
}
// function selector element 
function SelectorElement() {
    // select buutons
    // button close
    document.querySelector('.uploadphoto button').onclick = function () {
        loginSignUp.style = 'disply:flex;';
        setTimeout(() => {
            loginSignUp.classList.add('translate');
        }, 0)
        document.querySelector('.title').remove();
        document.querySelector('.uploadphoto').remove();

    }
    // button take image by open camera;
    document.querySelector('#take').onclick = function () {
        openWebcam();
    }
}
// function opening camera
function openWebcam() {
    // now create alement of camera in mobile and Desktop with MediaDevices API
    createCamera();
    // function take An Image and show it in div image in page Signup
    setTimeout(()=>{
        document.querySelector('.picture').classList.add('showcamera');
    },0);
    camera({
        video:{
            width:1080,
            height:720,
            // facingMode:'user',
        }
    })
    document.querySelector('#take-pic').onclick = ()=>{
    // switch camera to back camera when using this app in mobile browser
}
document.querySelector('#switch-camera').onclick = ()=>{
    // switch camera to back camera when using this app in mobile browser
    camera({
        video:{
            width:1080,
            height:720,
            facingMode:{exact: 'environment'},
        }
    })
}

}
// function to create Camera
function createCamera() {
    let picture = document.createElement('div');
    picture.classList = 'picture';
    let button = document.createElement('button');
    button.id = 'take-pic';
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 384c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z"></path></svg>`;
    let btnswitch = document.createElement('button');
    btnswitch.id = 'switch-camera';
    btnswitch.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"/></svg>';
    picture.appendChild(button);
    picture.appendChild(btnswitch);
    let video = document.createElement('video');
    video.autoplay = true;
    picture.appendChild(video);
    document.body.appendChild(picture);
}
function CreatePicture() {
    if (document.querySelector('.imgUser img')) {
        document.querySelector('.imgUser img').remove();
    }
    let canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    let img = document.createElement('img');
    img.src = '';
    document.querySelector('.imgUser').appendChild(img);
    console.log(canvas);
    // function onclick
    canvas.getContext('2d').drawImage(document.querySelector('video'), 0, 0, canvas.width, canvas.height);
    let url = canvas.toDataURL('image/jpg');
    document.querySelector('.imgUser img').src = url;
    document.querySelector('.picture').remove();
    loginSignUp.style = 'disply:flex;';
    setTimeout(() => {
        loginSignUp.classList.add('translate');
    }, 0)
    document.querySelector('.title').remove();
    document.querySelector('.uploadphoto').remove();
}
// opnening camera 
async function camera(constraints){
    console.log('error');
    // check of media decvaices support or No
    if(!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices()){
        // create div of explian problem
        console.log('we a problem');
        return;
    }
    // check of constraints supported like 'facingMode' that we need to change between cameras
    
    if(!navigator.mediaDevices.getSupportedConstraints()['facingMode']){
        // create Div Problem 
        console.log('we have an problem like facingMode');
    }
    let stream;
    if(stream){
        stream.getTracks().forEach((track)=>{
            track.stop();
        });


    }
    try{
        console.log(6)
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        console.log(stream);
        document.querySelector('video').srcObject = null;
        document.querySelector('video').srcObject = stream;
    }catch(e){
        console.log(e);
    }}
// camera();