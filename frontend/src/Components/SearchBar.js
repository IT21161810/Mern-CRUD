import React, { useState } from 'react';
import "./SearchBar.css";



function SearchBar({placeholder, data}) {

    const [filteredDat,setFilteredData] = useState([])

    const handleFilter = (event) => {
  
        const searchword = event.target.value;
        const newFilter  = data.filter((value) => {
            return value.title.toLowerCase().includes(searchword.toLowerCase());

        });
        
        if(searchword === ""){
            setFilteredData([])
        }else{
            setFilteredData(newFilter);
        }
    };

    return(
        
         <div className='search'>
         <div className='searchInputs'>
         <input type ="text" placeholder={placeholder}  onChange={handleFilter} />
         <div className='searchIcon'>
           
         </div>
         </div>
          {filteredDat.length != 0 && (
               <div className='dataResult'>
               {filteredDat.slice(0, 15).map((value,key) => {
      
                  return <a className='dataItem' href='{value.link}' target= "_blank">
                      <p>{value.title}</p>
                      </a>
               })}
               </div>
          )}
        </div>
        
    );
}



export default SearchBar;
