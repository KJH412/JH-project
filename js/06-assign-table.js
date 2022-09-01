// 한줄에 3칸 테이블 만들기
// 숫자를 체크할 변수
var count = 1;

var myTable = "<table>";
myTable +="<tr>";
myTable +="<td>"+ count +"</td>";
myTable +="<td>"+ ++count +"</td>";
// 대입연산자 += "" + 단항연산자 + ""; 
myTable +="<td>"+ ++count +"</td>";
myTable +="</tr>";
myTable += "</table>";

document.write(myTable);
