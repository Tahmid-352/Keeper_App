import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import notes from './notes';
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <Header></Header>
        {notes.map(note => <Note key={note.key} title={note.title} content={note.content}></Note>)}
        
        <Footer></Footer>
      </div>
    </>
  )
}

export default App;
