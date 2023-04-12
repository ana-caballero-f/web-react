import { useState } from "react";

import FormularioComponent from "../../components/FormularioComponent/FormularioComponent"




export default function ContactoPage() {

    // const initialState = { name: "", surname: "", email: "" }
    // const [userData, setUserData] = useState(initialState)
  
    // function changeData(e) {
    //   setUserData({ ...userData, [e.target.name]: e.target.value })
    // }


    return(
      <div>
        <h1>Formulario de contacto</h1>
        <p>Rellena el formulario y me pondré en contacto contigo para darte la información solicitada</p>
        <section>
          <FormularioComponent></FormularioComponent>
        </section>
      </div>  
     
  );
};

    
