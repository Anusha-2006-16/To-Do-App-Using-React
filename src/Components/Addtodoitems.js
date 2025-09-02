import React from 'react'

const Addtodoitems = ({title,desc,ondelete,onEdit}) => {
  return (
    <div className='my-3' >
        <div className="card" style={{width: "18rem",textAlign:"left",marginLeft:"100px",backgroundColor:"rgba(227, 238, 248, 1)"}}>
  <div className="card-body">
    <h5 className="card-title"> {title}</h5>
      <p className="card-text">{desc}</p>
   
    <div className='buttons' style={{display:"flex"}}>
            <button type="button" className="btn btn-danger mx-2" onClick={ondelete}>Delete</button>
            <button type='button' className='btn btn-secondary' onClick={onEdit}>Edit</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Addtodoitems
