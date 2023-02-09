const hamburgerMenu = document.getElementById('hamburger-menu');
const sideMenu = document.getElementById('side-menu');

hamburgerMenu.addEventListener('click', function(){
    if (sideMenu.style.visibility == '' || sideMenu.style.visibility == 'hidden'){
sideMenu.style.visibility = 'visible';
    }
    else if (sideMenu.style.visibility == 'visible'){
        sideMenu.style.visibility = 'hidden';
    }
    
});


// grapje

const headerTxt = document.getElementById('header-text');
headerTxt.addEventListener('click', function(){
    alert('NIET HIER KLIKKEN!!!');
});

const bodyElement = document.body;

const homeBtn = document.getElementById('home-btn');
const greenBtn = document.getElementById('green-btn');
const redBtn = document.getElementById('red-btn');
const blueBtn = document.getElementById('blue-btn');
const purpleBtn = document.getElementById('purple-btn');
const colorText = document.getElementById('color-text');

// console.log(homeBtn);

greenBtn.addEventListener('click', function(){
    bodyElement.classList.remove('green-background', 'red-background', 'blue-background', 'purple-background')
    bodyElement.classList.add('green-background');
    colorText.innerHTML = '<h1>green</h1>';
    sideMenu.style.visibility = 'hidden';
});

redBtn.addEventListener('click', function(){
    bodyElement.classList.remove('green-background', 'red-background', 'blue-background', 'purple-background')
    bodyElement.classList.add('red-background');
    colorText.innerHTML = '<h1>red</h1>';
    sideMenu.style.visibility = 'hidden';
});
blueBtn.addEventListener('click', function(){
    bodyElement.classList.remove('green-background', 'red-background', 'blue-background', 'purple-background')
    bodyElement.classList.add('blue-background');
    colorText.innerHTML = '<h1>blue</h1>';
    sideMenu.style.visibility = 'hidden';
});
purpleBtn.addEventListener('click', function(){
    bodyElement.classList.remove('green-background', 'red-background', 'blue-background', 'purple-background')
    bodyElement.classList.add('purple-background');
    colorText.innerHTML = '<h1>purple</h1>';
    sideMenu.style.visibility = 'hidden';
});

//  het werkte niet door hier ook classList.add te doen
homeBtn.addEventListener('click', function(){
    bodyElement.classList.remove('green-background', 'red-background', 'blue-background', 'purple-background')
    colorText.innerHTML = '<h1>home</h1>';
    sideMenu.style.visibility = 'hidden';
});

// geprobeerd met for.each methode maar niet uitgekomen

// const colorBtns = document.querySelectorAll('li');
// console.log(colorBtns);

// colorBtns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
// console.log(e.target.textContent);
// console.log(e.target.textContent + '-background');
// backGroundColor = e.target.textContent + 'background';
// console.log(bodyElement.classList);
// bodyElement.classList.add(backGroundColor);

        // backgroundColor = e.target.style.textContent;
// console.log(backgroundColor);
    







