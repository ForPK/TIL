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

// 0701 다시
// function biggerThanThree(numbers) {
//   /* 구현해보세요 */
//   let array = [];
//   for(let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 3) {
//       array.push(numbers[i]);
//     }
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
const sliced = anyNum.slice(0, 3); // 0번째부터 3개 제거
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
anyNum = [11, 22, 33, 44, 55];

const fucShift = anyNum.shift();
console.log(fucShift); // 11 맨 앞에 있는 원소 기존에서 꺼냄
anyNum.shift();
anyNum.shift();
console.log(anyNum); // 넣은 만큼 모두 뺌 [44, 55]

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

anyNum = [1, 2, 3, 4, 5];

let sum = 0;
anyNum.forEach((a) => {
  sum += a;
  console.log(`${sum} + ${a}`);
});

console.log(sum);

// 평균 구하기
let avg = anyNum.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0 /* 초기 accumulator 값 */);

console.log(avg);

// reduce 꼭 숫자가 아니어도 됨
// reduce 배열이 주어졌을때 안에 있는 모든 값을 사용하여 연산해야할때

let anyAB = ["a", "a", "b", "c", "b", "c", "a", "e", "a"];
//위로 했을때 결과 값이 {a: 4, b: 2, c: 2, e: 1…}
let anyABC = ["a", "a", "b", "c", "c", "e"];

const abcReduce = anyABC.reduce(
  (acc, crr) => {
    if (acc[crr]) {
      acc[crr] += 1;
      console.log("if :");
      console.log(acc[crr]);
    } else {
      acc[crr] = 1;
      console.log("else :");
      console.log(acc[crr]);
    }
    return acc;
  },
  {} /* 비어있는 객체 */
);

console.log(`total abcReduce :`);
console.log(abcReduce); // {a: 2, b: 1, c: 2, e: 1…}

/* 문제 */
//숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.

// 1. for, if
// function countBiggerThanTen(numbers) {
//   let arr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 10) {
//       arr.push(numbers[i]);
//     }
//   }
//    return arr.length;
// }

// const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
// console.log(count); // 5

// export default countBiggerThanTen;

// 2. reduce
// function countBiggerThanTen(numbers) {
//   let a = 0;
//   numbers.reduce((acc, crr) => {
//     if (crr > 10) {
//       a += 1;
//     }
//   }, 0);
//   return a;
// }

// const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
// console.log(count); // 5

// export default countBiggerThanTen;

//3. forEach
// function countBiggerThanTen(numbers) {
//   let array = [];
//   numbers.forEach(function(num){
//     if(num > 10) {
//       array.push(num);
//     }
//   });
//   return array.length;
// }

// const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
// console.log(count); // 5

// export default countBiggerThanTen;

