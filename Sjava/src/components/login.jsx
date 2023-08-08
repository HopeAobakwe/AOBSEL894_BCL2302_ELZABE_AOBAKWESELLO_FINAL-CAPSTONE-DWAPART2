import { ThemeSupa } from "@supabase/auth-ui-shared/dist";
import {Auth} from '@supabase/auth-ui-react';
import { supabase } from "../SupabaseClient";

const Login =({onLogin, setShowAuth}) =>{
const handleSession =(session)=>{
if (session?.user){
    handleLogin(session);
}
};



    return (
  
    <div className= "">
        <header className= "App-Header">
   <Auth 
       supabaseClient={supabase}
       appearance={{ theme: ThemeSupa }}
       theme="dark"
       providers={["google"]}
       handleSession={handleSession}
  
      />
        </header>
    </div>
    )
  
}
export default Login;