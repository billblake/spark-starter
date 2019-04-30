import _ from 'lodash';
import $ from 'jquery'
import './style.css';
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
    
    const template = require("./userTable.handlebars");
    
    $("#save").click(function () {
        console.log("save");
        $('#exampleModal').modal('hide')
    });
    
    $.get("/user").then((response) => {
        $("#user-table-wrapper").html(template({users : JSON.parse(response)}))
        console.log(response);
    });

})

