import Image from './components/Image';
import ContactInfo from './components/ContactInfo';
import WorkExperience from './components/WorkExperience';

const App = () => {
  return (
    <div>
      <h1>My Resume</h1>

      
      <Image photoName="my-foto.jpg" />

      
      <ContactInfo />

      
      <WorkExperience />
    </div>
  );
};

export default App;
