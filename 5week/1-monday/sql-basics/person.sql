CREATE TABLE
    person (
        person_id SERIAL PRIMARY KEY,
        name VARCHAR(40),
        age SMALLINT,
        height SMALLINT,
        city VARCHAR(50),
        favorite_color VARCHAR(20)
    );

INSERT INTO
    person (name, age, height, city, favorite_color)
VALUES
    ('John', 50, 200, 'New York', 'Purple'),
    ('Jane', 49, 170, 'Jacksonville', 'Green'),
    ('Mario', 45, 180, 'Rome', 'Red'),
    ('Maria', 48, 160, 'Milan', 'Blue'),
    ('Jose', 30, 170, 'Madrid', 'Yellow');

SELECT
    *
FROM
    person
ORDER BY
    height DESC
SELECT
    *
FROM
    person
ORDER BY
    height ASC
SELECT
    *
FROM
    person
ORDER BY
    age DESC
SELECT
    *
FROM
    person
WHERE
    age > 20
SELECT
    *
FROM
    person
WHERE
    age = 18
SELECT
    *
FROM
    person
WHERE
    age < 20
    OR age > 30
SELECT
    *
FROM
    person
WHERE
    age != 27
SELECT
    *
FROM
    person
WHERE
    favorite_color != 'Red'
SELECT
    *
FROM
    person
WHERE
    favorite_color != 'Red'
    AND favorite_color != 'Blue'
SELECT
    *
FROM
    person
WHERE
    favorite_color = 'Orange'
    OR favorite_color = 'Green'
SELECT
    *
FROM
    person
WHERE
    favorite_color IN ('Green', 'Blue')
SELECT
    *
FROM
    person
WHERE
    favorite_color IN ('Purple', 'Yellow')