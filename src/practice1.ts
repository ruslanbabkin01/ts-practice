// Задайте правильні ts типи для класичних js;
let age: number;
age = 50;
let names: string;
names = 'Max';
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;
// let callback = (a: number) => number;
// callback=(a)=> { return 100 + a };

// Задайте тип для змінної, в яку можна зберегти будь-яке значення.
let anything: any;
anything = -20;
anything = 'Text';
anything = {};

// Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
let some:unknown;
some = 'Text';
let str: string;
if (typeof some === 'string') {
   str = some;
}

// Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.(Tuple)
let person: [string, number];
person= ['Max', 21];

// Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
enum Role {LOADING, READY};
const download = {
  status: Role.LOADING,
}
if (download.status === Role.LOADING) {
  console.log('Role: ', Role.LOADING);
}
if (download.status === Role.READY) {
  console.log('Role: ', Role.READY);
}
// Зробіть змінну, яка може приймати або рядок, або число.Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
let value: string | number;
let position: 'enable' | 'disable';
// Вкажіть типи для наступних функцій
function showMessage(message:string):void {
  console.log(message);
}

function calc(num1:number, num2:number):number {
  return num1 + num2;
}

function customError():never {
  throw new Error('Error');
}
// Створіть свій тип даних на основі наявних даних.
type PagesType = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open'|'close';
  details?: {
    createAt: string,
    updateAt: string
  }
}
const page1:PagesType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2:PagesType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}