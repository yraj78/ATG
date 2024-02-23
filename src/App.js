import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Cover from './Cover';
import SecondNav from './SecondNav';
import PostSection from './PostSection';

function App() {
  return (
    <div>
      <Navbar />
      <Cover/>
      <SecondNav/>
      <PostSection/>
    </div>
  );
}

export default App;
