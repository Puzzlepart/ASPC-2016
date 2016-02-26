/// <reference path="..\..\..\typings\tsd.d.ts" />
/// <reference path="..\Services\services.d.ts" />

 module Controllers {
        export class StatisticsController {
            $scope: any;
            $searchService: Services.Search;

            constructor($scope, $searchService) {
                this.$scope = $scope;
                this.$searchService = $searchService;    
                
                this.getData();
                
                this.$scope.chartObject = {};    
                this.$scope.chartObject.type = "BarChart";
                
                this.$scope.onions = [
                    {v: "Onions"},
                    {v: 3},
                ];

                this.$scope.chartObject.data = {"cols": [
                    {id: "t", label: "Topping", type: "string"},
                    {id: "s", label: "Slices", type: "number"}
                ], "rows": [
                    {c: [
                        {v: "Mushrooms"},
                        {v: 3},
                    ]},
                    {c: this.$scope.onions},
                    {c: [
                        {v: "Olives"},
                        {v: 31}
                    ]},
                    {c: [
                        {v: "Zucchini"},
                        {v: 1},
                    ]},
                    {c: [
                        {v: "Pepperoni"},
                        {v: 2},
                    ]}
                ]};

                this.$scope.chartObject.options = {
                    'title': 'How Much Pizza I Ate Last Night'
                };
            }        
            
            private getData() {
                this.$searchService.query({ querytext: 'contentclass:STS_Web contenttypeid:0x010109010092214CADC5FC4262A177C632F516412E*', selectproperties: 'Title,' }).then((data: Array<any>) => {
                  console.log(data);
                })
            }
        }
 }