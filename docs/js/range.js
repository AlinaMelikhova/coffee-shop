const MAX_INPUT_VALUE=1e3,scaleBar=document.querySelector(".range__scale"),rangeBar=document.querySelector(".range__bar"),minInput=document.querySelector(".range__input--left"),maxInput=document.querySelector(".range__input--right"),minRangeButton=document.querySelector(".range__toggle--min"),maxRangeButton=document.querySelector(".range__toggle--max"),resetButton=document.querySelector(".catalog__form-reset"),buttonWidth=minRangeButton.offsetWidth,scaleBarWidth=scaleBar.offsetWidth,rangeBarWidth=rangeBar.offsetWidth;minInput.value=0,maxInput.value=900,resetButton.addEventListener("click",(()=>{minRangeButton.style.left="0px",maxRangeButton.style.left=Math.round(.9*scaleBarWidth-buttonWidth/2)+"px",rangeBar.style.width=Math.round(.9*scaleBarWidth-buttonWidth/2)+"px",rangeBar.style.left="0px"})),minRangeButton.addEventListener("mousedown",(e=>{const t=minRangeButton.getBoundingClientRect().left-scaleBar.getBoundingClientRect().left,n=maxRangeButton.getBoundingClientRect().left-scaleBar.getBoundingClientRect().left;let o=e.screenX;const a=a=>{const r=a.screenX-o;let u=t+r;console.log("newX"+u),u<0?u=0:u>n-buttonWidth&&(u=n-buttonWidth),console.log("на сколько должен подвинуться"+e.target.style.left),e.target.style.left=u+"px",rangeBar.style.width=n-u+"px",rangeBar.style.left=u+"px",minInput.value=Math.round(u/scaleBar.offsetWidth*1e3)},r=()=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",r)};window.addEventListener("mousemove",a),window.addEventListener("mouseup",r)})),maxRangeButton.addEventListener("mousedown",(e=>{const t=minRangeButton.getBoundingClientRect().left-scaleBar.getBoundingClientRect().left,n=maxRangeButton.getBoundingClientRect().left-scaleBar.getBoundingClientRect().left;let o=e.screenX;const a=a=>{const r=a.screenX-o;let u=n+r;u<t+buttonWidth?u=t+buttonWidth:u>scaleBarWidth-buttonWidth&&(u=scaleBarWidth-buttonWidth),e.target.style.left=u+"px",rangeBar.style.width=u-t+"px",maxInput.value=Math.round(u/(scaleBar.offsetWidth-minRangeButton.offsetWidth)*1e3)},r=e=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",r)};window.addEventListener("mousemove",a),window.addEventListener("mouseup",r)}));