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


INSERT INTO clientes (cpf, nome, endereco, cidade, uf, email) VALUES
    ('12345678901', 'João Silva', 'Rua A, 123', 'XAXIM', 'SC', 'joao.silva@email.com');

INSERT INTO clientes (cpf, nome, endereco, cidade, uf, email) VALUES
    ('98765432109', 'Maria Oliveira', 'Avenida B, 456', 'Chapeco', 'PR', 'maria.oliveira@email.com');

INSERT INTO clientes (cpf, nome, endereco, cidade, uf, email) VALUES
    ('45678901234', 'Carlos Santos', 'Rua C, 789', 'Sao paulo', 'SP', 'carlos.santos@email.com');

INSERT INTO clientes (cpf, nome, endereco, cidade, uf, email) VALUES
    ('78901234567', 'Ana Pereira', 'Avenida D, 987', 'Concórdia', 'SC', 'ana.pereira@email.com');

INSERT INTO clientes (cpf, nome, endereco, cidade, uf, email) VALUES
    ('23456789012', 'Pedro Souza', 'Rua E, 654', 'Xaxim', 'SC', 'pedro.souza@email.com');
