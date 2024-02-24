import {FaSearch} from "react-icons/fa";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const SearchBox = () => {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`/search/${keyword}`);
    }

    return (
        <>
            <form
                onSubmit={handleSearch}
                className="w-[60%] flex overflow-hidden items-center justify-center bg-white h-[40px] border-[#cccccc] rounded-[5px]">
                <input
                    value={keyword}
                    onChange={(e)=>setKeyword(e.target.value)}
                    className="w-[160px] sm:w-full md:w-[60%] border pl-2 sm:pl-3 border-gray-500 h-full outline-none"
                    type="text"
                    placeholder="search..."
                    required
                />

                <button className="bg-[#4caf50] p-2 h-full">
                    <FaSearch size={22} className="text-white"/>
                </button>
            </form>

        </>
    );
};

export default SearchBox;