import "./App.css";
import PunkList from "./components/PunkList";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xC36d211Da64a4cDD727F722196545Ec8799BeD9e&order_direction=asc"
      )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts
  })

  return (
    <div className="app">
      <Header />
      <Main />
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
 