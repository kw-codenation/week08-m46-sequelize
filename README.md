# week08-m46-sequelize

This project is an express program that read data from a MySQL database provided by Clever Cloud

Three tables are created by the program 'books', 'authors' and 'genres'

books - title, author id and genre id
authors - name, birth anme, birth date and birth place
genres - description

In the program are several links doing the same activites on the tables. The names of the links started with the table name
i.e for the 'books' all the link names started with /books/ etc

all three tables have more or less the same links

/add - add a single 'book', 'author' or 'genre' to the respectrive tables

/all - get all the books, authors or genres from the tables

/find - find a book, author or genres from their tables, this was supposed to replace the /all link so that there would be
        just one link for all the database searches. It has two parametes, 'search' and 'value'
        
        search = 'author', value= 'Agatha Christie' will search for books by Agatha Christie 
        search = '' will find all rows on the selected table 

        
  /delete - this will delete a single row (by id)
  
  /delete/all - deleted all the rows on the selected table
  
  /update - update a row accordding to a criteria
  
         The parameters are 
        'criteria' - specify what needs to be changed
        'where' - specify the row to be changed
        
        e.g on the table books is the serach criteria is
        criteria = {'genre': 'western'}
        where = {'id':7}
        
        this will change the genre to 'western' for the book with the id of 7
        
  /loadBooks,  /loadAuthors, loadGenres - will load multiple rows onto a table. The data is hard coded inot the link. The load for 'genres'
                                          and 'authors' must be done before 'books'
