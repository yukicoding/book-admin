package com.xkkj.controller;


import com.xkkj.dao.BookRepository;
import com.xkkj.pojo.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/book")
public class BookController {
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    HttpServletRequest req;

    @GetMapping("/findAll/{page}/{size}")
//    @PathVariable("page") Integer page, @PathVariable("size") Integer size
    public Page<Book> findAll(@PathVariable("page") Integer page, @PathVariable("size") Integer size){
        Pageable request = PageRequest.of(page-1,size);
        return  bookRepository.findAll(request);
    }

    @PostMapping("/save")
    public String save1(@RequestBody Book book){
//        HttpSession session = req.getSession();
//        session.setAttribute("curr",user);
        System.out.println("++++++++++++++++++++++++"+book.getAuthor());
        System.out.println("++++++++++++++++++++++++"+book.getName());
        Book result = bookRepository.save(book);
        if(result != null){
            return "success";
        }else{
            return "error";
        }
    }

    @GetMapping("/findById/{id}")
    public Book findById(@PathVariable("id") Integer id){
//        HttpSession session = req.getSession();
//        user curr = session.getAttribute("curr");
        return bookRepository.findById(id).get();
    }

    @PutMapping("/update")
    public String update(@RequestBody Book book){
        Book result = bookRepository.save(book);
        if(result != null){
            return "success";
        }else{
            return "error";
        }
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable("id") Integer id){
        bookRepository.deleteById(id);
    }
}
