let map;
function initMap()
{
    map=new google.maps.Map(document.getElementById("map"),
    {
        center:{lat:-34.397,lng:150.644},
        zoom:2,
        
    })
   const marker= new google.maps.Marker({
        position:{lat:-34.397,lng:150.644
        },
        map:map,
        label:"A",
        title:"KAKINADA",
        animation:google.maps.Animation.BOUNCE,
        // icon:"download.jpg"
        


    });
    const infowindo=new google.mpas.infowindo(
    {
        content:"<p>this is kakinada beach</p>"
    }
    );
    infowindo.open(map,marker);
    
} 