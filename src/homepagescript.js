function makeHeaderFixed(){
  const headertab = document.getElementById("header");
  const headertabRect = headertab.getBoundingClientRect();
  const headertabOffsetTop = headertabRect.top + window.scrollY;

  // get headertab's height and give it to #tab-cont
  headertab.style.height = headertabRect.height + "px";

  window.onscroll = function() {
      if (window.scrollY >= headertabOffsetTop) {
        headertab.classList.add("fixed-head");
      }else{
        headertab.classList.remove("fixed-head");
      }
  }
}