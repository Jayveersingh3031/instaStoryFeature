var arr=[
    {
        dp:"https://images.unsplash.com/photo-1546961342-ea5f71b193f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1527707342924-47a934b566e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",story:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1428366890462-dd4baecf492b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1658522237698-37550bd9c561?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
    },
    {
        dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1577205024940-d7c06cfc98f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
    },
]

clutter="";
var storyian=document.querySelector(".storyian");
arr.forEach(function(elem,idx){
    clutter+=` <div class="story">
    <img id="${idx}"src="${elem.dp}" alt="">
</div>`;
});
storyian.innerHTML=clutter;

storyian.addEventListener("click",function(dets){
    var val=arr[dets.target.id].story;
    document.querySelector(".fullscreen").style.display="block";
    document.querySelector(".fullscreen").style.backgroundImage=`url(${val})`;
    setTimeout(function(){
        document.querySelector(".fullscreen").style.display="none";
    },3000)
})
