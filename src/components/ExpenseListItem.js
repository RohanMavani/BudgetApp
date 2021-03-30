import React from 'react'
import {Link} from "react-router-dom";
import moment from 'moment'
import numeral from 'numeral'

const ViewExpenseList = ({dispatch, id, amount, note, description, createdAt})=>{
    return(
      <div> 
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>{numeral(amount).format('$0,0.00')}-{moment(createdAt).format('MMMM Do YYYY')}</p>
      </div>
    )
  }

export default ViewExpenseList