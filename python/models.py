from typing import Optional, List
from sqlalchemy import ForeignKey
from sqlalchemy import String, Integer, Date
from sqlalchemy.orm import Mapped, mapped_column, relationship, DeclarativeBase

class Base(DeclarativeBase):
    pass


class Book(Base):
    __tablename__ = "book"
    book_id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    title: Mapped[str] = mapped_column(String)
    status: Mapped[str] = mapped_column(String(30))
    date_finished: Mapped[Optional[str]] = mapped_column(Date)
    cover: Mapped[Optional[str]] = mapped_column(String(255))
    author_id: Mapped[int] = mapped_column(ForeignKey("author.author_id"))
    author: Mapped["Author"] = relationship(back_populates="books")


    def __repr__(self) -> str:
        return f"title: {self.title!r}"

class Author(Base):
    __tablename__ = "author"

    author_id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[Optional[str]] = mapped_column(String) 
    books: Mapped[List["Book"]] = relationship(back_populates="author", cascade="all, delete-orphan") 

    def __repr__(self) -> str:
        return f"name: {self.name!r}"
