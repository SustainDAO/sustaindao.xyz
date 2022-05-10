window.addEventListener('DOMContentLoaded', () => {
    function copyUrl() {
      if (!window.getSelection) {
        alert("Please copy the URL from the location bar.");
        return;
      }
      const dummy = document.createElement("p");
      dummy.textContent = window.location.href;
      document.body.appendChild(dummy);
      const range = document.createRange();
      range.setStartBefore(dummy);
      range.setEndAfter(dummy);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
      document.body.removeChild(dummy);
    }
    
    document.addEventListener("click", (e) => {
      let btn = document.querySelectorAll(".copy-btn");
      btn.forEach(el => {
        if(e.target === el || e.target.parentNode === el){
          copyUrl();
          el.setAttribute("data-before", "Copied!");
        } else {
        el.setAttribute("data-before", "Copy link");
        }
      })
    });
    let article = document.querySelector('article.content');
    const children = Array.from(article.children);
    children.forEach(el => {
      if(el.querySelectorAll('img').length > 0){
       return el.classList.add('max-w-4xl')
      }
      el.classList.add('max-w-2xl')
    })
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Hi everyone, please check this out: ");
    const facebookBtn = document.querySelectorAll(".facebook-btn");
    const twitterBtn = document.querySelectorAll(".twitter-btn");
    facebookBtn.forEach(el => {
      el.onclick = () => {
        window.location.href = `https://www.facebook.com/sharer.php?u=${postUrl}`
      }
    })
    twitterBtn.forEach(el => {
      el.onclick = () => {
        window.location.href = `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
      }
    })
  });
  