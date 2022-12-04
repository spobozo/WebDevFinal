import React from 'react';

const ManageEmail = () => {

  return ( 
    <button className="submitBtn"
          onClick={() => {
              alert("email sent")
          }}
        >Send Email</button>
  )
}

export default ManageEmail;