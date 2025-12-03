import { createPortal } from "react-dom";

const UserAdd = ({setShowModal}) => {
    
    return createPortal (
        (
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center" onClick={() => setShowModal(false)}>
                <div className="bg-white p-4 rounded min-w-[500px]" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content">
                        <div className="flex justify-between items-center mb-4">
                            <h5 className="modal-title text-lg font-bold">ایجاد کاربر جدید</h5>
                            <button type="button" className="text-gray-500 hover:text-gray-700 text-2xl font-bold" onClick={() => setShowModal(false)}>×</button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label block mb-1">نام</label>
                                    <input type="text" className="form-control w-full p-2 border border-gray-300 rounded" id="name" placeholder="Enter Name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label block mb-1">ایمیل</label>
                                    <input type="email" className="form-control w-full p-2 border border-gray-300 rounded" id="email" placeholder="Enter email"/>                                
                                </div>
                                <button type="submit" className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">ذخیره</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
        ,document.getElementById("modal-root"))
};


export default UserAdd;