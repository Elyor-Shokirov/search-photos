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
        "Your information has been received. We will contact you soon",
      );
      if (resData.ok) {
        setInputValue({
          name: " ",
          email: " ",
          subject: " ",
          text: " ",
        });
      }
      history("/");
    } else {
      toast.error("Please enter the complete information");
    }
  }
  return (
    <div className="m-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
      <div>
        <div className="mb-5 mt-5 flex justify-center sm:mt-[50px]">
          <p className="font-monserat text-[25px] font-bold md:text-[50px]">
            Contact Us
          </p>
        </div>
        <div className="bgDarkBlack mb-8 rounded-xl border-[1px] border-[#e2e8f0] bg-white p-[30px] shadow-2xl">
          <h3 className="aboutText mb-8 border-l-[2px] border-l-brandColor pl-[10px]">
            Get In Touch
          </h3>
          <form action="" onSubmit={HandleClick}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
              <div className="col-span-12 md:col-span-6">
                <input
                  onChange={handleOnChange}
                  id="name"
                  name="name"
                  placeholder="Your name "
                  className="w-full flex-1 rounded-md border-[1px] bg-white px-6 py-2 shadow-2xl outline-none"
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <input
                  onChange={handleOnChange}
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full flex-1 rounded-md border-[1px] bg-white px-6 py-2 shadow-2xl outline-none"
                />
              </div>
              <div className="col-span-12">
                <input
                  onChange={handleOnChange}
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="w-full flex-1 rounded-md border-[1px] bg-white px-6 py-2 shadow-2xl outline-none"
                />
              </div>
              <div className="col-span-12">
                <textarea
                  type="text-aria"
                  onChange={handleOnChange}
                  id="subject"
                  name="text"
                  placeholder="Subject"
                  className="h-[200px] w-full flex-1 rounded-md border-[1px] bg-white px-6 py-2 shadow-2xl outline-none"
                />
              </div>
              <div>
                <button className="rounded-md bg-brandColor px-8 py-3 font-monserat font-bold text-white">
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
