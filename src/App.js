import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import { connect } from 'react-redux';
import { decrement, increment } from './js/action/actionTask';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={()=>dispatch(decrement(5))}>-</button>
      <span>{counter}</span>
      <button onClick={()=>dispatch(increment(10))}>+</button>
    </div>
  );
}

// const mapStateToProps=(state)=>{
//   return {
//     counter:state.counter
//   }
// }

// const mapDispatchToProps=(dispatch)=>{
//   return{
//     increment:(payload)=>dispatch(increment(payload)),
//     decrement:(payload)=>dispatch(decrement(payload))
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps) (App);
export default App;