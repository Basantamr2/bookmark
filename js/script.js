var siteName=document.getElementById('name');
var siteUrl=document.getElementById('url');
var website;
var websiteList;

if(localStorage.getItem('bookmarksList')==null){
    websiteList=[];
    }else{
        websiteList=JSON.parse(localStorage.getItem('bookmarksList'))
    display()
    }

function nameValidation(){
    var nameRegular=/^([A-Za-z0-9]){3,}$/;
    var urlRegular=/^((https:\/\/www\.)|(http:\/\/www\.))[A-Za-z]{2,}(\.com)$/;
    var nameValue=siteName.value;
    var urlValue=siteUrl.value;
    if(nameRegular.test(nameValue) && urlRegular.test(urlValue)){
return true;    
    }else{
        siteName.style.boxShadow='1px 1px 9px 2px red'
        siteUrl.style.boxShadow='1px 1px 9px 2px red'  
return false;
    }
}

function create(){
    website={
        siteName:siteName.value,
        siteURL:siteUrl.value
    };
    if(nameValidation()===false){
        alert('Site Name or Url is not valid,please follow the rules below:\nSite name must contian at least 3 characters and not contain special character.\nSite URL must start with http://www. or https://www. and end with .com');
    }else{
                websiteList.push(website);
                localStorage.setItem('bookmarksList', JSON.stringify(websiteList));
                reset();
                display();
        }
    }

function reset(){
    siteName.value='';
    siteUrl.value='';
}

function display(){
    var item=``;
    for(var i=0;i<websiteList.length;i++){
            item+=
                `<tr>
                <td>${i+1}</td>
                <td>${websiteList[i].siteName}</td>
                <td><button class="one btn text-white" onclick='visits(${i})'><i class="fa-solid fa-eye me-1"></i>Visit</button></td>
                <td><button class="two btn text-white" onclick='delte(${i})'><i class="fa-solid fa-trash-can me-1"></i>Delete</button></td>
                </tr>`
    }
    document.getElementById('items').innerHTML=item;
}

function visits(index){
    window.open(websiteList[index].siteURL, '_blank')
}

function delte(index){
    websiteList.splice(index,1);
    localStorage.setItem('bookmarksList',JSON.stringify(websiteList));
    display();
}
