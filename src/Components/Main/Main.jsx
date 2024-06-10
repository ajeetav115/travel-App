import React, {useEffect} from 'react'
import './main.css'

import{HiOutlineLocationMarker } from 'react-icons/hi'
import{HiOutlineClipboard} from 'react-icons/hi'

import img from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the epitome of romance, bora bora is one of the best travel destinations in the world. this place is known for its luxurois stays and adventurous activities.'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Machu picchu',
    location: 'peru',
    grade: 'CULTURE RELAX',
    fees: '$600',
    description: 'huayna picchu is a mountain in peru , rising over machu picchu, the so-called lost city of incas. this place is popular among tourists as the sunrise from the sun is simply spectacular.'
  },



  {
    id:3,
    imgSrc: img3,
    destTitle: 'great barrier reef',
    location: 'australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'one of the most remarkable australian natural gifts is the great barrier reef. the hallmark of this place is lavish and beauty. always interesting to be in this place'

  },

 { id:5,
    imgSrc: img5,
    destTitle: 'guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'a city in central mexico, guanajuata is known for its history of silver mining and colonial architecture. the house in the city are very attractively painted with the most bright colors available . always welcome.'
 },

 {
  id:6,
  imgSrc: img6,
  destTitle: 'Cinque terre',
  location: 'italy',
  grade: 'CULTURAL RELAX',
  fees: '$840',
  description:'the vibrant hues of the houses are its benchmark and explain the beauty of this place. also, if you are a foodie and love seafood , you will be exhilarated with the choice you are about to get here'

},

{
  id:7,
  imgSrc: img7,
  destTitle: 'angkor wat',
  location: 'Cambodia',
  grade: 'CULTURAL RELAX',
  fees: '$790',
  description:'angkot wat represents the entire range of khmer art from the 9th to the 15th century. this temple is considered the heart and soul of cambodia.this place is known for its luxurious stays and adventurous activities '


},

{
  id:8,
  imgSrc: img8,
  destTitle: 'taj mahal',
  location: 'india',
  grade: 'CULTURAL RELAX',
  fees: '$700',
  description:'  an immense mausoleum of white marble, built-in agra by mughal emperor shah jahan in memory of his mumtaz,the mumtaz is brathtalkingly beautiful '

},

{
  id:9,
  imgSrc: img9,
  destTitle: 'bali island',
  location: 'indonesia',
  grade: 'CULTURAL RELAX',
  fees: '$500',
  description:'bali is an indonesia island and one of the best holiday destinations in the indonesian archipelago. bali is known for its volcanic mountains, histyory, art&culture, food , temples beautiful sandy beaches.'
  

},

]
const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])


  return (
    <section className='main container section'>
      <div className="secTitle">
       <h3   data-aos="fade-right" 
       className="title">
        Most visited destinations
        </h3> 
      </div>

      <div className="secContent grid">

        {
          Data.map(({id,imgSrc, destTitle , location,  grade, fees,
             description,})=>{
              return(
                <div key={id} 
                data-aos="fade-up" 
                className="singleDestination">
                  {/* here it will return single id from the map array */}

                  <div className="imageDiv">
                    <img src={imgSrc} alt=
                    {destTitle} />
                  </div>

                 <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{location} </span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small> +1</small></span>

                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn  flex'>
                    Details <HiOutlineClipboard  className="icon"/>
                  </button>

                  </div>

                </div>
              )

          })
        }

      </div>
    </section>
  )
}

export default Main
