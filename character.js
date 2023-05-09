class character{
constructor(name, house, age, state)
this.name = name;
this.house = house;
this.age = age;
this.state = state;
}
class Rey extends Personaje {
  constructor(name, house, age, state, reign) {
    super(name, house, age, state);
    this.reign = reign;
  }
}
class Escudero extends Personaje{
  constructor(name, house, age, state, serveTo){
    super(name, house, age, state);
   this.serveTo = serveTo;
  }
}