//4. filter
function countBiggerThanTen(numbers) {
  const aa = numbers.filter((num) => num > 10);
  return aa.length;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5

export default countBiggerThanTen;

// 객체 생성자는 함수를 통해서 새로운 객체를 만들고 그 안에 넣고 싶은 값, 함수를
// 구현할 수 있게 해줌
function Animal(type, name, sound) {
  // 객체 생성사 대문자 시작 + new 키워드 사용
  this.type = type;
  this.name = name;
  this.sound = sound;
  //this.say = function() {
  //console.log(this.sound);
  //};
}

// 위 세 줄을 아래처럼 꺼내옴
Animal.prototype.say = function () {
  //익명함수
  console.log(this.sound);
};

// 프로토타입 역할 : 객체 생성자로 무언가 만들었을때 그걸로 만든 것들끼리
// 공유할 수 있는 어떤 값이나 함수

const yssaurus = new Animal("이구아나", "영수", "이뻐");
const sybaby = new Animal("이구아나", "수영", "날좀좋아해줘");

//Animal.prototype.say = function() 이것은 아래와 같음
//function say() {
//  console.log(this.sound);
//}

// yssaurus.say = say;
// sybaby.say = say;

yssaurus.name; // console was cleared
sybaby.say(); // 날좀좋아해줘

// 프로토타입은 어떠한 공유되는 함수나 값을 설정하는 것
// 객체생성자는 함수를 new 키워드를 사용해서 호출하게 됐을때 어떤 새로운 객체를 만들게
// 되고 그 객체 내부에 값을 집어넣을 수 있고 프토로타입을 이용해서 기능구현을 할 수 있게 해줌

class Animal {
  // 객체생성자
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

// extends 특정 키워드를 상속 받는다
class Dog extends Animal {
  constructor(name, sound) {
    super("개", name, sound);
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super("고양이", name, sound);
  }
}

const dog = new Dog("멍멍이", "멍멍");
const cat = new Cat("야옹이", "야옹");
const cat2 = new Cat("야아아옹이", "야아아오옹");

dog.say(); // 멍멍
cat.say(); // 야옹
cat2.say(); // 야아아오옹

class Disney {
  constructor(cate) {
    this.cate = cate;
    this.char = [];
  }
  addChar(char) {
    //클래스 내부에 구현하는 함수들 : 메소드
    this.char.push(char);
  }
  print() {
    const arr = this.char.join(", ");
    console.log(`디즈니 ${this.cate}캐릭터는 ${arr}.`);
  }
}

const charAni = new Disney("동물");
charAni.addChar("데이지 덕");
charAni.addChar("도날드 덕");
charAni.addChar("미키마우스");
charAni.addChar("미니마우스");

const charHum = new Disney("사람");
charHum.addChar("에리얼");
charHum.addChar("스노우화이트");
charHum.addChar("벨");
charHum.addChar("오로라");
charHum.addChar("신데렐라");
charHum.addChar("라푼젤");
charHum.addChar("자스민");

charAni.print();
charHum.print();

/* 삼항 연산자 */
let arr = [];
let txt = "";

if (arr.length === 0) {
  txt = "값 없음";
} else {
  txt = "값 있음";
}

console.log(txt);

arr = ["수영이 애플마우스"];
txt = arr.length === 1 ? `값 있` : `값 없`;

console.log(txt);

// 삼항 연산자 중첩해서 쓸 수 있음. 헷갈리니까 웬만하면 한 번만 쓰기
const some1 = false;
const some2 = false;

const value = some1 ? "true" : some2 ? "some2 true" : "some2 false";

console.log(value);

/* falsy & truthy */
function print(aa) {
  if (!person) {
    //if( person === undefined || person === null ) { // null checking
    return;
  }
  console.log(aa.name);
}

const person = {
  name: null,
};

print(person);

// falsy
console.log(!undefined); // true
console.log(!null);
console.log(!"");
console.log(!NaN);
console.log(!false);
console.log(!0);

// truthy (위 falsy 빼고 모두)
console.log(!3); //false
console.log(!"ys");
console.log(!["arr"]);
console.log(![]);
console.log(!{});

let value = {}; //true
value = null; // false

const truthy = !!value;
//const truthy = value ? true : false;
console.log(truthy);

/* 단축 평가 논리 계산법 */

// && 연산자
// 어떤 상황에서 쓰는지? 특정 값이 유효할때만 어떤 값을 조회해야할 상황
console.log(true && "blah"); // blah 앞이 true면 연산 결과 뒤에 것
console.log(false && "blah"); // false 앞이 false면 뒤에껀 보지도 않음
console.log("blah" && "blah blah"); //blah blah 둘 다 true면 앞이 true여서 뒤에꺼가 옴
console.log(undefined && "blah"); // undefined
console.log(null && "blah"); // null
console.log(0 && "blah"); // 0
console.log("" && "blah"); // ''

const obj = null;
const name = obj && obj.name;
console.log(name); //null

// 간단히 쓰는 법
const namelessAni = {
  name: "",
};
function getName(ani) {
  const name = ani && ani.name;
  return name || "이름 음슴";
  // if (!name) {
  //   return '이름 음슴'
  // }
  // return ani.name;
}

const nameless = getName(namelessAni);
console.log(nameless); // 이름 음슴

// || 연산자
// 어떤 상황에서 쓰는지? 어떠한 값이 없을때 이거 사용할래
console.log(false || "hello"); // hello 앞이 false면 뒤에꺼
console.log(0 || "hello"); // hello
console.log(false || 0); // 0 둘 다 false면 뒤에꺼

console.log(1 || "hello"); // 1 앞이 true면 뒤에껀 보지도 않음
console.log("안녕" || "hello"); // 안녕

/* 함수의 기본 파라미터 */
function circle(r) {
  const radius = r || 1;
  return Math.PI * radius * radius;
}

const ans = circle();
console.log(ans);

// r에 기본값 1 넣어줌
function circle(r = 1) {
  return Math.PI * r * r;
}

// const circle = ( r = 1 ) => Math.PI * r * r;

const ans = circle();
console.log(ans);

/* 조건문 간단하게 작성하기 */
function animals(txt) {
  // return txt === 'iguana' || txt === 'dog' || txt === 'cat';
  const ani = ["iguana", "dog", "cat"];
  return ani.includes(txt);
}

// 더 간단하게
const animals = (txt) => ["iguana", "dog", "cat"].includes(txt);

console.log(animals("iguana")); // true
console.log(animals("australopithecus")); // false

// 어떤 값을 넣었을 때마다 값이 달라질때 객체를 활용하면 편함
function sounds(hear) {
  // switch case에서  return을 쓰면 break 안 써도 됨.
  // switch(hear) {
  //   case 'sooyoung' :
  //     return '쉐에에에에 펄럭';
  //   case 'youngsoo' :
  //     return 'zzz';
  //   case 'bandi' :
  //     return 'wal wal';
  //   default :
  //     return 'no comment';
  // }

  // if(hear === 'sooyoung') return '쉐에에에에 펄럭';
  // if(hear === 'youngsoo') return 'zzz';
  // if(hear === 'bandi') return 'wal wal';
  // return 'no comment';

  const speak = {
    sooyoung: "쉐에에에에 펄럭",
    youngsoo: "zzz?",
    bandi: "wal wal",
  };

  return speak[hear] || "no comment";
}

console.log(sounds("sooyoung")); // 쉐에에에에 펄럭
console.log(sounds("youngsoo")); // zzz
console.log(sounds("bandi")); // wal wal
console.log(sounds("australopithecus")); // no comment

// 특정 값이 무엇으로 주어지느냐에 따라서 다른 코드를 실행하고 싶을때
function getSounds(hear) {
  const speak = {
    sooyoung: () => {
      console.log("쉐에에에에 펄럭");
    },
    youngsoo() {
      console.log("zzz?");
    },
    // 추천하진 않음, 익명함수로 할 바엔 위에 것으로
    bandi: function () {
      console.log("wal wal");
    },
  };
  // if (!speak[hear]) {
  //   console.log('no comment');
  //   return;
  // }
  // speak[hear]();

  const spk = speak[hear];
  if (!spk) {
    console.log("no comment");
    return;
  }
  spk();
}

getSounds("sooyoung"); // 쉐에에에에 펄럭
getSounds("youngsoo"); // zzz
getSounds("bandi"); // wal wal
getSounds("australopithecus"); // no comment

/* 비구조화 할당(구조 분해) */
const obj = { a: 1 };
const { a, b } = obj;

// function aa({ a, b = 2 }) {
//   console.log(a);
//   console.log(b /* || 5 */);
// }

const { a, b = 5 } = obj;

console.log(a);
console.log(b);

// 비구조화 할당할 때 이름 바꾸는 방법
const sooyoung = {
  name: "수영",
  tpye: "이가나",
};

const { name: nickname } = sooyoung;
console.log(nickname); // 수영

// 배열 비구조화 할당
// const arr = [1, 2];

// const one = arr[0];
// const two = arr[1];

const arr = [1];

const [one, two = 2] = arr;

console.log(one);
console.log(two);

// 객체의 깊숙한 곳 꺼내기
const deepObj = {
  state: {
    info: {
      name: "pk",
      tool: ["photoshop", "illustrator", "drawing", "sewing machine"],
    },
  },
  value: 7,
};

// const {
//   state: {
//     info: {
//       name, tool
//     }
//   },
//   value
// } = deepObj;

const {
  state: {
    info: {
      // 선호하는 방법은 아니지만 이렇게도 할 수 있다 정도
      name,
      tool: [firTool, secTool],
    },
  },
  value,
} = deepObj;

// 이 방법을 더 선호함
// // const { name, tool: [firTool, secTool] } = deepObj.state.info;
// const { name, tool } = deepObj.state.info;
// const { value } = deepObj;

const extracted = {
  name,
  //tool,
  firTool,
  secTool,
  value,
};

console.log(extracted);

/* spread & rest ... */
// 기존에 만들었던 객체를 참고해서 객체를 만들때(기존 객체 복사)
// 일반
const ys = {
  name: "영수사우루스",
};

const applemouseYs = ys;
applemouseYs.attribute = "4가지";

const greenAmYs = applemouseYs;
greenAmYs.color = "갓 나온 새싹 같았는데 노각";

console.log(ys); // {name: "영수사우루스", attribute: "4가지", color: "갓 나온 새싹 같았는데 노각"}
console.log(applemouseYs); // {name: "영수사우루스", attribute: "4가지", color: "갓 나온 새싹 같았는데 노각"}
console.log(greenAmYs); // {name: "영수사우루스", attribute: "4가지", color: "갓 나온 새싹 같았는데 노각"}

console.log(ys === greenAmYs); // true

// spread
const ys = {
  name: "영수사우루스",
};

const applemouseYs = {
  // name: '영수사우루스',
  ...ys,
  attribute: "4가지",
};

const greenAmYs = {
  // name: '영수사우루스',
  // attribute: '4가지',
  ...applemouseYs,
  color: "갓 나온 새싹 같았는데 노각",
};

// 같은 건 아래꺼가 덮어쓰게 됨
// const orangeAmYs = {
//   ...applemouseYs,
//   color: 'orange';
// }

// 컬러가 앞에 오면 아래꺼가 덮어쓰게 됨.
// const orangeAmYs = {
//   color: 'orange';
//   ...applemouseYs,
// } "갓 나온 새싹 같았는데 노각"

console.log(ys); // {name: "영수사우루스"}
console.log(applemouseYs); // {name: "영수사우루스", attribute: "4가지"}
console.log(greenAmYs); // {name: "영수사우루스", attribute: "4가지", color: "갓 나온 새싹 같았는데 노각"}

// 배열에서도 사용가능
const igu = ["영수", "수영"];
const iguAna = [...igu, "영수영"];
// === const iguAna = igu.concat('영수영');

console.log(igu); // ["영수", "수영"]
console.log(iguAna); // ["영수", "수영", "영수영"]

// 여러 번 사용 가능
const num = [1, 2, 3];
const addNum = [...num, 1004, ...num];
console.log(addNum); // [1, 2, 3, 1004, 1, 2, 3]

// rest
// 퍼져있는 것들을 모아오는 역할
const greenAmYs = {
  name: "영수사우루스",
  attribute: "4가지",
  color: "갓 나온 새싹 같았는데 노각",
};

const { color, ...applemouseYs } = greenAmYs;
console.log(color); // 갓 나온 새싹 같았는데 노각
console.log(applemouseYs); // {name: "영수사우루스", attribute: "4가지"}

const { attribute, ...ys } = applemouseYs;
console.log(ys); // {name: "영수사우루스"}

// 배열에서 rest
const num = [1, 2, 3];

const [one, ...asf] = num;
// const [ ...asf, last ] = num;
// 이렇게는 안됨. 배열에서는 rest가 마자막에 와야함
console.log(one); // 1
console.log(asf); // [2, 3]

// 함수 파라미터에서의 rest
// function sum(a, b, c, d, e, f, g) {
//  return a + b + c + d + e + f + g;
// }
console.log(sum(1, 2, 3, 4, 5, 6)); // NaN 하나가 없어서

// function sum(a, b, c, d, e, f, g) {
//   let result = 0;
//   if(a) result += a;
//   if(b) result += b;
//   if(c) result += c;
//   if(d) result += d;
//   if(e) result += e;
//   if(f) result += f;
//   if(g) result += g;
//   return result;
// }

function sum(...rest) {
  return rest.reduce((acc, crr) => acc + crr, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8)); // 36

// 파라미터 & 인자
// 파라미터는 함수에서 받아오는 값, 인자는 함수를 사용할때 쓰는 값
function substract(x, y) {
  // 파라미터
  return x - y;
}

const result = substract(1, 2); // 인자
console.log(result); // -1

// 인자에서도 ...을 사용할 수 있음
const num = [1, 2];
// const result = substract(num[0], num[1]);
const result = substract(...num);
console.log(result); // -1

function sum(...rest) {
  return rest.reduce((acc, crr) => acc + crr, 0);
}

const num = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sum(...num)); // 36

/* 문제 */
//함수에 n 개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내세요.
function max() {
  return 0;
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);

// 테스트 코드에서 불러오기 위하여 사용하는 코드
export default max;

// 정답
function max(...rest) {
  return rest.reduce((acc, crr) => (acc < crr ? crr : acc), []);
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);

// 테스트 코드에서 불러오기 위하여 사용하는 코드
export default max;

/* scope : global, function, block(switch or if 등등) */
// global
const value = "hello";

function myFunc() {
  console.log("myFunc: ");
  console.log(value); // hello
}

//function scope
function otherFunc() {
  console.log("otherFunc: ");
  const value = "bye";
  console.log(value); // bye
}

myFunc();
otherFunc();

console.log("global: ");
console.log(value); // hello

function myFunc2() {
  const value = "bye2";
  const anotherValue = "world";
  function functionInside() {
    console.log("functionInside: ");
    console.log(value); // bye2
    console.log(anotherValue); // world
  }
  functionInside();
}

// block scope
function myFunc3() {
  const value = "bye bye";
  if (true) {
    const value = "myFunc3";
    console.log("block scopt: ");
    console.log(value); // myFunc3
  }
  console.log("function scope: ");
  console.log(value); // bye bye
}

myFunc3();
console.log("global scope: ");
console.log(value); // hello
console.log(anotherValue); // defined

// var의 경우
var value = "hello";

// block scope
function myFunc3() {
  var value = "bye bye";
  if (true) {
    var value = "myFunc3";
    console.log("block scopt: ");
    console.log(value); // myFunc3
  }
  console.log("function scope: ");
  console.log(value); // myFunc3
}
// 같은 블록 안에 제일 마지막으로 선언한걸로 됨.

myFunc3();
console.log("global scope: ");
console.log(value); // hello

// let의 경우
let value = "hello";

// block scope
function myFunc3() {
  let value = "bye bye";
  if (true) {
    let value = "myFunc3";
    console.log("block scopt: ");
    console.log(value); // myFunc3
  }
  console.log("function scope: ");
  console.log(value); // bye bye
}
// let은 scope가 블록으로 제한
// 블록 바깥은 영향이 안감

myFunc3();
console.log("global scope: ");
console.log(value); // hello

/* Hoisting */
// 자바스크립트에서 아직 선언되지 않은 함수, 또는 변수를 끌어 올려서 사용할 수 있는 작동 방식
// 호이스팅은 되도록이면 피하는게 좋음 (헷갈려지고 유지보수에 도움안됨)
// const, let은 변수에 대한 호이스팅이 안됨
// 함수를 위에 호출하든 아래 호출하든 작동되는 것.
myFunc();

function myFunc() {
  console.log("hello world");
}

/* 비동기식 처리 */
function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
    callback(end - start);
  }, 0);
  // 시간 흐른 후 실행하겠다 실제로는 4ms후에 실행. 브라우저에서 지정한 최소값
}

