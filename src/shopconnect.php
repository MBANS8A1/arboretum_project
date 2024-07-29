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
       $nestedImg = $dom->createElement('img'); //here we need to add slideshow if there are more imags
       $nestedImg->setAttribute('class', 'card-img-top');
       $nestedImg->setAttribute('alt', "card-image of treeseed item $treeitemcounter");
       $nestedImg->setAttribute('src',$row['treeImage1']);
       $cardcontainer->appendChild($nestedImg);
       $divbody = $dom->createElement('div');
       $divbody->setAttribute('class', 'card-body');
       $cardcontainer->appendChild($divbody);
       $unorderedL = $dom->createElement('ul');
       $fieldp1  = $dom->createElement('li','Common name: ' . $row['commonName']);
       $fieldp2 = $dom->createElement('li','Species name: ' . $row['speciesName']);
       $fieldp3 = $dom->createElement('li','Family: ' . $row['family']);
       $fieldp4 = $dom->createElement('li','Cost per pack incl. VAT: '  . '£' . $row['seedcostInclVAT']);
       $fieldp5 = $dom->createElement('li','Pack amount in stock: '  . $row['quantityInStock']);
       $fieldp6 = $dom->createElement('li','Each pack contains: '  . $row['seedNumberPerPack'] . ' seeds');
       $fieldp7 = $dom->createElement('li','Colour: '  . $row['colour']);
       $fieldp8 = $dom->createElement('li','Soil type for optimal growth: '  . $row['soilType']);
       $fieldp9 = $dom->createElement('li','Hardiness: '  . $row['hardiness']);
       $fieldp10 = $dom->createElement('li','Soil pH tolerance: '  . $row['soilAcidity']);
       $fieldp11 = $dom->createElement('li','Tree/plant description: '  . $row['description']);
       $unorderedL->appendChild($fieldp1);
       $unorderedL->appendChild($fieldp2);
       $unorderedL->appendChild($fieldp3);
       $unorderedL->appendChild($fieldp4);
       $unorderedL->appendChild($fieldp5);
       $unorderedL->appendChild($fieldp6);
       $unorderedL->appendChild($fieldp7);
       $unorderedL->appendChild($fieldp8);
       $unorderedL->appendChild($fieldp9);
       $unorderedL->appendChild($fieldp10);
       $unorderedL->appendChild($fieldp11);
      
      for($i=0; $i<count($supplierIdsCpy); $i++){
        if($row['supplierId'] ===  $supplierIdsCpy[$i]){

          $fieldp12 = $dom->createElement('li','Supplier/Company: ' . $supplierNamesCpy[$i]);
          $unorderedL->appendChild($fieldp12);

        }
      }
      $divBody.appendChild($unorderedL);
      $cardcontainer->appendChild($divBody);

      $htmlString = $dom->saveHTML();
      echo $htmlString;

      }
      if(!(is_null($row['treeImage2']))){
        //Do this part
        $dom = new DOMDocument();

        $outercontainer = $dom->createElement('div');
        $outercontainer->setAttribute('class', 'outer-container');

        $cardcontainer = $dom->createElement('div');
        $cardcontainer->setAttribute('class', 'slideshow-container');

        $slidebox1 = $dom->createElement('div');
        $slidebox1->setAttribute('class', 'slidebox fade');
        $numbertext1 = $dom->createElement('div');
        $numbertext1->setAttribute('class', 'numbertext');
        $slideimg1 = $dom->createElement('img');
        $slideimg1->setAttribute('src', $row['treeImage1']);
        $slideimg1->setAttribute('style', 'width:100%;object-fit:contain;');
        $slidebox1->appendChild($numbertext1);
        $slidebox1->appendChild($slideimg1);


        $slidebox2 = $dom->createElement('div');
        $slidebox2->setAttribute('class', 'slidebox fade');
        $numbertext2 = $dom->createElement('div');
        $numbertext2->setAttribute('class', 'numbertext');
        $slideimg2 = $dom->createElement('img');
        $slideimg2->setAttribute('src', $row['treeImage2']);
        $slideimg2->setAttribute('style', 'width:100%;object-fit:contain;');
        $slidebox2->appendChild($numbertext2);
        $slidebox2->appendChild($slideimg2);

        if(!(is_null($row['treeImage3']))){
            $slidebox3 = $dom->createElement('div');
            $slidebox3->setAttribute('class', 'slidebox fade');
            $numbertext3= $dom->createElement('div');
            $numbertext3->setAttribute('class', 'numbertext');
            $slideimg3 = $dom->createElement('img');
            $slideimg3->setAttribute('src', $row['treeImage3']);
            $slideimg3->setAttribute('style', 'width:100%;object-fit:contain;');
            $slidebox3->appendChild($numbertext3);
            $slidebox3->appendChild($slideimg3);
        }
        
         $cardcontainer->appendChild($slidebox1);
         $cardcontainer->appendChild($slidebox2);
        if(!(is_null($row['treeImage3']))){
         $cardcontainer->appendChild($slidebox3);
        }
        $anchorforward = $dom->createElement('a',"&#10095;");
        $anchorforward->setAttribute('class', 'next');
        $anchorforward->setAttribute('onclick', 'switchSlides(1)');


        $anchorback = $dom->createElement('a',"&#10094;");
        $anchorback->setAttribute('class', 'prev');
        $anchorback->setAttribute('onclick', 'switchSlides(-1)');

        $cardcontainer->appendChild($anchorback);
        $cardcontainer->appendChild($anchorforward);
         
        echo "<br>";

        $quickselect = $dom->createElement('div');
        $dotBtn1 = $dom->createElement('span');
        $dotBtn1->setAttribute('class', 'dot');
        $dotBtn1->setAttribute('onclick', 'currentSlide(1)');
        $dotBtn2 = $dom->createElement('span');
        $dotBtn2->setAttribute('class', 'dot');
        $dotBtn2->setAttribute('onclick', 'currentSlide(2)');

        $quickselect->appendChild($dotBtn1);
        $quickselect->appendChild($dotBtn2);


        if(!(is_null($row['treeImage3']))){
          $dotBtn3 = $dom->createElement('span');
          $dotBtn3->setAttribute('class', 'dot');
          $dotBtn3->setAttribute('onclick', 'currentSlide(3)');
          $quickselect->appendChild($dotBtn3);

        }
      
        $outercontainer->appendChild($cardcontainer);
        $outercontainer->appendChild($quickselect);

        $divBody = $dom->createElement('div');
        $divBody->setAttribute('class','card-body');
        $unorderedL = $dom->createElement('ul');
        $fieldp1  = $dom->createElement('li','Common name: ' . $row['commonName']);
        $fieldp2 = $dom->createElement('li','Species name: ' . $row['speciesName']);
        $fieldp3 = $dom->createElement('li','Family: ' . $row['family']);
        $fieldp4 = $dom->createElement('li','Cost per pack incl. VAT: '  . '£' . $row['seedcostInclVAT']);
        $fieldp5 = $dom->createElement('li','Pack amount in stock: '  . $row['quantityInStock']);
        $fieldp6 = $dom->createElement('li','Each pack contains: '  . $row['seedNumberPerPack'] . ' seeds');
        $fieldp7 = $dom->createElement('li','Colour: '  . $row['colour']);
        $fieldp8 = $dom->createElement('li','Soil type for optimal growth: '  . $row['soilType']);
        $fieldp9 = $dom->createElement('li','Hardiness: '  . $row['hardiness']);
        $fieldp10 = $dom->createElement('li','Soil pH tolerance: '  . $row['soilAcidity']);
        $fieldp11 = $dom->createElement('li','Tree/plant description: '  . $row['description']);
        $unorderedL->appendChild($fieldp1);
        $unorderedL->appendChild($fieldp2);
        $unorderedL->appendChild($fieldp3);
        $unorderedL->appendChild($fieldp4);
        $unorderedL->appendChild($fieldp5);
        $unorderedL->appendChild($fieldp6);
        $unorderedL->appendChild($fieldp7);
        $unorderedL->appendChild($fieldp8);
        $unorderedL->appendChild($fieldp9);
        $unorderedL->appendChild($fieldp10);
        $unorderedL->appendChild($fieldp11);
       

        for($i=0; $i<count($supplierIdsCpy); $i++){
          if($row['supplierId'] ===  $supplierIdsCpy[$i]){
  
            $fieldp12 = $dom->createElement('li','Supplier/Company: ' . $supplierNamesCpy[$i]);
            $unorderedL->appendChild($fieldp12);
  
          }
        }

        $divBody->appendChild($unorderedL);
        $outercontainer->appendChild($divBody);

        $htmlString = $dom->saveHTML();
        echo $htmlString;

      // if(!(is_null($row['treeImage3']))){
      //     $dom = new DOMDocument();
          
      //     $outercontainer = $dom->createElement('div');
      //     $outercontainer->setAttribute('class', 'outer-container');


      //     $cardcontainer = $dom->createElement('div');
      //     $cardcontainer->setAttribute('class', 'slideshow-container');
  
      //     $slidebox1 = $dom->createElement('div');
      //     $slidebox1->setAttribute('class', 'slidebox fade');
      //     $numbertext1 = $dom->createElement('div');
      //     $numbertext1->setAttribute('class', 'numbertext');
      //     $slideimg1 = $dom->createElement('img');
      //     $slideimg1->setAttribute('src', $row['treeImage1']);
      //     $slideimg1->setAttribute('style', 'width:100%;object-fit:contain;');
      //     $slidebox1->appendChild($numbertext1);
      //     $slidebox1->appendChild($slideimg1);

  
      //     $slidebox2 = $dom->createElement('div');
      //     $slidebox2->setAttribute('class', 'slidebox fade');
      //     $numbertext2 = $dom->createElement('div');
      //     $numbertext2->setAttribute('class', 'numbertext');
      //     $slideimg2 = $dom->createElement('img');
      //     $slideimg2->setAttribute('src', $row['treeImage2']);
      //     $slideimg2->setAttribute('style', 'width:100%;object-fit:contain;');
      //     $slidebox2->appendChild($numbertext2);
      //     $slidebox2->appendChild($slideimg2);

      //     $slidebox3 = $dom->createElement('div');
      //     $slidebox3->setAttribute('class', 'slidebox fade');
      //     $numbertext3= $dom->createElement('div');
      //     $numbertext3->setAttribute('class', 'numbertext');
      //     $slideimg3 = $dom->createElement('img');
      //     $slideimg3->setAttribute('src', $row['treeImage3']);
      //     $slideimg3->setAttribute('style', 'width:100%;object-fit:contain;');
      //     $slidebox3->appendChild($numbertext3);
      //     $slidebox3->appendChild($slideimg3);

      //     $cardcontainer->appendChild($slidebox1);
      //     $cardcontainer->appendChild($slidebox2);
      //     $cardcontainer->appendChild($slidebox3);

  
      //     $anchorforward = $dom->createElement('a',"&#10095;");
      //     $anchorforward->setAttribute('class', 'next');
      //     $anchorforward->setAttribute('onclick', 'switchSlide(1)');
  
  
      //     $anchorback = $dom->createElement('a',"&#10094;");
      //     $anchorback->setAttribute('class', 'prev');
      //     $anchorback->setAttribute('onclick', 'switchSlide(-1)');

      //     $cardcontainer->appendChild($anchorback);
      //     $cardcontainer->appendChild($anchorforward);
      //     echo "<br>";  
      //     $quickselect = $dom->createElement('div');
      //     $dotBtn1 = $dom->createElement('span');
      //     $dotBtn1->setAttribute('class', 'dot');
      //     $dotBtn1->setAttribute('onclick', 'currentSlide(1)');
      //     $dotBtn2 = $dom->createElement('span');
      //     $dotBtn2->setAttribute('class', 'dot');
      //     $dotBtn2->setAttribute('onclick', 'currentSlide(2)');
      //     $dotBtn3 = $dom->createElement('span');
      //     $dotBtn3->setAttribute('class', 'dot');
      //     $dotBtn3->setAttribute('onclick', 'currentSlide(3)');
      //     $quickselect->appendChild($dotBtn1);
      //     $quickselect->appendChild($dotBtn2);

      //     $outercontainer->appendChild($cardcontainer);
      //     $outercontainer->appendChild($quickselect);


      //     $divBody = $dom->createElement('div');
      //     $divBody->setAttribute('class','card-body');
      //     $unorderedL = $dom->createElement('ul');
      //     $fieldp1  = $dom->createElement('li','Common name: ' . $row['commonName']);
      //     $fieldp2 = $dom->createElement('li','Species name: ' . $row['speciesName']);
      //     $fieldp3 = $dom->createElement('li','Family: ' . $row['family']);
      //     $fieldp4 = $dom->createElement('li','Cost per pack incl. VAT: '  . '£' . $row['seedcostInclVAT']);
      //     $fieldp5 = $dom->createElement('li','Pack amount in stock: '  . $row['quantityInStock']);
      //     $fieldp6 = $dom->createElement('li','Each pack contains: '  . $row['seedNumberPerPack'] . ' seeds');
      //     $fieldp7 = $dom->createElement('li','Colour: '  . $row['colour']);
      //     $fieldp8 = $dom->createElement('li','Soil type for optimal growth: '  . $row['soilType']);
      //     $fieldp9 = $dom->createElement('li','Hardiness: '  . $row['hardiness']);
      //     $fieldp10 = $dom->createElement('li','Soil pH tolerance: '  . $row['soilAcidity']);
      //     $fieldp11 = $dom->createElement('li','Tree/plant description: '  . $row['description']);
      //     $unorderedL->appendChild($fieldp1);
      //     $unorderedL->appendChild($fieldp2);
      //     $unorderedL->appendChild($fieldp3);
      //     $unorderedL->appendChild($fieldp4);
      //     $unorderedL->appendChild($fieldp5);
      //     $unorderedL->appendChild($fieldp6);
      //     $unorderedL->appendChild($fieldp7);
      //     $unorderedL->appendChild($fieldp8);
      //     $unorderedL->appendChild($fieldp9);
      //     $unorderedL->appendChild($fieldp10);
      //     $unorderedL->appendChild($fieldp11);
         
  
      //     for($i=0; $i<count($supplierIdsCpy); $i++){
      //       if($row['supplierId'] ===  $supplierIdsCpy[$i]){
    
      //         $fieldp12 = $dom->createElement('li','Supplier/Company: ' . $supplierNamesCpy[$i]);
      //         $unorderedL->appendChild($fieldp12);  
      //       }
      //     }
      //     $divBody->appendChild($unorderedL);
      //     $outercontainer->appendChild($divBody);
      //   }
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