import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../../node_modules/glyphicons-only-bootstrap/css/bootstrap.min.css';
export default class Chat extends React.Component {
    constructor(props){
      super(props);
       this.state={chat_value:'',
                    menu_value:'',
                    text:'',
                    username:''};
    }
    message(event){
        this.setState({chat_value: event.target.value});
     
    }
    selected_user(event){
        this.setState({username:event.target.value});
    }
    movetochat(event){
        if(event.key == 'Enter'){ 
            document.getElementById("chattext").focus();
        }
    }
    openNav(event) {
        document.getElementById("mySidebar").style.cssText = "width:250px";
        document.getElementById("main").style.cssText = "margin-left:250px";
        document.getElementById("paragraph").style.cssText = "margin-left:265px";
    }
      
    closeNav(event) {
        document.getElementById("mySidebar").style.cssText = "width:0px";
        document.getElementById("main").style.cssText= "margin-left:0px";
        document.getElementById("paragraph").style.cssText = "margin-left:15px";

      }
      
    enterValue = (event) => {
        if(event.key == 'Enter'){
            var send_val = this.state.chat_value;
            var new_value= this.state.username;
            if(this.state.username=='Shwetha'){
                var newdiv = document.createElement("DIV");
                var para = document.createElement("P");
                para.id = "paragraph";
                var t = document.createTextNode(new_value+': '+send_val);
                para.appendChild(t);
                newdiv.appendChild(para);
                document.getElementById("trial-div").appendChild(newdiv);      
                this.setState({chat_value:''});
            }
            else if(this.state.username==''){
                alert('Enter Username');
            }
            else{
                var newdiv = document.createElement("DIV");
                newdiv.id = "blah";
                var para = document.createElement("P");
                para.id = "paragraph_new";
                var t = document.createTextNode(new_value+': '+send_val);
                para.appendChild(t);
                newdiv.appendChild(para);
                document.getElementById("trial-div").appendChild(newdiv);      
                this.setState({chat_value:''});
            }
        }
    }      
    render(){
        return (
            <div id="trial-div">
               <div id="mySidebar" className="sidebar">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav.bind(this)}>×</a>
                    <br></br><br></br><br></br>
                    <span className="trial-label">Chat_Demo:User List</span>
                    <hr></hr>
                    <button type="button" className="btn btn-link" value="Shwetha" onClick={this.selected_user.bind(this)}>Myself</button>
                    <button type="button" className="btn btn-link" value="Shruthi" onClick={this.selected_user.bind(this)}>Shruthi</button>
                    <button type="button" className="btn btn-link" value="Sneha" onClick={this.selected_user.bind(this)}>Sneha</button>
                    <button type="button" className="btn btn-link" value="Mr.X" onClick={this.selected_user.bind(this)}>Mr.X</button>
                </div>

                <div id="main">
                    <button type="button" className="btn btn-link" onClick={this.openNav.bind(this)}>
                        <span className="glyphicon glyphicon-chevron-right glyph-size"></span> 
                    </button>
                </div>
                <div className="Rectangle col">
                    <div className="form-group fixed-bottom visibility">
                        <input id="chattext" type="text" placeholder="Enter text here" className="form-control mr-sm-2" onChange={this.message.bind(this)} onKeyPress={this.enterValue} value={this.state.chat_value}></input>
                </div>
            </div>
            </div>
        );

    }
}  