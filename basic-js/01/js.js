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
// get함수는 특정 값 조회할때마다 호출
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum 함수가 실행됩니다");
    return this.a + this.b;
    //겟 함수는 return을 해줘야함
  },
};

// get 호출()하려는게 아니고 조회만 하는데 실행이 됨.
numbers.b = 5;
console.log(numbers.sum);

// setter 특정값을 설정할때마다
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

/* while 조건이 좀 더 까다로울때 사용 */
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
//반복문을 실행해야 하는 대상이 객체일 때 주로 사용 key를 불러온다.
for (let key in youngsoo) {
  console.log(`${key} : ${youngsoo[key]}`);
}

/* for of */
//반복문을 실행해야 하는 대상이 배열일 때 주로 사용 값을 가져온다.
let numbers = [1, 2, 3];
for (let anything of numbers) {
  console.log(anything);
}

/* continue, break 반복문에서 사용할 수 있음 */
for (let i = 0; i < 10; i++) {
  if (i === 4) continue; // 조건만족시 스킵
  console.log(i);
  if (i === 7) break;
}

/* 문제 */
//숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열안에 들어있는
//숫자 중 3보다 큰 숫자로만 이루어진 배열을 새로 만들어서 반환해보세요.
// function biggerThanThree(numbers) {
//   /* 구현해보세요 */
//   const array = [];
//   for (let i = 0; i <= numbers.length; i++) {
//     if (numbers[i] < 4) continue;
//     array.push(numbers[i]);
//   }
//   return array;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]

// export default biggerThanThree;

// 정답
function biggerThanThree(numbers) {
  const array = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3) {
      array.push(numbers[i]);
    }
  }
  return array;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]

export default biggerThanThree;

/* 내장함수 */
const animals = ["이구아나", "고양이", "다람쥐", "닭"];

// for
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// forEach
function animal(ani) {
  console.log(ani);
}

animals.forEach(animal);

// 바로 선언
animals.forEach(function (ani) {
  console.log(ani);
});

// 화살표 함수
animals.forEach((ani) => {
  console.log(ani);
});

/* map */
const nums = [3, 5, 7, 9];

const array = [];

for (let i = 0; i < nums.length; i++) {
  array.push(nums[i] * nums[i]);
}

console.log(array);

nums.forEach((n) => {
  array.push(n * n);
});

console.log(array);

// map
const arrayTwo = nums.map((n) => n * n);
console.log(arrayTwo);

const obj = [
  {
    one: "이제는",
    two: "내일은",
  },
  {
    one: "자야할 시간",
    two: "마저 이어서",
  },
];

const connect = obj.map((m) => m.one);
console.log(connect); //['이제는', '자야할시간']

/* indexOf 특정 항목이 베열에서 몇 번 째 원소인지*/
const any = ["영수", "수영", "애호박", "나랑친한척해줘"];
const index = any.indexOf("수영");
console.log(index); // 1
// 일치하는 항목이 없다면 -1로 뜸

/* findIndex 특정 값과 일치하는 것을 찾을때*/
const disney = [
  {
    category: "duck",
    name: "daisy",
    fm: "female",
  },
  {
    category: "duck",
    name: "donald",
    fm: "male",
  },
  {
    category: "mouse",
    name: "mini",
    fm: "female",
  },
  {
    category: "mouse",
    name: "micky",
    fm: "male",
  },
];

const find = disney.findIndex((a) => a.name === "daisy");
console.log(find); // 0

// find 찾은 값 자체를 반환
const find = disney.find((a) => a.name === "daisy");
console.log(find); // {category: "duck", name: "daisy", fm: "female"}

/* filter 특정 조건을 만족하는 원소를 찾아서 원소가지고 새로운 배열 만듬 */
const keyFm = disney.filter((a) => a.fm === "male");
console.log(keyFm); // male인 것만 가져와서 배열로 만들어줌

/* slice & splice */
let anyNum = [11, 22, 33, 44, 55];

// slice 기존 배열을 건들이지 않으면서 제거
const sliced = anyNum.slice(0, 3); // 0번째부터 3번째 앞까지 제거
console.log(sliced); // [11, 22, 33] 제거되는 값
console.log(anyNum); // [11, 22, 33, 44, 55]

// splice 기존 배열을 건들이며 배열에서 제거
const anyNumIndex = anyNum.indexOf(22);
console.log(anyNumIndex); // 1
const spliced = anyNum.splice(anyNumIndex, 2); // 22로 부터 2개 지움
console.log(spliced); // [22, 33] 제거되는 값
console.log(anyNum); // [11, 44, 55]

// shift & unshift 맨 앞
// shift
const fucShift = anyNum.shift();
console.log(fucShift); // 11 맨 앞에 있는 원소 기존에서 꺼냄
anyNum.shift();
anyNum.shift();
console.log(anyNum); // 넣은 만큼 모두 뺌

// unshift
anyNum = [11, 22, 33, 44, 55];
anyNum.unshift(0);
console.log(anyNum); // [0, 11, 22, 33, 44, 55]
// 맨 앞에 원소 추가해줌

// pop & push 맨 뒤
//pop
anyNum = [11, 22, 33, 44, 55];
const fucPop = anyNum.pop();
console.log(fucPop); // 55 맨 뒤에 있는 원소 기존에서 꺼냄
anyNum.pop();
anyNum.pop();
anyNum.pop();
console.log(anyNum); // 11

// push
anyNum = [11, 22, 33, 44, 55];
anyNum.push(66);
console.log(anyNum); // [11, 22, 33, 44, 55, 66]

// concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

let fucConcat = arr1.concat(arr2);
console.log(fucConcat); // [1, 2, 3, 4, 5] 배열을 합쳐줌
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [4, 5, 6] 기존 배열 건들이지 않음

// spread 연산자
fucConcat = [...arr1, ...arr2];
console.log(fucConcat); // [1, 2, 3, 4, 5] 배열을 합쳐줌

// join
const fucJoin = [1, 2, 3];
console.log(fucJoin.join()); // 1,2,3 문자열로 변환, 쉼표로 구분
console.log(fucJoin.join(" ")); // 1 2 3 ' '을 문자열 사이사이 넣어줌
console.log(fucJoin.join(" # ")); // 1 # 2 # 3

// [참조] 킹강현 최고
/* Mutating 변하게 된다. */
//원본 배열을 변형 시킨다.
//새로운 배열을 반환하지만 주소 참조가 되어 있어서 원본에 수정이 발생한다.

// - array.splice
// - array.push, array.unshift > 값을 추가 add
// - array.pop, array.shift > 값을 제거 remove
// - array.sort, array.fill, array.reverse > 값을 재가공 replace

/* Non Mutating 변하지 않는다. */
//원본 배열 변형을 시키지 않는다. 새로운 배열을 반환하기 때문에 변형을 시키지 않는다.

// - array.slice
// - array.concat, spread ... > 값을 추가 add
// - array.filter > 값을 제거 remove
// - array.map, array.reduce > 값을 재가공 replace
