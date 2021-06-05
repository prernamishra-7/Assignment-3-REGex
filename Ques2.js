function calculateCharge()
{
    var totalCharge="";
    var noOfCall=document.getElementById("call").value;
    var noOfSms=document.getElementById("sms").value;
    if(noOfCall<=50 && noOfSms<=50 )
    {
        callCharge=((noOfCall*50)/100);
        smsCharge=(noOfSms*0);
        totalCharge=callCharge+smsCharge;
    }

    if(((noOfCall>50)&&(noOfCall<=150))&&((noOfSms>50) && (noOfSms<=200 )))
    {
        callCharge=((50*50)/100) + (((noOfCall-50)*70)/100);
        smsCharge=(50*0)+(((noOfSms-50)*25)/100);
        totalCharge=callCharge+smsCharge;
    }

    if(((noOfCall>150)&&(noOfCall<=300))&&((noOfSms>200) && (noOfSms<=400 )))
    {
        callCharge=((50*50)/100)+((100*70)/100)+(((noOfCall-150)*85)/100);
        smsCharge=50*0+((150*25)/100)+(((noOfSms-200)*40)/100);
        totalCharge=callCharge+smsCharge; 
    }

    if((noOfCall>300) && (noOfSms>400))
    {
        callCharge=((50*50)/100)+((100*70)/100)+((150*85)/100)+(((noOfCall-300)*95)/100);
        smsCharge=50*0+((150*25)/100)+((200*40)/100)+(((noOfSms-400)*45)/100);
        totalCharge=callCharge+smsCharge;    
    }

    alert("Charges for call: "+ callCharge+"/-"   +"\n"+ "Charges for sms: "+  smsCharge+"/-"   +"\n"+ "Total Charges="+totalCharge+"/-");
}