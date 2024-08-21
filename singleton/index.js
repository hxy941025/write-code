// 利用new完之后指向当前对象，将实例都指向第一个
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    this.data = "this is singleton";
    
    Singleton.instance = this;
  }

  getData() {
    return this.data;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log("instance", instance1 === instance2);
