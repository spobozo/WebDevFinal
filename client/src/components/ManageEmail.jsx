import React from 'react';

const ManageEmail = () => {

  return ( 

    <button className="submitBtn"
          onClick={() => {
            const confirmBox = window.confirm(
              "Are you sure you want to send this email?"
            )
            if (confirmBox === true) {
              alert("email sent")
            }
          }}
        >Send Email</button>
  )
}

export default ManageEmail;