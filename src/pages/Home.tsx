import { IPlant } from '../interfaces/plant.interface';
import { usePlantFilter, useFetchItems } from '../hooks';
import Item from '../components/Item';
import { URL } from '../assets/URL';

function Home() {
  const { items, errorFetch, loading } = useFetchItems(URL);
  const { filterItems, filteredItems } = usePlantFilter(items);

  return (
    <>
      <div id='item-container'>
        <div id='title-search'>
          <h1 id='title'>Catálogo</h1>
          <div className='sort'>
            <input id='search' type='text' placeholder='Búsqueda' onChange={filterItems} />
          </div>
        </div>

        {!errorFetch &&
          (!loading ? (
            <div id='item-grid'>
              {filteredItems.map((p: IPlant) => (
                <Item plant={p} key={p.id} />
              ))}
            </div>
          ) : (
            <span className='loader'></span>
          ))}

        {errorFetch && (
          <div>
            <p>Error</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
