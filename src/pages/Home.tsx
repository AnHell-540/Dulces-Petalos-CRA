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
                        {/* <div id="sort-up">
                            <i className="fa-solid fa-arrow-down-1-9"></i>
                            <input type="radio" id="filter1" name="filter" value="option1" className="filter" />
                        </div>

                        <div id="sort-down">
                            <i className="fa-solid fa-arrow-down-9-1"></i>
                            <input type="radio" id="filter2" name="filter" value="option2" className="filter" />
                        </div> */}

                        <input
                            id='search'
                            type='text'
                            placeholder='Búsqueda'
                            onChange={filterItems}
                        />
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
