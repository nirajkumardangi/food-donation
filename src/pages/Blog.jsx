import {userInfoAction} from '../utility/Storage'
import {useDispatch} from 'react-redux'



function Blog() {
 const dispatch=useDispatch()
function handle(){
dispatch(userInfoAction.login())
  
}
   
  return (
    <>
      <div>this is a dummy Blog page</div>
      <button onClick={handle}>login</button>
    </>
  );
}

export default Blog