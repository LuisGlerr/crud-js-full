require('./styles/styles.css');

import UI from './UI';

// Cargar y renderear los libros al comenzar a cargar el DOM
document.addEventListener('DOMContentLoaded', () =>{
    const ui = new UI();
    ui.renderBooks();
})

// Capturar el formulario y guardar los datos
document.getElementById('book-form').addEventListener('submit', (e) =>{
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const image = document.getElementById('image').files;
    
    //formulario virtual Javascript
    const formData = new FormData();

    formData.append('image', image[0]);
    formData.append('title', title);
    formData.append('author', author);
    formData.append('isbn', isbn);

    const ui = new UI();

    ui.addNewBook(formData);

    ui.renderMessage('Book added', 'success', 3000);


    e.preventDefault();
});

// Capturar elemento (X) de los libros para Eliminar el registro
document.getElementById('books-cards').addEventListener('click', (e) =>{
        if(e.target.classList.contains('delete')){
            //console.log(e.target.getAttribute('_id'))
            const ui = new UI();
            ui.deleteBook(e.target.getAttribute('_id'));
            ui.renderMessage('Book deleted', 'danger', 3000)
        }
        e.preventDefault();
     })
 