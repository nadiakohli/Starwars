import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import Planet from './Planet';

// Components
import Pagination  from '../Pagination/index';

const axiosPlanets = async (page) => {
  const res = await axios.get(`https://swapi.dev/api/planets/?page=${page}`);
  return res.data || res;
}

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, isError, refetch } = useQuery('planets', () => axiosPlanets(page));

  const handleData = (currentPage) => {
    setPage(currentPage);
  };

  useEffect(() => { refetch() }, [page]);

  return (isLoading || isFetching
    ? <div>Loading data...</div>
    : (
      <div>
        <h2>Planet</h2>
        {isError
          ? <div>Error fetching data</div>
          : (
            <>
              <div>
                {data && data.results ? data.results.map((planet) => <Planet key={planet.name} planet={planet} />) : null}
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

export default Planets;
