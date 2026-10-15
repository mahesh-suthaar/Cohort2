import GlassButton from "./GlassButton.jsx";
import Heading from "./Heading.jsx";

const Banner = () => {
  return (
    <div className="banner">
      <GlassButton text={'Home Page'}/>
      <Heading text={<>Clean web design and intuitive user experience<br/> that reflects the club's dynamic spirit<br /> and premium feel.</>}/>
    </div>
  )
}

export default Banner
