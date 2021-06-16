import h from './Preloader.module.css';
import loadingAva from './../assets/loading.gif'



const Preloader = (props) => {

  return (<div>
    
    <img src= {loadingAva} className = {h.loading} alt= ''/>
    

  </div>)
}


export default Preloader;