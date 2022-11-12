drop table if exists chat;

create table chat (
  id varchar(36),
  message text,
  created timestamp,
  PRIMARY KEY ('id')
);

create index chat_created_idx on chat(created);

insert into
  chat(id, message)
values
  ('87b28912-c0bd-4419-90e3-f6a680dfc16f', 'yeah');