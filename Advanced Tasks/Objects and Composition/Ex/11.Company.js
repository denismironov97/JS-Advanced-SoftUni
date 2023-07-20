class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    let args = [];
    args.push(name);
    args.push(salary);
    args.push(position);
    args.push(department);

    if (args.some((arg) => arg == "" || arg == null || arg == undefined)) {
      throw new Error("Invalid input!");
    }

    if (salary < 0) {
      throw new Error("Invalid input!");
    }

    const employee = {
      name,
      salary,
      position,
      department,
    };

    if (!this.departments.hasOwnProperty(department)) {
      this.departments[department] = [];
    }

    this.departments[department].push(employee);

    return `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`;
  }

  bestDepartment() {
    let averagesDepartments = [];
    for (const department in this.departments) {
      let totalEarningPotential = 0;
      let employeesInCurrDepartment = this.departments[department];

      for (const currEmployee of employeesInCurrDepartment) {
        totalEarningPotential += currEmployee.salary;
      }

      let averageSalary =
        Math.round(
          (totalEarningPotential / employeesInCurrDepartment.length) * 100
        ) / 100;
      //Math.round(num * 100) / 100

      averagesDepartments.push({ averageSalary, department });
    }

    averagesDepartments.sort((a, b) => b.averageSalary - a.averageSalary);
    const highestAverageSalaryData = averagesDepartments[0];

    const highestAverageSalary = highestAverageSalaryData.averageSalary;

    const workers = this.departments[highestAverageSalaryData.department];
    workers.sort((w1, w2) => {
      if (w2.salary - w1.salary) {
        return w1.name.localeCompare(w2.name);
      }
    });

    let stringB = "";
    stringB +=
      `Best Department is: ${highestAverageSalaryData.department}` + "\n";
    stringB += `Average salary: ${highestAverageSalary.toFixed(2)}` + "\n";

    for (const w of workers) {
      stringB += `${w.name} ${w.salary} ${w.position}'\n'`;
    }

    return stringB;
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
