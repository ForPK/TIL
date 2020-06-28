/* switch */
const a = "100";

switch (a) {
  case "100":
    console.log("A+");
    break;
  case "90":
    console.log("A");
    break;
  default:
    console.log("this is a anything");
}

/* 함수 */
function grade(score) {
  if (score === "100") {
    return "A+";
  } else if (score === "90") {
    return "B";
  } else {
    return "C";
  }
}

const div = document.getElementById("app");
const num = grade("100");

div.innerHTML = num;

/* 화살표 함수 */
const add = (a, b) => {
  return a + b;
};

const result = add(3, 4);
console.log(result);

/* 객체 */
const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카",
};

/* 비구조 할당 */
function print({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`;
  console.log(text);
}

// function print(hero) {
//   const { alias, name, actor } = hero;
//   const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`;
//   console.log(text);
// }

print(ironMan);
print(captainAmerica);

/* getter함수와 setter 함수 */
/* get함수는 특정 값 조회할때마다 호출 */
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum 함수가 실행됩니다");
    return this.a + this.b;
    //겟 함수는 return을 해줘야함
  },
};

// 호출()하려는게 아니고 조회만 하는데 실행이 됨.
numbers.b = 5;
console.log(numbers.sum);

/* setter 특정값을 설정할때마다 */
const iguana = {
  _name: "수영이",
  get name() {
    console.log("_name을 조회합니다.");
    return this._name;
  },
  set name(value) {
    console.log("이름이 바뀝니다." + value);
    this._name = value;
  },
};

consolw.log(iguana.name);
iguana.name = "수영이기지배";
console.log(iguana.name);

/* 배열1 */
const a = [{ name: "영수" }, { name: "수영" }];

console.log(a[0].name);

a.push({
  name: "영수영",
});

console.log(a[2].name);

/* for */
const aa = ["영수", "수영", "영수영", "똥꼬"];

console.log(aa.length);

for (let i = 0; i < aa.length; i++) {
  console.log(aa[i]);
}

/* while 조건이 좀 더 까다로울때 사용. */
let i = 0;
let isFun = false;

while (!isFun) {
  console.log(i);
  i++;
  if (i === 20) {
    isFun = true;
  }
}

/* keys, values */
const youngsoo = {
  name: "영수사우루스",
  age: "13",
  height: "114cm",
};

console.log(Object.entries(youngsoo));
// [Array[2], Array[2], Array[2]]
// 0: 'name' 1: '영수사우루스'
// keys, values가 묶음으로 하나씩
console.log(Object.keys(youngsoo));
console.log(Object.values(youngsoo));

/* for in */
for (let key in youngsoo) {
  console.log(`${key} : ${youngsoo[key]}`);
}

/* for of 배열 안에 있는 걸 사용할때 */
let numbers = [1, 2, 3];
for (let anything of numbers) {
  console.log(anything);
}

/* continue, break */
for (let i = 0; i < 10; i++) {
  if (i === 4) continue; // 조건만족시 스킵
  console.log(i);
  if (i === 7) break;
}
