
// services.forEach(service => console.log(service.headline))

// let newDiv = document.createElement("div");
// newDiv.textContent = "Hej med dig";
// document.body.append(newDiv);





let students = [

    {name: "alex", age: 20, course: "webudvikler"},
    {name: "david", age: 18, course: "digitalMedia"},
    {name: "kendrick", age: 25, course: "MediaGrafiker"},
]
let studentListDiv = document.querySelector(".student-list");

students.forEach( student => {
       const studentDiv = document.createElement("div");
       studentDiv.textContent = `${student.name}, Alder: ${student.age}. course: ${student.course}`;
       studentListDiv.append(studentDiv);
       studentDiv.classList.add("student")
});


