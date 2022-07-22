import './App.css';
import Menu from './components/Menu/Menu'
import HeadSection from './components/HeadingSection/HeadSection'
import Body from  './components/Body/Body'
import BodyReverse from './components/Body/BodyReverse'

function App() {
  const text = <p className="lead"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste molestiae
  beatae, maiores deserunt
  in voluptatibus
  aspernatur architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic consequatur
  repellat eveniet quidem
  voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum magnam
  autem nam ex deserunt debitis
  eaque ratione! Nobis, quidem assumenda.</p>

  return (
    <div className="App">
      <Menu/>
      <HeadSection/>
      <Body img="/imgs/milk.png">
        {text}
      </Body>
      <BodyReverse/>
      <Body img="/imgs/sprinkles.png">
        {text}
      </Body>
    </div>
  );
}

export default App;
