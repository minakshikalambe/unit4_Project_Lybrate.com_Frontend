function navbar(){
    return ` <div id="navbar">
    <div id="logo"><img src="https://www.lybrate.com/img/Lybrate-Goodkart-Logo.png" alt=""></div>
    <div id="searchbar">
        <input type="text" name="searchbar" id="search" placeholder="Search for health products">
        <button><i class="material-icons">
                search
            </i></button>
    </div>
    <div id="signInDrop">
        <span id="loginUser" >Hello, Sign in</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24">
            <path ng-attr-d="{{$root.icons[ctrl.p]}}"
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
        </svg>
        <div class="dropdown-content">
            <a href="#">Orders</a>
            <a href="#">Buy Again</a>
            <a href="#">Download App</a>
            <a href="#">Browse Health Categories</a>
            <a href="#">My Orders</a>
            <a href="#">My Offers</a>
            <a href="#">Health Feed</a>
            <a href="#">Login/Signup</a>
            <a href="#">For Doctors</a>
        </div>

    </div>
    <div id="LybrateCash">
        <img src="https://nu.lybcdn.com/img/push-crew/logo_192_by_192.png" alt="Image"
            style="width: 20px; height: 20px;">
        <span>LybrateCash</span>
    </div>
    <div id="homebtn"><a href="index.html"><button>Home</button></a></div>
    <div id="cartdiv">
   
    <a id="cart" href="viewcart.html"><i class="material-icons">
            shopping_cart
        </i></a>
        </div>`
}

export default navbar