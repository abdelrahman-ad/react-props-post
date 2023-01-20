import reactLogo from './assets/react.svg'
import './App.css'
import Container from './container'
import { AiFillLike,AiTwotoneLike ,AiOutlineLike,AiOutlineComment} from "react-icons/ai";
import {TfiComment} from "react-icons/tfi";
import { FaAdn,FaCommentDollar} from "react-icons/fa";
import{IoMdShareAlt} from "react-icons/io";
import {BiShare} from "react-icons/bi";
import {FaCreativeCommonsShare,FaSmileWink} from "react-icons/fa";
import {GiRapidshareArrow} from "react-icons/gi";


// {date,description,iconpicture,name,likeicon,shareicon,commenticon})

function App() {

  return (
   
    <div className='containerparent'>
      <Container
      date={'today at1.30'}
      description={<p>thank you Muhammad Ali for your great effort {""} <a href="www.google.com" target="_blank">google</a> {""} </p>}
      name={'mohamma ali'}
      iconpicture={<FaCreativeCommonsShare size={30}/>}
      likeicon={<AiFillLike size={30}/>}
      shareicon={<IoMdShareAlt size={30}/>}
      commenticon={<TfiComment size={30}/>}
      sorce={"/img/1.jpg"}
      />

     


      <Container 
      name={'abdelrahman adel'}
      date={'today at2.30'}
      description={<p>thank you for your feedback <a href='' target='_blank' >عرض المزيد</a></p>}
      iconpicture={<FaAdn size={30}/>}
      likeicon={<AiTwotoneLike size={30}/>}
      shareicon={<BiShare size={30}/>}
      commenticon={<AiOutlineComment size={30}/>}
      sorce={"/img/2.jpg"}
      />
      
      


      <Container
      name={'ahmed adel'}
      date={'today at3.30'}
      description={'love it'}
      likeicon={<AiOutlineLike size={30}/>}
      shareicon={<GiRapidshareArrow size={30}/>}
      commenticon={<FaCommentDollar size={30}/>}
      iconpicture={<FaSmileWink size={30}/>}
      sorce={"/img/3.jpg"}
      
      
      />

    </div>
  )
}

export default App
