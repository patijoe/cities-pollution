import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function App() {
  const INTERVAL_SECONDS = 10 * 1000;
  const [citiesList, setCitiesList] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:9000/cities")
      .then((response) => response.json())
      .then((response) => setCitiesList(response));
    }, INTERVAL_SECONDS);

    return () => clearInterval(interval);
    
  }, []);

  return (
    <AppSection>
      {citiesList &&
        citiesList.map((city) => {
          return (
            <div key={city.id}>
              <p>{city.id}</p>
              <p>{city.name}</p>
              <p>{city.level}</p>
            </div>
          );
        })}
    </AppSection>
  );
}

const AppSection = styled.div`
  text-align: center;
  color: red;
`;


// import React from 'react';
// import NikoNiko from './components/NikoNiko/index';
// import Home from './components/Home/index';
// import VoteList from './components/VoteList/VoteList';
// import VoteSuccess from './components/VoteList/VoteSuccess/VoteSuccess';
// import { teams } from './services/service';
// import { Switch, Route } from 'react-router-dom';
// import ChooseVotes from './components/ViewVotes/ChooseVotes';

// class App extends React.Component {

//   constructor(props){
//     super(props);

//     this.state = {
//       teams: []
//     }

//     this.replaceSlash = this.replaceSlash.bind(this);
//   }

//   componentDidMount() {
//     this.fetchPetition();
//   }

//   fetchPetition(){
//     teams()
//     .then(data => {
//       this.setState({
//         teams: data.data
//       })
//     })
//   }

//   replaceSlash(word) {
//     return word.replace('/', '-');
//   }

//   render() {
//     const { teams } = this.state;

//     return(
//       <Switch>
//       <Route 
//           exact path = "/"
//           render={() => (
//             <Home />
//           )}
//         />
      
//       <Route 
//           exact path = "/view-votes"
//           render={() => (
//             <ChooseVotes 
//               teams = {teams}
//             />
//           )}
//         />

//         <Route 
//           exact path = "/teams"
//           render={() => (
//             <NikoNiko 
//               teams = {teams}
//               replaceSlash = {this.replaceSlash}
//             />
//           )}
//         />

//         <Route 
//             exact path = "/vote-success"
//             render={() => (
//               <VoteSuccess />
//             )}
//         />   

//         <Route 
//             path = "/:teamName"
//             render = {(routerProps) => (
//               <VoteList 
//                 match={routerProps.match}
//                 teams = {teams}
//                 replaceSlash = {this.replaceSlash}
//               />
//             )}
//           />

//       </Switch>
//     );
//   }
// }

// export default App;
