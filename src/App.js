import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Education } from './Components/Education';
import { Home } from './Components/Home';
import { Profile } from './Components/Profile';
import { WorkExperience } from './Components/WorkExperience';
import Layout from './Components/Layout';
import './style/style.css';
import './style/normalize.css';

const App = () =>{
  return (
      <BrowserRouter>
        <header className='App-header'>
            <Layout/>
         </header>
          <main>
              <section>
                <Routes>
                    <Route exact path='/' element = {<Home/>}/>
                    <Route exact path='education' element = {<Education/>}/>
                    <Route exact path='professionalSummary' element = {<Profile/>}/>
                    <Route exact path='workexperience' element = {<WorkExperience/>}/>
                </Routes>
              </section>
          </main>
      </BrowserRouter>

  );
}

export default App;
