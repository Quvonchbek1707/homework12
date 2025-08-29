class Universitet {
    constructor(name) {
        this.name = name;
        this.departments = [];
    }

    addDepartment(department) {
        this.departments.push(department);
    }

    removeDepartment(department) {
        this.departments = this.departments.filter(dep => dep !== department);
    }

    showDepartments() {
        console.log(`Universitet: ${this.name}`);
        console.log("Bo'limlar:");
        this.departments.forEach(dep => console.log(`- ${dep}`));
    }
}

const universitet = new Universitet("Najot Ta'lim");
universitet.addDepartment("Algoritmlar");
universitet.addDepartment("Subject A");
universitet.addDepartment("Subject H");
universitet.addDepartment("Subject L");
universitet.addDepartment("Training");
universitet.removeDepartment("Algoritmlar");
universitet.removeDepartment("Subject A");
universitet.showDepartments();