import './App.css';

function App() {
  // 2025년 1월 1일 카운트다운
  const countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

  // 1초마다 갱신
  const x = setInterval(function() {

    // 현재 시간
    const now = new Date().getTime();

    // 종료 시간까지 남은 시간
    const distance = countDownDate - now;

    // 남은 시간 계산
    const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(3, '0');
    const hours = String(Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor(distance % (1000 * 60) / 1000)).padStart(2, '0');

    // const second = days * 86400 + hours * 3600 + minutes * 60 + seconds;

    // 출력
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("situation").innerHTML = "이 시간만 기다리면 2025년이라고?";

    // 콜론 깜빡이게
    const colon = document.querySelectorAll('.colon');
    colon.forEach((item) => {
      item.classList.add('hidden');
      setTimeout(() => {
        item.classList.remove('hidden');
      }, 500);
    });

    // 종료 시간이 지나면 출력
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "000";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
      document.getElementById("situation").innerHTML = "Happy New Year 2025!";
    }
  }, 1000);


  return (
    <div className="App">
      <header className="App-header">
        <div className="clock">
          <div className="time">
            <h2 id="days"> </h2>
            <span className="colon">:</span>
            <h2 id="hours"> </h2>
            <span className="colon">:</span>
            <h2 id="minutes"> </h2>
            <span className="colon">:</span>
            <h2 id="seconds"> </h2>
          </div>
          <div className="label">
            <h3 id="days-label">일</h3>
            <h3 id="hours-label">시간</h3>
            <h3 id="minutes-label">분</h3>
            <h3 id="seconds-label">초</h3>
          </div>
        </div>
        <h3 id="situation"> </h3>
        <p>Copyright 2023. 이은교 all rights reserved.
          <br />2024년 1월 1일 제작됨.
        </p>
      </header>
    </div>
  );
}

export default App;
