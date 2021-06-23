import React,{useState,useEffect} from 'react'
import "./Homepage.css"
import axios from "axios";
import Navbar from "../Navbar/Navbar"
function Homepage() {
    const [imageData,setImageData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
      const fetchData = async () => {
        let res = await fetch(
          "https://reqres.in/api/users/" 
        );

        let response = await res.json();
        return response;
        
      };
      useEffect(() => {
        
         fetchData()
         .then((response)=>{
         setIsLoading(false)
         setImageData(response.data) // parse json
         console.log(response.data)
        })
      }, []);
    return (
        <div>
            <Navbar/>
            <main>
            <section  className="cards">
             {imageData&&imageData.map((image,index)=>(<>
             <div style={{display:"flex",flexDirection:"column",width:"100%",margin:"10px",justifyContent:"center"}}>
        <div>
          <img key={index} className="article-img" src={image.avatar} alt=" " />
          
          
        </div>
        <div >          <h1 className="article-title">
            {image.first_name} {image.last_name}
           <br />
            
            {image.email} 
            

          </h1>
          </div>
          </div>
        </>))} 
        </section>
       {/*  <section class="cards">
        <article>
          <img class="article-img" src="http://placekitten.com/305/205" alt=" " />
          <h1 class="article-title">
            Title of article
          </h1>
        </article>
        <article>
          <img class="article-img" src="http://placekitten.com/320/220" alt=" " />
          <h1 class="article-title">
            Title of article
          </h1>
        </article>
        <article>
          <img class="article-img" src="http://placekitten.com/330/240" alt=" " />
          <h1 class="article-title">
            Title of article
          </h1>
        </article>
        <article>
          <img class="article-img" src="http://placekitten.com/280/250" alt=" " />
          <h1 class="article-title">
            Title of article
          </h1>
        </article>
        <article>
          <img class="article-img" src="http://placekitten.com/310/210" alt=" " />
          <h1 class="article-title">
            Title of article
          </h1>
        </article>
        <article>
          <img class="article-img" src="http://placekitten.com/430/240" alt=" " />
          <h1 class="article-title">
            Title of article
          </h1>
        </article>
      </section>
        */} </main>
        </div>
    )
}

export default Homepage
