import './App.css';
import Card from './components/Card';

function App() {

  const clickHandler = () => {
    console.log('click!')
  }

  return (
    <>
    <section className='container' onClick={() => console.log('click!')}>
      <Card clickHandler={clickHandler}/>
    </section>
    </>
  );
}

export default App;
