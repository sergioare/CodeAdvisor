import { UploadFile } from "../../firebase";
import {useState} from 'react';


const Download = () => {

const [CV , setFile] = useState(null);
const [Photo , setFile2] = useState(null);

const handleSubmit = async (e)=>{

    e.preventDefault();
    try {
        await UploadFile(CV)
        await UploadFile(Photo)
    } catch (error) {
        alert(error.message)
    }
    
}



    return (
        <>

            <div >
            
            <form onSubmit={handleSubmit}>
                <div >
                <label>
                    CV
                </label>
                <input
                    type="file"
                    name="CV"
                    id="CV"
                    className="shadow appearance-none border rounded w-full 
                    py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={e => setFile(e.target.files[0])}
                />
                </div>
                <div className="mb-4">
                <label
                    htmlFor="Profile Photo"
                    className="block text-black-700 text-sm font-bold mb-2"
                >
                    Profile Photo
                </label>
                <input
                    type="file"
                    id="Profile Photo"
                    className="shadow appearance-none border rounded w-full 
                    py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={e => setFile2(e.target.files[0])}
                />
                </div>

                <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    
                >
                    Upload
                </button>
                

                </div>
                
            </form>

        
        </div>
      </>
    )
}
export default Download;