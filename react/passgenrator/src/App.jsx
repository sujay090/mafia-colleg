import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [range, setRange] = useState(8);
  const [number, setNumber] = useState(false);
  const [chrecter, setChrecter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGneretor = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "1234567890";
    if (chrecter) str += "!@#$%^&*(){}|?";

    for (let i = 1; i <= range; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [range, number, chrecter, setPassword]);

  useEffect(() => {
    passwordGneretor();
  }, [length, chrecter, number, passwordGneretor]);
  const passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
        // window.navigator.clipboard.writeText(password)
       window.navigator.clipboard.writeText(password);
        
  },[password])
  return (
    <>
      <div className="h-screen bg-zinc-800 flex justify-center pt-28 ">
        <div className="bg-zinc-600 w-[40%] h-64 p-8 rounded-2xl flex flex-col">
          <input
            readOnly
            value={password}
            type="text"
            className="bg-white w-[100%] rounded-md border-none outline-none px-2 text-orange-500 h-[22%] "
            ref={passwordRef}
          />
          <button
            className="bg-blue-500 text-white w-[100%] px-6 py-2 mt-5 rounded-md outline-none"
            onClick={() => {
              copyPasswordToClipboard()
            }}
          >
            Copy
          </button>
          <div className="flex gap-4 text-white mt-4">
            <input
              type="range"
              min={1}
              max={100}
              className="mr-7"
              value={range}
              onChange={(e) => {
                setRange(e.target.value);
              }}
            />
            <span>lenth: {range}</span>
            <input
              type="checkbox"
              defaultChecked={number}
              onChange={() => {
                setNumber((pre) => !pre);
              }}
              value={number}
            />
            <label htmlFor="">Number</label>
            <input
              type="checkbox"
              defaultChecked={chrecter}
              onChange={() => {
                setChrecter((pre) => !pre);
              }}
              value={chrecter}
            />
            <label htmlFor="">Chrecters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
