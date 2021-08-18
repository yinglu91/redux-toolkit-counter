import React, {useState} from 'react'
import { useFetchBreedsQuery} from './dogs-api-slice'

const Dogs = () => {
  const [numDogs, setNumDogs] = useState(10)
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs)
  
  return (
    <>
      <div>
        <p>Dogs to fetch:</p>

        <select value={numDogs} onChange={e => setNumDogs(Number(e.target.value))}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
        
      <div>
        <p>Number of dogs fetched: {data.length}</p>
        
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>

          <tbody>

            {data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td><img src={breed.image.url} alt={breed.name} height={250} /></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </>
  )
}

export default Dogs
