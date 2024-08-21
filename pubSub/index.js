class EventChannel {
  constructor() {
    this.subscriptions = {};
  }

  subscribe(eventType, cb) {
    if (!this.subscriptions[eventType]) {
      this.subscriptions[eventType] = [];
    }
    this.subscriptions[eventType].push(cb);
  }

  publish(eventType, data) {
    if (this.subscriptions[eventType]) {
      this.subscriptions[eventType].forEach((cb) => {
        cb(data);
      });
    }
  }
}

const eventChannel = new EventChannel();

const cb1 = (data) => {
  console.log("cb1", data);
};

const cb2 = (data) => {
  console.log("cb2", data);
};

const cb3 = (data) => {
  console.log("cb3", data);
};

eventChannel.subscribe("fn1", cb1);
eventChannel.subscribe("fn2", cb2);
eventChannel.subscribe("fn2", cb3);

eventChannel.publish("fn1", "123");
eventChannel.publish("fn2", "456");
