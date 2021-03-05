let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = (obj) => obj.glide = () => console.log("I'm gliding!");

glideMixin(bird);
glideMixin(boat);
// Only change code below this line