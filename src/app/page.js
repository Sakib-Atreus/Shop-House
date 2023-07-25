"use client";

import { useEffect, useState } from "react";

import data from "../../public/data.json";
import cart from "../../public/cart.png";

export default function Home() {
  const [load, setLoad] = useState([]);

  useEffect(() => {
    fetch("../../public/data.json")
      .then((res) => res.json())
      .then((data) => setLoad(data));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl font-bold text-center">OUR COLLECTION</h1>
        <p className="text-xl text-center m-4 text-orange-500">
          Buy and Get Discount!
        </p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
          {data.product.map((user) => (
            <div key={user.id}>
              <div class="m-4 mx-auto max-w-screen-lg rounded-md border border-gray-100 text-gray-600 shadow-md">
                <div class="relative flex h-full flex-col text-gray-600 md:flex-row">
                <div class="mx-auto flex items-center px-5 pt-1 md:p-8">
                    <img
                      class="block h-3/5 max-w-full rounded-md shadow-lg"
                      src={user.picture}
                      alt="Shop image"
                    />
                  </div>
                  <div class="relative p-8 md:w-4/6">
                    <div class="flex flex-col md:flex-row">
                      <h2 class="mb-2 text-xl font-black">{user.name}</h2>
                      <span class="ml-2 text-xs uppercase"></span>
                    </div>
                    <p class="mt-3 font-sans text-base tracking-normal">
                      {user.about}
                    </p>
                    <div class=" font-medium m-2">
                      <p class="mt-2 ">Category: {user.category}</p>
                      <p>Color: {user.colors}</p>
                      <p>Size: {user.size}</p>
                      <p>Rating: {user.review.rating}</p>
                      <p>Review: {user.review.comment}</p>
                    </div>
                    <div class="flex flex-col md:flex-row md:items-end">
                      <p class="mt-4 text-xl font-black">Price: {user.price}</p>
                    </div>
                    
                    <div class="mt-8 flex flex-col sm:flex-row">
                      <button class="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-blue-400 py-2 px-8 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-emerald-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-2 h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        Buy now
                      </button>
                      <button class="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-violet-500 hover:text-white">
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
