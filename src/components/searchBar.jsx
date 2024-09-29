import { useState } from "react";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobalContext } from "../hooks/useGlobalContext";
import FormInput from "./FormInput";

function SearchBar() {
  const { dispatch } = useGlobalContext();
  const [searchBarData, setSearchBar] = useState("");

  const handleOnChange = (e) => {
    const eTargetData = e.target.value;
    setSearchBar(eTargetData);
  };

  const clickSearchImage = () => {
    if (searchBarData == 0) {
      toast.warning(
        "Please enter the name of the image you want to search for",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } else {
      dispatch({ type: "TAKE_ONCHANGE_INPUT", payload: searchBarData });
    }
  };

  return (
    <Form method="post">
      <FormInput type="text" placeholder="Search..." name="search" />
    </Form>
  );
}

export default SearchBar;
