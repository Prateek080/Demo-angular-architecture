<?php 

print "asdasda";
#author : chowmean
$data["user"]="just testing";
CallAPI("POST","http://192.168.68.189/api/v1.0/post_req",$data,"deviceId","accessToken","application/json","firefox");


function CallAPI($method, $url, $data = "",$device_id="",$access_token="",$content_type="",$user_agent="")
{ $curl = curl_init();
  if ($content_type=="")
    {$content_type='application/json'; }
  switch ($method)
    {
        case "POST":{
          curl_setopt($curl,CURLOPT_POST, 1);
          if ($data!=""){
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);}
                
      if($access_token!="" and $device_id!="")
            {
        curl_setopt($curl,CURLOPT_HTTPHEADER, array(
                    'Content-type:'.$content_type,
                    'Content-Length:'.strlen($data),
                    'User-Agent:'.$user_agent,
                    'accessToken:'.$access_token,
                    'deviceid:'.$device_id));
      }
            else
            {
                curl_setopt($curl,CURLOPT_HTTPHEADER, array(
                    'Content-type:'.$content_type,
                    'Content-Length:'.strlen($data),
                    'User-Agent:'.$user_agent ));
            }
      
                
            break;
          }
        default:{
            if ($data){
                $url = sprintf("%s?%s", $url, http_build_query($data));    //GET METHOD CASE
              }
            }
  }
    
    // Optional Authentication:
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    curl_close($curl);
  print_r($result);
} 
?>