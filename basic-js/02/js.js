/* count 만들기 */
const total = document.getElementById("number");
// const plus = document.getElementById("increase");
// const minus = document.getElementById("decrease");

const btns = document.querySelectorAll("button");
const [plus, minus] = btns;

plus.onclick = () => {
  //parseInt 문자열을 숫자로 변환, 10 은 10진수로 하겠다
  const current = parseInt(total.innerText, 10);
  // console.log("increase가 클릭됨");
  total.innerText = current + 1;
};

minus.onclick = () => {
  const current = parseInt(total.innerText, 10);
  // console.log("decrease 클릭됨");
  total.innerText = current - 1;
};
