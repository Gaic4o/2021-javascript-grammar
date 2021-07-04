// const number = parseInt(prompt("몇 명이 참가하나요?"), 10); 
// //  prompt 는 사용자로 부터 입력으 받음.
// //  alert 경고창.
// //  confirm 은 사용자로부터 예 아니로를 받습니다.
// alert(number);
// const yesOrNo = confirm('맞나요?');


// // $ 붙인 것은 변수명에 $, _ 이런 거 쓸 수 있음. tag 를 변수에 넣으면 $ 를 넣습니다.
// // 여러 개 태그를 붙이면 $$ 

// //  document.querySelectorAll('input') -> NodeList [input] -> 0 : input   배열이 아니라 객체. 
// //  id 값을 가져 올 떄는 document.querySelector('#order'); 

// // const $span = document.querySelector('div span'); // div 의 자손인 span 을 찾아라. 
// // querySelector('div>span'); 
// // <div><span id="order">안녕</span></div>


// document.querySelector('input').addEventListener('input', function() {
//     console.log('글자 입력'); 
// });

  
// const onClick = function() {
//     console.log('버튼 클릭'); 
// }

// document.querySelector('button').addEventListener('click', onClick); 



const number = Number(prompt('몇 명이 참가하나요?'));
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word'); 
const $order = document.querySelector('#order'); 
let word; // 제시어 
let newword; // 새로 입력한 단어. 

const onClickButton = () => {
    if (!word) { // 제시어가 비어 있는가? 
        // 비어 있음. 
        word = newword; // 입력한 단어가 제시어가 됩니다. 
        $word.textContent = word;  
       
        const order = Number($order.textContent); // 현재 순서서. 
        
        if (order + 1 > number) {
            $order.textContent = 1; // 1이 자동으로 문자열이 형 변환이 됩니다. 
        } else {
            $order.textContent = order + 1; 
        }
        $input.value = '';    // 안에 들어 있는 값
        $input.focus();

        } else {
        // 비어 있지 않다. 
        if (word[word.length - 1] === newword[0]) { // 첫번쨰 글자. 올바른가. 
            word = newword; 
            $word.textContent = word;
            const order = Number($order.textContent); // 현재 순서. 
            if (order + 1 > number) {
                $order.textContent = 1; 
            } else {
                $order.textContent = order + 1; 
            }
            $input.value = ''; 
            $input.focus();
        } else {  // 올바르지 않은가가 
            alert('올바르지 않은 단어 입니다.');
        }
    }
};

const onInput = (event) => {
    newword = event.target.value; 
}

$button.addEventListener('click', onClickButton);
$input.addEventListener('input', onInput); 