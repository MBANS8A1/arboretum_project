
<!DOCTYPE html>
<html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="author" content="Sean Mbanugo">
      <link rel="stylesheet" href="./gardenshop.css">
      <link rel="icon" href="../tree_icon.png">
      <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
      <!-- <script src="./slidelogic.js"></script> -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
      integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" 
      crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    <body>
       <header>
         <div class="img-container"></div>
         <section class="shop-header"><h1>SPROUTY'S GARDENING SHOP</h1></section>
         <ul class="header-grp">
           <li class="header-item"><a id="back-link" href="./homepage.html"><i id="header-arrow" class="fa-solid fa-arrow-left-long"></i>Back To Homepage</a></li>
           <li class="header-item"><i class="fa-solid fa-cart-shopping"></i></li>
         </ul>
       </header>
       <main>
          <div class="f-container">
            <div class="box-1">
              <dl>
                <dt class="inline-dt">Contains Stainless Steel</dt>:&nbsp<input type="checkbox" class="filter-checkbox" id="tool_stainlessstl" name="tool_stainlessstl"/>
                <dt class="inline-dt">FSC &#40;Forest Stewardship Council&#41; certified</dt>:&nbsp<input type="checkbox" class="filter-checkbox" id="tool_fsc_cert" name="tool_fsc_cert"/>
                <dt class="inline-dt">In Stock</dt>:&nbsp<input type="checkbox" class="filter-checkbox" id="tool_stock" name="tool_stock"/>
              </dl>
             </div>
             <div class="box-2">
               <dl>
                <dt class="inline-dt">In Stock</dt>:&nbsp<input type="checkbox" class="filter-checkbox" id="giftcard_stock" name="giftcard_stock"/>
                <dt class="inline-dt">Weight &#40;grams&#41;</dt>:&nbsp<input type="range" min="0" max="50" id="giftcard_weight" name="giftcard_weight"/>
                <dt class="inline-dt">Price</dt>:&nbsp<input type="range" min="0" max="30" step="0.01" id="giftcard_price" name="giftcard_price"/>  
                <dt class="inline-dt">FSC &#40;Forest Stewardship Council&#41; certified</dt>:&nbsp<input type="checkbox" class="filter-checkbox" id="giftcard_fsc_cert" name="giftcard_fsc_cert"/>
               </dl>
             </div>
             <div class="box-3">
              <dl>
                <dt class="inline-dt">In Stock</dt>:&nbsp<input type="checkbox" class="filter-checkbox" id="fertiliser_stock" name="fertiliser_stock"/>
                <dt class="inline-dt">Litres &#40;Capacity&#41;</dt>:&nbsp<input type="range" min="10" max="60" id="fertiliser_capacity" name="fertiliser_capacity"/>
                <dt class="inline-dt">Price</dt>:&nbsp<input type="range" min="0" max="20" step="0.01" id="fertiliser_price" name="fertiliser_price"/>
              </dl>
             </div>
             <div class="box-4">
              <dl>
                <dt class="inline-dt">In Stock</dt>:&nbsp<input type="checkbox" id="treeseed_stock" name="treeseed_stock"/>
                <dt class="inline-dt">Soil Type</dt>:&nbsp<select name="soiltypes" id="soiltypes">
                  <option value="chalk">chalk</option>
                  <option value="sand">sand</option>
                  <option value="loam">loam</option>
                  <option value="clay">clay</option>
                </select>
                <dt class="inline-dt">Soil Acidity</dt>:&nbsp<select name="soilacidity" id="soilacidity">
                  <option value="acid">acid</option>
                  <option value="alkaline">alkaline</option>
                  <option value="neutral">neutral</option>
                </select>
                <dt class="inline-dt">Hardiness</dt>:&nbsp<select name="hardiness" id="hardiness">
                  <option value="hardy">hardy</option>
                  <option value="tender">tender</option>
                  <option value="hardy/half-hardy">hardy/half-hardy</option>
                </select>
                <dt class="inline-dt">Price</dt>:&nbsp<input type="range" min="0" max="4" step="0.01" id="treeseed_price" name="treeseed_price"/>

              </dl>
             </div>
             <div class="box-5">
              <dl>
                 <dt class="inline-dt">In Stock</dt>:&nbsp<input type="checkbox" id="compost_stock" name="compost_stock"/>
                 <dt class="inline-dt">Is Biodegradable</dt>:&nbsp<input type="checkbox" class="filter-checkbox" id="compost_degradable" name="compost_degradable"/>
                 <dt class="inline-dt">Litres &#40;Capacity&#41;</dt>:&nbsp<span><input type="range" min="0" max="280" id="compost_capacity" name="compost_capacity"/>
                 <dt class="inline-dt">Price</dt>:&nbsp<input type="range" min="0" max="20" step="0.01" id="compost_price" name="compost_price"/>
              </dl>
            </div>
          </div>
            <?php require_once './shopconnect.php'; ?>
            <script type="text/javascript" src="./slidelogic.js"></script>

       </main>

    </body>
</html>