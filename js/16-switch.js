// 날짜와 관련된 객체보기
var date = new Date();
console.log(date); // 2022 Aug
// 년도
var year = date.getFullYear();
console.log(year);
// 월
var month = date.getMonth();
console.log(month); //7 0번째달 1번째달 ... 8월->7
// 일
var theDay = date.getDate();
console.log(theDay);

// 요일
var day = date.getDay();
console.log(day); //일요일0,월요일1,화요일2...
switch (day) {
    case 0:
        document.write("오늘은 일요일");
        break;
    case 1:
        document.write("오늘은 월요일");
        break;
    case 2:
        document.write("오늘은 화요일");
        break;
    case 3:
        document.write("오늘은 수요일");
        break;
    case 4:
        document.write("오늘은 목요일");
        break;
    case 5:
        document.write("오늘은 금요일");
        break;
    case 6:
        document.write("오늘은 토요일"); //마지막 break생략가능
}