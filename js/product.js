function parent(e) {
    return e.parentElement;
}

function add_item(e) {
    console.log("Add to quantity: " + parent(e));
}

function sub_item(e) {
    console.log("Sub quantity: " + parent(e));
}