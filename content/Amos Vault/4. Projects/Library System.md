___
## **Overvier**
- Creating the basic procedural PHP Library system with the database for practice

## Features of a Basic Library System
1. **Manage Books**
    - Add a book (title, author, category, year, availability).
    - View all books.
    - Edit / Delete books.
        
2. **Manage Members
    - Register members.
    - View members.
        
3. **Borrow and Return Books**
    - Record who borrowed which book.
    - Mark as returned.

## **Database Design**
- books(id,title,author,category,year,status)
- members(member_id,name,email)
- borrowings(borrow_id,member_id,borrow_date,return_data)