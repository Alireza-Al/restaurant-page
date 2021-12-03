import /*React,*/ { useEffect, useState } from 'react';
import '../asset/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//import axios from 'axios';
import menu from '../items.json'
import Menu from './TableMenu/Menu';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [initialMenu, changeMenu] = useState<Array<any>>([])

  useEffect(() => {
    fetchData()
    console.log(Object.keys(initialMenu));

  }, [])


  const fetchData = (): any => {
    let value = [...initialMenu]
    let item = Object.values(menu.items.slice(0, 8))

    for (let i = 0; i <= item.length; i++) {
      value.push(item[i])
    }
    value.splice(value.length - 1, 1)
    changeMenu(value)
  }

  return (
    <div className='homeStyle'>
      <Menu item={initialMenu} />

      <div className='sectionStyle'>
      </div>



      <div className='lastSection'>
      </div>
    </div>
  );
}

export default App;
