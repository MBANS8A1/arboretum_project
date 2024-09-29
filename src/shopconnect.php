<?php

use Dotenv\Parser\Value;

require_once('../vendor/autoload.php');
$loop = Amp\ReactAdapter\ReactAdapter::get(); 



$host = "127.0.0.1";
$db = "arboretum_dev_db";
$user = "sean";
$pass = "Seanmbanugo1000!";
$charset = "utf8mb4";


$datasourcestr =  "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  PDO::ATTR_EMULATE_PREPARES   => false,
];
$pdo = new PDO($datasourcestr, $user, $pass, $options);

// $stmt = $pdo->query("SELECT * FROM treeseeds"); 

 $sql1 = "SELECT * FROM suppliers";
 $sql2 = "SELECT * FROM treeseeds";
 $sql3 = "SELECT * FROM fertilisers";
 $sql4 = "SELECT * FROM tools";
 $sql5 = "SELECT * FROM giftcards";
 $sql6 = "SELECT * FROM compostsacks"; 
 

$supplierNameData = $pdo->query($sql1)->fetchAll();
$treeSeedData = $pdo->query($sql2)->fetchAll();
$fertiliserData = $pdo->query($sql3)->fetchAll();
$toolsData = $pdo->query($sql4)->fetchAll();
$giftCardsData = $pdo->query($sql5)->fetchAll();
$compostSacksData = $pdo->query($sql6)->fetchAll();



$treeSuppliers = [];
$fertiliserSuppliers = [];
$toolSuppliers = [];
$giftCardSuppliers = [];
$compostSackSuppliers = [];





//function
    function filterOutSuppliers($parentArr,$childDataArr,$candidateArr){

      foreach($parentArr as $parentRow)
      {
          foreach($childDataArr as $childRow){
            if(($parentRow["id"] <=> $childRow["supplierId"]) === 0 ){
               
               array_push($candidateArr, $parentRow["supplierName"]);
            }else{
              continue;
            }   
      
          }
      } 

      return $candidateArr;   
  }
//function

$treeSuppliers = filterOutSuppliers($supplierNameData,$treeSeedData,$treeSuppliers);
$fertiliserSuppliers = filterOutSuppliers($supplierNameData,$fertiliserData,$fertiliserSuppliers);
$toolSuppliers = filterOutSuppliers($supplierNameData,$toolsData,$toolSuppliers);
$giftCardSuppliers = filterOutSuppliers($supplierNameData,$giftCardsData,$giftCardSuppliers);
$compostSackSuppliers = filterOutSuppliers($supplierNameData,$compostSacksData,$compostSackSuppliers);




// foreach($supplierNameData as $suppRow)
// {
//     foreach($treeSeedData as $treeRow){
//       if(($suppRow["id"] <=> $treeRow["supplierId"]) === 0 ){
         
//          array_push($treeSuppliers, $suppRow["supplierName"]);
//         //  echo $row2["commonName"] . str_repeat('&nbsp;', 2) . $row1["supplierName"] . "<br/>\n";
//       }else{
//         continue;
//       }

//       //refactor

//     }
// } 

//  echo var_dump($treeSuppliers) . "<br/><br/>";

// echo var_dump($fertiliserSuppliers) . "<br/><br/>";
// echo var_dump($toolSuppliers) . "<br/><br/>";
// echo var_dump($giftCardSuppliers) . "<br/><br/>";
// echo var_dump($compostSackSuppliers) . "<br/><br/>";


//$row is an array type

$supplierIds = [];
 foreach($supplierNameData as $row1) {
     array_push($supplierIds,$row1["id"]);
     
 }

// echo var_dump($supplierIds) . "<br/>";

$supplierIdStrs = implode(',', $supplierIds);

// echo var_dump($supplierIdStrs) . "<br/>";

$treeSeedQuery = "SELECT * FROM `treeseeds` WHERE supplierId in ($supplierIdStrs)";
$treeSeedDataOut = $pdo->query($treeSeedQuery);

$treeSeedArr = [];

do {
  $treeSeedArr = $treeSeedDataOut->fetchAll();
} while ($treeSeedDataOut->nextRowset() && $treeSeedDataOut->columnCount());

// echo var_dump($treeSeedArr) . "<br/>";



// function getSpecificKey($key,$match,$array){
//    if($key === $match){
//       return $array[$key];
//    }
// }


//li items and properties dependent on looping mechanism-need switch statement-BELOW FUNCTION IS TO BE DIVIDED UP

// function genekokokorateCards($key,$value){
//   $dom = new DOMDocument();
//   $cardcontainer = $domDoc->createElement('div');
//   $cardcontainer->setAttribute('class','container mt-3');
//   $topicDiv = $domDoc->createElement('div');
//   $topicDiv->setAttribute('class','tree-card');
//   if($key === 'treeImage1'){//THIS NEEDS TO BE PART OF A SEPERATE FUNCTION
//     $imagePortion = $dom->createElement('img');
//     $imagePortion->setAttribute('class','top-image');
//     $imagePortion->setAttribute('alt',"card-image"); 
//     $imagePortion->setAttribute('style',"width:100%");
//     $imagePortion->setAttribute('src',"$value"); //treeImage HERE

