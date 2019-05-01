import _ from 'lodash';
import $ from 'jquery'
import '../css/style.css';
import '../sass/style.scss';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

$(document).ready(function () {
    
    // lodash example usage
    const lodashExample = _.join(['Hello', 'World'], ' ');

    // load handlebars template
    const template = require("../templates/userTable.handlebars");
    
    // jquery
    $("#save").click(function () {
        // Bootstrap js
        $('#exampleModal').modal('hide')
    });
    
    // example get service call
    $.get("/user").then((response) => {
        $("#user-table-wrapper").html(template({users : JSON.parse(response)}))
    });
})
