import React from 'react';

const ManageEmail = () => {

  return ( 

    <div>
      <h2>New Email</h2>
      <label>Send to:</label>
      <div>
        <input id="customEmail" type="text" name="email" />
        <button className="OptionBtn">All</button>
        <button className="OptionBtn">Scheduled Volunteers</button>
      </div>
      <label>Subject:</label>
      <div>
        <input id="customSubject" type="text" name="subject" />
      </div>
      <label>Body:</label>
      <div>
        <button className="OptionBtn">Voucher Template</button>
        <button className="OptionBtn">Cancellation Template</button>
        <button className="OptionBtn">Waiver Template</button>
      </div>
      <label>Custom:</label>
      <div>
        <input id="customBody" type="text" name="body" />
      </div>
      <div>
        <button className="clearBtn"
        onClick={() => {
          const confirmBox = window.confirm(
            "Are you sure you want to clear all fields?"
          )
          if(confirmBox === true) {
            alert("fields cleared")
          }
        }}
        >Clear</button>
        <button className="sendBtn"
          onClick={() => {
            const confirmBox = window.confirm(
              "Are you sure you want to send this email?"
            )
            if (confirmBox === true) {
              alert("email sent")
            }
          }}
        >Send Email</button>
        </div>
    </div>
  )
}

export default ManageEmail;