//   } 
//   $cardBody = $dom->createElement('div');
//   $cardBody->setAttribute('class','card-body');
//   $cardTitle = $dom->createElement('h4');
//   $cardTitle->setAttribute('class','card-title');
//   $information = $dom->createElement('p','Information:');
//   $information->setAttribute('class','info-text:');
  // $productInfoList = $dom->createElement('ul');
  // $commonNameItem = $dom->createElement('li',"$key : $value"); //HERE
  // $speciesNameItem = $dom->createElement('li',"$key : $value");//HERE
  // $seedCostPlusVATItem = $dom->createElement('li',"$key : $value");//HERE
  // $productItem4 = $dom->createElement('li',"$key : $value");//HERE
  // $productItem5 = $dom->createElement('li',"$key : $value");//HERE
  // $productItem6 = $dom->createElement('li',"$key : $value");//HERE
  // $productItem7 = $dom->createElement('li',"$key : $value");//HERE
  // $productItem8 = $dom->createElement('li',"$key : $value");//HERE
  // $productItem9 = $dom->createElement('li',"$key : $value");//HERE
  // $productItem10 = $dom->createElement('li',"$key : $value");//HERE
  // $productItem11 = $dom->createElement('li',"$key : $value");//HERE


// }




function generateGridStructure(){
  global $domDoc;
  $cardcontainer = $domDoc->createElement('div');//needs to be appended to items-wrapper
  $cardcontainer->setAttribute('class','container mt-3'); //needs to be appended to items-wrapper
  $topicDiv = $domDoc->createElement('div'); 
  $topicDiv->setAttribute('class','tree-card'); //images need to be appended here
  $cardcontainer->appendChild($topicDiv);//has been appended to container mt-3

  $cardBody = $domDoc->createElement('div');
  $cardBody->setAttribute('class','card-body');
 
  $information = $domDoc->createElement('p','Information:');
  $information->setAttribute('class','info-text:');
  $cardBody->appendChild($information);
}

//Concentrating on the part(s) below this comment

$domDoc = new DOMDocument();

function generateGridContainer(){
  // $GLOBALS$domDoc;
  $cardcontainer = $GLOBALS['domDoc']->createElement('div');//needs to be appended to items-wrapper
  $cardcontainer->setAttribute('class','container mt-3 slides-container '); 
  return $cardcontainer;
} //DONE ALREADY BUT NOT VIA THIS FUNCTION

function generateTreeCard(){
  // global $domDoc;
  $topicDiv = $GLOBALS['domDoc']->createElement('div'); 
  $topicDiv->setAttribute('class','tree-card'); //tree-card div is to be appended to the container mt-3
  return $topicDiv; //DONE ALREADY AT END OF THE LOOP BELOW
}

function generateCardBody(){
  // global $domDoc;
  $cardBody = $GLOBALS['domDoc']->createElement('div');
  $cardBody->setAttribute('class','card-body');
  return $cardBody;  //DONE ALREADY APPENDED TO TREECARD BELOW IN THE LOOP
}


function addheaderH4Text($value){
  $cardTitle = $GLOBALS['domDoc']->createElement('h4',"$value");//needs to be appended on to card body
  $cardTitle->setAttribute('class','card-title');//needs to be appended on to card body
  return $cardTitle; //ALREADY DONE IN THE LOOP BELOW
}

function generateInfoText(){
  $information = $GLOBALS['domDoc']->createElement('p','Information:');
  $information->setAttribute('class','info-text');
  // $cardBody->appendChild($information);
  return $information; //DONE ALREADY IN LOOP BELOW VIA INFOPARAGRAPH VARIABLE
}



function generateListElements($key,$value){
  // global $domDoc;
  if($key !== 'id' && $key !== 'treeImage1' && $key !== 'treeImage2' && $key !== 'treeImage3' && $key !== 'supplierId'){
  $resultItem = "";
  switch($key){
    case "commonName":
      $resultItem = $GLOBALS['domDoc']->createElement('li',"$key : $value"); 
      break;
    case "speciesName":
      $resultItem = $GLOBALS['domDoc']->createElement('li',"$key : $value"); 
      break;
    case "family":
      $resultItem = $GLOBALS['domDoc']->createElement('li',"$key : $value"); 
      break;
    case "seedcostInclVAT":
      $resultItem = $GLOBALS['domDoc']->createElement('li',"$key : $value"); 
      break;
    case "quantityInStock":
      $resultItem = $GLOBALS['domDoc']->createElement('li',"$key : $value"); 
      break;
    case "seedNumberPerPack":
      $resultItem = $GLOBALS['domDoc']->createElement('li',"$key : $value"); 
      break;
    case "colour":
      $resultItem = $GLOBALS['domDoc']->createElement('li',"$key : $value"); 
      break;
    case "hardiness":
      $resultItem = $GLOBALS['domDoc']->createElement('li',"$key : $value"); 
      break;
    case "soilType":
      $resultItem = $GLOBALS['domDoc']->createElement('li',"$key : $value"); 
      break;
    case "soilAcidity":
      $resultItem = $GLOBALS['domDoc']->createElement('li',"$key : $value"); 
      break;
    case "description":
      $resultItem = $GLOBALS['domDoc']->createElement('li',"$key : $value"); 
    break;
  }
  
  return $resultItem; //needs to be appended to the productInfoList variable <ul>
 }else{
  return;
 }
}

