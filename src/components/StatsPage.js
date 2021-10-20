import axios from 'axios';
import { useEffect, useState, Fragment } from 'react';

export default function StatsPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3000/api/users');
      console.log(result);
      setData(result);
    };
    fetchData();
  }, []);
  const fetchedData = data;
  //   const { userName, wins, losses} = stats.data[0]
  // console.log(userName, wins, losses)
  console.log(data.data[0]);
  const { wins, userName, losses } = data.data[0];
  if (data) {
    return (
      <Fragment>
        <h1>{userName}</h1>
        <h1>{'Wins:'}</h1>
        <h1>{('Wins: ', wins)}</h1>
        <h1>{'Losses:'}</h1>
        <h1>{(losses)}</h1>

      </Fragment>
    );
  } else {
    return <h1>...loading</h1>;
  }
}
