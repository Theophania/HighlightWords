function getSelectedText() {
        var txt = '';
        if (window.getSelection) {
            txt = window.getSelection();
        } else if (document.getSelection) {
            txt = document.getSelection();
        } else if (document.selection) {
            txt = document.selection.createRange().text;
        }
        return txt;
    }
    
  
    
$(document).ready(function() {    
    $('#txt').dblclick(function() {
        $('.highlight').removeClass('highlight');
        var t = getSelectedText();
        var regex = new RegExp(t, "gi");
        this.innerHTML = this.innerHTML.replace(regex, function(matched) {return "<span class=\"highlight \">" + matched + "</span>";});
        deselectText();
    });
    
});