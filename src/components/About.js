import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import Footer from './Footer';

export default function About() {
  return (
<>
<Header/>
<div className='container-about'>
 <div className='row p-4 p-md-5'>
    <div className='col-md-4'>
    <img src=""/>
    </div>
    <div className='col-md-4'>
  <p> Started as part of a Bootcamp project in Berlin, WalkingTales takes you on a journey where you connect people through activities. It is a place where you not only share your journey but also motivate many others towards a healthy life.

Excited? Then start your journey here ...</p> 


     </div>
 </div>
</div>
<Footer/>
</>



  );
}
