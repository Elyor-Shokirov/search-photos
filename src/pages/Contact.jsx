import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Contact() {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });
  const history = useNavigate();

  const Token = "7958252792:AAFTz11jSpYgEOxSuDv-g48gEUCk7o3v5zQ";

  const chat_id = -1002292894212;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };

  async function HandleClick(e) {
    e.preventDefault();
    if (
      inputValue.name.length > 0 &&
      inputValue.email.length > 0 &&
      inputValue.subject.length > 0 &&
      inputValue.text.length > 0
    ) {
      const text = `
🔔<b>You have a new message:</b>🔔 \n
<b>🙍‍♂️Name:</b> <i>${inputValue.name}</i> \n
<b>📧Email:</b> <i>${inputValue.email}</i> \n
<b>📘Subject:</b> <i>${inputValue.subject}\n</i>
<b>📁All text:</b> <i>${inputValue.text}\n</i>
        `;

      const data = {
        chat_id: chat_id,
        text: text,
        parse_mode: "HTML",
      };

      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const url = `https://api.telegram.org/bot${Token}/sendMessage`;
      const req = await fetch(url, options);
      const resData = await req.json();
      toast.success(
        "Your information has been received. We will contact you soon"
      );
      if (resData.ok) {
        setInputValue({
          name: " ",
          email: " ",
          subject: " ",
          text: " ",
        });
      }
      console.log(inputValue);
      history("/");
    } else {
      toast.error("Please enter the complete information");
    }

    console.log(inputValue);
  }
  return (
    <div className="max-w-[1440px] m-auto px-4 sm:px-6 lg:px-8">
      <div>
        <div className="sm:mt-[50px] mt-5 flex justify-center mb-5">
          <p className=" font-monserat font-bold text-[25px] md:text-[50px]">
            Contact Us
          </p>
        </div>
        <div className="border-[1px] border-[#e2e8f0] rounded-xl bg-white shadow-2xl p-[30px] mb-8">
          <h3 className="pl-[10px] border-l-[2px] border-l-brandColor mb-8">
            Get In Touch
          </h3>
          <form action="" onSubmit={HandleClick}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 ">
              <div className="md:col-span-6 col-span-12">
                <input
                  onChange={handleOnChange}
                  id="name"
                  name="name"
                  placeholder="Your name "
                  className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white border-[1px] shadow-2xl"
                />
              </div>
              <div className="md:col-span-6 col-span-12">
                <input
                  onChange={handleOnChange}
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white border-[1px] shadow-2xl"
                />
              </div>
              <div className="col-span-12">
                <input
                  onChange={handleOnChange}
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white border-[1px] shadow-2xl"
                />
              </div>
              <div className="col-span-12">
                <textarea
                  type="text-aria"
                  onChange={handleOnChange}
                  id="subject"
                  name="text"
                  placeholder="Subject"
                  className="h-[200px] px-6 py-2 w-full rounded-md flex-1 outline-none bg-white border-[1px] shadow-2xl"
                />
              </div>
              <div>
                <button className="bg-brandColor px-8 py-3 rounded-md text-white font-monserat font-bold">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
