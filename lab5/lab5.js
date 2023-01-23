class Person {
  #fullName;
  #money;
  #sleepMood;
  #healthRate;
  constructor() {}
  set fullName(name) {
    this.#fullName = name;
  }
  set money(money) {
    this.#money = money;
  }
  set sleepMood(mood) {
    this.#sleepMood = mood;
  }
  set healthRate(rate) {
    if (rate >= 0 && rate <= 100) {
      this.#healthRate = rate;
    } else {
      console.log("healthRate must be between 0 and 100");
    }
  }
  get fullName() {
    return this.#fullName;
  }
  get money() {
    return this.#money;
  }
  get sleepMode() {
    return this.#sleepMood;
  }
  get healthRate() {
    return this.#healthRate;
  }
  sleep(hours) {
    if (hours == 7) {
      this.#sleepMood = "happy";
    } else if (hours < 7) {
      this.#sleepMood = "tired";
    } else {
      this.#sleepMood = "lazy";
    }
  }
  eat(meals) {
    if (meals == 3) {
      this.#healthRate = 100;
    } else if (meals == 2) {
      this.#healthRate = 75;
    } else if (meals == 1) {
      this.#healthRate = 50;
    }
  }
  buy(items) {
    this.#money -= 10 * items;
  }
}

class Employee extends Person {
  constructor() {
    super();
  }
  #id;
  #email;
  #isManager;
  #workMood;
  #salary;
  work(hours) {
    if (hours == 8) {
      this.workMood = "happy";
    } else if (hours > 8) {
      this.workMood = "tired";
    } else {
      this.workMood = "lazy";
    }
  }
  get id() {
    return this.#id;
  }
  set id(id) {
    this.#id = id;
  }
  set email(email) {
    this.#email = email;
  }
  get email() {
    return this.#email;
  }
  set isManager(isManager) {
    this.#isManager = isManager;
  }
  get isManager() {
    return this.#isManager;
  }
  set workMood(work) {
    this.#workMood = work;
  }
  get workMood() {
    return this.#workMood;
  }
  get salary() {
    return this.#salary;
  }
  /**
   * @param {number} salary
   */
  set salary(salary) {
    if (salary >= 1000) {
      this.#salary = salary;
    } else {
      console.log("salary must be 1000$ or more");
    }
  }
}

class Office {
  #name;
  #employees = [];
  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
  get employees() {
    return this.#employees;
  }
  set employees(name) {
    this.#employees = name;
  }
  getEmployeeById(employeeId) {
    for (let em of this.#employees) {
      if (em.id == employeeId) {
        return em;
      } else {
        return "not found";
      }
    }
  }
  hire(employee) {
    this.#employees.push(employee);
  }
  fireById(employeeId) {
    this.#employees = this.#employees.filter((emp) => employeeId != emp.id);
  }
}

const mariam = new Employee();
mariam.fullName = "mariam khaled";
mariam.money = 120000;
mariam.id = 1;
mariam.isManager = true;
mariam.healthRate = 100;
mariam.sleepMood = "happy";
mariam.workMood = "happy";
mariam.salary = 12000;

const hager = new Employee();
hager.fullName = "hager khaled";
hager.money = 120000;
hager.id = 1;
hager.isManager = false;
hager.healthRate = 100;
hager.sleepMood = "happy";
hager.workMood = "happy";
hager.salary = 12568;
const office1 = new Office();
office1.name = "office";
office1.hire(hager);
office1.hire(mariam);

// generate unique id
function uniqueNumber(employees) {
  var eId = Math.floor(Math.random() * 100);
  if (!employees.includes(eId)) {
    return eId;
  } else {
    uniqueNumber(employees);
  }
}

// fill employee function
function fillEmployee() {
  let isManager =
    prompt(
      "is this emplyee manger or normal employee ? \n if manger write (mngr) \n if normal employee write (nrml) "
    ) == "mngr"
      ? true
      : false;
  let eName = prompt("enter his/her name ");
  let emp = new Employee();
  (emp.fullName = eName),
    (emp.id = uniqueNumber(office1.employees)),
    (emp.isManager = isManager);
  office1.hire(emp);
  return emp;
}

function App() {
  let cancel = true;
  while (cancel) {
    let operation = prompt(
      "you can \n hire employee (1)\n fire employee (2)\n display all employees (3)\n display data for one employee (4)\n quit the application (5)"
    );
    switch (operation) {
      case "1":
        let newEmp = fillEmployee();
        alert(`employee added !\n id: ${newEmp.id} name: ${newEmp.fullName}`);
        break;
      case "2":
        let empId = prompt("enter employee id you want to fire");
        office1.fireById(empId);
      case "3":
        office1.employees.map((e) =>
          alert(`id = ${e.id} name = ${e.fullName}`)
        );
        break;
      case "4":
        let empIdToDisplay = prompt(
          "enter employee id you want to see his or her data"
        );
        let emp = office1.getEmployeeById(empIdToDisplay);
        alert(`name :${emp.fullName} id : ${emp.id}`);
        break;
      case "5":
        cancel = false;
        break;
    }
  }
}

App();
