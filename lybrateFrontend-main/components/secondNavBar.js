
function secondNav(Name){
    return `<div id="source">
    <p>Home</p>
    <p>></p>
    <p>Goodkart</p>
    <p>></p>
    <p>${Name}</p>
</div>
<h5>${Name}</h5>
<div id="sortDiv">

    <p> <i class="material-icons">
            sort
        </i>Sort By</p>
    <p id="popular">Popularity</p>
    <p id="low">Price - Low to High</p>
    <p id="high">Price - High to Low</p>

</div>`;
}

export default secondNav;