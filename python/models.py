from sqlalchemy import String, Column, Integer, ForeignKey
from sqlalchemy.orm import DeclarativeBase, relationship, backref




class Base(DeclarativeBase):
    pass


class Book(Base):
    __tablename__ = "book"
    book_id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String)
    status = Column(String)
    author_id = Column(Integer, ForeignKey("author.author_id")) 

    def __repr__(self) -> str:
        return f"title: {self.title!r}"

class Author(Base):
    __tablename__ = "author"
    author_id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    books = relationship("Book", backref=backref("author"))
    
    def __repr__(self) -> str:
        return f"name: {self.name!r}"
