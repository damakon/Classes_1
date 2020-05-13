$(() => {
    const accordion = `<h1>Simple Accordion</h1>
<div class="container">
    <a href="#" class="accordion-btn"><span>+</span> Accordion 1</a>
    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores, dignissimos
        distinctio fuga hic pariatur? Aliquid architecto consequatur minima soluta tenetur. Amet assumenda earum, enim
        iure molestiae quibusdam! Saepe, veniam.
    </div>
    <a href="#" class="accordion-btn"><span>+</span> Accordion 2</a>
    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores, dignissimos
        distinctio fuga hic pariatur? Aliquid architecto consequatur minima soluta tenetur. Amet assumenda earum, enim
        iure molestiae quibusdam! Saepe, veniam.
    </div>
    <a href="#" class="accordion-btn"><span>+</span> Accordion 3</a>
    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores, dignissimos
        distinctio fuga hic pariatur? Aliquid architecto consequatur minima soluta tenetur. Amet assumenda earum, enim
        iure molestiae quibusdam! Saepe, veniam.
    </div>
</div>`;

    class Accordion {
        get contentClass() {
            return this._contentClass;
        }

        get accClass() {
            return this._accClass;
        }

        get elem() {
            return this._elem;
        }

        constructor(elem, accClass, contentClass) {
            this._elem = elem;
            this._accClass = accClass;
            this._contentClass = contentClass;
        }
    }

    const links = $(".accordion-btn");

    links.click(function () {
        $(this).next().slideToggle(); //Берем текущую нажатую ссылку, и ее соседа показываем/прячем
        if (!$(this).hasClass("showed")) {
            links.removeClass("showed");
            links.children().text("+");
            $(this).addClass("showed");
            $(this).children().html("&ndash;");
        } else {
            $(this).removeClass("showed");
            $(this).children().text("+");
        }
        $(links).not($(this)).next().slideUp(); //Все ссылки кроме текущей нажатой, соседа прячем
    });
});