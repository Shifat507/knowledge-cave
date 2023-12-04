
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex lg:fle'>
          <Blogs handleBookmark={handleBookmark}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
