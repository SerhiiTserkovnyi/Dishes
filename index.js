class TableReader {
    addInf() {
        let myText = document.getElementById("textToJson").value;
        let text = myText;
        let json = JSON.parse(text);
        console.log(json);
        let htmlCatalog = '';
        json.forEach(({ name, price, count }) => {
            htmlCatalog += `<tr><td>${name}</td>
            <td>${price}</td><td>${count}</td></tr>`;
        });
        let html = `<div class="warper__container_text">Таблиця товарів</div>
         <table border="1">
           
           <tr>
            <th>Назва</th>
            <th>Ціна</th>
            <th>Кількість</th>
           </tr>
             ${htmlCatalog}
             </table>
             <input class="warper__container_button" type="button" onClick="tableReader.showModal()" value="Добавить товар"></input>`;

        ROOTTABLE.innerHTML = html;


    }
    showModal() {
        let htmlModal = `<div class="warper__container-modal"><textarea id="textToJson" name="textarea" rows="10" cols="50">Загрузити ваш товар</textarea></div>`;
        let htmlModalEnd = `<div class="warper__container_modal_all">
        <button data-hystclose class="hystmodal__close" >Close</button>
        ${htmlModal}
        <input class="warper__container_modal_button" type="button" onClick="tableReader.addInf()" value="Upload" ></input></div>`;

        document.addEventListener('DOMContentLoaded', function() {
            let closeButtons = document.querySelectorAll('.hystmodal__close');
            closeButtons.forEach(function(item) {

                item.addEventListener('click', function(e) {

                });

            });
        });

        ROOTMODAL.innerHTML = htmlModalEnd;
    }
    render() {

        let html = `<div class="warper__container_text">Таблиця товарів</div>
         
<table class="contaiter_table">
   
   <tr>
    <th>Назва</th>
    <th>Ціна</th>
    <th>Кількість</th>
   </tr>
  </table>
        <input class="warper__container_button" type="button" onClick="tableReader.showModal()" value="Добавить товар"></input>`;
        ROOTTABLE.innerHTML = html;
    }
}
const tableReader = new TableReader();

tableReader.render();