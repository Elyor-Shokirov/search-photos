import { deleteDoc, doc } from "firebase/firestore";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { db } from "../fireBase/firebaseConfig";
import { useCollection } from "../hooks/useCollection";

function Blogs() {
  const { blog } = useCollection("images");

  const closeBtn = (e) => {
    e.preventDefault();
    document.getElementById("my_modal_4").close();
  };

  const handleDeleteDownloadImages = (id) => {
    deleteDoc(doc(db, "images", id))
      .then(() => toast.error("Deleted your Blog"))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="m-auto mb-10 max-w-[1440px] px-4 sm:px-6 lg:px-8">
      <h1 className="mb-5 mt-6 text-center font-monserat text-2xl font-semibold">
        Blogs
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        {blog &&
          blog.map((blog) => (
            <div key={blog.id} className="col-span-1 md:col-span-12">
              <div className="card bg-base-100 shadow-xl lg:card-side">
                <figure className="md:min-w-[440px]">
                  <img src={blog.img} alt="Album" />
                </figure>
                <div className="card-body !px-3">
                  <h2 className="card-title font-monserat">{blog.title}</h2>
                  <p className="text-justify font-monserat">
                    {blog.descraption}
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_4").showModal()
                      }
                      className="btn btn-error text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-xl">
                  <div className="flex justify-center">
                    <FaTrashAlt className="text-center text-5xl" />
                  </div>

                  <p className="py-4 text-center">
                    Are you sure you want to delete this item?
                  </p>
                  <div className="modal-action">
                    <form method="dialog" className="flex gap-5">
                      <button onClick={(e) => closeBtn(e)} className="btn">
                        No, cancel
                      </button>
                      <button
                        onClick={() => handleDeleteDownloadImages(blog.id)}
                        className="btn btn-error text-white"
                      >
                        Yes, I'm sure
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Blogs;
