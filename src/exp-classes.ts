// const house = new House('Middle-earth');

// class House {
//   street:string;

//   constructor (n: string) {
//     this.street = n;
//   }

//   showAddress () {
//     console.log('Address: ' + this.street);
//   }
// }

// const house = new House('Middle-earth');

// house.showAddress();

// const house = new House('Middle-earth');

// house.showAddress();

// const houseCopy = { showAddress: house.showAddress };

// houseCopy.showAddress();

// showAddress (this: House) {
//   console.log('Address: ' + this.street);
// }


// const houseCopy = { street: 'Dummy', showAddress: house.showAddress };

// houseCopy.showAddress();


// class A {
//   private someProperty = 'str';
// }

// class B extends A {
//   showProperty () {
//     console.log(this.someProperty);
//   }
// }


// class A {
//   protected someProperty = 'str';
// }

// class B extends A {
//   showProperty () {
//     console.log(this.someProperty);
//   }
// }


// const a = new A();
// const b = new B();

// a.someProperty;
// b.someProperty;

// b.showProperty();

// class House {
//   private street:string;
//   private tenants:string[] = [];

//   constructor (n: string) {
//     this.street = n;
//   }

//   public showAddress (this: House) {
//     console.log('Address: ' + this.street);
//   }

//   public addTenant (tenant: string) {
//     this.tenants.push(tenant);
//   }

//   public showTenants () {
//     console.log(this.tenants);
//   }
// }

// const house = new House('Middle-earth');

// house.addTenant('Anton');
// house.addTenant('Nikita');

// house.showTenants();

// const house = new House('Middle-earth');

// house.tenants.push('Anton');

// class House {
//   private street:string;

//   constructor (n: string) {
//     this.street = n;
//   }
// }

// class House {
//   private type:string;
//   private street:string;

//   constructor (type:string, n: string) {
//     this.id = id;
//     this.street = n;
//   }
// }

// class House {
//   constructor (private type: string, private street: string) {

//   }
// }

// class House {
//   constructor (private type: string, private street: string) {

//   }

//   changeType (type: string) {
//     this.type = type;
//   }
// }

// class House {
//   constructor (private readonly type: string, private street: string) {

//   }

//   changeType (type: string) {
//     this.type = type;
//   }
// }

// class House {
//   constructor (private readonly type: string, private street: string) {

//   }
// }

// class StoneHouse extends House  {
//   constructor (street: string) {
//     super('stone', street); // Виклик батьківського конструктора
//   }
// }

// const stoneHouse = new StoneHouse('Stone-world');

// class House {
//   private tenants:string[] = [];

//   constructor (private readonly type: string, private street: string) {}

//   public showAddress (this: House) {
//     console.log('Address: ' + this.street);
//   }

//   public showType (this: House) {
//     console.log('House Type: ' + this.type);
//   }

//   public addTenant (tenant: string) {
//     this.tenants.push(tenant);
//   }

//   public showTenants () {
//     console.log(this.tenants);
//   }
// }


// class StoneHouse extends House  {
//   private chargeOfTheHouse: string; // Головний в будинку

//   constructor (street: string, generalTenant: string) {
//     super('stone', street); // Виклик батьківського конструктора

//     // Додаємо власника квартири
//     this.chargeOfTheHouse = generalTenant;
//     this.addTenant(generalTenant);
//   }

//   public showTenants () {
//     console.log('General: ' + this.chargeOfTheHouse);

//     // Запускаємо батьківський метод showTenants();
//     super.showTenants();
//   }
// }

// const stoneHouse = new StoneHouse('Stone-world', 'Max');

// stoneHouse.addTenant('Anton');
// stoneHouse.addTenant('Nikita');

// stoneHouse.showTenants();
// stoneHouse.showType();
// stoneHouse.showAddress();


// type PersonInformation = {
//   firstName?: string;
//   lastName?:  string;
// }

// class Person {
//   private personInfo: PersonInformation = {};

//   set firstName (value: string) {
//     console.log('firstName added');
//     this.personInfo.firstName = value;
//   }

//   set lastName (value: string) {
//     console.log('lastName added');
//     this.personInfo.lastName = value;
//   }

//   get info () {
//     const { personInfo } = this;
//     return `${personInfo.lastName} ${personInfo.firstName}`;
//   }
// }

// const person = new Person();

// person.lastName = 'Pupkin';
// person.firstName = 'Petha';

// console.log(person.info);

// class UseStatic {
//   private static count = 0;

//   constructor () {
//     UseStatic.count += 1;
//   }

//   public static itStaticMethod () {
//     console.log('Run static method');
//   }

