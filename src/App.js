import logo from './logoza.png';
import icon from './email.svg';
import tops from './top.png';
import avto from './avto.mp4';
import widg from './qqq.mp4';
import './App.css';
import './bootstrap-grid.min.css'

import mainvideo from './widget.mp4';

function App() {
  return (
    <div className="App">
      <header class="container header px-4 px-md-0">
    <div class="row justify-content-between align-items-center" >
        <div class="col-lg-2    ">
            <a href="#/" class="logo-link">
                <img src={logo} alt="logo" class="logo-image"/>
            </a>
        </div>
        <div class="col-lg-4 d-none d-lg-block" >
            <nav>
                <ul class="navigation d-flex justify-content-around">
                    <li class="novigation-item"> 
                        <a href="#/" class="navigation-item"> About</a>
                    </li>
                    <li class="novigation-item">
                        <a href="#/" class="navigation-item"> Download</a>
                    </li>
                   
                </ul>
            </nav>
        </div>
       
    </div>
</header>
<section class="slide slide-1 swiper-slide">
    <div class="container">
        <div class="row">
            <div class="col-4" >  
           
            </div>
            <div class="col-lg-4  d-flex justify-content-center">
              
                <h2 class="slide-title">WidgetSyle</h2> 
            </div>
        </div>
        <div class="row">
            <div class="col-4">
        
            </div>
            <div class="col-lg-4  d-flex justify-content-center ">
                <button class="button">
                    <span class="button-text">Download</span>
                </button>
                </div>
        </div>
    </div>
</section>
<div class="container">


    <div class="row ">

        <div class="col-12">
            <div id="vidos">
                
            <video  loop={true} autoPlay={true} muted={true} id="myVideo">
                   <source  src={mainvideo} type="video/mp4"/>
                 </video>   
               </div>
        </div>
        
    </div>

    <div class="row ">
        
        <div class="col-6">       
            <h3  class="style">Styling<br/> Qt Widget</h3>
            <p  >БУДЕТ ОПИСАНИЕ</p>
          
         </div>
         <div class="col-3">       
            
            <div  id="vidosss">
                <video  loop={true} autoPlay={true} muted={true} id="myVideo">
                   <source  src={widg} type="video/mp4"/>
                 </video>
                </div>
        </div>
    </div>

    <div class="row ">
        
        <div class="col-7">       
            <h3  class="style">Automatic<br/> code generation</h3>
            <p  >БУДЕТ ОПИСАНИЕ</p>
          
         </div>
         <div class="col-5">       
            
            <div  id="vidoss">
                <video  loop={true} autoPlay={true} muted={true} id="myVideo">
                <source  src={avto} type="video/mp4"/>
                  
                 </video>
                </div>
        </div>
    </div>



</div>

<footer class="footer">
    <div class="container">
        <div class="row">
            <div class="col-xl-9 mb-4 mb-xl-0"> 
            </div>
            
            <div class="col-lg-3 d-flex align-items-center">
                <span class="footer-text">Contact Us</span>
                <span class="footer-social">
                <a href="/" class="social-link"><img src={icon} alt="Instagram"/></a>
              
                </span>
            </div>

            <div class="col-xl-2 col-lg-3 d-flex justify-content-lg-end mt-4 mt-lg-0"> 
            </div>

        </div>
          
        <div class="row justify-content-between">
             <div class="col-4">  
            </div>
            <div class="col-lg-2 col-sm-1 d-flex justify-content-end">
                <a href="#" class="top-link d-flex align-items-center">
                <span class="top-link-text">Top</span>
                <img src={tops} alt="top"/>
               
                </a>
            </div>
        </div>

    </div>
     
</footer>
    </div>
  );
}

export default App;
