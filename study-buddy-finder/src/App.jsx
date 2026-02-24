import { useState } from 'react'
import './App.css'

function App() {
  const [groups, setGroups] = useState([
    {id: 1, subject: "CSE 100", time: "Mon 5:00 PM", members: 3},
    {id: 2, subject: "MATH 021", time: "Tue 2:00 PM", members: 1},
    {id: 3, subject: "WRI 010", time: "Thu 11:00 AM", members: 5}
  ]);

  const [newSubject, setNewSubject] = useState("");

  const joinGroup = (id) => {
    const updatedGroups = groups.map((group) => {
      if (group.id === id){
        return { ...group, members: group.members + 1};
      }
      return group;
    });
    setGroups(updatedGroups);
  };

  const addGroup = (e) => {
    e.preventDefault();
    if (!newSubject) return;

    const newEntry = {
      id: groups.length + 1,
      subject: newSubject,
      time: "TBD",
      members: 1
    };

    setGroups([...groups, newEntry]);
    setNewSubject("");
  };

  const deleteGroup = (id) => {
      const updatedGroups = groups.filter(group => group.id !== id);
      setGroups(updatedGroups);
  };

  return (
    <div className="App">
      <h1>UCM Study-Buddy Finder</h1>
      <p>Welcome to the campus dashboard.</p>
      
      {/* This is where your Study Group list will go soon! */}
      
      <form onSubmit={addGroup} style={{marginBottom: '20px'}}>
        <input
          type  = "text"
          placeholder = "Enter class name (e.g. CSE 100)"
          value = {newSubject}
          onChange = {(e) => setNewSubject(e.target.value)}
          style = {{ padding: '10px', marginRight: '10px' }}
        />
        <button type = "submit"> Create Study Group </button>
      </form>
      
      <div className="dashboard">
        {groups.map((group) => (
          <div key={group.id} className="study-card">
            <h3>{group.subject}</h3>
            <p>Time: {group.time}</p>
            <p>Members: {group.members}</p>
            <button onClick={() => joinGroup(group.id)}>Join Group</button>
            <button 
              onClick={() => deleteGroup(group.id)}
              style={{ backgroundColor: '#dc3545', marginLeft: '10px' }}
            >
              Delete
            </button>

          </div>
        ))}
      </div>
    </div>

        
  )
}

export default App
