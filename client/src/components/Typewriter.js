import '../styles/Typewriter.css';

const Typewriter = ({ text }) => {
  return (
    <div className='typewritercontainer'>
      <div className="typewriter">
        <h2>{text}</h2>
      </div>
    </div>
  );
}

export default Typewriter;
