$(document).ready(function(){


//1. Capture and store information from the Employee Database form in an OBJECT

var $form = $('#EmployeeInfo'); //html form element label name and ids go here
var $FirstName = $('#FirstName');
var $LastName = $('#LastName');
var $EmployeeNumber = $('#EmployeeNumber'); 
var $Title = $('#Title');
var $Rating = $('#Rating');
var $Salary = $('#Salary');

var $Employees = $('#Employees'); 

$form.on('submit', function(e){
    e.preventDefault();
var employee = new Employee(
    $FirstName.val(), 
    $LastName.val(), 
    $EmployeeNumber.val(), 
    $Title.val(),
    $Rating.val(), 
    $Salary.val()
);

    appendEmployee(employee)


});

//constructor for employee
var Employee = function(firstName, lastName, empNum, title, score, salary){

    this.firstName = firstName;
    this.lastName = lastName;
    this.empNum = empNum;
    this.title = title; 
    this.score = score; 
    this.salary = salary;
}



//2. Construct an <ul> of all the information captured in the OBJECT; a full list of employees should be represented on the screen

function appendEmployee(emp){
    var $li = $('<li>'); 
//4. Review score section should have a color indicator based on score; 5 = good and 1 = poor

$li.attr('class', 'score' + emp.score); // gives color to scores

$li.text(
      "First Name" + emp.firstName + ' ' + "Last Name" + emp.lastName + ', ' +
      "Employee Number" + emp.empNum + ', ' + "Employee Title" + emp.title + ', ' +
      "Employee Review Score" + emp.score + ', ' +
      "Employee Salary " + "$" + emp.salary + '.'
    );
    var $button = $('<button>'); 
    $button.text('Terminate Employee'); 
    $button.attr('class', 'js-delete'); 


    $li.append($button); 

  
    $Employees.append($li); 
}

//3. Add a REMOVE button grouped next to each employeee's information

$Employees.on('click', '.js-delete', function(e){
    e.preventDefault();
    $(this).parent().remove();
})


}); 
