import Image from 'next/image'
import styles from './page.module.css'
import axios from 'axios';
import React from 'react';
import GetList from '@/service/service';

export async function getServerSideProps() {
  const [list, setList] = useState([]);

  const GetList = async () => {
    const covidList = await GetList();
    setList(covidList);
  }

  useEffect(() => {
    GetList();
  }, []);

  return {
    props: {
      list
    }
  };
}

export default function Home({ list }) {
  return (
    <div>
      <h2>Vietnam's COVID-19 information</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {list.map((infor) => {
            return (
              <tr key={infor.id}>
                <td>{infor.date}</td>
                <td>{infor.confirmed}</td>
                <td>{infor.active}</td>
                <td>{infor.recovered}</td>
                <td>{infor.deaths}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}


