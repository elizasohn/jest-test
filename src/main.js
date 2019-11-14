import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './business.js';
import './styles.css';
// import { convertatron } from './business.js';
import * as n from './business.js';

$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();

    var number = parseInt($("input#inputField").val());
    // var result = convertatron(number);
    var result = n.convertatron(number);

    $("ul").html("<li>" + result + "</li>");


  });
});