$outerContainer = $domDoc->createElement('div','I am a box');
$outerContainer->setAttribute('class','items-wrapper');
$outerContainer->setAttribute('style','border:2px solid black');






function generatetreeImage1($value){
  // global $domDoc;
  $imagePortion = $GLOBALS['domDoc']->createElement('img');
  $imagePortion->setAttribute('class','top-image');
  $imagePortion->setAttribute('alt',"card-image1"); 
  $imagePortion->setAttribute('style',"width:100%");
  $imagePortion->setAttribute('src',$value);
  return $imagePortion; //needs to be appended to tree-card
}

// function generateTreeImage1_2(){
//    global $domDoc;
//    $slideBox1 = $domDoc->createElement('div');
//    $slideBox1->setAttribute('class','mySlides');
//    $slideBox1->setAttribute('class','fade');
//    $firstImg = $domDoc->createElement('img');



// }



$imgCollectorArr = [];
$h4Text = "";
$cardBody = "";
$treeCard = "";
$treeImage1 = "";
$infoParagraph = "";
$cardContainer = "";

$outerLoopCounter = 0;
$innerLoopCounter = 0;

static $flag = true;

$productInfoList = "";

$listElementResult = "";


foreach($treeSeedArr as $key => $value){
   $infoParagraph = generateInfoText(); 
   $flag = true;
   $productInfoList = $domDoc->createElement('ul');
   $productInfoList->setAttribute('class','item-features');
  foreach($value as $key1 => $value1){ //14
    echo $key1 . " has a value of " . $value1 . "<br/>";
      if($flag === true){
        $h4Text = addheaderH4Text($value1); //GENERATE h4 text line'
        $cardBody = generateCardBody();
        $cardBody->appendChild($h4Text);
        $cardBody->appendChild($infoParagraph);
        $flag = false;
      }  
    //  if($innerLoopCounter >14){
    //       $innerLoopCounter = 0;
    //  }
    //  $innerLoopCounter++;
    //  echo $key1 . " has a value of " . $value1 . "<br/>",PHP_EOL;
    //  if($innerLoopCounter === 1){
    //   $h4Text = addheaderH4Text($value1); //GENERATE h4 text line'
    //   $cardBody = generateCardBody()->appendChild($h4Text)->appendChild($infoParagraph);
    //  }  
      
      // if($key1 !== 'id' && $key1 !== 'treeImage1' && $key1 !== 'treeImage2' && $key1 !== 'treeImage3'){

      $listElementResult = generateListElements($key1,$value1); // the bullet pointed list of properties
      if(!empty($listElementResult)){
        $productInfoList->appendChild($listElementResult);
      }
      // } 
  }
      echo "<br/>";
}

