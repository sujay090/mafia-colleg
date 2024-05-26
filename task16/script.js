const students = [
  {
    name: "Alice",
    marks: { math: 85, science: 90, english: 80 },
    class: 10,
    address: "123 Main Street, Cityville",
  },
  {
    name: "Bob",
    marks: { math: 75, science: 85, english: 70 },
    class: 9,
    address: "456 Elm Street, Townsville",
  },
  {
    name: "Charlie",
    marks: { math: 90, science: 80, english: 85 },
    class: 11,
    address: "789 Oak Street, Villagetown",
  },
  {
    name: "David",
    marks: { math: 80, science: 85, english: 75 },
    class: 10,
    address: "321 Pine Street, Hamletville",
  },
  {
    name: "Emma",
    marks: { math: 95, science: 88, english: 92 },
    class: 11,
    address: "654 Cedar Street, Countryside",
  },
  {
    name: "Frank",
    marks: { math: 70, science: 75, english: 65 },
    class: 9,
    address: "987 Maple Street, Riverside",
  },
  {
    name: "Grace",
    marks: { math: 82, science: 78, english: 85 },
    class: 10,
    address: "135 Oak Street, Hillside",
  },
  {
    name: "Henry",
    marks: { math: 88, science: 82, english: 90 },
    class: 11,
    address: "246 Walnut Street, Lakeside",
  },
  {
    name: "Isabella",
    marks: { math: 78, science: 80, english: 72 },
    class: 9,
    address: "579 Elm Street, Mountainview",
  },
  {
    name: "Jack",
    marks: { math: 87, science: 89, english: 84 },
    class: 10,
    address: "864 Pine Street, Beachside",
  },
  {
    name: "Katie",
    marks: { math: 92, science: 94, english: 88 },
    class: 11,
    address: "159 Cedar Street, Valleyview",
  },
  {
    name: "Liam",
    marks: { math: 85, science: 90, english: 82 },
    class: 10,
    address: "438 Maple Street, Parkview",
  },
  {
    name: "Mia",
    marks: { math: 83, science: 85, english: 78 },
    class: 9,
    address: "753 Oak Street, Hilltop",
  },
  {
    name: "Noah",
    marks: { math: 89, science: 91, english: 86 },
    class: 11,
    address: "864 Walnut Street, Waterside",
  },
  {
    name: "Olivia",
    marks: { math: 90, science: 92, english: 88 },
    class: 10,
    address: "357 Pine Street, Mountainville",
  },
  {
    name: "Peter",
    marks: { math: 76, science: 79, english: 70 },
    class: 9,
    address: "579 Cedar Street, Countryside",
  },
  {
    name: "Quinn",
    marks: { math: 84, science: 86, english: 80 },
    class: 10,
    address: "159 Elm Street, Lakeside",
  },
  {
    name: "Rachel",
    marks: { math: 93, science: 95, english: 90 },
    class: 11,
    address: "753 Pine Street, Riverside",
  },
  {
    name: "Samuel",
    marks: { math: 82, science: 84, english: 78 },
    class: 10,
    address: "246 Oak Street, Parkville",
  },
  {
    name: "Sophia",
    marks: { math: 91, science: 93, english: 87 },
    class: 9,
    address: "438 Cedar Street, Hillview",
  },
  {
    name: "Thomas",
    marks: { math: 88, science: 90, english: 85 },
    class: 10,
    address: "864 Elm Street, Mountainville",
  },
  {
    name: "Uma",
    marks: { math: 77, science: 79, english: 72 },
    class: 11,
    address: "357 Pine Street, Beachside",
  },
  {
    name: "Victor",
    marks: { math: 85, science: 87, english: 82 },
    class: 10,
    address: "579 Cedar Street, Lakeside",
  },
  {
    name: "Wendy",
    marks: { math: 80, science: 82, english: 75 },
    class: 9,
    address: "753 Oak Street, Hilltop",
  },
  {
    name: "Xavier",
    marks: { math: 92, science: 94, english: 88 },
    class: 10,
    address: "438 Maple Street, Valleyview",
  },
  {
    name: "Yasmine",
    marks: { math: 86, science: 88, english: 84 },
    class: 11,
    address: "864 Walnut Street, Parkview",
  },
  {
    name: "Zoe",
    marks: { math: 78, science: 80, english: 75 },
    class: 10,
    address: "159 Cedar Street, Waterside",
  },
];
let flag = "";
const studenContainer = document.querySelector(".student-data-container");

function showStudentData() {
  students.forEach((item) => {
    flag += `<div class="student-data">
      <p>Student Name: <span class="name">${item.name}</span></p>
      <p>Marks: <span class="marks">${item.marks.math}%</span></p>
      <p>Class : <span class="class">${item.class}</span></p>
      <p>Adress : <span class="address">${item.address}</span></p>
    </div>`;
  });
  studenContainer.innerHTML = flag;
}

const searchdata = document.querySelector(".search");
searchdata.addEventListener("click", (e) => {
  const nameInput = document.querySelector(".middle-search input").value;
  const filteredStudents = students.filter((student) =>
    student.name[0].toLowerCase().includes(nameInput[0].toLowerCase())
  );
  studenContainer.innerHTML = "";
  let flag2 = "";
  filteredStudents.forEach((item2) => {
    flag2 += `<div class="student-data">
      <p>Student Name: <span class="name">${item2.name}</span></p>
      <p>Marks: <span class="marks">${item2.marks.math}%</span></p>
      <p>Class : <span class="class">${item2.class}</span></p>
      <p>Adress : <span class="address">${item2.address}</span></p>
    </div>`;
  });
  studenContainer.innerHTML = flag2;
  console.log(filteredStudents);
});

showStudentData();
