angular.module('comp')
	.component('detailDesc',{
		templateUrl:'partials/desc.html',
		controller:['$http','$stateParams','cartService','$scope','$state', function($http,$stateParams,cartService,$scope,$state){
			var self = this;
			    
			
			self.id=$stateParams.id;
			self.setImage = function setImage(imageUrl) {
				self.mainImageUrl = imageUrl;
			};
			$state.go('state',{
              notify: false,
              reload: false
            })
			$http.get("phones/"+self.id+".json").then(function(response){
				self.phonedetail = response.data;
				self.setImage(self.phonedetail.images[0]);
			})
			
		}]
	})
	//'+self.id+'