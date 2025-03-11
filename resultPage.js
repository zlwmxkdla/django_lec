const score = localStorage.getItem('score');
const title = document.getElementById('title');
const scoreContent = document.getElementById('score');
title.innerHTML = '게임이 종료되었습니다!';
scoreContent.innerHTML = '최종 스코어:' + score + '/10';

function handleStart() {
  window.location.href = 'main.html';
}
