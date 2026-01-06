const testob = [
  {
    id: 1,
    name: "Hein Htet Zaw",
    class: "Nah",
  },
  {
    id: 2,
    name: "Bay Bay",
    class: "Business",
  },
  {
    id: 3,
    name: "Okker paing",
    class: "Developer",
  },
];

const showsmth = function () {
  let names = testob.map((name) => name.name);
  return names;
};

console.log(showsmth());
