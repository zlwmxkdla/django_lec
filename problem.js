const problemTitle = [
  '1. 다음 중 아이디 선택자를 사용한 것은?',
  '2. 내용이 요소의 크기를 벗어날 때 자동으로 스크롤이 되는 속성의 값은?',
  '3. flex에서 justify-content : space-between을 적용할 경우 발생하는 일은?',
  '4. div 요소의 높이는 몇 필셀인가?',
  '5. 다음 코드의 실행 결과로 옳은 것은?',
  '6. 다음 중 제목과 본문 글자 태그가 아닌 것은?',
  '7. 다음 중 <h1>제목 글자 태그 1</h1> 부터 <h6>제목 글자 태그 6</h6>까지 생성하는 Emmet 단축 코드는?(VScode기준)',
  '8. HTML 목록을 만들 때 내용이 틀린 태그는?',
  '9. 다음 중 <audio> 태그와 <video> 태그 내부에 넣어, 웹 브라우저가 재생할 수 있는 파일 확장자 관련 문제를 해결할 때 사용하는 태그는?',
  '10. 다음 중 HTTP 상태 코드가 올바른 것은?',
];

const problemWord = [
  ['*', '#header', '.header', 'h1'],
  [
    'overflow : hidden;',
    'overflow : auto;',
    'overflow : visible;',
    'overflow : scroll;',
  ],
  [
    '모든 요소가 가운데 정렬된다.',
    '요소들 사이에 동일한 간격이 생기지만, 양 끝에는 여백이 없다.',
    '모든 요소가 앞에서부터 정렬된다.',
    '모든 요소가 끝쪽으로 정렬된다.',
  ],
  ['100px', '140px', '160px', '120px'],
  ['20', 'NaN', 'undefined', 'TypeError'],
  [
    'h : 제목을 나타내는 태그',
    'p : 단락을 나타내는 태그',
    'br : 미리 서식이 지정된 텍스트를 의미',
    'hr : 수평 줄을 그리는 태그',
  ],
  ['h${제목$}*6', 'h&{제목&}*6', 'h#{제목#}*6', 'h%{제목%}*6'],
  [
    'ul : 순서가 없는 목록 생성',
    'ol : 순서가 있는 목록 생성',
    ' li : 목록 요소 생성',
    'dl : 제목 표시',
  ],
  ['src', 'sorce', 'content', 'media'],
  ['1xx(성공)', '2xx(리다이렉션)', '3xx(클라이언트 오류)', '5xx(서버 오류)'],
];

const problemAnswer = [
  `아이디 선택자를 사용할 때는 '#' 기호를 사용합니다.`,
  '영역을 벗어나는 부분을 scroll로 만드는 속성 키워드는 scroll 입니다.',
  'justify-content: space-between;은 첫 번째 요소는 왼쪽 끝, 마지막 요소는 오른쪽 끝에 배치되고 나머지 요소들 사이에 동일한 간격 발생',
  'box-sizing: border-box;을 설정하면 padding과 border가 포함된 크기로 적용되므로 height: 100px; 그대로 유지',
  'sum(20)에서 b 값이 undefined가 되고, 20+undefined는 NaN이 됨.',
  'br 태그 (줄 바꿈 태그, 오답 설명)미리 서식이 지정된 텍스트를 의미하는 것이 아니라, 줄 바꿈을 삽입하는 태그입니다.예를 들어 <br>을 사용하면 <p> 태그처럼 블록 단위가 아니라, 단순히 한 줄만 내려갑니다.',
  'h$ -> h1~h6 태그 자동 생성 , {제목$} ->$가 자동 증가하여 제목1~제목6 생성, *6 ->6번 반복',
  '답 4번, dl은 제목을 표시하는 태그가 아니라 설명 목록을 만드는 태그이므로, 4번이 틀린 설명입니다!',
  '<audio> 및 <video> 태그는 브라우저마다 지원하는 파일 형식이 다를 수 있습니다. 이를 해결하기 위해 <source> 태그를 사용하여 여러 개의 미디어 파일을 지정할 수 있습니다.',
  ' 1xx(정보) 2xx(성공) 3xx(리다이렉션) 4xx(클라이언트 오류)',
];

const problemCorrect = ['2', '4', '2', '1', '2', '3', '1', '4', '2', '4'];

const userScore = [
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
];

let number = 0;
let count = 0;

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

button1.innerHTML = problemWord[number][0];
button2.innerHTML = problemWord[number][1];
button3.innerHTML = problemWord[number][2];
button4.innerHTML = problemWord[number][3];

const title = document.getElementById('problemTitle');
title.innerHTML = problemTitle[number];

function handleButton(x) {
  if (x == problemCorrect[number]) {
    const button = document.getElementById('result');
    button.innerHTML = '정답입니다';
    userScore[number] = 'correct';
  } else {
    const button = document.getElementById('result');
    const answer = document.getElementById('answer');
    button.innerHTML = '오답입니다';
    answer.innerHTML = problemAnswer[number];
  }
}

// 제출 함수
const submit_btn = document.getElementById('submit_btn');
submit_btn.addEventListener('click', () => {
  console.log(userScore.length);
  score = 0;

  for (i = 0; i < userScore.length; i++) {
    if (userScore[i] == 'correct') {
      score = score + 1;
    }
  }
  localStorage.setItem('score', score);
  window.location.href = 'resultPage.html';
});

// 다음 문제로 넘어가는 함수
const next_btn = document.getElementById('next_problem');
next_btn.addEventListener('click', () => {
  number = number + 1;

  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const button3 = document.getElementById('button3');
  const button4 = document.getElementById('button4');

  button1.innerHTML = problemWord[number][0];
  button2.innerHTML = problemWord[number][1];
  button3.innerHTML = problemWord[number][2];
  button4.innerHTML = problemWord[number][3];

  const title = document.getElementById('problemTitle');
  title.innerHTML = problemTitle[number];
});

// 이전 문제로 돌아가는 함수
const history_btn = document.getElementById('history_problem');
history_btn.addEventListener('click', () => {
  number = number - 1;

  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const button3 = document.getElementById('button3');
  const button4 = document.getElementById('button4');

  button1.innerHTML = problemWord[number][0];
  button2.innerHTML = problemWord[number][1];
  button3.innerHTML = problemWord[number][2];
  button4.innerHTML = problemWord[number][3];

  const title = document.getElementById('problemTitle');
  title.innerHTML = problemTitle[number];
});

// 문제 번호 클릭시 해당 문제로 이동

function handleProblemNumber(problem_number) {
  number = problem_number - 1;

  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const button3 = document.getElementById('button3');
  const button4 = document.getElementById('button4');

  button1.innerHTML = problemWord[number][0];
  button2.innerHTML = problemWord[number][1];
  button3.innerHTML = problemWord[number][2];
  button4.innerHTML = problemWord[number][3];

  const title = document.getElementById('problemTitle');
  title.innerHTML = problemTitle[number];
}
