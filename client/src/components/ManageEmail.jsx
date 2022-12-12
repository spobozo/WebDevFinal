import React, { useState } from 'react';
import './ManageEmail.css';

const ManageEmail = (props) => {

  const [recipientValue, setRecipientValue] = useState('')
  const [subjectValue, setSubjectValue] = useState('')
  const [bodyValue, setBodyValue] = useState('')

  const handleRecipientChange = (event) => {
    setRecipientValue(event.target.value)
  }
  const handleSubjectChange = (event) => {
    setSubjectValue(event.target.value)
  }
  const handleBodyChange = (event) => {
    setBodyValue(event.target.value)
  }


  const [button1,setButton1] = useState(false);
  const [button2,setButton2] = useState(true);

  const handleButton1Click = () => {
    setButton1(true);
    setButton2(false);
  }

  const handleButton2Click = () => {
    setButton1(false);
    setButton2(true);
  }

  return ( 

      <div>
      <h2>New Email</h2>
      <label>Send to:</label>
      <div>
        <input type="text" value={recipientValue} onChange={handleRecipientChange} />
        <button onClick={handleButton1Click} className={button1 ? 'on' : 'off'}>All</button>
        <button onClick={handleButton2Click} className={button2 ? 'on' : 'off'}>Scheduled Volunteers</button>
      </div><label>Subject:</label><div>
        <input type="text" value={subjectValue} onChange={handleSubjectChange} />
      </div><label>Body:</label><div>
        <button className="OptionBtn">Voucher Template</button>
        <button className="OptionBtn">Cancellation Template</button>
        <button className="OptionBtn">Waiver Template</button>
      </div><label>Custom:</label><div>
        <input type="text" value={bodyValue} onChange={handleBodyChange} />
      </div><div>
        <button className="clearBtn"
          onClick={() => {
            const confirmBox = window.confirm(
              "Are you sure you want to clear all fields?"
            );
            if (confirmBox === true) {
              setRecipientValue("");
              setSubjectValue("");
              setBodyValue("");
            }
          } }
        >Clear</button>
        <button className="sendBtn"
          onClick={() => {
            const confirmBox = window.confirm(
              "Are you sure you want to send this email?"
            );
            if (confirmBox === true) {
              alert("email sent");
            }
          } }
        >Send Email</button>
      </div>
    </div>
  )
}
export default ManageEmail;