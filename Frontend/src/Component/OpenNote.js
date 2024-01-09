import React from 'react';
import { Firstname, LastName } from '../Pages/KeepNote'

const OpenNotes = () =>{
    return(
        <>
            <div>
                <Firstname.Consumer>
                {(fname=>{
                    return(
                        <LastName.Consumer>
                        {(lname)=>
                            {return <p className='text-center mt-4'>This page created by {fname} {lname}</p>}
                        }
                    </LastName.Consumer>
                    )
                })}
                </Firstname.Consumer>
            </div>
        </>
    )
}

export default OpenNotes