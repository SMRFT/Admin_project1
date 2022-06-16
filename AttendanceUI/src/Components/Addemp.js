import { useState } from "react";
//import { json } from "express";
function  Addemp() {
  const [name, setname] = useState("");
  const [ mobile, setmobile ] = useState("");
  const [designation, setdesignation] = useState("");
  const [address, setaddress] = useState("");
  const [message, setMessage] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    let data={name,mobile,designation,address}
    console.log(JSON.stringify(data))
    try {
      console.log("post method")
      let res = await fetch("http://localhost:8000/attendance/addemp", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        name:name,
        mobile: mobile,
        designation: designation,
        address: address,
       }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setname("");
        setmobile("");
        setdesignation("");
        setaddress("")
        setMessage("Emp Added successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
    <div class="mb-3">
    <label  class="form-label">NAME:</label>
    <div class="col-sm-10">
        <input  class="form-control"  type="text"  value={name}  placeholder="name" onChange={(e) =>setname(e.target.value)}/>
    </div>
    </div>
    <div class="mb-3">
    <label  class="form-label">MOBILE NUMBER:</label>
    <div class="col-sm-10">  
        <input  class="form-control"  type="text"  value={mobile}  placeholder="mobile"  onChange={(e) => setmobile(e.target.value)}/>
    </div>
    </div>
    <div class="mb-3">
    <label  class="form-label">DESIGNATION:</label>
    <div class="col-sm-10">   
        <input  class="form-control"  type="text"  value={designation}  placeholder="designation"  onChange={(e) => setdesignation(e.target.value)}/>
    </div>
    </div>
    <div class="mb-3">
    <label  class="form-label">ADDRESS:</label>
    <div class="col-sm-10">
        <input  class="form-control"  type="text"  value={address}  placeholder="address"  onChange={(e) => setaddress(e.target.value)}/>
    </div>
    </div>
    <br/>
        <button type="submit">ADD EMPLOYEE</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>

    </form>   
  );
}
export default  Addemp;







