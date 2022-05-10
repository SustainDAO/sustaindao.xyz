document.addEventListener("DOMContentLoaded", () => {
    const getMobileOS = () => {
      const ua = navigator.userAgent;
      if (/android/i.test(ua)) {
        return "Android";
      }
      if (/iPhone/.test(ua)) {
        return "Iphone";
      } else if (
        /iPad|iPod/.test(ua) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
      ) {
        return "iOS";
      }
      return "Other";
    };
  
    let button = document.querySelector("#learn-more");
    let os = getMobileOS();
    if (button) {
      button.onclick = () => {
        doScrolling("#main", os === "Iphone" ? 300 : os === "iOS" ? 1000 : 50);
      };
    }
  
    function getElementY(query) {
      return (
        window.pageYOffset +
        document.querySelector(query).getBoundingClientRect().top
      );
    }
  
    function doScrolling(element, duration) {
      var startingY = window.pageYOffset;
      var elementY = getElementY(element);
      var targetY =
        document.body.scrollHeight - elementY < window.innerHeight
          ? document.body.scrollHeight - window.innerHeight
          : elementY;
      var diff = targetY - startingY;
      var easing = function (t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };
      var start;
  
      if (!diff) return;
      window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        var time = timestamp - start;
        var percent = Math.min(time / duration, 1);
        percent = easing(percent);
        window.scrollTo(0, startingY + diff * percent);
        if (time < duration) {
          window.requestAnimationFrame(step);
        }
      });
    }
    let question = document.querySelectorAll(".question");
  
    question.forEach((question) => {
      question.addEventListener("click", (event) => {
        const active = document.querySelector(".question.active");
        if (active && active !== question) {
          active.classList.toggle("active");
          active.nextElementSibling.style.maxHeight = 0;
        }
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        if (question.classList.contains("active")) {
          answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
          answer.style.maxHeight = 0;
        }
      });
    });
    let articleBtn = document.querySelector(".article-btn");
    if (articleBtn) {
      articleBtn.onclick = () => {
        window.location.href = "/articles";
      };
    }
  
    function countUp(el) {
      const animationDuration = 3000;
  
      const frameDuration = 1000 / 60;
  
      const totalFrames = Math.round(animationDuration / frameDuration);
  
      const easeOutQuad = (t) => t * (2 - t);
  
        const animateCountUp = (el) => {
        let frame = 0;
        const countTo = el.dataset.count;
  
        const counter = setInterval(() => {
          frame++;
  
          const progress = easeOutQuad(frame / totalFrames);
  
          const currentCount = addCommas(Math.round(countTo * progress));
  
          if (parseInt(el.innerHTML, 10) !== currentCount) {
            el.innerHTML = currentCount;
          }
  
          if (frame === totalFrames) {
            clearInterval(counter);
          }
        }, frameDuration);
      };
  
      const countupEls = document.querySelectorAll(`${el} .timer`);
      countupEls.forEach(animateCountUp);
    }
    function addCommas(nStr){
      return nStr.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
  
    let stats = document.querySelectorAll('.stats-container')
    const callbackFn = (entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          let btc = entry.target.querySelector('.btc-animation')
          if(btc) {
            btc.style.animation = 'slide-left 2s';
            btc.style.marginLeft = '0';
          }
          let union = entry.target.querySelector('.union-animation img');
          // if(union){
          //   union.style.animation = 'slide-right 1.5s';
          //   union.style.marginLeft = '0';
          // }
          window.addEventListener('scroll', () => {
            let theta = window.scrollY / 3;
            union.style.transform = `rotate(${theta}deg)`
          })
          countUp(`.${entry.target.classList[0]}`)
          observer.unobserve(entry.target)
        }
      })
    }
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
   }
    const observer = new IntersectionObserver(callbackFn,options)
    
    stats.forEach(el => {
      observer.observe(el)
    });

    var obj = document.querySelector(".img-object");
    obj.addEventListener('load', () => {
      let svg = obj.contentDocument.querySelector('#svg-anim');
      if(svg){
        svg.querySelectorAll('.group').forEach(group => {
          group.querySelectorAll('path').forEach(p => {
            p.style.transformOrigin = 'center !important';
            p.style.transformBox = 'fill-box !important'
            p.style.transition='0.5s ease !important'
          })
        })
      }
    })
    window.onscroll = () => {
      var svg = obj.contentDocument.querySelector("svg");
      let theta = window.scrollY / 4;
      let groups = svg.querySelectorAll('.group');
      groups.forEach(group => {
        let paths = group.querySelectorAll('path');
        paths.forEach(path => {
          path.style.transformOrigin = 'center';
          path.style.transformBox = 'fill-box'
          path.style.transition='0.5s ease'
          path.style.transform = `rotate(${theta}deg)`
        })
      })
    }
  });
  