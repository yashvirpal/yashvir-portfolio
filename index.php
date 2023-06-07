<?php 
//phpinfo();
echo GetMAC();

function GetMAC(){
    ob_start();
    system('getmac');
    $Content = ob_get_contents();
    ob_clean();
    return substr($Content, strpos($Content,'\\')-20, 17);
}
echo '<pre>';


//print_r($_SERVER);
?>
<?php  
   //Buffering the output
   ob_start();  
   
   //Getting configuration details 
   system('ipconfig /all');  
   
   //Storing output in a variable 
   $configdata=ob_get_contents();  
   
   // Clear the buffer  
   ob_clean();  
   
   //Extract only the physical address or Mac address from the output
   $mac = "Physical";  
   $pmac = strpos($configdata, $mac);
   
   // Get Physical Address  
   $macaddr=substr($configdata,($pmac+36),17);  
   
   //Display Mac Address  
   echo $macaddr;  
   
?>