import React from "react";

const ItemList = ({ items }) => {
    return (
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2  border-gray-400 border-b-2 text-left flex justify-between"
          >
            <div className="pl-2 w-10/12">
              <div className="py-2 font-bold">
                <span>{item.card.info.name}</span>
                <span>- ₹ {item.card.info.price / 100}</span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-2/12 p-2 ">
              <div className="absolute">
                <button className="p-1 bg-black text-white shadow-lg mx-12 rounded-lg">Add +</button>
              </div>
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
                  item.card.info.imageId
                }
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    );
};

export default ItemList;
