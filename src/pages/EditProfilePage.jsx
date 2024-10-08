import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useActionData } from "react-router-dom";
import { toast } from "react-toastify";
import EditContainer from "../components/EditContainer";
import { useEdit } from "../hooks/useEdit";
import { useGlobalContext } from "../hooks/useGlobalContext";
export const action = async ({ request }) => {
  let editFormData = await request.formData();
  let editformProps = Object.fromEntries(editFormData);
  if (editformProps.password === editformProps.confirm_password) {
    return editformProps;
  } else {
    toast.warning("Password is not equal !");
    return null;
  }
};

function EditProfilePage() {
  const { editWithConfig } = useEdit();
  const { user } = useGlobalContext();
  const edtFormAction = useActionData();
  console.log("action", edtFormAction);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSelectFile = (e) => {
    const file = e.target.files[0]; // Faylni olish
    if (file) {
      setSelectedFile(file); // Agar fayl bo'lsa, state-ga saqlash
    }
  };

  let avatar = selectedFile;
  useEffect(() => {
    if (edtFormAction) {
      editWithConfig(
        edtFormAction.first_name,
        edtFormAction.last_name,
        edtFormAction.password,
        edtFormAction.email,
        avatar,
      );
    }
  }, [edtFormAction]);

  console.log(user);
  return (
    <div className="auto mt-10 max-w-[1440px] px-3 md:mt-0 md:p-0">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-9 md:grid-cols-12">
          <div className="col-span-12 md:col-span-4">
            <div className="card min-h-[460px] w-full bg-base-100 shadow-xl">
              <figure className="flex flex-col px-10 pt-10">
                <h2 className="carzd-title font-monserat font-semibold">
                  {user.displayName}
                </h2>
                <div className="avatar online mt-2">
                  <div className="w-36 rounded-full">
                    <img
                      src={
                        selectedFile
                          ? URL.createObjectURL(selectedFile)
                          : user.photoURL
                      }
                      alt={`${user.displayName} Avatar`}
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="w-full max-w-xl">
                    <label
                      htmlFor="file-upload"
                      className="btn mb-2 block w-[200px] rounded border bg-brandColor p-3 font-monserat text-sm font-medium text-white"
                    >
                      Upload photo
                    </label>
                    <input
                      onChange={handleSelectFile}
                      id="file-upload"
                      type="file"
                      className="file-input file-input-bordered file-input-info hidden w-full max-w-xs"
                    />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <span className="font-monserat">
                  <span className="mr-2 font-bold"> User since:</span>
                  {dayjs(user.metadata.creationTime).format("DD-MMMM-YYYY")}
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="card mb-10 w-full bg-base-100 px-10 py-8 shadow-xl">
              <p className="text-center font-monserat text-2xl font-normal">
                Edit Profile
              </p>
              <EditContainer user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
