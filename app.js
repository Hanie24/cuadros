(function(){
    let html = "";
    let boxes = [1,2,3];
    boxes.map(function(item){
        html +=`<div class="square">${item}</div>`;
    });
    $("#Container_Boxes").html(html);

    $(document).on('click', '.square', function clickOnIt(e){
        if(!$(e.target).hasClass('callToAction')){
            $(e.target).css('background', 'pink').addClass('callToAction');
        }else {
            $(e.target).hide();
        }
    });

    let count = 3;
    $('#Button').on('click', function(){
        count++;
        boxes.push(count);
        $("#Container_Boxes").append(`<div class="square">${count}</div>`);
    });

})();