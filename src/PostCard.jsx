import React, { useState } from "react";

function PostCard(props) {
    const { userId, id, title, body } = props;
    const [clicked, setClicked] = useState(false);



    return (
        <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:border-black hover:border-2 hover:bg-[#ffb6bf] flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">{props.title}</h2>
            <p className="text-gray-600 text-center mt-2">
                <span className="font-medium"></span>{body}
            </p>

            <button className={clicked ? "bg-special-red2 text-white p-2 rounded-md w-full mt-auto" : "bg-gray-01 text-white p-2 rounded-md w-full mt-auto"}
                onClick={() => setClicked(true)}
            >
                {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
            </button>
        </div>
    );
}

export default PostCard