class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log("observer-update", this.name + data);
  }
}

class Subject {
  constructor() {
    this.observerList = [];
  }

  addObserver(obFn) {
    this.observerList.push(obFn);
  }

  removeObserver(obFn) {
    this.observerList = this.observerList.filter((it) => {
      return it.name !== obFn.name;
    });
  }

  notify(data) {
    this.observerList.forEach((obFn) => {
      obFn.update(data);
    });
  }
}

const subject = new Subject();
const ob1 = new Observer("ob1");
const ob2 = new Observer("ob2");
const ob3 = new Observer("ob3");

subject.addObserver(ob1);
subject.addObserver(ob2);
subject.addObserver(ob3);

subject.notify("Hello world!");

subject.removeObserver(ob3);

subject.notify("hello asd");
