//Declarate slider container
var SliderItems = [
    "https://wallpapercave.com/dwp1x/wp2051313.jpg",
    "https://wallpapercave.com/dwp1x/wp2051397.jpg",
    "https://wallpapercave.com/dwp1x/wp2051340.jpg",
    "https://wallpapercave.com/dwp1x/wp4102973.jpg"
];

var Slider = document.querySelector(".Slider"),
    LeftArrow = document.querySelector(".LeftArrow"),
    RightArrow = document.querySelector(".RightArrow");
    Counter = 0;

//Add elements inside of slider container
function AddItemsInSlider()
{
    //Get slider containers and set its size
    var Container = document.querySelector(".SliderMenu");
    Slider.style.width = `${SliderItems.length * 100}%`;

    for(var i = 0; i < SliderItems.length; i++)
    {
        //Add images of list in container
        Slider.innerHTML += `<img src="${SliderItems[i]}" draggable="false">`;    

        //Add slider index of image in container
        if (i == 0)
        {
            Container.innerHTML += '<li class="MenuItem Selected"></li>';
        }
        else
        {
            Container.innerHTML += '<li class="MenuItem"></li>';
        }
    }

    //set functionality to slider index menu
    var BtnMenuItem = document.querySelectorAll(".MenuItem");

    BtnMenuItem.forEach(function(Button, Index)
    {
        Button.addEventListener("click", function()
        {
            //Change slider image if the button not contain the Selected class
            if (!Button.classList.contains("Selected"))
            {
                Counter = Index;
                MenuItemSelect(Counter);
                Slider.style.transition = "all 1s ease";
                Slider.style.marginLeft = `-${Counter * 100}%`;
            }
        });
    });
}

//Change image on left arrow click
function SliderLeftMovement()
{
    Counter--; 

    if (Counter < 0)
    {
        Counter = SliderItems.length - 1;
    }

    MenuItemSelect(Counter);
    Slider.style.transition = "all 1s ease";
    Slider.style.marginLeft = `-${Counter * 100}%`;
}

//Change image on right arrow click
function SliderRightMovement()
{
    Counter++; 

    if (Counter > SliderItems.length -1)
    {
        Counter = 0;
    }

    MenuItemSelect(Counter);
    Slider.style.transition = "all 1s ease";
    Slider.style.marginLeft = `-${Counter * 100}%`;
}

//Unselect all buttons and select the corresponding
function MenuItemSelect(Index)
{
    var BtnMenuItem = document.querySelectorAll(".MenuItem");
    
    BtnMenuItem.forEach(function(RestButtons)
    {
        RestButtons.classList.remove("Selected");
    });

    BtnMenuItem[Index].classList.add("Selected");
}

LeftArrow.addEventListener("click",SliderLeftMovement);
RightArrow.addEventListener("click",SliderRightMovement);
AddItemsInSlider();