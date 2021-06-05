
            function fun()
            {
               var str1=document.getElementById("text1").value;
               var str2=document.getElementById("find1").value;
               var str3=document.getElementById("replace1").value;
               var res=str1.replace(str2,str3);
               alert("New string is: "+ res);
            }
