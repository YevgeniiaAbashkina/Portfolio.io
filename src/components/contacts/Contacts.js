import contacts from "../../images/useful-contacts.jpg";
import { FcPhone, FcHome, FcGlobe,FcAddressBook } from "react-icons/fc";
import "./contacts.css";


export const Contacts = () => {
    return (
        <div className="main-section">
            <div className="container">
                <h1>Contacts</h1>
                <img className="my_contacts" src={contacts} alt="my-contacts" />
                <div className="icon-box">
                    <h3 className="icon">
                        <FcHome /> Germany, 09113 Chemnitz, Leipziger Str. 51
                    </h3>
                    <h3 className="icon"><FcPhone /> +49 (1522) 417-19-57 </h3>
                    <h3 className="icon"><FcAddressBook /> abashkina.evg.89@gmail.com </h3>
                    <h3 className="icon"><FcGlobe />  
                        <a className="icon-link first-link" href="https://github.com/YevgeniiaAbashkina" target="_blank" rel="noreferrer">www.github.com</a>
                    </h3>
                    <h3>
                        <a className="icon-link" href="https://www.linkedin.com/in/abashkina" target="_blank" rel="noreferrer">www.linkedin.com</a>
                    </h3>
                    <h3>
                        <a className="icon-link" href="https://www.xing.com/profile/Yevheniia_Abashkina2/cv" target="_blank" rel="noreferrer">www.xing.com</a>
                    </h3>                 
                </div>
            </div>
        </div>    
    )
}