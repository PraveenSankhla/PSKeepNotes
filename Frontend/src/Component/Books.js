import React, {useState} from 'react';

const API = (props) =>{
    const [value, setnum] = useState("Select Book")

    const setvalue = () =>{
        setnum("hello")
    }

    return(
        <>
        <div className='container col-md-2 text-center mt-2'>
        <p>{props.name}</p>
            <select className='form-select' onChange={setvalue}>
                <option>{value}</option>
                <option value="1">Ramayan</option>
                <option value="2">Mahabharat</option>
                <option value="3">Vedas</option>
                <option value="4">Bhagwat Geeta</option>
            </select>
        </div>
        </>
    )
}

export default API;