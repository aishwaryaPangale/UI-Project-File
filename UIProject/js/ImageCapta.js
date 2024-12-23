var s=document.getElementById("images")
var ans;
s.style.display="none";
function add(ele)
{
   ans=document.createElement("img");
    ans.setAttribute("src",ele);
    ans.style.width="150px";
    ans.style.height="150px";
    ans.style.marginLeft="5px";
    ans.style.border=" thick solid #000000";
    
}
function show()
{
    
    images.append(ans);
    s.style.display="block";
}

    