// $domDoc->appendChild($outerContainer);
// $htmlString = $domDoc->saveHTML();
// echo $htmlString;
    // //  if($key1 === 'treeImage1' && !(is_null($value["treeImage1"]))){
    // if($innerLoopCounter === 12 && $value1 !== NULL){
    //     if(array_key_exists("treeImage2",$value) && !(is_null($value["treeImage2"]))){
    //       $imgCollectorArr["treeImage1"] = $value[$key1];
    //       continue; //if a treeseed has more at least 2 images 
    //     }else{
    //       $treeImage1 = generatetreeImage1($value1); //this is if a treeseed only has one image
    //       $treeCard = generateTreeCard()->appendChild($treeImage1)->appendChild($cardBody);
    //     }
    // }

    //  if($innerLoopCounter === 13 && $value1 !== NULL){
    //     if(array_key_exists("treeImage3",$value) && !(is_null($value["treeImage3"]))){
    //       $imgCollectorArr["treeImage2"] = $value[$key1];
    //       continue; //if a treeseed has 3 images instead of 2
    //     }else{
    //      //design what happens when there are 2 images
    //      $slideBox1 = $domDoc->createElement('div');
    //      $slideBox1->setAttribute('class','mySlides fade');
    //      $countText1 = $domDoc->createElement('div','1 / 2');
    //      $countText1->setAttribute('class','numbertext');
    //      $slideBox1->appendChild($countText1);
    //      $firstImg = $domDoc->createElement('img');
    //      $firstImg->setAttribute('style','width:100%');
    //      $firstImg->setAttribute('alt','card-image1');
    //      $firstImg->setAttribute('src',$imgCollectorArr["treeImage1"]);
    //      $slideBox1->appendChild($firstImg);

    //      $slideBox2 = $domDoc->createElement('div');
    //      $slideBox2->setAttribute('class','mySlides fade');
    //      $countText2 = $domDoc->createElement('div','2 / 2');
    //      $countText2->setAttribute('class','numbertext');
    //      $slideBox2->appendChild($countText2);
    //      $secondImg = $domDoc->createElement('img');
    //      $secondImg->setAttribute('style','width:100%');
    //      $firstImg->setAttribute('alt','card-image2');
    //      $secondImg->setAttribute('src',"$value1");
    //      $slideBox2->appendChild($secondImg);

    //      $treeCard->appendChild($slideBox1);
    //      $treeCard->appendChild($slideBox2);

    //     //attach on to treecard
    //     // <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    //     //<a class="next" onclick="plusSlides(1)">&#10095;</a>
    //      $previousLink = $domDoc->createElement('a','&#10094;');
    //      $previousLink->setAttribute('class','prev');
    //      $previousLInk->setAttribute('onclick','plusSlides(-1)');

    //      $forwardLink = $domDoc->createElement('a','&#10095;');
    //      $forwardLink->setAttribute('class','next');
    //      $forwardLink->setAttribute('onclick','plusSlides(1)');
    //      $treeCard->appendChild($previousLink);
    //      $treeCard->appendChild($forwardLink);
    //       //dots/circles
    //      $dotCircleBox1 = $domDoc->createElement('div');
    //      $dotCircleBox1->setAttribute('style','text-align:center');
    //      $dotSpanA = $domDoc->createElement('span');
    //      $dotSpanA->setAttribute('class','dot');
    //      $dotSpanA->setAttribute('onclick','currentSlide(1)');
    //      $dotSpanB = $domDoc->createElement('span');
    //      $dotSpanB->setAttribute('class','dot');
    //      $dotSpanB->setAttribute('onclick','currentSlide(2)');
    //      $dotCircleBox1->appendChild($dotSpanA);
    //      $dotCircleBox1->appendChild($dotSpanB);
    //      $treeCard->appendChild($dotCircleBox1);
    //    }
    //  }
  //  if($innerLoopCounter === 14 && $value1 !== NULL){
  //     $slideBoxA = $domDoc->createElement('div');
  //     $slideBoxA->setAttribute('class','mySlides fade');
  //     $countTextA = $domDoc->createElement('div','1 / 3');
  //     $countTextA->setAttribute('class','numbertext');
  //     $slideBox1->appendChild($countTextA);
  //     $firstImg = $domDoc->createElement('img');
  //     $firstImg->setAttribute('style','width:100%');
  //     $firstImg->setAttribute('alt','card-image1');
  //     $firstImg->setAttribute('src',$imgCollectorArr["treeImage1"]);
  //     $slideBoxA->appendChild($firstImg);

  //     $slideBoxB = $domDoc->createElement('div');
  //     $slideBoxB->setAttribute('class','mySlides fade');
  //     $countTextB = $domDoc->createElement('div','2 / 3');
  //     $countTextB->setAttribute('class','numbertext');
  //     $slideBoxB->appendChild($countTextB);
  //     $secondImg = $domDoc->createElement('img');
  //     $secondImg->setAttribute('style','width:100%');
  //     $firstImg->setAttribute('alt','card-image2');
  //     $secondImg->setAttribute('src',$imgCollectorArr["treeImage2"]);
  //     $slideBoxB->appendChild($secondImg);

  //     $slideBoxC = $domDoc->createElement('div');
  //     $slideBoxC->setAttribute('class','mySlides fade');
  //     $countTextC = $domDoc->createElement('div','3 / 3');
  //     $countTextC->setAttribute('class','numbertext');
  //     $slideBoxC->appendChild($countTextB);
  //     $thirdImg = $domDoc->createElement('img');
  //     $thirdImg->setAttribute('style','width:100%');
  //     $firstImg->setAttribute('alt','card-image3');
  //     $thirdImg->setAttribute('src',$value1);
  //     $slideBoxC->appendChild($thirdImg);

  //     $treeCard->appendChild($slideBoxA);
  //     $treeCard->appendChild($slideBoxB);
  //     $treeCard->appendChild($slideBoxC);


  //     $previousLink = $domDoc->createElement('a','&#10094;');
  //     $previousLink->setAttribute('class','prev');
  //     $previousLInk->setAttribute('onclick','plusSlides(-1)');

  //     $forwardLink = $domDoc->createElement('a','&#10095;');
  //     $forwardLink->setAttribute('class','next');
  //     $forwardLInk->setAttribute('onclick','plusSlides(1)');

  //     $treeCard->appendChild($previousLink);
  //     $treeCard->appendChild($forwardLink);

  //     //dots/circles
  //     $dotCircleBox2 = $domDoc->createElement('div');
  //     $dotCircleBox2->setAttribute('style','text-align:center');
  //     $dotSpan1 = $domDoc->createElement('span');
  //     $dotSpan1->setAttribute('class','dot');
  //     $dotSpan1->setAttribute('onclick','currentSlide(1)');


  //     $dotSpan2 = $domDoc->createElement('span');
  //     $dotSpan2->setAttribute('class','dot');
  //     $dotSpan2->setAttribute('onclick','currentSlide(2)');


  //     $dotSpan3 = $domDoc->createElement('span');
  //     $dotSpan3->setAttribute('class','dot');
  //     $dotSpan3->setAttribute('onclick','currentSlide(3)');

  //     $dotCircleBox2->appendChild($dotSpan1);
  //     $dotCircleBox2->appendChild($dotSpan2);
  //     $dotCircleBox2->appendChild($dotSpan3); //FORGOT TO APPEND THESE??
  //     $treeCard->appendChild($dotCircleBox2);

      
  //}
  
    // $cardBody->appendChild($productInfoList);
    // $treeCard->appendChild($cardBody);
  //for the forward and backwards arrow heads
    // $cardContainer = $domDoc->createElement('div');//needs to be appended to items-wrapper
    // if(!(is_null($value["treeImage2"])) || !(is_null($value["treeImage3"]))){
    //   $cardContainer->setAttribute('class','container mt-3 slides-container'); 
    // }else{
    //   $cardContainer->setAttribute('class','container mt-3'); 
    // }
    
    // $cardContainer->appendChild($treeCard);
  
    // $outerContainer->appendChild($cardContainer);
   // echo "<br/>\n";}



