import React, { useEffect, useState } from 'react';
import Filter from '../general/filter';
import SearchBar from '../general/search_bar';

const RecentIvoice = () => {


  const [checkPage, setCheckPage] = useState(true);
 useEffect(()=>{

  const currentPage = window.location.href;
  const targetUrl = '/seller/order';
  if(currentPage.includes(targetUrl)){
setCheckPage(false);
  }
  console.log(checkPage);
 });

    return(
        <div className="col-md-12  card bg-light shadow p-3 " >
        <div className="card-body ">
          
        <div>
          {!checkPage ? '' : <strong>
        <small>Recent Invoice</small>
      </strong> }
      
     
{ checkPage ? '' :<div className="row mt-3">
  <div className="col-md-12 ">
    <div className="d-flex justify-content-between  align-items-center">
      <SearchBar placeholder='search...' />
    
      <button className="btn btn-md mx-0" style={{ border: 'solid 1px #222' }}>
              <i className='fa fa-calendar'></i> 01 Dec - 16 Dec
            </button> 
            <div style={{ maxWidth: '300px' }}>
        <Filter />
      </div>
            <button className="btn btn-md ml-auto" style={{ border: 'solid 1px #222' }}>
              <i className='fa fa-calendar'></i> Download as CSV
            </button>
       
            
            </div>
  </div>
</div>}
         
      <div className="d-flex justify-content-end align-items-center" style={{ maxWidth: '300px', flexGrow: 1, float: 'right' }}>
       { checkPage && <Filter />}
       
        <i className="fas fa-ellipsis-v text-muted" style={{ cursor: 'pointer', display: 'inline-block' }}></i>
      </div>
    </div>

      <div className="recent-invoices">
      {!checkPage ? '' : <h4>Recent Invoices</h4>
}
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Customer Id</th>
              <th>Customer Name</th>
              <th>Items Name</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>#3454464</td>
              <td>
  <span className='p-1 mr-2' style={{ backgroundColor:'#ccc', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-block', marginRight: '10px' }}>&nbsp;</span>
  Eren Yeager
</td>
<td>
  <span className='p-1 mr-2' style={{ backgroundColor:'#ccc', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-block', marginRight: '10px' }}>&nbsp;</span>
  Noodles
</td>
<td>21/07/2024</td>
              <td> <span className='rounded p-1 ' style={
                { borderBlockStyle:'solid',
                borderBlockColor:'#222', 
                borderBlockWidth:1+'px' }
                
                }> Paid</span></td>
              <td>#7,800</td>
            </tr>
            <tr>
              <td>2</td>
              <td>#3454464</td>
              <td>
  <span className='p-1 mr-2' style={{ backgroundColor:'#ccc', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-block', marginRight: '10px' }}>&nbsp;</span>
  Eren Yeager
</td>
<td>
  <span className='p-1 mr-2' style={{ backgroundColor:'#ccc', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-block', marginRight: '10px' }}>&nbsp;</span>
  Noodles
</td>
              <td>21/07/2024</td>
              <td> <span className='rounded p-1 ' style={
                { borderBlockStyle:'solid',
                borderBlockColor:'#222', 
                borderBlockWidth:1+'px' }
                
                }> Paid</span></td>
              <td>#7,800</td>
            </tr>
            <tr>
              <td>3</td>
              <td>#3454464</td>
              <td>
  <span className='p-1 mr-2' style={{ backgroundColor:'#ccc', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-block', marginRight: '10px' }}>&nbsp;</span>
  Eren Yeager
</td>
<td>
  <span className='p-1 mr-2' style={{ backgroundColor:'#ccc', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-block', marginRight: '10px' }}>&nbsp;</span>
  Noodles
</td>
              <td>21/07/2024</td>
              <td> <span className='rounded p-1 ' style={
                { borderBlockStyle:'solid',
                borderBlockColor:'#222', 
                borderBlockWidth:1+'px' }
                
                }> Paid</span></td>
              <td>#7,800</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
          
          </div>
          </div>  

)


}
    export default RecentIvoice;