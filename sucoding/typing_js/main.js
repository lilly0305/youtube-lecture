let target = document.querySelector("#dynamic");


function randomString() {
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Ruby", "Learn to Python"]

    // 랜덤으로 인덱스 선택 Math.random() * n (n미만의 숫자만큼 랜덤하게 선택됨) // Math.floor() -> 소수점 이하를 버림
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];

    // split() -> 한 글자씩 쪼개기
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

// 타이핑 리셋
function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

// 한글자씩 텍스트 출력 함수
function dynamic(randomArr) {

    console.log(randomArr);

    if (randomArr.length > 0) {
        // shift : 배열에서 바깥으로 뺌
        target.textContent += randomArr.shift();
        setTimeout(function() {
            dynamic(randomArr);
        }, 80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());


// 커서 깜빡임 효과
function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500);