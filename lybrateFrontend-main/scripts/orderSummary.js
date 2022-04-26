
let maindiv=document.createElement("div");
function appendOrderSummary(parent,cartarr){
    maindiv.innerHTML=""
    
    
    maindiv.id="maindiv"
    
    let div=document.createElement("div");
    
    let order=document.createElement("div");
    order.textContent="ORDER SUMMARY";
    order.id="order"
    
    
    let mrpBox=document.createElement("div");
    mrpBox.id="mrpBox"
    
    let totalMrpDiv=document.createElement("div");
    totalMrpDiv.id="totalMrpDiv"
    let mrpDiv=document.createElement("div");
    mrpDiv.id="mrpDiv"
    let totalMrp=document.createElement("div");
    totalMrp.textContent="Total MRP"
    let items=document.createElement("div");
    items.textContent=`(${cartarr.length} items)`
    items.id="items"
    let price=document.createElement("div");
    let sum1=0;
    for(let i=0;i<cartarr.length;i++)
    {
        
        sum1+=(+cartarr[i].stprice || +cartarr[i].strprice);
      
    }
    price.textContent="₹"+sum1
    
    let shipping=document.createElement("div");
    shipping.id="shipping"
    let charges=document.createElement("div");
    charges.textContent="Shipping Charges"
    let charge=document.createElement("div");
    charge.textContent="0"
    
    
    let dis=document.createElement("div");
    dis.id="dis"
    let discount=document.createElement("div");
    discount.textContent="Discount";
    let discountPrice=document.createElement("div");
    let sum2=0;
    for(let i=0;i<cartarr.length;i++)
    {
        sum2+=(+cartarr[i].stprice || +cartarr[i].strprice)-(+cartarr[i].price);
        
    }
   
    
    discountPrice.textContent="-₹"+sum2
    
    
    let payable=document.createElement("div");
    payable.id="payable"
    let cart=document.createElement("div");
    cart.id="cart1"
    let cartTotal=document.createElement("div");
    cart.textContent="Cart Total";
    let sum3=0;
    for(let i=0;i<cartarr.length;i++)
    {
        sum3+=+cartarr[i].price;
    }
    let cartPrice="₹"+sum3
    
    let amount=document.createElement("div");
    amount.id="amount"
    let amountPayable=document.createElement("div");
    amountPayable.textContent="Amount Payable";
    let payablePrice=document.createElement("div");
    payablePrice.id="payablePrice"
    payablePrice="₹"+sum3;
   
    
    let image=document.createElement("img");
    image.src="./images/ordersummary.png";
    image.id="image"
    console.log(price)
    mrpDiv.append(totalMrp,items)
    totalMrpDiv.append(mrpDiv,price)
    shipping.append(charges,charge)
    dis.append(discount,discountPrice)
    mrpBox.append(totalMrpDiv,shipping,dis)
    
    
    cart.append(cartTotal,cartPrice)
    
    amount.append(amountPayable,payablePrice);
    payable.append(cart,amount)
    div.append(order,mrpBox,payable)
    maindiv.append(div,image)
    parent.append(maindiv);
    console.log(sum3)
    return sum3;

    }
    export default appendOrderSummary