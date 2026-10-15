import Heading from "./Heading"
import Para from "./Para"
import Button from "./Button"

const Header = () => {
  return (
    <div className='header'>
      <Heading text={<>Unleash Your Inner Champion Today.<br/> All In One Place</>} />
      <Para text={<>Join the ultimate tennis experience — where passion meets performance,<br/> and every swing brings you closer to victory.</>} />
      <Button text={'Start your own journey'}/>
    </div>
  )
}

export default Header
