import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <>
            {/*<div*/}
            {/*    className="py-8 bg-gradient-to-r from-[#434343] mt-[70px] to-[#000000] text-white text-2xl text-center">*/}
            {/*    All Right Reserved &copy; Osman Goni*/}
            {/*    /!*<p className="text-center mt-3 text-xl">*!/*/}
            {/*    /!*    <button>About </button> | <button > Contact </button> |*!/*/}
            {/*    /!*    <button>  Privacy Policy</button>*!/*/}
            {/*    /!*</p>*!/*/}
            {/*</div>*/}
            <div
                className="py-8 bg-white mt-[70px] to-[#000000] text-black text-2xl text-center">
                All Right Reserved &copy; Osman Goni
                {/*<p className="text-center mt-3 text-xl">*/}
                {/*    <button>About </button> | <button > Contact </button> |*/}
                {/*    <button>  Privacy Policy</button>*/}
                {/*</p>*/}
            </div>
        </>
    );
};

export default Footer;