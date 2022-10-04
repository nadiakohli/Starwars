import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import axios from 'axios';

import Person from './Person';

// Components
import Pagination  from '../Pagination/index';

// Styles
const Loading = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const axiosPeople = async (page) => {
  const res = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
  return res.data || res;
};

const People = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, isError, refetch } = useQuery('people', () => axiosPeople(page));

  const handleData = (currentPage) => {
    setPage(currentPage);
  };

  useEffect(() => { refetch() }, [page])

  return (isLoading || isFetching
    ? <>
      <Loading>Loading data...</Loading>
      {/* <Pagination
        currentPage={page}
        perPage={10}
        countPages={data.count}
        handleData={handleData}
      /> */}
    </>
    : (
      <div>
        <h2>Person</h2>
        {isError
          ? <div>Error fetching data</div>
          : (
            <>
              <div>
                {data && data.results ? data.results.map((person) => <Person key={person.name} person={person} />) : null}
              </div>
              <Pagination
                currentPage={page}
                perPage={10}
                countPages={data.count}
                handleData={handleData}
              />
            </>
          )}
      </div>
    )
  );
};

export default People;
