 function Footer(){
    return(
        <div className="bg-gray-300 p-4 ">
            <footer className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
                <span className="bi bi-c-circle fw-boldnpm md:flex-wrap"> 2025-@nitishPort. All rights reserved.</span>
                <span className="flex gap-6 text-gray-800">
                    <span><a href="#">Term</a></span>
                    <span><a href="#">Privancy</a></span>
                    <span><a href="#">Cookies</a></span>
                </span>
                <span >
                    <span className="bi bi-translate text-2xl me-3"></span>
                    <select name="language" className="bg-gray-800 border-none rounded text-white focus:outline-none px-2 py-1">
                        <option value="English"> English</option>
                        <option value="Hindi"> हिन्दी</option>
                    </select>
                </span>
            </footer>
        </div>
    )
} 
export default Footer