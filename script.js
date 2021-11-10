

var userAge = prompt('Write your age');


if (userAge <= 18 && userAge > 0) {
    alert(' You are child. You must study yet ');
} else if (userAge > 18 && userAge <= 50) {
    alert(' You must work ');
} else if (userAge > 50 && userAge <= 59) {
    alert(' You will soon retire');
} else if (userAge > 59 && userAge <= 150) {
    alert('You are  retirement age');
} else {
    alert(' Something get wrong ');
}



