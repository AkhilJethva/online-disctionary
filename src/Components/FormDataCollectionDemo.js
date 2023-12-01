import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addData } from '../Reducers/userReducer';

const FormDataCollectionDemo = () => {

    const [userDetails, setUserDetails] = useState({firstname:"", lastname:""})

    const dispatch =  useDispatch();
    const onSubmit = (e)=>{
        e.preventDefault();
        dispatch(addData(userDetails))
        setUserDetails({firstname:"", lastname:""});
    }
  return (
    <div>
        <h2>Form For Data Colletion Demo</h2>
        <label>Fist Name</label>
        <input name='firstname' type='text' placeholder='Enter First Name' 
            value={userDetails.firstname}
            onChange={(e)=>setUserDetails({...userDetails,firstname:e.target.value})}
        />
        <label>Last Name</label>
        <input name='lastname' type='text' placeholder='Enter Last Name'
            value={userDetails.lastname}
            onChange={(e)=>setUserDetails({...userDetails,lastname:e.target.value})}
        />

        <button onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default FormDataCollectionDemo