import { useState } from "react";
import React from "react";
import "./App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [answer, setAnswer] = useState("");
  const [count, setCount] = useState(0);

  const accept = () => {
    if (answer == "Yes") {
      alert("😎 از نظر شما متشکریم. نظر شما به اطلاع دوست کیوتتون میرسد 😎");
    } else if (answer == "No") {
      toast(
        "این تصمیم نتیجه منفی روی همکاریمون خواهد داشت تجدید نظر کنید مرسی اه",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          type: "error",
        }
      );
      setCount(count + 1);
    } else {
      toast("🥳 یه کدوم انتخاب کن شیوا جان ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        type: "info",
      });
    }
  };
  return (
    <div className="App">
      <div class="bg-gradient-to-r from-purple-600 via-pink-600 to-green-600">
        <div className="flex items-center mb-4 flex-col h-screen justify-center">
          <h1 className="mb-16 text-4xl font-large text-center">
            🤗 آیا شما امین مشیریان را به عنوان شخص کیوت به رسمیت میشناسید؟{" "}
          </h1>
          <div className="flex items-center my-8">
            <input
              id="default-radio-1"
              type="radio"
              value="Yes"
              name="default-radio"
              className="w-8 h-8 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onClick={(e) => setAnswer(e.target.value)}
            ></input>
            <label
              for="default-radio-1"
              className="ms-2 text-2xl font-large text-gray-900 dark:text-gray-300"
            >
              😍 بله خیلی کیوتی{" "}
            </label>
          </div>
          {count < 2 ? (
            <div className="flex items-center my-8">
              <input
                id="default-radio-2"
                type="radio"
                value="No"
                name="default-radio"
                className="w-8 h-8 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onClick={(e) => setAnswer(e.target.value)}
              ></input>
              <label
                for="default-radio-2"
                className="ms-2 text-2xl font-large text-gray-900 dark:text-gray-300"
              >
                👀 خیر به هیچ عنوان
              </label>
            </div>
          ) : (
            <div></div>
          )}
          <button
            type="button"
            className="my-16 text-white bg-gradient-to-r from-purple-500 to-green-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-20 py-4 text-center me-2 mb-2"
            onClick={accept}
          >
            ثبت نظر
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
