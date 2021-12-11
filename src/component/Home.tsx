import /*React,*/ { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../asset/App.scss';
//import axios from 'axios';
import menu from '../items.json'
// import Menu from './TableMenu/Menu';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faHashtag ,faWheelchair} from '@fortawesome/free-solid-svg-icons'
// import { MENU_ACTIONS } from './TableMenu/MenuActions'
import Navbar from './Navbar/Navbar';


function Home() {
  const [initialMenu, changeMenu] = useState<Array<any>>([])


  useEffect(() => {
    fetchData()
    console.log(Object.keys(initialMenu));
  }, [])

  // useEffect(() => {
  //   window.addEventListener('scroll', ChangeNavbarByScrolling)
  // },[])


  const fetchData = (): any => {
    let value = [...initialMenu]
    let item = Object.values(menu.items.slice(0, 8))

    for (let i = 0; i <= item.length; i++) {
      value.push(item[i])
    }
    value.splice(value.length - 1, 1)
    changeMenu(value)
  }

  const ChangeNavbarByScrolling = () => {
  }

  return (
    <div className='homeStyle'>
      <div className='topSectionStyle'>
        <Navbar />
        <p className='topSectionWelcomeStyle'>
          Welcome To My Restaurant <br />
        </p>
        <div className='closedStyle'>
           Sorry But We Are Currently closed Due To Covid quarantine <br />
          If You Want To Hear About Any News <a href="https://www.instagram.com/aa_still_plays/">Click Here</a>
        </div>
      </div>
      <div className='lastSection'>
      </div>
    </div>
  );
}

export default Home;
