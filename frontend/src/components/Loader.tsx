
import '../styles/loader.css'
import { Orbit } from '@uiball/loaders'
import 'animate.css';


function Loader() {


  return (  <div className='loader'>
    <h1 className='animate__animated animate__pulse animate__infinite infinite'>SENDING EMAIL</h1>
        <Orbit size={100} color="#231F20" />
        </div>
  )
}

export default Loader
