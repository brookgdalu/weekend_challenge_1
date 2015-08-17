//1. Capture and store information from the Employee Database form in an OBJECT




//2. Construct an <ul> of all the information captured in the OBJECT; a full list of employees should be represented on the screen




//3. Add a REMOVE button grouped next to each employeee's information




//4. Review score section should have a color indicator based on score; 5 = good and 1 = poor




$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$(function () {
    $('form').submit(function () {
        $('#result').text(JSON.stringify($('form').serializeObject()));
        return false;
    });
});
