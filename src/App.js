
import React from 'react';
import { Route,Link,Switch,BrowserRouter  } from 'react-router-dom'


function App()
{
  return(
    <div>
      <h1>Welcome Page : App.js</h1>
{/* anchor [<a></a>] tag is replace with <link> tag */}
{/* Link tag is faster than a anchor tag */}
      
      <Link to="/login">Login</Link>
      <Link to="/Register">Register</Link>
      
    </div>
  );
}
export default App;