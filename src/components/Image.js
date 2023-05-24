import './Image.css'; // імпорт стилів

const Image = (props) => {
  return <img src={require(`../${props.photoName}`)} alt="Resume" className="resume-image" />;
}

export default Image;