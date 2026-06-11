import React from "react";
import CantactCard from "./ContactCard"

const ContactList =(props)=>{
    const rendercontactlist =props.contacts.map((contact)=>{
                   return( 
                            <div> <ContactCard contact={contact} />;</div>                          
)});

  return( 
        <div className="ui celled list"> {rendercontactlist} </div>
    );
}
export default ContactList;
