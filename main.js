var columnDiv1=document.querySelector('.column_1');
var columnDiv2=document.querySelector('.column_2');
var p1=document.querySelector('.paragraph_1');
var p2=document.querySelector('.paragraph_2');

function updateParagraph(paragraphNum){
    var paragraphInnerText='';

    if(paragraphNum==1){
        Array.from(columnDiv1.children).forEach(columnDiv1Child=>{
            paragraphInnerText=paragraphInnerText+columnDiv1Child.value;
        });

        p1.innerText=paragraphInnerText;
    }else{
        Array.from(columnDiv2.children).forEach(columnDiv2Child=>{
            paragraphInnerText=paragraphInnerText+columnDiv2Child.value;
        });

        p2.innerText=paragraphInnerText;
    }
}