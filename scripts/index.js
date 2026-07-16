// index.js
//3.위 입력칸(태어난 달을 숫자로 입력해주세요 input) 클릭 시 12 로 값 변경하기
const user_birthday = document.querySelector('#user_birthday');
console.log(user_birthday);

//12 로 값 변경하기
//객체.속성 = 값;
function birthday12(){
    user_birthday.value = 12;
}

//4. 나의 꽃과 꽃말 만나기 클릭 시 팝업창으로 당신의 탄생화는... 띄우고 배경 어둡게 만들기
//(선행작업) 클릭 시 나타나려면 먼저 숨기기 필요
const popup_wrap = document.querySelector('.popup_wrap');
const popup_bg = document.querySelector('.popup_bg');
console.log(popup_bg, popup_wrap);

//.popup_wrap {display:none;}
//.popup_bg {display:none;}
//자바스크립트에서 css쓰려면 작성하는 속성? 객체.style.속성 = 값
popup_wrap.style.display = 'none';
popup_bg.style.display = 'none';
// 자바스크립트에서 display=none으로 숨겼다가 특정이벤트에 따라 다시 보이고 싶을때
// 무조건 block을 쓰는게 아닌 그 선택자가 원래 가지고 있는 display속성으로 되돌리기
// display:flex가 선택자에 원래 있었다면 자바스크립트도 display=flex 
// display가 선택자에 없었다면? 원래 태그 고유속성에 따라 display=block 또는 display=inline

function showPopup(){
    popup_wrap.style.display = 'flex';
    popup_bg.style.display = 'block';
}

//5. 배경 클릭 시 3번의 팝업창과 배경을 숨기기
function hidePopup(){
    popup_wrap.style.display = 'none';
    popup_bg.style.display = 'none';
}