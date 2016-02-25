! function (e) {
    try {
        e = angular.module("ionic-datepicker.templates")
    } catch (t) {
        e = angular.module("ionic-datepicker.templates", [])
    }
    e.run(["$templateCache", function (e) {
        e.put("date-picker-modal.html",
            '<div class="row row-center">\
	            <div class="col col-10 no_padding">\
		            <button class="button-clear color_blue" ng-click=prevMonth()>\
		            <i class="icon ion-chevron-left"></i>\
		            </button>\
	            </div>\
                <div class="col col-80 no_padding text-center">\
                    <select ng-model="currentMonth" ng-options="month as month for month in monthsList" ng-change="monthChanged(currentMonth)" style="width:100%;display:inline;margin-bottom:5px;" class="item-input item-select"></select> \
                </div>\
                <div class="col col-10 no_padding">\
                    <button class="button-clear color_blue" ng-click=nextMonth()>\
                    <i class="icon ion-chevron-right"></i>\
                    </button>\
                </div>\
            </div>\
            <div class="row row-center">\
	            <div class="col col-10 no_padding">\
		            <button class="button-clear color_blue" ng-click=prevYear()>\
		            <i class="icon ion-chevron-left"></i>\
		            </button>\
	            </div>\
                <div class="col col-80 no_padding text-center">\
                    <select ng-model="currentYear" ng-options="year for year in yearList" ng-change="yearChanged(currentYear)" style="width:100%;display:inline;" class="item-input item-select"></select> \
                </div>\
                <div class="col col-10 no_padding">\
                    <button class="button-clear color_blue" ng-click=nextYear()>\
                    <i class="icon ion-chevron-right"></i>\
                    </button>\
                </div>\
            </div>\
            <div>\
                <div class="row row-center">\
                    <div class=col ng-repeat="weekName in weekNames track by $index" style="font-weight: bold">{{ weekName }}</div>\
                </div>\
                <div style="height: 180px;">\
                    <div class=row ng-repeat="row in rows track by $index" style="text-align: center;">\
                        <div class="col no_padding" ng-repeat="col in cols track by $index" ng-class="{\'date_col\': (dayList[$parent.$index * numColumns + $index].day != undefined), \'date_selected\': (dayList[$parent.$index * numColumns + $index].dateString === selctedDateString && dayList[$parent.$index * numColumns + $index].day != undefined) , \'today\' : (dayList[$parent.$index * numColumns + $index].date == today.date && dayList[$parent.$index * numColumns + $index].month == today.month && dayList[$parent.$index * numColumns + $index].year == today.year)}">\
                            <div class=date_cell ng-click="dateSelected(dayList[$parent.$index * numColumns + $index])">{{ dayList[$parent.$index * numColumns + $index].date }}</div>\
			            </div>\
		            </div>\
                </div>\
            </div>\
            <div class="error_msg" ng-show="date_selection.submitted === true && date_selection.selected === false">Date not selected. Please select a date.</div>'
        )
    }])
}();