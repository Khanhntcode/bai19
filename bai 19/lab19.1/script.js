'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🐱‍💻Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('.click', function () {
//   console.log(document.querySelector('.guess').value);

//   document.querySelector('.message').textContent = '🐱‍💻Correct Number!';
// });

//đổi từ const --> let vì sau khi chuyển sang again thì biến sẽ bị thay đổi k dùng const đc nữa
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//console.log(secretNumber);
// điểm số bắt đầu là 20
let score = 20;
//thiết lập điểm số cao nhất đầu tiên là 0
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Khi không có đầu vào
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No number!';
    //Khi người chơi thắng
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🐱‍💻Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //khi điểm số cao hơn
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '↗ Too hight!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //khi điểm số thấp hơn
  } else if (guess < secretNumber) {
    //bê nguyên trên phần thắng xuống là được
    if (score > 1) {
      document.querySelector('.message').textContent = '↘ Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Chơi lại từ đầu khi ấn vào Again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //console.log(secretNumber);
  document.querySelector('.message').textContent = 'Start gesing...';
  // in lại điểm số về 20
  document.querySelector('.score').textContent = score;
  // giá trị bí ẩn hiển thị về ?
  document.querySelector('.number').textContent = '?';
  // ô nhập giá trị phải cho về rỗng
  document.querySelector('.guess').value = '';

  //trả lại phông nền và kích thước ô số bí ẩn
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
