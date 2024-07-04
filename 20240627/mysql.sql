-- Active: 1718074299994@@127.0.0.1@3306@example
create table address (
    address_id int primary key,
    user_id int unique,
    address varchar(255),
    foreign key (user_id) references user (user_id)
);

drop table student;

create table student (
    student_id int primary key,
    name varchar(30)
);

create table couress (
    couress_id int primary key,
    title varchar(50)
)

create table linkCouress (
    student_id int,
    couress_id int,
    primary key (student_id, couress_id),
    foreign key (student_id) references student (student_id),
    foreign key (couress_id) references couress (couress_id)
);