// $domDoc->appendChild($outerContainer);
// $htmlString = $domDoc->saveHTML();
// echo $htmlString;


// foreach($treeSeedArr as $key => $value){

//    foreach($value as $key1 => $value1){
//     echo $key1 . "has a value of " . $value1 . ".<br/>";
//    }
//    echo "<br/>\n";

//  }

// foreach($treeSeedData as $row2) {
//   array_push($treeSeedArr,$row2);
// }

// echo var_dump($treeSeedArr);


// foreach($supplierNameData as $row1)
// {

//     foreach($treeSeedData as $row2){
//       if(($row1["id"] <=> $row2["supplierId"]) === 0 ){

//          echo $row2["commonName"] . str_repeat('&nbsp;', 2) . $row1["supplierName"] . "<br/>\n";
//       }

//     }
// } 

// declare(strict_types=1);
// require_once('../vendor/autoload.php');
// $dotenv = Dotenv\Dotenv::createImmutable(__DIR__,'../.env.development');
// $dotenv->load();
// $serverhostname = $_ENV['DEV_HOST'];
// $username = $_ENV['DEV_USERNAME'];
// $password = $_ENV['DEV_PASSWORD'];
// $devdb = $_ENV['DEV_MYSQLDATABASE'];
// $charset = "utf8mb4";
// $devport = $_ENV['DEV_PORT'];
// $objString = "mysql:host=$serverhostname;charset=$charset;dbname=$devdb;port=$devport";

// try{
//   $connObject = new PDO($objString,$username,$password);
//   $connObject->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//   $connObject->setAttribute(PDO::ATTR_EMULATE_PREPARES, 0);

// }catch(PDOException $exception){
//     die("Error: could not connect to database ".$exception->getMessage());
// }
// try{

//   $supplierNames = [];
//   $supplierIds = [];

 
//   $sql1 = 'SELECT * FROM suppliers';
//   $sql2 = 'SELECT * FROM treeseeds';
  
//   $result1->query($sql1);
//   if($result1->rowCount() > 0){
//     while($row = $result1->fetch()){
//         array_push($supplierIds,$row['id']);
//         array_push($supplierNames,$row['supplierName']);

//     }
//     unset($result1); 
//   }else{
//     echo "No matching supplier records could be found.";
//   }
  
//   $supplierIdsCpy = [...$supplierIds];
//   $supplierNamesCpy = [...$supplierNames];
//   $result2->query($sql2);
//   if($result2->rowCount() > 0){
//     echo "<div class='items-wrapper'>";
//     while($row = $result2->fetch()){
//       if($row['treeImage1'] && is_null($row['treeImage2']) && is_null($row['treeImage3'])){
//        $treeitemcounter++;
//        $dom = new DOMDocument(); MARKED
//        $cardcontainer = $dom->createElement('div'); MARKED
//        $cardcontainer->setAttribute('class', 'card'); MARKED
//        $nestedImg = $dom->createElement('img'); //here we need to add slideshow if there are more imags MARKED
//        $nestedImg->setAttribute('class', 'card-img-top'); MARKED
//        $nestedImg->setAttribute('alt', "card-image of treeseed item $treeitemcounter"); MARKED
//        $nestedImg->setAttribute('src',$row['treeImage1']); MARKED
//        $cardcontainer->appendChild($nestedImg); MARKED
//        $divbody = $dom->createElement('div'); MARKED
//        $divbody->setAttribute('class', 'card-body'); MARKED
//        $cardcontainer->appendChild($divbody); MARKED
//        $unorderedL = $dom->createElement('ul'); MARKED
//        $fieldp1  = $dom->createElement('li','Common name: ' . $row['commonName']); MARKED
//        $fieldp2 = $dom->createElement('li','Species name: ' . $row['speciesName']); MARKED
//        $fieldp3 = $dom->createElement('li','Family: ' . $row['family']); MARKED
//        $fieldp4 = $dom->createElement('li','Cost per pack incl. VAT: '  . '£' . $row['seedcostInclVAT']); MARKED
//        $fieldp5 = $dom->createElement('li','Pack amount in stock: '  . $row['quantityInStock']); MARKED
//        $fieldp6 = $dom->createElement('li','Each pack contains: '  . $row['seedNumberPerPack'] . ' seeds'); MARKED
//        $fieldp7 = $dom->createElement('li','Colour: '  . $row['colour']); MARKED
//        $fieldp8 = $dom->createElement('li','Soil type for optimal growth: '  . $row['soilType']); MARKED
//        $fieldp9 = $dom->createElement('li','Hardiness: '  . $row['hardiness']); MARKED
//        $fieldp10 = $dom->createElement('li','Soil pH tolerance: '  . $row['soilAcidity']);MARKED
//        $fieldp11 = $dom->createElement('li','Tree/plant description: '  . $row['description']); MARKED
//        $unorderedL->appendChild($fieldp1);  MARKED
//        $unorderedL->appendChild($fieldp2); MARKED
//        $unorderedL->appendChild($fieldp3); MARKED
//        $unorderedL->appendChild($fieldp4); MARKED
//        $unorderedL->appendChild($fieldp5); MARKED
//        $unorderedL->appendChild($fieldp6); MARKED
//        $unorderedL->appendChild($fieldp7); MARKED
//        $unorderedL->appendChild($fieldp8); MARKED
//        $unorderedL->appendChild($fieldp9); MARKED
//        $unorderedL->appendChild($fieldp10); MARKED
//        $unorderedL->appendChild($fieldp11); MARKED
      
