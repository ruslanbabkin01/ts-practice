class Zhiguli_8 {
  private needRepair = false;
  private maxEngineLoad = 3;

  /**
   * Заводить двигун машини, якщо це можливо
   */
  private checkEngine () {
    // Перевіряємо, чи не зламаний двигун
    if (this.needRepair) {
      throw new Error('Engine not work');
    }

    // Пробуємо його завести
    const engineLoad = Math.floor(Math.random() * this.maxEngineLoad) + 1;
    if (this.maxEngineLoad === engineLoad) {
      this.needRepair = true;
      throw new Error('Engine broken again');
    }
  }

  /**
   * Завести двигун
   */
  public startEngine () {
    this.checkEngine();

    console.log('Ta-ta-ta-ta');
  }

  /**
   * Ремонт двигуна
   */
  public repairEngine () {
    this.needRepair = false;

    console.log('Engine rebuilt');
  }
}

function protectedMethod () {
  return 'Something';
}

class myClass {
  myPublicMethod() {
    return protectedMethod();
  }
}

// class myClass {
//   private protectedMethod () {
//     return 'Something';
//   }

//   public myPublicMethod() {
//     return this.protectedMethod();
//   }
// }

// class classA {
//   myMethod () {
//     return "I'm a class A";
//   }
// }

// class classB extends classA {
  
// }

class classA {
  myMethod () {
    return "I'm a class A";
  }
}

class classB extends classA {
  myMethod () {
    return "I'm a class B";
  }
}

class Animal {
  public say() {
    console.log("Nothing to say"); 
  }
}
  
class Cat extends Animal {
  public say() { 
    console.log("Meow");
  }
}
  
class Dog extends Animal {
  public say() {
    console.log("Woof");
  }
}

const cat = new Cat();
cat.say(); // Meow

const dog = new Dog();
dog.say(); // Woof


// class classA {
//   private process1 () {
//     return 1;
//   }
//   private process2 () {
//     return 2;
//   }
//   private process3 () {
//     return 3;
//   }

//   public superProcess () {
//     return this.process1() + this.process2() + this.process3();
//   }
// }

class Vehicle {
  public startEngine() {
      // Default engine start functionality
  }
  public accelerate() {
      // Default acceleration functionality
  }
}

class Car extends Vehicle {
  public startEngine() {
      this.engageIgnition();
      super.startEngine();
  }

  private engageIgnition() {
      // Ignition procedure
  }
}
class ElectricBus extends Vehicle {
  public accelerate() {
      this.increaseVoltage();
      this.connectIndividualEngines();
  }

  private increaseVoltage() {
      // Electric logic
  }

  private connectIndividualEngines() {
      // Connection logic
  }
}

class Driver {
  go(v: Vehicle) {
      v.startEngine();
      v.accelerate();
  }
}

interface JsonInterface {
  jsonParse(): string;
}

interface HtmlInterface {
  htmlParse(): string;
}

// class Parser implements ShapeInterface, SolidShapeInterface {
//   public jsonParse(): string {
//       return 'Json';
//   }

//   public htmlParse(): string {
//       return 'Html';
//   }
// }

// class Animal {
//   eat () {
//     const feeder = new Feeder();
//     feeder.getFood();
//     // eat
//   }
// }

// class Animal {
//   private foodProvider: Feeder;

//   constructor (feeder: Feeder) {
//     this.foodProvider = feeder;
//   }

//   eat () {
//     this.foodProvider.getFood();
//     // eat
//   }
// }