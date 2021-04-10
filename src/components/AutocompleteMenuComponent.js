import React from "react";

const AutocompleteMenuComponent = ({
  name,
  data,
  handleFormInput,
}) => (
  <ul className="bg-white absolute rounded w-80 autocomplete-menu">
    {data.map((suggestion) => (
      <li
        key={suggestion}
        className="px-3 py-2 text-sm cursor-pointer rounded hover:bg-gray-50"
        onClick={() => {
          handleFormInput([name], suggestion);
        }}
      >
        {suggestion}
      </li>
    ))}

    <style jsx>{`
      .autocomplete-menu {
        margin-top: 50px;
      }
    `}</style>
  </ul>
);

export default AutocompleteMenuComponent;
