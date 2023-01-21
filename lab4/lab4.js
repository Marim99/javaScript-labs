//Constructor functions Method
function Person1(fullName, money, sleepMode, healthRate) {
  this.fullName = fullName;
  this.money = money;
  this.sleepMode = sleepMode;
  this.healthRate = healthRate;
}

Person1.prototype.sleep = (hours) => {
  if (hours == 7) {
    this.sleepMode = "happy";
  } else if (hours < 7) {
    this.sleepMode = "tired";
  } else {
    this.sleepMode = "lazy";
  }
};

Person1.prototype.eat = (meals) => {
  if (meals == 3) {
    this.healthRate = 100;
  } else if (meals == 2) {
    this.healthRate = 75;
  } else if (meals == 1) {
    this.healthRate = 50;
  }
};

Person1.prototype.buy = (items) => {
  this.money -= 10 * items;
};

const p1 = new Person1("Mariam khaled", 10000, "happy", 75);
console.log(p1);
p1.eat(3);
console.log(p1);

// Class mathod
class Person2 {
  constructor(fullName, money, sleepMode, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMode = sleepMode;
    this.healthRate = healthRate;
  }

  sleep(hours) {
    if (hours == 7) {
      this.sleepMode = "happy";
    } else if (hours < 7) {
      this.sleepMode = "tired";
    } else {
      this.sleepMode = "lazy";
    }
  }
  eat(meals) {
    if (meals == 3) {
      this.healthRate = 100;
    } else if (meals == 2) {
      this.healthRate = 75;
    } else if (meals == 1) {
      this.healthRate = 50;
    }
  }
  buy(items) {
    this.money -= 10 * items;
  }
}

const p2 = new Person2("hager khaled", 10000, "happy", 75);
console.log(p2);
p2.sleep(3);
console.log(p2);

//  Objects Linking to Other Objects (OLOO) method
const Person3 = {
  init(fullName, money, sleepMode, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMode = sleepMode;
    this.healthRate = healthRate;
  },

  sleep(hours) {
    if (hours == 7) {
      this.sleepMode = "happy";
    } else if (hours < 7) {
      this.sleepMode = "tired";
    } else {
      this.sleepMode = "lazy";
    }
  },
  eat(meals) {
    if (meals == 3) {
      this.healthRate = 100;
    } else if (meals == 2) {
      this.healthRate = 75;
    } else if (meals == 1) {
      this.healthRate = 50;
    }
  },
  buy(items) {
    this.money -= 10 * items;
  },
};
const p3 = Object.create(Person3);
p3.init("alaa khaled", 10000, "happy", 75);
console.log(p3);
p3.buy(2000);
console.log(p3);

// Factory functions method
function Person4(fullName, money, sleepMode, healthRate) {
  return {
    fullName,
    money,
    sleepMode,
    healthRate,

    sleep(hours) {
      if (hours == 7) {
        this.sleepMode = "happy";
      } else if (hours < 7) {
        this.sleepMode = "tired";
      } else {
        this.sleepMode = "lazy";
      }
    },
    eat(meals) {
      if (meals == 3) {
        this.healthRate = 100;
      } else if (meals == 2) {
        this.healthRate = 75;
      } else if (meals == 1) {
        this.healthRate = 50;
      }
    },
    buy(items) {
      this.money -= 10 * items;
    },
  };
}
const p4 = Person4("Radwa khalil", 10000, "happy", 75);
console.log(p4);
p4.sleep(2);
console.log(p4);