//       for($i=0; $i<count($supplierIdsCpy); $i++){ MARKED
//         if($row['supplierId'] ===  $supplierIdsCpy[$i]){ MARKED

//           $fieldp12 = $dom->createElement('li','Supplier/Company: ' . $supplierNamesCpy[$i]); MARKED
//           $unorderedL->appendChild($fieldp12); MARKED

//         } MARKED
//       } MARKED
//       $divBody->appendChild($unorderedL); MARKED
//       $cardcontainer->appendChild($divBody); MARKED

//       $htmlString = $dom->saveHTML(); MARKED
//       echo $htmlString; MARKED

//       }
//       if(!(is_null($row['treeImage2']))){ MARKED
//         //Do this part
//         $dom = new DOMDocument(); MARKED

//         $outercontainer = $dom->createElement('div'); MARKED
//         $outercontainer->setAttribute('class', 'outer-container'); MARKED

//         $cardcontainer = $dom->createElement('div'); MARKED
//         $cardcontainer->setAttribute('class', 'slideshow-container');MARKED

//         $slidebox1 = $dom->createElement('div');MARKED
//         $slidebox1->setAttribute('class', 'slidebox fade');MARKED
//         $numbertext1 = $dom->createElement('div');MARKED
//         $numbertext1->setAttribute('class', 'numbertext');MARKED
//         $slideimg1 = $dom->createElement('img');MARKED
//         $slideimg1->setAttribute('src', $row['treeImage1']);MARKED
//         $slideimg1->setAttribute('style', 'width:100%;object-fit:contain;');MARKED
//         $slidebox1->appendChild($numbertext1);MARKED
//         $slidebox1->appendChild($slideimg1);MARKED


//         $slidebox2 = $dom->createElement('div');MARKED
//         $slidebox2->setAttribute('class', 'slidebox fade');MARKED
//         $numbertext2 = $dom->createElement('div');MARKED
//         $numbertext2->setAttribute('class', 'numbertext');MARKED
//         $slideimg2 = $dom->createElement('img');MARKED
//         $slideimg2->setAttribute('src', $row['treeImage2']);MARKED
//         $slideimg2->setAttribute('style', 'width:100%;object-fit:contain;');MARKED
//         $slidebox2->appendChild($numbertext2);MARKED
//         $slidebox2->appendChild($slideimg2);MARKED

//         if(!(is_null($row['treeImage3']))){
//             $slidebox3 = $dom->createElement('div');MARKED
//             $slidebox3->setAttribute('class', 'slidebox fade');MARKED
//             $numbertext3= $dom->createElement('div');MARKED
//             $numbertext3->setAttribute('class', 'numbertext');MARKED
//             $slideimg3 = $dom->createElement('img');MARKED
//             $slideimg3->setAttribute('src', $row['treeImage3']);MARKED
//             $slideimg3->setAttribute('style', 'width:100%;object-fit:contain;');MARKED
//             $slidebox3->appendChild($numbertext3);MARKED
//             $slidebox3->appendChild($slideimg3);MARKED
//         }
        
//          $cardcontainer->appendChild($slidebox1);MARKED
//          $cardcontainer->appendChild($slidebox2);MARKED
//         if(!(is_null($row['treeImage3']))){MARKED
//          $cardcontainer->appendChild($slidebox3);MARKED
//         }
//         $anchorforward = $dom->createElement('a',"&#10095;");MARKED
//         $anchorforward->setAttribute('class', 'next');MARKED
//         $anchorforward->setAttribute('onclick', 'switchSlides(1)');MARKED


//         $anchorback = $dom->createElement('a',"&#10094;");MARKED
//         $anchorback->setAttribute('class', 'prev');MARKED
//         $anchorback->setAttribute('onclick', 'switchSlides(-1)');MARKED

//         $cardcontainer->appendChild($anchorback);MARKED
//         $cardcontainer->appendChild($anchorforward);MARKED
         
//         echo "<br>";MARKED

//         $quickselect = $dom->createElement('div');MARKED
//         $dotBtn1 = $dom->createElement('span');MARKED
//         $dotBtn1->setAttribute('class', 'dot');MARKED
//         $dotBtn1->setAttribute('onclick', 'currentSlide(1)');MARKED
//         $dotBtn2 = $dom->createElement('span');MARKED
//         $dotBtn2->setAttribute('class', 'dot');MARKED
//         $dotBtn2->setAttribute('onclick', 'currentSlide(2)');MARKED

//         $quickselect->appendChild($dotBtn1);MARKED
//         $quickselect->appendChild($dotBtn2);MARKED


//         if(!(is_null($row['treeImage3']))){MARKED
//           $dotBtn3 = $dom->createElement('span');MARKED
//           $dotBtn3->setAttribute('class', 'dot');MARKED
//           $dotBtn3->setAttribute('onclick', 'currentSlide(3)');MARKED
//           $quickselect->appendChild($dotBtn3);MARKED

