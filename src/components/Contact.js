const Contact=()=>{
    return(
        <div>
            <h1 className=" font-bold text-3xl p-4 m-4">Conatct Us Page</h1>
            <form>
                <input type="text" placeholder="Name" className=" border border-black p-2 m-2 rounded-lg"/>
                <input type="text" placeholder="Message" className=" border border-black p-2 m-2 rounded-lg"/>
                <button className=" border border-black  bg-gray-300 p-2 m-2 rounded-lg">Submit</button>
            </form>
            
        </div>
    )
}
export default  Contact;