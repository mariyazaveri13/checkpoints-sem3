'use strict';

(function() {
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
        event.preventDefault();

          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          else{
            alert('Response Saved!!')
            location.reload()
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


window.onload = function(){  
      let cards = document.getElementById('cards');

      let element  = ''
      
      let arr = [{
        place : 'India',
        price:'$500',
        img:'IPlPkWPJ2fo',
        rating:5,
      },{
        place : 'America',
        price:'$450',
        img:'jNUTiYlPMHI',
        rating:5,
      },{
        place : 'Egypt',
        price:'$500',
        img:'69qT-N3L5sc',
        rating:4,
      },{
        place : 'Japan',
        price:'$550',
        img:'kaoHI0iHJPM',
        rating:4,
      },{
        place : 'China',
        price:'$450',
        img:'rQti4ZKWJQk',
        rating:3,
      },{
        place : 'Srilanka',
        price:'$780',
        img:'VC7P8p6dFIc',
        rating:4,
      },{
        place : 'Iraq',
        price:'$600',
        img:'1oseksG0Ffs',
        rating:5,
      },{
        place : 'UAE',
        price:'$3000',
        img:'XFEJPXUqbYc',
        rating:4,
      },{
        place : 'London',
        price:'$4550',
        img:'XxAR3uzYiZY',
        rating:4,
      },
    ]

    arr.map((placeObj)=>{
      element+=`<div class="col-3 margin">
      <div class="card bordered" style="width: 20rem;">
          <img src="https://source.unsplash.com/${placeObj.img}"  class="card-img-top bordered" alt="...">
          <div class="card-body">
              <h1>${placeObj.place}</h1>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <div>
              Price : <b>${placeObj.price}</b>
          </div>
          <br>
          <button type="submit" class="btn btn-warning">Book Now</button>
          </div>
      </div>
    </div>`
    })

    cards.innerHTML = element
}  
    
  
