// Factory Pattern
// BURADAKI TEMEL AMAC POLYMORPHISIMDIR YANI BIRIRINE COK BENZEYEN OBJELERE COK FAZLA KOD YAZILMADAN ASLINDA HER BIRI ICIN YENI KODALRA YAZILMADAN
// SADECE FARKLI OLAN KISIMLAR ELE ALINARAK YAPILAN ISLEMDIR
// HIZ OKUNABILIRLIK VE SADELIK SAGLAR

function Factory() {
  this.createEmployee = function (type) {
    var employee;

    if (type === "fulltime") {
      employee = new FullTime();
    } else if (type === "parttime") {
      employee = new PartTime();
    } else if (type === "temporary") {
      employee = new Temporary();
    }
    employee.type = type;
    employee.say = function () {
      console.log(this.type + " : saatlik ücreti : " + this.hourly);
    };
    return employee;
  };
}

var FullTime = function () {
  this.hourly = "30TL";
};

var PartTime = function () {
  this.hourly = "20TL";
};

var Temporary = function () {
  this.hourly = "15TL";
};

var factory = new Factory();

var employees = [];

employees.push(factory.createEmployee("fulltime"));
employees.push(factory.createEmployee("parttime"));
employees.push(factory.createEmployee("parttime"));
employees.push(factory.createEmployee("temporary"));
employees.push(factory.createEmployee("temporary"));
employees.push(factory.createEmployee("fulltime"));

employees.forEach(function (emp) {
  emp.say();
});
