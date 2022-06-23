import { useState } from "react";
import axios from 'axios';
//import { json } from "express";
function  Addemp() {
  const [name, setname] = useState("");
  const [ mobile, setmobile ] = useState("");
  const [designation, setdesignation] = useState("");
  const [address, setaddress] = useState("");
  const [userimage, setuserimage] = useState(null);
  const [message, setMessage] = useState("");
  const handleFileSelect = (event) => {
    console.log(event.target.files[0])
    //console.log(event.target.file[0])
    setuserimage(event.target.files[0])
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data=new FormData(); 
    data.append("name", name);
    data.append("mobile", mobile);
    data.append("designation", designation);
    data.append("address", address);
    data.append("userimage", userimage, userimage.name);
    for (var key of data.entries()) {
      console.log(key[0] + ', ' + key[1]);
  }
    try {
      console.log("post method")
      const res = await axios({
        method: "post",
        url: "http://localhost:8000/attendance/addemp",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });
      //const resJson = await res.json();
      if (res.status === 200) {
        setname("");
        setmobile("");
        setdesignation("");
        setaddress("");
        setuserimage("");
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
    <div class="col-sm-7">
        <input  class="form-control"  type="text"  value={name}  placeholder="name" onChange={(e) =>setname(e.target.value)}/>
    </div>
    </div>
    <div class="mb-3">
    <label  class="form-label">MOBILE NUMBER:</label>
    <div class="col-sm-7">  
        <input  class="form-control"  type="text"  value={mobile}  placeholder="mobile"  onChange={(e) => setmobile(e.target.value)}/>
    </div>
    </div>
    <div class="mb-3">
    <label  class="form-label">DESIGNATION:</label>
    <div class="col-sm-7">   
        <input  class="form-control"  type="text"  value={designation}  placeholder="designation"  onChange={(e) => setdesignation(e.target.value)}/>
    </div>
    </div>
    <div class="mb-3">
    <label  class="form-label">ADDRESS:</label>
    <div class="col-sm-7">
        <input  class="form-control"  type="text"  value={address}  placeholder="address"  onChange={(e) => setaddress(e.target.value)}/>
    </div>
    <br/>
    <div class="form-group">
    <input type="file" onChange={handleFileSelect}/>
    </div>
    </div>
    <br/>
        <button type="submit">ADD EMPLOYEE</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>

    </form>   
  );
}
export default  Addemp;


