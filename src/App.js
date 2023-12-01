import './App.css';
import {useSelector , useDispatch} from 'react-redux'
import { increment, decrement } from './Reducers/counterReducer';
import FormDataCollectionDemo from './Components/FormDataCollectionDemo';
import AxiousDataFetchDemo from './Components/AxiousDataFetchDemo';

function App() {

  // const count = useSelector((state) => state.counter.count);
  // const users = useSelector((state) => state.user.userDataList)
  // console.log(users)
  // const dispatch = useDispatch()

  return (
    <div className="App">
      {/* <h2>Counter Demo useing Redux and Redux toolkit</h2>

      <p>Count:: {count}</p>

      <button onClick={()=>dispatch(increment())}>Increment</button>

      <button onClick={()=>dispatch(decrement())}>Decrement</button> */}
      {/* <FormDataCollectionDemo /> */}
      <AxiousDataFetchDemo />
    </div>
  );
}

export default App;
