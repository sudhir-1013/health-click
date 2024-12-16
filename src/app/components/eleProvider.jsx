import React from "react";

// ================================================================================== H2 ==================================================================================

export function H2({ children}) {
  return (
    <h2 className="text-5xl font-extrabold tracking-tight mb-6 text-black">
        {children}</h2>
    );
  }
  // ================================================================================== H2Green ==================================================================================
  export function H2Green({ children, spanText}) {
    return (
      <h2 className="text-5xl font-extrabold tracking-tight mb-6 text-[#689F38]">
        {children} <span className="text-[#8BC34A]">{spanText}</span>
      </h2>
    );
  }
  
  // ================================================================================== H3Green ==================================================================================
  export function H3Green({ children}) {
    return (
      <h3 className="text-2xl font-semibold text-[#689F38] mb-4">{children}</h3>
    );
  }
  
  // ================================================================================== H3 ==================================================================================
export function H3({ children}) {
    return (
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{children}</h3>
    );
}
const eleProvider = () => {

  return <></>;
};


export default eleProvider;