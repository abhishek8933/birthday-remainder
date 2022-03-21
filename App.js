import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setpeople]=useState(data);
  console.log(people);
  return <main>
    <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={()=>
        setpeople([])
        }>clear All</button>
    </section>
  </main>;
}

export default App;
