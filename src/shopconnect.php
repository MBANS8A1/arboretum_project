<?php
$imgcounter = 0;
$serverhostname = process.ENV.DEV_HOST;
$username = process.ENV.DEV_USERNAME;
$password = process.ENV.DEV_PASSWORD;
$devdb = process.ENV.DEV_MYSQLDATABASE;
$charset = "UTF-8";
$devport = process.ENV.DEV_HOST;
$objString = "mysql:host=$serverhostname;dbname=$devdb;charset=$charset;port=$devport";
$treeitemcounter = 0;

try{
  $connObject = new PDO($objString,$username,$password);
  $connObject->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $connObject->setAttribute(PDO::ATTR_EMULATE_PREPARES, 0);

}catch(PDOException $exception){
    die("Error: could not connect to database ".$exception->getMessage());
}
try{

  $supplierNames = [];
  $supplierIds = [];

 
  $sql1 = "SELECT * FROM suppliers";
  $sql2 = "SELECT * FROM treeseeds";
  
  $result1->query($sql1);
  if($result1->rowCount() > 0){
    while($row = $result1->fetch()){
        array_push($supplierIds,$row['id']);
        array_push($supplierNames,$row['supplierName']);

    }
    unset($result1); 
  }else{
    echo "No matching supplier records could be found.";
  }
  
  $supplierIdsCpy = [...$supplierIds];
  $supplierNamesCpy = [...$supplierNames];
  $result2->query($sql2);
  if($result2->rowCount() > 0){
     echo "<div class='items-wrapper'>";
    while($row = $result2->fetch()){
      if($row['treeImage1'] && is_null($row['treeImage2']) && is_null($row['treeImage3'])){
       $treeitemcounter++;
       $dom = new DOMDocument();
       $cardcontainer = $dom->createElement('div');
       $cardcontainer->setAttribute('class', 'card');
       $nestedImg = $dom->createElement('img');
       $nestedImg->setAttribute('class', 'card-img-top');
       $nestedImg->setAttribute('alt', "card-image of treeseed item $treeitemcounter");
       $nestedImg->setAttribute('src',$row['treeImage1']);
       $divbody = $dom->createElement('div');
       $divbody->setAttribute('class', 'card-body');
       
      $unorderedL = $dom->createElement('ul');
      $nestedImg->setAttribute('class','Common name: ' . $row['commonName']);
      $fieldp1 = $dom->createElement('li','Species name: ' . $row['speciesName']);
      $fieldp2 = $dom->createElement('li','Family: ' . $row['family']);
      $fieldp4 = $dom->createElement('li','Cost per pack incl. VAT: '  . '£' . $row['seedcostInclVAT']);
      $fieldp5 = $dom->createElement('li','Pack amount in stock: '  . $row['quantityInStock']);
      $fieldp6 = $dom->createElement('li','Each pack contains: '  . $row['seedNumberPerPack'] . ' seeds');
      $fieldp7 = $dom->createElement('li','Colour: '  . $row['colour']);
      $fieldp8 = $dom->createElement('li','Soil type for optimal growth: '  . $row['soilType']);
      $fieldp9 = $dom->createElement('li','Hardiness: '  . $row['hardiness']);
      $fieldp10 = $dom->createElement('li','Soil pH tolerance: '  . $row['soilAcidity']);
      $fieldp11 = $dom->createElement('li','Tree/plant description: '  . $row['description']);
      for($i=0; $i<count($supplierIdsCpy); $i++){
        if($row['supplierId'] ===  $supplierIdsCpy[$i]){
          $fieldp12 = $dom->createElement('li','Supplier/Company: ' . $supplierNamesCpy[$i]);
        }
     }

      }
      if(!(is_null($row['treeImage2']))){
        if(!(is_null($row['treeImage3']))){
            
        }
      }

     

    }
     echo "</div>";
    unset($result2); 
  }else{
    echo "No matching treeseed records could be found.";
  } 

}catch(PDOException $exception){
    die("Error: Could not able to execute query/querie $sql. " 
                                .$e->getMessage()); 
}

$connObject = null;
?>