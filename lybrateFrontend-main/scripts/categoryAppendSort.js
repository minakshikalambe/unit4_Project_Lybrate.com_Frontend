




    
let cartArr=JSON.parse(localStorage.getItem("cartArr"))||[];


    let displayContent = (data,parent) => {
        parent.innerHTML = "";
        data.map((el) => {
            let div = document.createElement("div");
            div.setAttribute("class", "cardItem");

            let priceImagDiv = document.createElement("div");
            priceImagDiv.setAttribute("class", "priceImageDiv");

            let img = document.createElement("img");
            img.src = el.image;

            let div1 = document.createElement("div");
            let title = document.createElement("p");
            title.innerText = el.name;
            let desc = document.createElement("p");
            desc.innerText = el.des;

            let priceDiv = document.createElement("div");
            priceDiv.setAttribute("class", "priceDiv")
            let price = document.createElement("p");
            price.innerText = `₹${el.price}`;

            let stprice = document.createElement("s");
            stprice.innerText = `₹${el.strprice}`;

            priceDiv.append(price, stprice);
            div1.append(title, desc, priceDiv)
            priceImagDiv.append(img, div1);

            let btn = document.createElement("button");
            btn.innerText = "Add To Cart";
            btn.addEventListener("click", ()=>{
                addToCart(el);
            });


            div.append(priceImagDiv, btn);
            parent.append(div)

        })
    }

let addToCart = (el)=>{

cartArr=JSON.parse(localStorage.getItem("cartArr"))||[];

cartArr.push(el);
localStorage.setItem("cartArr",JSON.stringify(cartArr));

cartsize.textContent=`${cartArr.length}`

}



    function sort(value,data,parent) {

        // console.log(value)
        if (value == "low") {
            document.querySelector("#sortDiv>p:nth-child(3)").style = "color:#c82506;border-bottom: 2px solid #c82506;cursor: pointer;"
            document.querySelector("#sortDiv>p:nth-child(2)").style = "color:black;border:none"
            document.querySelector("#sortDiv>p:nth-child(4)").style = "color:black;border:none"
            data.sort((a, b) => {
                return Number(a.price) - Number(b.price)
            })
        } else if (value == "high") {
            document.querySelector("#sortDiv>p:nth-child(4)").style = "color:#c82506;border-bottom: 2px solid #c82506;cursor: pointer;"
            document.querySelector("#sortDiv>p:nth-child(2)").style = "color:black;border:none"
            document.querySelector("#sortDiv>p:nth-child(3)").style = "color:black;border:none"
            data.sort((a, b) => {
                return Number(b.price) - Number(a.price);
            })
        } else {
            document.querySelector("#sortDiv>p:nth-child(2)").style ="color:#c82506;border-bottom: 2px solid #c82506;cursor: pointer;"
            document.querySelector("#sortDiv>p:nth-child(3)").style = "color:black;border:none"
            document.querySelector("#sortDiv>p:nth-child(4)").style = "color:black;border:none"

            location.reload()
            // displayContent(data);
        }
        displayContent(data,parent);

    }













export {displayContent , sort};



