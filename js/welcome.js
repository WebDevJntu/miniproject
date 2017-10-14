window.onload = function()
{
    document.getElementById('logout').addEventListener('click', handleSignOut, false);
    initApp();
};
function handleSignOut()
{
    firebase.auth().signOut();
}
 /* function getName(mail){
	 var cookies = document.cookie;
	 cookarg = cookies.split(';');
	 for(var i=0; i<cookarg.length-1; i+=2)
	 {
		  name = cookarg[i].split('=')[0];
		  value = cookarg[i].split('=')[1];
		  if(mail==value){
			  username = cookarg[i+1].split('=')[1];
			  return username;
		  } 
	} 
	return "";
}  */
function insertEditor(){
    document.getElementById("displayPane").innerHTML='<object width="75%" height="100%" type="text/html" data="editor.html" ></object>';
}
function initApp()
{
    firebase.auth().onAuthStateChanged(function(user)
    {
        if(user)
        {
			
			if(user.displayName==null)
			{
				var user_name = sessionStorage.getItem(user.email);
				if(user_name!=null)          
				{
						document.getElementById("und").innerHTML  = sessionStorage.getItem(user.email);//user_name;
				}
				else         
				{
					var db = firebase.firestore();
					var docRef = db.collection("users").doc(user.email);
					docRef.get().then(function(doc){
						if (doc.exists) 
						{
							var name1 = doc.data().username;
							sessionStorage.setItem("usermail",user.email);
							sessionStorage.setItem(user.email,name1);
							document.getElementById("und").innerHTML = name1; 
						} 
						else 
						{
							console.log("No such document!");
						}
					}).catch(function(error) {
							console.log("Error getting document:", error);
					});
				} 
			}
			else
			{
				
				document.getElementById("und").innerHTML =user.displayName;
			}
			document.getElementById("ued").innerHTML = user.email;
		}
        else
        {
            window.location.href = "index.html";
        }
    });
}

