// $(function() {
//     $('#cherplu').click(function() {
//         var cher = Number($('#cher').html());
//         cher++;
//         $('#cher').html(cher);
//     });
// });
var d = document,
    itemBox = d.querySelectorAll('.item_box'), 
    cartCont = d.getElementById('cart_content'); 
    
    
    

function addEvent(elem, type, handler) {
  if (elem.addEventListener) {
    elem.addEventListener(type, handler, false);
  }
  else {
    elem.attachEvent('on' + type, function() {
      handler.call(elem);
    });
  }
  return false;

}

function getCartData() {
  return JSON.parse(localStorage.getItem('cart'));
}

function setCartData(o) {
  localStorage.setItem('cart', JSON.stringify(o));
  return false;
}

$(function() {
    $('#bilplu').click(function() {
        var bil = Number($('#bil').html());
        bil++;
        $('#bil').html(bil);
    });
});
$(function() {
    $('#bildes').click(function() {
        var bil = Number($('#bil').html());
        bil = bil + 10;
        $('#bil').html(bil);
    });
});
$(function() {
    $('#bilmin').click(function() {
        var bil = Number($('#bil').html());
        bil--;
        $('#bil').html(bil);
    });
});



function addToCart(e){
  this.disabled = true; 
  var cartData = getCartData() || {}, 
      parentBox = this.parentNode, 
      itemId = this.getAttribute('data-id'), 
      itemTitle = parentBox.querySelector('.item_title').innerHTML, 
      itemPrice = parentBox.querySelector('.item_price').innerHTML; 
  if(cartData.hasOwnProperty(itemId)){ 
    cartData[itemId][2] += 1;
  } else { 
    cartData[itemId] = [itemTitle, itemPrice, 1];
  }
  if(!setCartData(cartData)){ 
    this.disabled = false; 
  }
 return false;
}





for(var i = 0; i < itemBox.length; i++){
  addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
}
function openCart(e){
  var cartData = getCartData(), 
      totalItems = '';
  if(cartData !== null){
    totalItems = '<table class="shopping_list"><tr><th>Найменування</th><th>Ціна</th><th>Шт</th></tr>';
    for(var items in cartData)   {  totalItems += '<tr>';
      for(var i = 0; i < cartData[items].length; i++){
        totalItems += '<td>' + cartData[items][i] + '</td>';
      }
      totalItems += '</tr>';
    }
    totalItems += '</table>';
    cartCont.innerHTML = totalItems;
  } else { cartCont.innerHTML = 'Та нема ніц, клацни по яйцях';}
  return false;
}





addEvent(d.getElementById('checkout'), 'click', openCart);
addEvent(d.getElementById('clear_cart'), 'click', function(e){
localStorage.removeItem('cart');
cartCont.innerHTML = 'Все викинули';
});
// $(function() {
//     $('#bilplu').click(function() {
//         var bil = Number($('#bil').html());
//         bil++;
//         $('#bil').html(bil);
//     });
// });
// $(function() {
//     $('#bildes').click(function() {
//         var bil = Number($('#bil').html());
//         bil = bil + 10;
//         $('#bil').html(bil);
//     });
// });
// $(function() {
//     $('#bilmin').click(function() {
//         var bil = Number($('#bil').html());
//         bil--;
//         $('#bil').html(bil);
//     });
// });




// $(function() {
//     $('#cherplu').click(function() {
//         var cher = Number($('#cher').html());
//         cher++;
//         $('#cher').html(cher);
//     });
// });
// $(function() {
//     $('#cherdes').click(function() {
//         var cher = Number($('#cher').html());
//         cher = cher + 10;
//         $('#cher').html(cher);
//     });
// });
// $(function() {
//     $('#chermin').click(function() {
//         var cher = Number($('#cher').html());
//         cher--;
//         $('#cher').html(cher);
//     });
// });




// $(function() {
//     $('#perplu').click(function() {
//         var per = Number($('#per').html());
//         per++;
//         $('#per').html(per);
//     });
// });
// $(function() {
//     $('#perdes').click(function() {
//         var per = Number($('#per').html());
//         per = per + 10;
//         $('#per').html(per);
//     });
// });
// $(function() {
//     $('#permin').click(function() {
//         var per = Number($('#per').html());
//         per--;
//         $('#per').html(per);
//     });
// });




// $(function() {
//     $('#stplu').click(function() {
//         var st = Number($('#st').html());
//         st++;
//         $('#st').html(st);
//     });
// });
// $(function() {
//     $('#stdes').click(function() {
//         var st = Number($('#st').html());
//         st = st + 10;
//         $('#st').html(st);
//     });
// });
// $(function() {
//     $('#stmin').click(function() {
//         var st = Number($('#st').html());
//         st--;
//         $('#st').html(st);
//     });
// });




// $(function() {
//     $('#rexplu').click(function() {
//         var rex = Number($('#rex').html());
//         rex++;
//         $('#rex').html(rex);
//     });
// });
// $(function() {
//     $('#rexdes').click(function() {
//         var rex = Number($('#rex').html());
//         rex = rex + 10;
//         $('#rex').html(rex);
//     });
// });
// $(function() {
//     $('#rexmin').click(function() {
//         var rex = Number($('#rex').html());
//         rex--;
//         $('#rex').html(rex);
//     });
// });




// $(function() {
//     $('#slaplu').click(function() {
//         var sla = Number($('#sla').html());
//         sla++;
//         $('#sla').html(sla);
//     });
// });
// $(function() {
//     $('#slades').click(function() {
//         var sla = Number($('#sla').html());
//         sla = sla + 10;
//         $('#sla').html(sla);
//     });
// });
// $(function() {
//     $('#slamin').click(function() {
//         var sla = Number($('#sla').html());
//         sla--;
//         $('#sla').html(sla);
//     });
// });




