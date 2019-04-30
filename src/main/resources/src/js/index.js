import _ from 'lodash';
import $ from 'jquery'
import '../css/style.css';
import '../sass/style.scss';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

$(document).ready(function () {
    
    function component() {
        const element = document.createElement('div');
        
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.classList.add('hello');
        
        return element;
    }
    
    document.body.appendChild(component());
    $(".hello").text("hello")
    
    const template = require("../templates/userTable.handlebars");
    
    $("#save").click(function () {
        console.log("save");
        $('#exampleModal').modal('hide')
    });
    
    $.get("/user").then((response) => {
        $("#user-table-wrapper").html(template({users : JSON.parse(response)}))
        console.log(response);
    });

})

