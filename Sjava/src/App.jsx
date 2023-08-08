import PodcastData from './components/PodcastData';
import {supabase} from './supabaseClient';
import SupabaseClient from './supabaseClient';
import React, {useState} from 'react';

function App() {
  const [throwSignUp, setThrowSignUp] = useState("signUpPhase");
  React.useEffect(() => {
    const authListener = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        console.log("User signed in successfully:", session.user.email);
        setThrowSignUp("PreviewPhase");
      }
    });
    return () => {
      authListener.unsubscribe;
    };
  }, []);
  return (
  <div>
    {throwSignUp === 'signUpPhase' && <SupabaseClient />}
      {throwSignUp === 'PreviewPhase' &&
    
    <div className="App">
      <PodcastData />
      
      
    </div>
      }
      </div>
  );
}
export default App;