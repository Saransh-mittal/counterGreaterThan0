import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
const App = () => {
  const [count,setCount] = useState(0);
  const setEvent = (event) => {
    if(event.target.name==='Increm')
    setCount(count+1);
    else {
      if(count<=0)
      {
        alert("Count cant go less than zero!!");
      }
      else if(count>0) setCount(count-1);
    }
  };
  return (
    <>
      <div className="flex h-screen justify-center items-center bg-lime-400">
        <div className="bg-white min-h-[35%] min-w-[20%] md:min-w-[30%] lg:min-w-[40%] xl:min-w-[50%] rounded-lg shadow-lg shadow-slate-700">
          <h1 className="font-sans font-semibold bg-indigo-900 text-white text-center text-3xl mt-12 mb-6">
            {count}
          </h1>
          <div className="flex gap-5 justify-center items-center h-12">
          <Tooltip title="Add">
            <Button name="Increm" onClick={setEvent} className="bg-indigo-900 text-white text-xs w-[30%] min-h-[50%] md:w-[25%] lg:w-[20%] xl:w-[15%] rounded-sm font-medium hover:text-green-600 shadow-md shadow-slate-400">
              <AddIcon/>
            </Button>
            </Tooltip>
            <Tooltip title="Delete">
            <Button name="Decrem" onClick={setEvent} className="bg-indigo-900 text-white text-xs w-[30%] min-h-[50%] md:w-[25%] lg:w-[20%] xl:w-[15%] rounded-sm font-medium hover:text-red-600 shadow-md shadow-slate-400">
              <DeleteIcon/>
            </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
