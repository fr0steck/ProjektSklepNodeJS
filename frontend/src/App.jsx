import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:9001/category');
      const data = await response.json();
      setCategories(prevState => prevState = data)
    }

    fetchData();
  }, [])

  return (
    <div className='app'>
      <h1>Categories</h1>
      <div className="categories">
        {categories.map((element) => (
          <Link
            className="category"
            key={element.id}
            to = {`http://localhost:9000/${element}`}>
            <img
              src = {elemement.src_img}
              alt="category_image"
              />
            <p>{element.name}</p>
        </Link>
        ))}
      </div>
    </div>
  )
}

export default App
