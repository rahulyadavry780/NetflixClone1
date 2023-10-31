import {useFetch} from "../hooks/usefetch";
import {Card} from "../components/Card";
import { useEffect } from "react";
import {useTitle} from '../hooks/useTitle'
export const MovieList = ({apiPath,title}) => {
  
  const {data:movies} = useFetch(apiPath)
 const pageTitle = useTitle(title)
  return (
  <main>
     
        <section className='max-w-7xl mx-auto'>
          <div className="flex justify-center flex-wrap other:justify-evenly">
            {
              movies.map((movie)=> (
                <Card key={movie.id} movie={movie}/>
              ))    
            }
          </div>
         
        </section>
  </main>
  )
}

export default MovieList
