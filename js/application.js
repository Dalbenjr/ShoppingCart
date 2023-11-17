$(document).ready(function () {
  var updateValue = function () {
    var totalCost = 0;
    $('tbody tr').each(function (i, ele) {
      var price = parseFloat($(ele).find('.price').text().replace('£', ''));
      var quantityInput = parseFloat($(ele).find('.qty input').val());

      var subtotal = price * quantityInput;
      if (!isNaN(subtotal)) {
        totalCost += subtotal;
        if (!isNaN(subtotal)) {
          totalCost += subtotal;
          $(ele).children('.cost').html('£' + subtotal);
        }
      }
    });

    $('#totalValue').text(totalCost);
  };
      

  $('table').on('input', 'tr input', function () {
    updateValue();
  });

  $('table').on('click', '.btn.remove', function () {
    $(this).closest('tr').remove();
    updateValue();
  });

  $('.btn-add').on('click', function () {
    var itemName = $(this).closest('tr').find('[name="item"]').val();
    var itemPrice = parseFloat($(this).closest('tr').find('[name="price"]').val());

    var newRow = `
      <tr>
        <td class="name">${itemName}</td>
        <td class="price">£${itemPrice}</td>
        <td class="qty"><input type="number" value="0" /></td>
        <td class="cost"></td>
        <td><button class="btn btn-light btn-sm remove">Remove</button></td>
      </tr>
    `;

    $(this).closest('tr').before(newRow); // Add before the current row

    // Clear input fields
    $(this).closest('tr').find('[name="item"]').val('');
    $(this).closest('tr').find('[name="price"]').val('');

    updateValue();
  });
});
