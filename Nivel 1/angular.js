
var app = angular.module("myShoppingList", []);

app.controller("myCtrl", function($scope) {
  $scope.products = [];

  $scope.addItem = function(){
    //Essa função if determina que não é possível adcionar itens repetidos na lista ->> se na lista products na posição (.indexOf(compara e retorna -1 caso products diferente de qualquer outro da lista)) for igual a -1, ou seja, diferente dos itens adicionado, inclua o novo item, se não(não)
    if($scope.products.indexOf($scope.item) == -1){
      $scope.errortext = "";
      $scope.products.push($scope.item);
      $scope.item = '';
      document.getElementById('FocusInput').focus();
    } else{
      $scope.errortext = "Item já incluído";
      
    }
    $scope.removerItem = function(x){
      $scope.errortext = "";
      $scope.products.splice(x,1);
    }
    
  }
}); 
