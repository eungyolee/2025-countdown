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
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(distance % (1000 * 60) / 1000);

    const second = days * 86400 + hours * 3600 + minutes * 60 + seconds;

    // 출력
    document.getElementById("demo1").innerHTML = days + "일 " + hours + "시간 "
    + minutes + "분 " + seconds + "초";
    document.getElementById("demo2").innerHTML = second + "초";
    document.getElementById("situation").innerHTML = "이 시간만 기다리면 2025년이라고?";

    // 종료 시간이 지나면 출력
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo1").innerHTML = "아니 잠깐만";
      document.getElementById("demo2").innerHTML = "이미 2025년이라고?";
      document.getElementById("situation").innerHTML = "나 왜 한 살 더 먹냐?";
    }
  }, 500);

  return (
    <div className="App">
      <header className="App-header">
        <h2 id="demo1"> </h2>
        <h2 id="demo2"> </h2>
        <h3 id="situation"> </h3>
        <p>Copyright 2023. 이은교 all rights reserved.
          <br />2024년 1월 1일 제작됨.
        </p>
      </header>
    </div>
  );
}

export default App;
