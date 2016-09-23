"use strict";
var DateFormatter = (function () {
    function DateFormatter() {
    }
    DateFormatter.prototype.format = function (date, format) {
        moment.locale('fr');
        return moment(date.getTime()).format(format);
    };
    return DateFormatter;
}());
exports.DateFormatter = DateFormatter;
