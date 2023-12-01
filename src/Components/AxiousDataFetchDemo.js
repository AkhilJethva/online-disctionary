import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../Reducers/apiDataAxiousReducer';

const AxiousDataFetchDemo = () => {
    const dispatch =  useDispatch();
    const {users, loading, error} = useSelector(state => state.data);

    useEffect(() => {
      dispatch(fetchData());
    }, [dispatch])
    console.log(users)
  return (
    <div>
        <h2>User details fethched using axios </h2>
        {loading ? (<p>Loading yOur data....</p>):
            error ? (<p>Error while fetching data</p>):
            (   <div>
                <table className='listDemo'>
                    <tr>
                        <td>Title</td>
                        <td>Body</td>
                    </tr>
                    {users.map(user=>(
                        <tr key={user.id}>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                        </tr>
                    ))}
                </table>
                </div>
            )
        }
    </div>
  )
}

export default AxiousDataFetchDemo