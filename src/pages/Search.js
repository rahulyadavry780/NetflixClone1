import { useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/usefetch";
import { Card } from "../components/Card";
import {useTitle} from "../hooks/useTitle"
import React from 'react'

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath,queryTerm);
  const pageTitle =useTitle(`Search result for ${queryTerm}`);
  return (
    <main>
      <section className='py-7'>
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length ===0 ?`No result found for '${queryTerm}'` : `Result for '${queryTerm}'` }

        </p>
      </section>
      <section className='max-w-7xl mx-auto'>
        <div className="flex justify-center flex-wrap">
          {
            movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default Search
