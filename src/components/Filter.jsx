

const Filter = () => {
    return (
        <>
            <div className="flex container flex-col px-5 py-6">
                <div className="flex sm:items-center justify-between mt-3">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0">
                        <p>Filter by</p>
                        <select className="ml-3 border-2 border-silver bg-white p-1.5">
                            <option selected disabled>Size</option>
                            <option value="">Small</option>
                            <option value="">Medium</option>
                            <option value="">Large</option>
                        </select>
                        <select className="ml-3 border-2 border-silver bg-white p-1.5">
                            <option selected disabled>Color</option>
                            <option value="">Red</option>
                            <option value="">White</option>
                            <option value="">Black</option>
                            <option value="">Green</option>
                            <option value="">Blue</option>
                        </select>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0">
                        <p>Sort by</p>
                        <select className="ml-3 border-2 border-silver bg-white p-1.5">
                            <option selected>Newest</option>
                            <option value="">Oldest</option>
                            <option value="">Price asc</option>
                            <option value="">Price desc</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filter;