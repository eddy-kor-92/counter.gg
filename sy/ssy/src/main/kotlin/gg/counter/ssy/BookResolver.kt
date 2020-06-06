package gg.counter.ssy

import org.springframework.stereotype.Component
import com.coxautodev.graphql.tools.GraphQLQueryResolver

@Component
class BookResolver() : GraphQLQueryResolver {
    // this method name needs to be same and in the schema
    fun books(): List<Book> {
        val book1 = Book("1", "name1")
        val book2 = Book("2", "name2")
        return listOf(book1, book2)
    }
}