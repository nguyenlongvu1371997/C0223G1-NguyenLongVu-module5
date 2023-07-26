import Image from 'next/image'
import styles from './page.module.css'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import React from 'react';

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:8080/covids');
    const dataList = response.data;
    return {
      props: {
        dataList
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        dataList: [],
      },
    };
  }
}

export default function Home({dataList}) {
  
  return (
    <>
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
          {dataList.map((m, index) => {
            return (
              <tr key={index}>
                <td>{m.date}</td>
                <td>{m.confirmed}</td>
                <td>{m.active}</td>
                <td>{m.recovered}</td>
                <td>{m.deaths}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}


