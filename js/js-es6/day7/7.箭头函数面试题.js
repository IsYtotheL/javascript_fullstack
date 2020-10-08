var age = 100;

var obj = {
  age: 20,
  say: () => {
    alert(this.age)
  }
}

obj.say();