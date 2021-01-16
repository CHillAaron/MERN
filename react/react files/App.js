import logo from './logo.svg';
import './App.css';
import Stock from "./components/Stock"


function App() {
  //you can have javascript code here and until the return statement
  const name = "Rob"
  const topStocks = ["Albemarle", "Nio", "Novavax", "Fiverr", "Plug Power"]
  //in the future, if we pulled code ffrom the backend, the js code would go here 
  console.log("WE IN THE APP.JS")
  return (

    <>
      <div className="App">
        <h1>Hello {name}, Here are the top companies to have invested in 2020:</h1>
        <ul>
          {
          topStocks.map((stock, i) => {
            return <li key = {i}>{stock}</li>
          })
          }
  
        </ul>
        {/* <ul>
        {% for x in topStocks %}
          <li>{{x}}</li>
        {% endfor %}
        </ul> */}
        <Stock stockName = {"Albemarle"} ytdReturn = {"88%"}>
            <p></p>
        </Stock>
        <Stock stockName = {"Nio"} ytdReturn = {"1,044%"}>
            <p>Speaking of electric vehicles, Chinese EV manufacturer Nio has had an unbelievable year in the markets in order to land a spot in this list of best-performing stocks.</p>
        </Stock>
        <Stock stockName = {'Novavax'} ytdReturn = {"3,210%"}>
          <p>It’s better late than never. That’s definitely true for one of the best-performing stocks of 2020, a Maryland-based vaccine developer. </p>
        </Stock>


      </div>
      
    </>
  );
}

export default App;
