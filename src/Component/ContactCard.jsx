import React from "react";
import good from "../assets/good.jpg"

const ContactCard =(props) =>{
     
     return(  <div className="item">
                 <img className="ui avatar image" src={good} alt="good" />
                    <div className="content">
                        <div className="header">{contact.name}</div>
                                   <div>{contact.email}</div>
                                     <i className="trash alternate outline icon"></i>
                                    style ={{color:"red", margiTop:"7px" }} 
                                    </div> 
                                    </div>
                                    );

};
export default ContactCard;