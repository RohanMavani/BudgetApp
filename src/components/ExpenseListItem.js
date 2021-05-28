import React from 'react'
import {Link} from "react-router-dom";
import moment from 'moment'
import numeral from 'numeral'

const ViewExpenseList = ({dispatch, id, amount, note, description, createdAt})=>{
    return(
      <Link className="expense-item" to={`/edit/${id}`}>
        <div>
          <h3 className="expense-list-item-header">{description}</h3>
          <span className="expense-list-date">{moment(createdAt).format('MMMM Do YYYY')}</span>
        </div>
        <div>
          <h3 className="expense-list-item-amount">{numeral(amount).format('$0,0.00')}</h3>
        </div>
      </Link>
    )
  }

export default ViewExpenseList