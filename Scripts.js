 //Declarate slider container
 var SliderItems = [
    "https://wallpapercave.com/dwp1x/wp2051313.jpg",
    "https://wallpapercave.com/dwp1x/wp2051397.jpg",
    "https://wallpapercave.com/dwp1x/wp2051340.jpg",
    "https://wallpapercave.com/dwp1x/wp4102973.jpg"
];

//Obtain markups of slider arrows 
var LeftArrow = document.querySelector(".LeftArrow");
var RightArrow = document.querySelector(".RightArrow");
LeftArrow.addEventListener("click", SliderLeftMovement);
RightArrow.addEventListener("click", SliderRightMovement);
var Counter = 0;

document.SlideImage.src = SliderItems[0];

//Change image on left arrow click
function SliderLeftMovement()
{
    Counter -= 1;

    if (Counter < 0)
    {
        Counter = SliderItems.length - 1;
    }

    document.SlideImage.src = SliderItems[Counter];
    MenuItemSelect(Counter);
}

//Change image on right arrow click
function SliderRightMovement()
{
    Counter += 1;

    if (Counter > SliderItems.length - 1)
    {
        Counter = 0;
    }

    document.SlideImage.src = SliderItems[Counter];
    MenuItemSelect(Counter);
}

//Create list menu in slider container
function AddSliderMenu()
{
    var Container = document.querySelector(".SliderMenu");
    
    for(var i = 0; i < SliderItems.length; i++)
    {
        Container.innerHTML += '<li class="MenuItem"></li>';
    }
    
    //set functionality to elements created
    var BtnMenuItem = document.querySelectorAll(".MenuItem");

    BtnMenuItem.forEach(function(Button, Index)
    {
        Button.addEventListener("click", function()
        {
            //Change slider image if the button not contain the Selected class
            if (!Button.classList.contains("Selected"))
            {
                document.SlideImage.src = SliderItems[Index];
                Counter = Index;
                MenuItemSelect(Counter);
            }
        });
    });
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

AddSliderMenu();