//   public showCount () {
//     console.log(UseStatic.count);
//   }
// }

// const obj1 = new UseStatic();
// const obj2 = new UseStatic();
// const obj3 = new UseStatic();

// obj1.showCount();
// obj2.showCount();
// obj3.showCount();

// UseStatic.itStaticMethod();

// abstract class Plane {
//   protected pilotInCabin = false;

//   public sitInPlane () {
//     this.pilotInCabin = true;
//   }

//   public abstract startEngine(): boolean;
// }


// class Maize extends Plane {
//   public startEngine () {
//     // Запускаємо гвинти двигуна
//     return true;
//   }
// }

// class Boeing extends Plane {
//   public startEngine () {
//     // Розігріваємо реактивні турбіни
//     return true;
//   }
// }


// interface IPerson {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user: IPerson;

// user = {
//   name: 'Anthony',
//   age: 21,

//   greet(phrase) {
//     console.log(phrase + ' ' + this.name );
//   }
// };


// user.greet('Усім привіт я');


// type IPerson = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user: IPerson;

// user = {
//   name: 'Anthony',
//   age: 21,

//   greet(phrase) {
//     console.log(phrase + ' ' + this.name );
//   },
// };


// interface IPerson {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// interface IPilot {
//   flyMessage(): void;
// }

// class Pilot implements IPerson, IPilot {
//   constructor (public name: string, public age: number) {
//     if (this.age < 28) {
//       throw new Error('Pilot to young');
//     }
//   }

//   greet(phrase: string): void {
//     console.log(phrase + ' ' + this.name );
//   };

//   flyMessage(): void {
//     console.log('Літак набрав висоту, всім приємного польоту!');
//   };
// }

// const pilot = new Pilot('Anthony', 32);

// pilot.greet('Вас вітає капітан корабля');
// pilot.flyMessage();


// interface IPerson {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// interface IPilot {
//   flyMessage(): void;
// }

// class Pilot implements IPerson, IPilot {
//   constructor (public name: string, public age: number) {
//     if (this.age < 28) {
//       throw new Error('Pilot too young');
//     }
//   }

//   greet(phrase: string): void {
//     console.log(phrase + ' ' + this.name );
//   };

//   flyMessage(): void {
//     console.log('Літак набрав висоту, всім приємного польоту!');
//   };
// }


// abstract class Plane {
//   protected pilot?:IPilot;

//   public sitInPlane (pilot: IPilot):void {
//     this.pilot = pilot;
//   }

//   public abstract startEngine(): boolean;
// }

// class Boeing extends Plane {
//   public startEngine (): boolean {
//     if (!this.pilot) {
//       throw new Error('No pilot in cabin');
//     }
//     // Розігріваємо реактивні турбіни
//     console.log('Запуск турбін');

//     this.pilot.flyMessage();
//     return true;
//   }
// }

// const boeing = new Boeing();
// const pilot = new Pilot('Anthony', 32);

// // Капітан вітає пасажирів на трапі
// pilot.greet('Вас вітає капітан корабля');

// // Займає місце пілота
// boeing.sitInPlane(pilot);

// // Запускаємо двигуни
// boeing.startEngine();

// class Terrorist implements  IPilot  {
//   bluff(phrase: string): void {
//     console.log(phrase);
//   };

//   flyMessage(): void {
//     console.log('Наші вимоги 9 мільйонів, інакше ми можемо вбити всіх заручників');
//   };
// }

// const boeing = new Boeing();
// const pilot = new Terrorist();

// //Капітан вітає пасажирів на трапі
// pilot.bluff('Ми захопили цей літак!');

// // Займає місце пілота
// boeing.sitInPlane(pilot);

// // Запускаємо двигуни
// boeing.startEngine();



// interface ITest {
//   readonly name: string;
// }

// const person:ITest = {
//   name: 'Person Name',
// }

// person.name = 'Person name';


// interface IPerson {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// interface IPilot extends IPerson {
//   flyMessage(): void;
// }

// type AddFunc = (n1: number, n2: number) => number;

// let add: AddFunc;

// add = (n1:number, n2: number) => {
//   return n1 + n2;
// }


// //type AddFunc = (n1: number, n2: number) => number;
// interface AddFunc {
//   (n1: number, n2: number): number;
// }

// let add: AddFunc;

// add = (n1:number, n2: number) => {
//   return n1 + n2;
// }



// interface IPerson {
//   name?: string;
//   age: number;
// }

// class Person implements IPerson {
//   name?: string;
  
//   constructor (public age: number) {}

//   setName (n:string) {
//     this.name = n;
//   }
// }