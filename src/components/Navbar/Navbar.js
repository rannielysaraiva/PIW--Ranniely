import React, {Component} from 'react'

import './Navbar.css'
export default class Navbar extends Component {
    render(){
        return(
            <>
            <div className="nav">
                <input type="checkbox" id="nav-check"/>
                <div className="nav-header">
                    <div className="nav-title">
                        <img src="https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/b/a/0/6/c614-69d1-41a2-9bf1-d87ec951f16d" alt=""></img>
                    </div>
                </div>
                <div className="nav-btn">
                    <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                
                <div className="nav-links">
                    <a href="//github.io/jo_geek" target="_blank">Linha do tempo</a>
                    <a href="//github.io/jo_geek" target="_blank">Perfil</a>
                    
                </div>
                <div class="material-icons mdl-badge mdl-badge--overlap icone" data-badge="1">account_box</div>
                <div className="nav-links"> 
                
                  <a className="usuario"><span> Ranniely Saraiva</span></a> 
                </div>

            </div>
            </>
        )
}
}