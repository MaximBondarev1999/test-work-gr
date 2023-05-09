import React, { useEffect, useState } from 'react';


import { ReactComponent as Next } from "../images/next.svg";
import { ReactComponent as Prev } from "../images/prev.svg";
import { ReactComponent as Search } from "../images/search.svg";
import customer from './data.json';

const CastomersLists = () => {
   const [input, setInput] = useState('');
   const [data, setData] = useState(customer);
   const [filteredData, setFilteredData] = useState([]);



   function formatNumber(num) {
      if (num < 10000) {
         return num;
      } else {
         let numString = num.toString();
         let kString = "k";
         let formattedString = numString.slice(0, -3) + kString;
         return formattedString;
      }
   }
   const buttonActive = (btn) => {
      if (+btn === 0) {
         return <button className='btn__active btn'>Active</button>
      } else {
         return <button className='btn__inactive btn'>Inactive</button>
      }
   }

   useEffect(() => {
      const filtered = data.filter(item =>
         Object.values(item).some(value =>
            value.toString().toLowerCase().includes(input.toLowerCase())
         )
      );
      setFilteredData(filtered);
   }, [data, input]);

   const handleFilterChange = (event) => {
      const filterValue = event.target.value;
      setInput(filterValue);
   };
   
   return (
      <div className='catomers-list__wrapper'>
         <div className='catomers-list__container' >
            <div className='catomers-list__header'>
               <div className='catomers-list__header-all'>
                  <h3>All Customers</h3>
                  <p>Active Members</p>
               </div>
               <div className='catomers-list__header-search'>
                  <Search className='header-search__svg' />
                  <input
                     className='header-search__inp'
                     placeholder='Search'
                     value={input}
                     onChange={handleFilterChange}
                  />
               </div>
            </div>
            <div className="catomers-list__table-blok">
               <table className='catomers-list__table'>
                  <thead className='catomers-list__theader'>
                     <tr className='catomers-list__tr'>
                        <th>Customer Name</th>
                        <th>Company</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th className='catomers-list__tr-status'>Status</th>
                     </tr>
                  </thead>
                  <tbody className='catomers-list__tbody'>
                     {filteredData.map((item) =>
                        <tr className='catomers-list__tr-list' key={item.Id}>
                           <td>{item.name}</td>
                           <td>{item.company.name}</td>
                           <td>{item.phone}</td>
                           <td>{item.email}</td>
                           <td>{item.country}</td>
                           <td>{buttonActive(item.status)}</td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>
            <div className='catomers-list__bottom'>
               <div className='catomers-list_bottom-call'>
                  Showing data 1 to 8 of  {formatNumber(filteredData.length)} entries
               </div>
               <div className='catomers-list__bottom-pagination'>
                  <button className='pagination__prev'><Prev /></button>
                  <button id='pagination__active'>1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>4</button>
                  <button id='pagination__dot'>...</button>
                  <button>40</button>
                  <button className='pagination__next'><Next /></button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CastomersLists
