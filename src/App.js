import {List} from './components/List'
import {Menu} from './components/Menu';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

function App() {

  const [dataBooks, setDataBooks] = useState([
    {
      id : uuidv4(),
      raiting: 4,
      title: 'Harry Potther y el caliz de fuego',
      image:'libro01.jpg'
    },
    {
      id : uuidv4(),
      raiting: 3,
      title: 'The shining',
      image:'libro02.jpg'
    },
    {
      id : uuidv4(),
      raiting: 5,
      title: 'Codigo Da Vinci',
      image:'libro03.jpg'
    },
    {
      id : uuidv4(),
      raiting: 5,
      title: 'El principito',
      image:'libro04.jpg'
    },
    {
      id : uuidv4(),
      raiting: 5,
      title: 'Sobrenatural',
      image:'libro05.jpg'
    },
  ])
  const [copyBooks, setCopyBooks] = useState(dataBooks);

  const addBook = (book) => {
    book.id = uuidv4();
      setDataBooks([
        ...dataBooks,
        book
      ])
      setCopyBooks([...dataBooks,book]);
  }

  const onSearch = (query) => {
      if (query === '') {
        setCopyBooks([...dataBooks])
      }else{
        const copyDataBooks = [...dataBooks];
        const tempBooks = [];
        copyDataBooks.forEach(item => {
          if (item.title.toLowerCase().indexOf(query) > -1) {
            tempBooks.push(item);
          }
        })
        setCopyBooks(tempBooks)
      }
  }

  const eliminarBook = (id) => {
    console.log(id);
    const booksResultantes = dataBooks.filter( books => books.id !== id)
    console.log(booksResultantes);
    setDataBooks(booksResultantes);
    setCopyBooks(booksResultantes)
  }

  return (
    <div className="App">
      <Menu 
        title = "Amazon"
        addBook = {addBook}
        onSearch = {onSearch}
      />
      <List 
        dataBooks = {copyBooks}
        eliminarBook = {eliminarBook}
      />
    </div>
  );
}

export default App;
