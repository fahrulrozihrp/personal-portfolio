import React from "react";

function Button({ title }: any) {
  return (
    <button className="bg-[#8513e2] border-2 border-[#8513e2] rounded-full px-5 py-2">
      <p>{title}</p>
    </button>
  );
}

export default Button;
