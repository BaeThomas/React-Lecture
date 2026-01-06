// import React, { useRef } from "react";

// const Login = () => {
//   let nameRef = useRef();
//   let passRef = useRef();
//   let ansRef = useRef();
//   let showData = () => {
//     let name = nameRef.current.value;
//     let pass = passRef.current.value;
//     ansRef.current.innerHTML =
//       `Name is ${name} and Password is ${pass}` + name + ":" + pass;
//   };
//   return (
//     <div>
//       <input type="text" placeholder="Your Name" ref={nameRef} />
//       <input type="number" ref={passRef} />
//       <button onClick={showData}>ShowData</button>
//       <h1 ref={ansRef}></h1>
//     </div>
//   );
// };

// export default Login;

import React, { use, useEffect, useState } from "react";

const Login = () => {
  //   let [name, setName] = useState("");
  //   let [password, setPassword] = useState("");
  let [person, setPerson] = useState({ name: "", password: "" });
  let [data, setData] = useState(false);
  useEffect(() => {
    console.log("Name changed:", person.name);
  }, [person.name]);
  return (
    <div>
      <input
        type="text"
        placeholder="Your Name"
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <input
        type="password"
        placeholder="Your Password"
        onChange={(e) => setPerson({ ...person, password: e.target.value })}
      />
      <button onClick={() => setData(true)}>Show Data</button>
      <h1>
        {data
          ? `Name is ${person.name} and Password is ${person.password}`
          : ""}
      </h1>
    </div>
  );
};

export default Login;
