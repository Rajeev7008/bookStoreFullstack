import React from "react";

function Cards({item}) {
    
  return (
    <>
      <div className="my-3 p-3">
        <div className="bg-transparent  card w-88 h-88  shadow-xl dark:bg-slate-900 dark:text-white hover:scale-105 duration-200">
          <figure>
            <img className="w-72 h-72 rounded-lg object-cover p-2"
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title overflow-hidden">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
                      <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">$ {item.price}</div>
              <div className="outline-none px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:texr-white duration-200">buy now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
