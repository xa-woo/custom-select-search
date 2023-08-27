class Select{

    /**
     * @param {SelectElements}
     */
    static set(elements){

        const html = document.querySelector(".select__options")

        elements.array.forEach(element => {
            html.innerHTML += `<li class="select__option">${element.value}</li>`
        });
    }
}

class SelectElements{
    constructor(array){
        this.array = array
    }

    /**
     * @param {array} elements
     * 
     * @returns {SelectElements}
     */
    static fromArray(elements){
        return new this(elements)
    }
}

class SelectElement{
    constructor(key, value){
        this.key = key
        this.value = value
    }

    /**
     * @param {string} key
     * @param {any} value
     * 
     * @returns {SelectElement}
     */
    static create(key, value){
        return new this(key, value)
    }
}

class SelectButton{

    constructor(element){
        this.element = element
    }

    /**
     * @param {string} id
     */
    static fromId(id){
        return new this( document.getElementById(id) );
    }

    /**
     * @param {callback} callback
     */
    onClick(callback){
        this.element.addEventListener('click', callback);
    }

    toggle(){
        this.element.classList.toggle('active');
    }
}