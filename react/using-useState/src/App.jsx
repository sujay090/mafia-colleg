// import { useState } from "react";
import { useState } from "react";
import "remixicon/fonts/remixicon.css";
// const App = () => {
//   const [showImg, setShowimg] = useState(true);
//   const [bgChange, setBgChange] = useState("red");
//   const [input

//   const [list, setList] = useState([]);
//   const addList = () => {
//     if (input !== "") {
//       setList([...list, input]);
//       setInput("");
//     }
//     // Reset the input field
//   };
//   const deletList = (index) => {
//     list.splice(index, 1);
//     setList([...list]);
//   };
//   const shoingBackground = () => {
//     bgChange === "red" ? setBgChange("green") : setBgChange("red");
//   };
//   const showingImg = () => {
//     setShowimg(!showImg);
//   };
//   return (
//     <div
//       style={{
//         backgroundColor: "gray",
//         color: "white",
//         minHeight: "100vh",
//         width: "60%",
//         margin: "0 auto",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >
//       <nav
//         style={{
//           backgroundColor: "white",
//           height: "60px",
//           width: "60%",
//           margin: "0 auto",
//         }}
//       >
//         <h1
//           style={{
//             textAlign: "center",
//             color: "black",
//           }}
//         >
//           To learn the UseState Using Project
//         </h1>
//       </nav>

//       <div
//         style={{
//           width: "60%",
//           margin: "0 auto",
//         }}
//       >
//         {showImg && (
//           <img
//             style={{
//               width: "50%",
//               display: "block",
//             }}
//             src="https://i.pinimg.com/236x/ff/c0/89/ffc08980efecfd97e96c1cdba7b28f00.jpg"
//             alt=""
//           />
//         )}

//         <button
//           style={{
//             backgroundColor: "black",
//             color: "white",
//             padding: "10px",
//             margin: "10px",
//             display: "block",
//             width: "50%",
//             cursor: "pointer",
//             border: "none",
//             borderRadius: "10px",
//           }}
//           onClick={showingImg}
//         >
//           {showImg ? "hide" : "show"}
//         </button>
//       </div>
//       <div
//         style={{
//           width: "60%",
//           margin: "0 auto",
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: bgChange,
//             width: "100%",
//             height: "200px",
//           }}
//         ></div>

//         <button
//           style={{
//             backgroundColor: "black",
//             color: "white",
//             padding: "10px",
//             margin: "10px",
//             display: "block",
//             width: "50%",
//             cursor: "pointer",
//             border: "none",
//             borderRadius: "10px",
//           }}
//           onClick={shoingBackground}
//         >
//           {bgChange == "red" ? "green" : "red"}
//         </button>
//       </div>

//       <h1>Live previw</h1>

