import React from 'react'
import {Link} from "react-router-dom";

const ViewExpenseList = ({dispatch, id, amount, note, description, createdAt})=>{
    return(
      <div> 
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>Amount is {amount}</p>
      </div>
    )
  }

export default ViewExpenseList