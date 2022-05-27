import React from "react";

function Feedback() {
    function handleSubmit(e){
        e.preventDefault()
        alert(`Hello. Thank you for your feedback. Enjoy your Cocktail!`)
    }

    return (
    <div className=" flex  flex-col items-center justify-center ">
      <h3 className="text-2xl  pt-7 text-textcolor font-bold">
        We value your feeback
      </h3>

      <form onSubmit={handleSubmit} className="">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="email..."
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name..."
            required
          />
        </div>
         <label for="message" className="block mb-2 text-sm font-medium text-white dark:text-gray-400">Your message</label>
        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." required></textarea>
        <button
          type="submit"
          className="text-white my-4 bg-textcolor hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Feedback;