console.log("작업 시작");
work((ms) => {
  console.log("작업이 끝났습니다.");
  console.log(ms + "ms 걸렸다고 합니다.");
}); // 770ms
console.log("다음 작업");

// 작업 시작 -> 다음 작업 -> 770ms -> 작업이 끝났습니다. -> 770ms 걸렸다고 합니다.
// 비동기처리. Ajax Web API 요청, 파일 읽기, 암호화/복호화, 작업예약할때 사용.

/* promise 비동기식을 좀 더 편하게 처리 위한 기능 */
//  callback 함수를 많이 사용하는 경우 코드가 어떻게 복잡해지는지
// 숫자 n을 파라미터로 받아와서 5번에 걸쳐서 1초마다 1씩 더해서 출력하는 작업
function increaseAndPrint(n, callback) {
  // setTimeout(() => {}, 1000)
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
      callback(increased);
    }
  }, 1000);
}

// 콜백 지옥
increaseAndPrint(0, (n) => {
  increaseAndPrint(n, (n) => {
    increaseAndPrint(n, (n) => {
      increaseAndPrint(n, (n) => {
        increaseAndPrint(n, (n) => {
          console.log("작업 끝!");
        });
      });
    });
  });
});

// promise
const myPromise = new Promise((resolve, reject) => {
  // 성공하면 resolve, 실패하면 reject
  setTimeout(() => {
    // 성공하는 예제
    //resolve("result");

    // 실패하는 예제 아래 .catch 추가
    reject(new Error());
  }, 1000);
});