//       <div>
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           style={{
//             width: "100%",
//             margin: "0 auto",
//             padding: "10px",
//             borderRadius: "10px",
//             border: "none",
//             outline: "none",
//             backgroundColor: "white",
//             color: "black",
//             fontSize: "20px",
//           }}
//           type="text"
//           placeholder="Entr the text"
//         />
//         <button
//           style={{
//             backgroundColor: "blue",
//             width: "50%",
//             color: "white",
//             border: "none",
//             padding: "6px 0",
//             borderRadius: 4,
//             margin: "10px",
//             cursor: "pointer",
//           }}
//           onClick={addList}
//         >
//           Add
//         </button>
//         <ul>
//           {list.map((item, index) => (
//             <div
//               key={index}
//               style={{
//                 display: "flex",
//                 gap: 3,
//               }}
//             >
//               <li>{item}</li>
//               <button onClick={() => deletList(index)}>delet</button>
//             </div>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const [sidbar, setSideBar] = useState(-380);
  const [editIndex, setEditIndex] = useState(null);
  const [forms, setForms] = useState({
    fullname: "",
    Class: "",
    rollno: "",
    subject: "",
    date: "",
  });
  const [students, setStudents] = useState([]);
  const addStudentsData = () => {
    if (forms.fullname !== "") {
      setStudents([...students, forms]);
      setForms({
        fullname: "",
        Class: "",
        rollno: "",
        subject: "",
        date: "",
      });
    }
    setSideBar(-380);
  };
  const handelInput = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    setForms({
      ...forms,
      [key]: value,
    });
  };
  const deletStudentList = (i) => {
    students.splice(i, 1);
    setStudents([...students]);
  };

  const editStudents = (i) => {
    setSideBar(3);
    setForms(students[i]);
    setEditIndex(i);
  };
  const addNewStudent = () => {
    setForms({
      fullname: "",
      Class: "",
      rollno: "",
      subject: "",
      date: "",
    });
    setSideBar(3);
    setEditIndex(null);
  };

  const saveEditStudents = () => {
    const backup = [...students];
    backup[editIndex] = forms;
    setStudents(backup);
    setSideBar(-380);
  };
  return (
    <div className="w-full bg-slate-100 min-h-screen ">
      <div className="w-[70%] min-h-screen  bg-slate-200 shadow-md mx-auto rounded-md ">
        <h1 className="text-2xl font-semibold text-center pt-8 ">
          Student Registretion
        </h1>
        <button
          onClick={addNewStudent}
          className="w-[150px] bg-[#b412e5] h-10 rounded-lg ml-6 hover:bg-[#aa01ad] text-white"
        >
          <i className="ri-user-add-line"></i>New Student
        </button>
        <table className="mt-10 w-full">
          <thead className="bg-rose-400 text-white text-center">
            <tr>
              <th className="py-2">Full Name</th>
              <th>Class</th>
              <th>Roll No</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {students.map((item, i) => (
              <tr
                key={i}
                className=""
                style={{
                  backgroundColor: (i + 1) % 2 === 0 && "lightgray",
                }}
              >
                <td className="py-2">{item.fullname}</td>
                <td>{item.Class}</td>
                <td>{item.rollno}</td>
                <td>{item.subject}</td>
                <td>{item.date}</td>
                <td>
                  <button
                    onClick={() => deletStudentList(i)}
                    className="bg-red-500 text-white px-2 rounded-md mr-2"
                  >
                    <i className="ri-delete-bin-5-line"></i>
                  </button>
                  <button
                    onClick={() => editStudents(i)}
                    className="bg-green-500 text-white px-2 rounded-md"
                  >
                    <i className="ri-edit-line"></i>{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <aside
        style={{
          right: sidbar,
          boxShadow: "-4px  0px 7px rgba(0, 0, 0, 0.2)",
          transition: "0.3s",
        }}
        className="h-screen bg-slate-200 rounded-sm  fixed top-3  w-[380px] p-4 "
      >
        <button
          onClick={() => setSideBar(-380)}
          className="text-4xl absolute top-4 right-8 "
        >
          <i className="ri-arrow-right-line"></i>
        </button>
        <h1 className="text-2xl font-semibold ">New Student</h1>
        <div className="h-full flex flex-col gap-8 pt-16">
          <input
            value={forms.fullname}
            name="fullname"
            onChange={handelInput}
            required
            type="text"
            placeholder="Enter your fullname"
            className="border-none bg-slate-100 h-[40px] outline-none px-2"
          />
          <input
            value={forms.Class}
            name="Class"
            onChange={handelInput}
            required
            type="text"
            placeholder="Enter your class"
            className="border-none bg-slate-100 h-[40px] outline-none px-2"
          />
          <input
            value={forms.rollno}
            name="rollno"
            onChange={handelInput}
            required
            type="number"
            placeholder="Enter your roll"
            className="border-none bg-slate-100 h-[40px] outline-none px-2"
          />
          <input
            value={forms.subject}
            name="subject"
            onChange={handelInput}
            required
            type="text"
            placeholder="Enter your subject"
            className="border-none bg-slate-100 h-[40px] outline-none px-2"
          />
          <input
            value={forms.date}
            name="date"
            onChange={handelInput}
            required
            type="date"
            placeholder="Enter your date of birth"
            className="border-none bg-slate-100 h-[40px] outline-none px-2"
          />
          {editIndex === null ? (
            <button
              onClick={addStudentsData}
              className="bg-[#a31fa8] text-white rounded-sm h-[40px] text-xl "
            >
              Submit
            </button>
          ) : (
            <button
              onClick={saveEditStudents}
              className="bg-rose-600 text-white rounded-sm h-[40px] text-xl "
            >
              Save
            </button>
          )}
        </div>
      </aside>
    </div>
  );
};

export default App;
