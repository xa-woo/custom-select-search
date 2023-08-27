const elements = new SelectElements([
    SelectElement.create('1', 'first'),
    SelectElement.create('2', 'second'),
    SelectElement.create('3', 'third'),
    SelectElement.create('4', 'four'),
    SelectElement.create('5', 'five'),
    SelectElement.create('6', 'six'),
    SelectElement.create('7', 'seven'),
    SelectElement.create('8', 'eight'),
])

Select.set(elements)

const button = SelectButton.fromId('select-input');

button.onClick( () => {
    button.toggle();
} )