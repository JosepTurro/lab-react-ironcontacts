import './App.css';
import contactsData from "./contacts.json";
import { useState } from "react";

 
function App() {
  let contacts= contactsData.slice(0,5);
  const contactesFinals = contactsData.slice(6,contactsData.length);
  const randomContact = contactesFinals[Math.floor(Math.random()*contactesFinals.length)]
  const [contactes, setContactes]= useState(contacts);
  console.log("Actors aaa: ", contacts)
  console.log("Actors bbb: ", contactes)

   function sortByName (){
     const sortName = [...contactes.sort((a,b)=>{
       return a.name.localeCompare(b.name);
     })]
     setContactes(sortName);
    }

  function sortByPop (){
    const sortPop =[...contactes.sort((a,b)=>{
       return b.popularity - a.popularity 
    })]
    setContactes(sortPop)
  }
  

  function addContact(){
    const contactMood = [...contactes, randomContact ]
    setContactes (contactMood);
    console.log("randommmmmm: ",randomContact);
  }

  function deleteContact(contactId){
    const contactArray = contactes.filter(contct=>{
      console.log( "aaaaaa",contct)
      return contct.id !==  contactId
      
    })
    setContactes(contactArray)
  }
  
  console.log(contacts)
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={addContact}>Add a Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPop}>Sort by popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>
        {contactes.map(actor=>{
          return (
            <tr>
            <td><img src={actor.pictureUrl} alt='foto actor/a' height='180px'></img></td>
            <td>{actor.name}</td>
            <td>{actor.popularity}</td>
            <td>{(actor.wonOscar=== true)?<span>🏆</span>:""}</td>
            <td>{(actor.wonEmmy=== true)?<span>🏆</span>:""}</td>
            <td><button onClick={() => deleteContact(actor.id)}>Delete</button></td>
          </tr>
          );
        })}
      </table>
      
    </div>
  );
}

export default App;