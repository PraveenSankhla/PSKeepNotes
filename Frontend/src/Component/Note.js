import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from '@mui/icons-material';
import CancelIcon from '@mui/icons-material/Cancel';
// import { Hidden } from '@mui/material';

const Note = (props) =>{
    const Delete = async () =>{
        console.log(props.id);
        props.delete(props.id);
        let deletedata = {
            id:props.id
        }
        const response = await fetch("http://localhost:5000/", 
        {
            method:"DELETE",
            body:JSON.stringify(deletedata),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const result = await response.json()
        console.log(result);
    }

    const EditComponent = ()=>{
        
    }

    return(
        <>
        <div className="col-sm-3 m-2">
            <div className="card">
            <div className='card-header bg-success d-flex justify-content-between text-white'>
                <h6 className="card-title" style={{overflow:"Hidden"}}>{props.title}</h6><CancelIcon />
            </div>
            <div className="card-body">
                <p className="card-text">{props.content}</p>    
            </div>
            <div className='card-footer d-flex justify-content-between'>
                <button className="btn btn-success mx-2" onClick={EditComponent}><Edit /></button>
                <button className='btn btn-danger mx-2' onClick={Delete}><DeleteIcon /></button>
            </div>
            </div>
        </div>
        </>
    )
}

export default Note;