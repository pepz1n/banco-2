create table clientes(
  id serial primary key not null,
  cpf varchar(14) not null unique,
  nome varchar(200) not null,
  endereco varchar(500),
  cidade varchar(100),
  uf varchar(2),
  email varchar(500) unique not null
);

create table compras (
  codigo serial primary key not null,
  produto varchar not null,
  valor numeric(10, 2) not null,
  data date not null,
  id_cliente integer not null references clientes(id)
);