//         }
      
//         $outercontainer->appendChild($cardcontainer);MARKED
//         $outercontainer->appendChild($quickselect);MARKED

//         $divBody = $dom->createElement('div');MARKED
//         $divBody->setAttribute('class','card-body');MARKED
//         $unorderedL = $dom->createElement('ul');MARKED
//         $fieldp1  = $dom->createElement('li','Common name: ' . $row['commonName']);MARKED
//         $fieldp2 = $dom->createElement('li','Species name: ' . $row['speciesName']);MARKED
//         $fieldp3 = $dom->createElement('li','Family: ' . $row['family']);MARKED
//         $fieldp4 = $dom->createElement('li','Cost per pack incl. VAT: '  . '£' . $row['seedcostInclVAT']);MARKED
//         $fieldp5 = $dom->createElement('li','Pack amount in stock: '  . $row['quantityInStock']);MARKED
//         $fieldp6 = $dom->createElement('li','Each pack contains: '  . $row['seedNumberPerPack'] . ' seeds');MARKED
//         $fieldp7 = $dom->createElement('li','Colour: '  . $row['colour']);MARKED
//         $fieldp8 = $dom->createElement('li','Soil type for optimal growth: '  . $row['soilType']);MARKED
//         $fieldp9 = $dom->createElement('li','Hardiness: '  . $row['hardiness']);MARKED
//         $fieldp10 = $dom->createElement('li','Soil pH tolerance: '  . $row['soilAcidity']);MARKED
//         $fieldp11 = $dom->createElement('li','Tree/plant description: '  . $row['description']);MARKED
//         $unorderedL->appendChild($fieldp1);MARKED
//         $unorderedL->appendChild($fieldp2);MARKED
//         $unorderedL->appendChild($fieldp3);MARKED
//         $unorderedL->appendChild($fieldp4);MARKED
//         $unorderedL->appendChild($fieldp5);MARKED
//         $unorderedL->appendChild($fieldp6);MARKED
//         $unorderedL->appendChild($fieldp7);MARKED
//         $unorderedL->appendChild($fieldp8);MARKED
//         $unorderedL->appendChild($fieldp9);MARKED
//         $unorderedL->appendChild($fieldp10);MARKED
//         $unorderedL->appendChild($fieldp11);MARKED
       

//         for($i=0; $i<count($supplierIdsCpy); $i++){MARKED
//           if($row['supplierId'] ===  $supplierIdsCpy[$i]){MARKED
  
//             $fieldp12 = $dom->createElement('li','Supplier/Company: ' . $supplierNamesCpy[$i]);MARKED
//             $unorderedL->appendChild($fieldp12);MARKED
  
//           }
//         }

//         $divBody->appendChild($unorderedL);MARKED
//         $outercontainer->appendChild($divBody);MARKED

//         $htmlString = $dom->saveHTML();MARKED
//         echo $htmlString;MARKED

