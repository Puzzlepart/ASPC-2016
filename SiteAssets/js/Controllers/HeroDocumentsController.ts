/// <reference path="..\..\..\typings\tsd.d.ts" />

module Controllers {
    export class HeroDocumentsController {
        $scope: any;
        $searchService: Services.Search;
        $marvelService: Services.Marvel;

        constructor($scope) {
            this.$scope = $scope;
            $scope.documents = ["mydocument.xmlx","presentation.pptx"];           
            
        }
    }

}