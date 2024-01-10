import "../styles/home.scss";
import FileCenter from "../components/FileCenter";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1 className="logo">easysend</h1>
      <div className="left">
        <FileCenter/>
      </div>
      <div className="right">
        <div className="nav">
          <Link className='app-link' to='/app'>app</Link>
          <Link className="portfolio-link" to='/app'>portfolio</Link>
        </div>
        <h1>EASY SEND</h1>
        <h3>Send files with ease</h3>
        <hr />
        <div className="instructions">
          <ul>
            <li>select files</li>
            <li>choose reveicer email</li>
            <li>choose sender email</li>
            <li>click send</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
