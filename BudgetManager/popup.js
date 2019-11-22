$(function(){
  //anytime they open the popup the total is displayed
  chrome.storage.sync.get('total', function(budget){
    $('#total').text(budget.total)
  })
  //When user click on spend amount button
  $('#spendAmount').click(function(){
    //if a total exisits add this value to the total
    chrome.storage.sync.get('total', function(budget){
      var newTotal = 0;
      if (budget.total){
        newTotal += parseInt(budget.total);
      }

      var amount = $('#amount').val();
      if(amount){
        newTotal += parseInt(amount)
      }

      // Update the chrome storage
      chrome.storage.sync.set({'total': newTotal})

      $('#total').text(newTotal)
      $('#amount').val('');
    })
  })
})
