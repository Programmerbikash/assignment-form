import { useEffect, useState } from 'react';
import './App.css';
import FormControl from './component/FormControl/FormControl';
import AllModel from './component/Model/AllModel';
import Model from './component/Model/Model';

function App() {
  const [data, setData] = useState([]);
  const [formInfo, setFormInfo] = useState(null);

  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5 my-10 lg:ml-3 md:ml-9 ml-5">
          {data.map((info) => (
            <Model
              key={info.id}
              info={info}
              setFormInfo={setFormInfo}
            ></Model>
      ))} 
      </div>
      {
        formInfo &&
        <AllModel formInfo={formInfo}></AllModel>
      }
    </div>
  );
}

export default App;
