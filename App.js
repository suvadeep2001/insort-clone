import './App.css';
import Navinsorts from "./components/Navinsorts"
import {useState} from "react"
import {useEffect} from "react"
import NewsContent from './components/NewsContent/NewsContent';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import apikey from './data/config'
function App() {

  const [category, setCategory] = useState("general")

  const [newsArray, setNewsArray] = useState([])
 
  
  const [newsResult, setNewsResult] = useState()
  const newsApi = async ()=>{
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}`)
      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults)
    }

    catch (error) {
      console.log(error);
    }
  }

console.log(newsArray);

useEffect(() => {

newsApi();

}, [newsResult,category])
  return (
    <div className="App">
      <Navinsorts setCategory={setCategory} />
<NewsContent newsArray={newsArray} newsResult={newsResult}/>

<Footer/>
    </div>
  );
}

export default App;