//UNCOMMENT THE PART ABOVE AND THE PART BELOW

      // if(!(is_null($row['treeImage3']))){MARKED
      //     $dom = new DOMDocument();MARKED
          
      //     $outercontainer = $dom->createElement('div');MARKED
      //     $outercontainer->setAttribute('class', 'outer-container');MARKED


      //     $cardcontainer = $dom->createElement('div');MARKED
      //     $cardcontainer->setAttribute('class', 'slideshow-container');MARKED
  
      //     $slidebox1 = $dom->createElement('div');MARKED
      //     $slidebox1->setAttribute('class', 'slidebox fade');MARKED
      //     $numbertext1 = $dom->createElement('div');MARKED
      //     $numbertext1->setAttribute('class', 'numbertext');MARKED
      //     $slideimg1 = $dom->createElement('img');MARKED
      //     $slideimg1->setAttribute('src', $row['treeImage1']);MARKED
      //     $slideimg1->setAttribute('style', 'width:100%;object-fit:contain;');MARKED
      //     $slidebox1->appendChild($numbertext1);MARKED
      //     $slidebox1->appendChild($slideimg1);MARKED

  
      //     $slidebox2 = $dom->createElement('div');MARKED
      //     $slidebox2->setAttribute('class', 'slidebox fade');MARKED
      //     $numbertext2 = $dom->createElement('div');MARKED
      //     $numbertext2->setAttribute('class', 'numbertext');MARKED
      //     $slideimg2 = $dom->createElement('img');MARKED
      //     $slideimg2->setAttribute('src', $row['treeImage2']);MARKED
      //     $slideimg2->setAttribute('style', 'width:100%;object-fit:contain;');MARKED
      //     $slidebox2->appendChild($numbertext2);MARKED
      //     $slidebox2->appendChild($slideimg2);MARKED

      //     $slidebox3 = $dom->createElement('div');MARKED
      //     $slidebox3->setAttribute('class', 'slidebox fade');MARKED
      //     $numbertext3= $dom->createElement('div');MARKED
      //     $numbertext3->setAttribute('class', 'numbertext');MARKED
      //     $slideimg3 = $dom->createElement('img');MARKED
      //     $slideimg3->setAttribute('src', $row['treeImage3']);MARKED
      //     $slideimg3->setAttribute('style', 'width:100%;object-fit:contain;');MARKED
      //     $slidebox3->appendChild($numbertext3);MARKED
      //     $slidebox3->appendChild($slideimg3);MARKED

      //     $cardcontainer->appendChild($slidebox1);MARKED
      //     $cardcontainer->appendChild($slidebox2);MARKED
      //     $cardcontainer->appendChild($slidebox3);MARKED

  
      //     $anchorforward = $dom->createElement('a',"&#10095;");MARKED
      //     $anchorforward->setAttribute('class', 'next');MARKED
      //     $anchorforward->setAttribute('onclick', 'switchSlide(1)');MARKED
  
  
      //     $anchorback = $dom->createElement('a',"&#10094;");MARKED
      //     $anchorback->setAttribute('class', 'prev');MARKED
      //     $anchorback->setAttribute('onclick', 'switchSlide(-1)');MARKED

      //     $cardcontainer->appendChild($anchorback);MARKED
      //     $cardcontainer->appendChild($anchorforward);MARKED
      //     echo "<br>";  MARKED
      //     $quickselect = $dom->createElement('div');MARKED
      //     $dotBtn1 = $dom->createElement('span');MARKED
      //     $dotBtn1->setAttribute('class', 'dot');MARKED
      //     $dotBtn1->setAttribute('onclick', 'currentSlide(1)');MARKED
      //     $dotBtn2 = $dom->createElement('span');MARKED
      //     $dotBtn2->setAttribute('class', 'dot');MARKED
      //     $dotBtn2->setAttribute('onclick', 'currentSlide(2)');MARKED
      //     $dotBtn3 = $dom->createElement('span');MARKED
      //     $dotBtn3->setAttribute('class', 'dot');MARKED
      //     $dotBtn3->setAttribute('onclick', 'currentSlide(3)');MARKED
      //     $quickselect->appendChild($dotBtn1);MARKED
      //     $quickselect->appendChild($dotBtn2);MARKED

      //     $outercontainer->appendChild($cardcontainer);MARKED
      //     $outercontainer->appendChild($quickselect);MARKED


      //     $divBody = $dom->createElement('div');MARKED
      //     $divBody->setAttribute('class','card-body');MARKED
      //     $unorderedL = $dom->createElement('ul');MARKED
      //     $fieldp1  = $dom->createElement('li','Common name: ' . $row['commonName']);MARKED
      //     $fieldp2 = $dom->createElement('li','Species name: ' . $row['speciesName']);MARKED
      //     $fieldp3 = $dom->createElement('li','Family: ' . $row['family']);MARKED
      //     $fieldp4 = $dom->createElement('li','Cost per pack incl. VAT: '  . '£' . $row['seedcostInclVAT']);MARKED
      //     $fieldp5 = $dom->createElement('li','Pack amount in stock: '  . $row['quantityInStock']);MARKED
      //     $fieldp6 = $dom->createElement('li','Each pack contains: '  . $row['seedNumberPerPack'] . ' seeds');MARKED
      //     $fieldp7 = $dom->createElement('li','Colour: '  . $row['colour']);MARKED
      //     $fieldp8 = $dom->createElement('li','Soil type for optimal growth: '  . $row['soilType']);MARKED
      //     $fieldp9 = $dom->createElement('li','Hardiness: '  . $row['hardiness']);MARKED
      //     $fieldp10 = $dom->createElement('li','Soil pH tolerance: '  . $row['soilAcidity']);MARKED
      //     $fieldp11 = $dom->createElement('li','Tree/plant description: '  . $row['description']);MARKED
      //     $unorderedL->appendChild($fieldp1);MARKED
      //     $unorderedL->appendChild($fieldp2);MARKED
      //     $unorderedL->appendChild($fieldp3);MARKED
      //     $unorderedL->appendChild($fieldp4);MARKED
      //     $unorderedL->appendChild($fieldp5);MARKED
      //     $unorderedL->appendChild($fieldp6);MARKED
      //     $unorderedL->appendChild($fieldp7);MARKED
      //     $unorderedL->appendChild($fieldp8);MARKED
      //     $unorderedL->appendChild($fieldp9);MARKED
      //     $unorderedL->appendChild($fieldp10);MARKED
      //     $unorderedL->appendChild($fieldp11);MARKED
         
  
      //     for($i=0; $i<count($supplierIdsCpy); $i++){MARKED
      //       if($row['supplierId'] ===  $supplierIdsCpy[$i]){MARKED
    
      //         $fieldp12 = $dom->createElement('li','Supplier/Company: ' . $supplierNamesCpy[$i]);MARKED
      //         $unorderedL->appendChild($fieldp12);  MARKED
      //       }
      //     }
      //     $divBody->appendChild($unorderedL);MARKED
      //     $outercontainer->appendChild($divBody);MARKED
      //   }

    //UNCOMMENT THE PART BELOW AND NOT THE PART ABOVE

    //   }
    // }

//      echo "</div>";MARKED
//     unset($result2); MARKED
//   }else{MARKED
//     echo "No matching treeseed records could be found.";MARKED
//   } 

// }catch(PDOException $exception){
//     die("Error: Could not able to execute query/querie $sql. " 
//                                 .$e->getMessage()); 
// }

// $connObject = null;
$pdo = null;
?>