import  React  from  'react';
import './TotalCartValue.css';

function  TotalCartValue({  items  }) {
    let  total  =  0

    items.map(item  => {
        console.log("object")
        for  (let  i  =  0;  i  <  item.count;  i++) {
            total  =  total  +  item.price;
        }
    })

    return  (
        <div >
            <p className="totalCartValue-total">Total : ${total}</p>
        </div>
    );
}
export  default  TotalCartValue;

