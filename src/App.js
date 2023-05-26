import Image from './components/Image';
import ContactInfo from './components/ContactInfo';
import WorkExperience from './components/WorkExperience';
import Counter from './components/Counter';
import GitHubRepositories from './components/Repo';

const App = () => {
  return (
    <div>
      <h1>My Resume</h1>

      
      <Image photoName="my-foto.jpg" />

      
      <ContactInfo />

      
      <WorkExperience />

      <Counter />

      <GitHubRepositories username="govtvigor" />
    </div>
  );
};

export default App;
