var btn=document.querySelector('.btn')
btn.addEventListener('click', e => {

    e.preventDefault();
  
    console.log(e.target.className);
  
    document.getElementById('my-form').style.background = '#ccc';
  
    document.querySelector('body').classList.add('bg-black');
  
  });
  /*var btn=document.querySelector('.btn')
  btn.addEventListener('mouseover', e => {
  
      e.preventDefault();
    
      console.log(e.target.className);
    
      document.getElementById('my-form').style.background = '#ccc';
    
      document.querySelector('body').classList.add('bg-black');
    
    });
    var btn=document.querySelector('.btn')
    btn.addEventListener('mouseout', e => {
    
        e.preventDefault();
      
        console.log(e.target.className);
      
        document.getElementById('my-form').style.background = '#ccc';
      
        document.querySelector('body').classList.add('bg-black');
      
      });
      */
