import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Route, Switch } from "react-router-dom";

// All route props (match, location and history) are available to User

  const User = props => {
    console.log(props)
  return <h1>Hello {props.match.params.username}!</h1>;
}

ReactDOM.render(

<BrowserRouter>
    
    <Switch>
    <Route path="/user/:username" component={User} />
    </Switch>

</BrowserRouter>
, document.getElementById('root')





  
  
);
