

function dropDown(){

    let dropDownContentArr = [{
        atrribute: "wellness-drop",
        url:"sexualWellness.html",
        id: "sexualWell",
        arr: [{
            dropDownContent: "Women Sexual Wellness"
        }, {
            dropDownContent: "Men Performance Enhancers"
        }]
    },
    {
        atrribute: "food-drop",
        url:"foodAndDrink.html",
        id: "food",
        arr: [{
            dropDownContent: "Healthy Breakfast"
        }, {
            dropDownContent: "Jams, Honey & Spreads"
        }, {
            dropDownContent: "Ready to Eat"
        }, {
            dropDownContent: "Healthy Drinks"
        }, {
            dropDownContent: "Oil & Ghees"
        }, {
            dropDownContent: "Snack Foods"
        }, {
            dropDownContent: "Tea & Coffee"
        }]
    },
    {
        atrribute: "vitamin-drop",
        url:"vitaminAndSuppliment.html",
        id: "vitamin",
        arr: [{
            dropDownContent: "Liver Care"
        }, {
            dropDownContent: "Multivitamin"
        }, {
            dropDownContent: "Gut Care"
        }, {
            dropDownContent: "Bone & Joint Care"
        }, {
            dropDownContent: "Eye Care"
        }, {
            dropDownContent: "Brain Care"
        }, {
            dropDownContent: "HAir & Care"
        }, {
            dropDownContent: "Lung Care"
        }, {
            dropDownContent: "Mentrual Health"
        }, {
            dropDownContent: "Immunity"
        }, {
            dropDownContent: "Sleep Aids"
        }, {
            dropDownContent: "Supplement for Diabetic"
        }]
    },
    {
        atrribute: "weight-drop",
        url:"weightManagement.html",
        id: "weight",
        arr: [{
            dropDownContent: "Drinks for Weight Loss"
        }, {
            dropDownContent: "Fat Burner"
        }, {
            dropDownContent: "Meal Replacement"
        }]
    },
    
    {
        atrribute: "childcare-drop",
        url:"childCare.html",
        id: "childcare",
        arr: [{
            dropDownContent: "Child Skin Products"
        }, {
            dropDownContent: "Child Hair Shampoo"
        }, {
            dropDownContent: "Child Bath Essentials"
        }, {
            dropDownContent: "Child Immunity"
        }, {
            dropDownContent: "Child Snack Foods"
        }, {
            dropDownContent: "Child Multivitamins"
        }]
    }
    ]
    
    
    for (let i = 0; i < dropDownContentArr.length; i++) {
    let div1 = document.createElement("div");
    div1.setAttribute("id", dropDownContentArr[i].atrribute);
    
    dropDownContentArr[i].arr.map((el) => {
        let a = document.createElement("a");
        a.innerText = el.dropDownContent;
        a.setAttribute("href",dropDownContentArr[i].url)
      
        div1.append(a);
    })
    document.getElementById(dropDownContentArr[i].id).append(div1);
    }


}


export default dropDown;


