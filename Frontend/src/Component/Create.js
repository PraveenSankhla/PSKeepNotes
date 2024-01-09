import React from 'react';
import { useState } from 'react';
// import { fetchData } from '../Api';

const Create = (props) =>{
    const [title, settitle] = useState({
        heading : "",
        content : ""
    })

    const InputEvent = (event) =>{ 
        const  {name,value} = event.target

        settitle((pre_data) =>{
            return{
            ...pre_data,
            [name] : value
            }
        })
    }

    const [error, seterror] = useState("")
    const sendData = () =>{
        if(title.heading === "" || title.content === ""){
            seterror("Fill the data to Save")
        }
        else{
            props.saveData(title);
            // // let pk = fetchData("/");
            // console.log(pk);
            settitle({
                heading : "",
                content : ""
            })
            seterror("")
        }
    }

    const [expand, setexpand] = useState(false)
    const expanit = () =>{
        setexpand(true)
    }

    return(
        <>
            <div className='container w-75'>
                <div className="form-floating m-4">
                    <textarea className='form-control' name='heading' placeholder='Title' id='Title' onKeyUp={expanit} onChange={InputEvent} value={title.heading}></textarea>
                    <label htmlFor="Title">Title</label>
                    {expand?
                    <br />
                    : null }
                    {expand?<textarea className="form-control" name='content' placeholder="Leave a comment here" id="Note" onChange={InputEvent} value={title.content}></textarea>:null }
                    {expand? <label htmlFor="note" style={{top:"80px"}}>Notes</label> :null }
                    {expand?
                    <button className="position-absolute bottom start-100 translate-middle badge rounded-pill bg-danger border-0" onClick={sendData} style={{cursor:'pointer'}}>
                        +
                    </button> :null} 
                    <div className='text-danger'>{error}</div>
                </div>
            </div>
        </>
    )
}

export default Create;