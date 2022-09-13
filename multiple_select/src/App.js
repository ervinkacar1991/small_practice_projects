import { useEffect, useState } from "react";

data = [
  { id: 1, name: "alabama" },
  { id: 2, name: "alaska" },
];

const App = () => {
  const [values, setValues] = useState([]);
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const filter = data.filter((item) => {
      item.name?.toLowerCase();
    });
setFilteredData(filter || [])
  }, []);

  return (
    <div>
      <input
        value={values}
        onChange={(e) => {
          console.log(e.target.value);
          setValues(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setValues("submited");
        }}
      >
        Submit
      </button>
      <ul></ul>
    </div>
  );
};

export default App;