// then. promise가 끝나고 할 작업 설정
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.error(e); // 1초 뒤 Error
  });

// promise를 만드는 함수
function increaseAndPrint(n) {
  // callback은 받아오지 않음
  return new Promise((resolve, reject) => {
    // 값이 5가 되면 실패 처리
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        // error 이름 정할 수 있음
        error.name = "ValueIsFiveError";
        reject(error);
        return; // 이 다음은 작업하지 않겠다
      }
      // 실패하지 않은 경우
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

// increaseAndPrint(0).then(n => {
//   console.log("result: ", n);
// });

// increaseAndPrint(0)
//   .then(n => {
//     return increaseAndPrint(n);
//   })
//   .then(n => {
//     return increaseAndPrint(n);
//   })
//   .then(n => {
//     return increaseAndPrint(n);
//   })
//   .then(n => {
//     return increaseAndPrint(n);
//   })
//   .then(n => {
//     return increaseAndPrint(n);
//   })
//   .catch(e => {
//     console.error(e); // ValueIsFiveError
//   });

increaseAndPrint(0)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .catch((e) => {
    console.error(e); // ValueIsFiveError
  });

// promise는 비동기 작업이 많아져도 코드가 깊어지지 않음
// 에러를 잡을때 어떤 부분인지 파악하기 어려움
// 특정 조건에 따라 분기 나누기 어려움
// 특정값을 공유해가면서 하기 어려움

/* promise를 더욱 쉽게 사용하게 해주는 async await */
// ES8
// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function process() {
//   console.log("안녕하세요");
//   await sleep(3000);
//   console.log("반갑습니다");
//   return true;
// }

// process().then(val => {
//   console.log(val);
// });
// 안녕하세요 -> 3초 뒤 -> 반갑습니다 -> true

// promise에서 에러를 발생시키고 싶을때
// throw 에러 발생 시킬때
// try, catch 에러 잡아낼때
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error;
}

async function process() {
  try {
    await makeError();
  } catch (e) {
    console.error(e);
  }
}

process(); // 1초 뒤 에러 발생

// 비동기 함수 여러가지 만들기
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 화살표 함수로 작성할때 async를 쓰고 싶다면 괄호 앞에 쓰기
const getDog = async () => {
  await sleep(1000);
  return "멍멍이";
};

const getIgu = async () => {
  await sleep(500);
  return "이가나";
};

const getCat = async () => {
  await sleep(3000);
  return "바론";
};

async function process() {
  const dog = await getDog();
  console.log(dog);
  const igu = await getIgu();
  console.log(igu);
  const cat = await getCat();
  console.log(cat);
}

process();
// 1000 있다가 멍멍이, 500 있다가 이가나, 3000 있다가 바론
// 하나씩 처리

// promise.all를 동시에 처리하고 싶다
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 화살표 함수로 작성할때 async를 쓰고 싶다면 괄호 앞에 쓰기
const getDog = async () => {
  await sleep(1000);
  return "멍멍이";
};

const getIgu = async () => {
  await sleep(500);
  return "이가나";
};

const getCat = async () => {
  await sleep(3000);
  return "바론";
};

// async function process() {
//   const results = await Promise.all([getDog(), getIgu(), getCat()]);
//   console.log(results);
// }

// process(); // 3초 뒤에(바론이 3000) ["멍멍이", "이가나", "바론"]

// promise.race
async function process() {
  const first = await Promise.race([getDog(), getIgu(), getCat()]);
  console.log(first);
}

process(); // 이가나 (500) promise.race 젤 빠른 걸로 나옴
// 위 셋(멍멍이, 이가나, 바론) 중에 가장 빨리 끝나는 것이 에러가 나면 전체 에러로 간주
// 두 번째가 에러나면 에러로 간주하지 않음
// 셋 중 하나라도 에러가 있으면 try catch로 에러를 잡을 수 있음
