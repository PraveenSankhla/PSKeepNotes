import Create from '../Component/Create';
import Note from '../Component/Note';
import OpenNote from '../Component/OpenNote';
import React, {useState, createContext, useEffect } from 'react';

const Firstname = createContext();
const LastName = createContext();

const KeepNotes = () =>{
    const [note, setnote] = useState([])
    const SaveData = async(data) =>{
        setnote((preData)=>{
        return [...preData, data]
        })

        const response = await fetch("http://localhost:5000/", 
        {
            method:"POST", 
            body:JSON.stringify(data),
            headers:{
            "Content-Type":"application/json"
            }
        })
        const result = await response.json()
        console.log(result);
    }

    const DeleteData = (param)=>{
        setnote((preData)=>
            preData.filter((curndata, index) =>{
                return index !== param;
            })
        )
    }

    //const [data, setdata] = useState([])
        useEffect(()=>{
            const fetchData = async () => {
                try {
                    const response = await fetch('http://localhost:5000');
                    const jsonData = await response.json();
                    setnote((preData)=>{
                        return [...preData, ...jsonData]
                    });
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData();  
        },[])
    return(
        <>
            <Create saveData = {SaveData}/>
                <div className='d-flex flex-wrap container w-75 justify-content-center'>
                {
                    note.map((val, index)=>{
                        if(val){
                            return(
                                <Note 
                                    key={index}
                                    id={val.id}
                                    title={val.heading}
                                    content={val.content}
                                    delete = {DeleteData}
                                />
                            )
                        }
                        else
                        {
                            return <p className='text-center text-danger'>No data Found</p>
                        }
                    })
                }
                </div>
            
                {/* <div className='text-danger text-center'>{data[0].title}</div> */}

            <Firstname.Provider value={"Praveen"}>
                <LastName.Provider value={"Sankhla"}><OpenNote /></LastName.Provider>
            </Firstname.Provider>
        </>
  )
}

export default KeepNotes;
export { Firstname, LastName }