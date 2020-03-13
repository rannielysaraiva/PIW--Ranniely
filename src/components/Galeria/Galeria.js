import React, {Component} from 'react'
import './Galeria.css'
import Post from './../Posts/Post'
import Post2 from './../Posts/Post2'

export default class Galeria extends Component {
    render(){
        return(
            
            <div className="container">

            <div class="gallery">
                    <a target="_blank" href="img_forest.jpg">
                    <img src="https://scontent.fjdo1-1.fna.fbcdn.net/v/t1.0-9/85016156_1227204540804979_727545594263896064_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=7zlQPuqb6CUAX8j9Ds0&_nc_ht=scontent.fjdo1-1.fna&oh=f7f5e131e85476f3ac157c0e96a3ca21&oe=5E926252" alt="Forest" width="600" height="400"/>
                    </a>
                    <Post />
                  
                </div>  

                <div class="gallery">
                    <a target="_blank" href="img_forest.jpg">
                    <img src="https://scontent.fjdo1-2.fna.fbcdn.net/v/t1.0-9/85236844_2800128583414856_8432247071045582848_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=RKJdcnvFYpQAX-8p4Va&_nc_ht=scontent.fjdo1-2.fna&oh=c5fd1aeb8c9fb0f9ed96be85739cdac1&oe=5E916408" alt="Forest" width="600" height="400"/>
                    </a>
                    <Post2/>
                    
                </div>
               
                    
            </div>
          
        )
    }
}