let friend = 'Alecx'

switch (friend) {
    case "tom":
    console.log("hey Tom, when are you rock climbing?");
    break;
    case 'kenn':
    console.log("hey Kenn, wanna play Catan?");
    break;
    case "carolyn":
    console.log('hey Carolyn, why you leavin us?');
    break;
    default:
    console.log(`I'm sorry, ${friend}, but do I know you?`);
}

let dessert = "carrots"

switch (dessert) {
    case 'pie':
    console.log('pie pie me oh my')
    break;
    case 'Cake':
    console.log('cake is great')
    break;
    case 'ice cream':
    console.log('i scream for ice cream')
    break;
    default:
    console.log('not on the menu')
}

let yep = -8;

switch (true){
    case (yep < 0 && yep > -10):
    console.log('worked!');
    break;
    case (yep > 0):
    console.log('worked here!');
    break;
    default:
    console.log('didnt work')
}